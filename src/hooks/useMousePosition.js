import { useEffect, useState } from 'react';

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let movementTimeout;
    let rafId = null;
    let lastEvent = null;

    const handleMouseMove = (e) => {
      lastEvent = e;

      if (rafId == null) {
        rafId = window.requestAnimationFrame(() => {
          rafId = null;
          if (!lastEvent) return;

          setMousePosition({ x: lastEvent.clientX, y: lastEvent.clientY });
          setIsMoving(true);
        });
      }

      clearTimeout(movementTimeout);
      movementTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(movementTimeout);
      if (rafId != null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return { mousePosition, isMoving };
};
