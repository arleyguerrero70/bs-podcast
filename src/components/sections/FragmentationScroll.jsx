import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../utils/constants';
import { useInView } from '../../hooks/useInView';

export default function FragmentationScroll() {
  const [ref, inView] = useInView();
  const svgRef = useRef(null);

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
    <section ref={ref} className="bg-white dark:bg-black py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {CONTENT.fragmentation.headline}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {CONTENT.fragmentation.description}
          </p>
        </motion.div>



        {/* List items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONTENT.fragmentation.listItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: i * 0.1 + 0.4 }}
              className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
            >
              <div className="w-6 h-6 rounded-full bg-black flex-shrink-0 flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <p className="text-gray-700 dark:text-gray-200">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
