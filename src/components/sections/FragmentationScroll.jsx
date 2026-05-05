import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../utils/constants';
import { useInView } from '../../hooks/useInView';

export default function FragmentationScroll() {
  const [ref, inView] = useInView();
  const svgRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!svgRef.current) return;

      const element = svgRef.current;
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;

      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight))
      );

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {CONTENT.fragmentation.headline}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {CONTENT.fragmentation.description}
          </p>
        </motion.div>

        {/* SVG Visualization */}
        <motion.svg
          ref={svgRef}
          viewBox="0 0 800 400"
          className="w-full mb-12 bg-gray-50 rounded-lg"
          style={{ maxHeight: '500px' }}
        >
          {/* Central circle (BlackSip unified) */}
          <motion.circle
            cx="400"
            cy="200"
            r="40"
            fill="black"
            initial={{ r: 20, opacity: 0 }}
            animate={inView ? { r: 40, opacity: 1 } : { r: 20, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />

          {/* Fragmented lines spreading out */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const x1 = 400 + 40 * Math.cos(angle);
            const y1 = 200 + 40 * Math.sin(angle);
            const x2 = 400 + 200 * Math.cos(angle);
            const y2 = 200 + 200 * Math.sin(angle);

            return (
              <motion.line
                key={`line-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="black"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: scrollProgress, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              />
            );
          })}

          {/* Fragmented endpoints */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const x = 400 + 200 * Math.cos(angle);
            const y = 200 + 200 * Math.sin(angle);

            return (
              <motion.circle
                key={`circle-${i}`}
                cx={x}
                cy={y}
                r="20"
                fill="gray"
                fillOpacity="0.3"
                initial={{ r: 0, opacity: 0 }}
                animate={inView && scrollProgress > 0.3 ? { r: 20, opacity: 0.3 } : { r: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              />
            );
          })}

          {/* Text labels */}
          <text x="400" y="220" textAnchor="middle" fontSize="14" fontWeight="bold" fill="black">
            BlackSip
          </text>
        </motion.svg>

        {/* List items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONTENT.fragmentation.listItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: i * 0.1 + 0.4 }}
              className="flex gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-6 h-6 rounded-full bg-black flex-shrink-0 flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <p className="text-gray-700">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
