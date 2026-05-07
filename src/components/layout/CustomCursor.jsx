import { useEffect, useState } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function CustomCursor() {
  const { mousePosition } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('');

  useEffect(() => {
    const handleMouseEnter = (e) => {
      const target = e.target;
      
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        setIsHovering(true);
        setCursorLabel('Click');
      } else if (target.tagName === 'A' || target.closest('a')) {
        setIsHovering(true);
        setCursorLabel('Ver');
      } else if (target.dataset.interactive) {
        setIsHovering(true);
        setCursorLabel('Explorar');
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorLabel('');
    };

    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Cursor dot principal */}
      <div
        className="fixed pointer-events-none z-50 will-change-transform"
        style={{
          left: 0,
          top: 0,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`will-change-transform transition-transform duration-100 ease-out ${
            isHovering ? 'scale-150' : 'scale-100'
          }`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              isHovering
                ? 'bg-black dark:bg-white border-2 border-gray-300 dark:border-gray-700'
                : 'bg-black dark:bg-white'
            }`}
          />
        </div>
      </div>

      {/* Cursor outer ring (opcional) */}
      <div
        className="fixed pointer-events-none z-50 will-change-transform"
        style={{
          left: 0,
          top: 0,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border-2 border-black/20 dark:border-white/20 transition-opacity duration-300 ${
            isHovering ? 'opacity-100' : 'opacity-30'
          }`}
        />
      </div>

      {/* Label de cursor */}
      {isHovering && cursorLabel && (
        <div
          className="fixed pointer-events-none z-50 will-change-transform text-xs font-semibold text-black dark:text-white whitespace-nowrap"
          style={{
            left: 0,
            top: 0,
            transform: `translate3d(${mousePosition.x + 12}px, ${mousePosition.y + 12}px, 0)`,
          }}
        >
          {cursorLabel}
        </div>
      )}
    </>
  );
}
