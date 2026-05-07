import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../utils/constants';
import { useInView } from '../../hooks/useInView';

export default function BentoGrid() {
  const [ref, inView] = useInView();
  const [hoveredId, setHoveredId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} className="bg-white dark:bg-black py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {CONTENT.bentoGrid.headline}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {CONTENT.bentoGrid.description}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {CONTENT.bentoGrid.items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 cursor-pointer transition-all duration-300 ${
                hoveredId === item.id
                  ? 'bg-white dark:bg-gray-950 shadow-lg ring-1 ring-amber-500/40'
                  : 'bg-white dark:bg-black hover:shadow-lg hover:ring-1 hover:ring-amber-500/25'
              }`}
              whileHover={{ y: -4 }}
            >
              {/* Main content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm mb-5 text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>

                {/* Info visible por defecto (mobile-friendly) */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-4">
                  <p className="text-sm font-semibold mb-2 text-amber-500">
                    {item.metric}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.tooltip}
                  </p>
                </div>
              </div>

              {/* Background accent on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/10 dark:from-amber-500/0 dark:to-amber-500/10 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={hoveredId === item.id ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
