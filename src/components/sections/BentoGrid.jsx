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
            {CONTENT.bentoGrid.headline}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              className={`relative p-8 rounded-xl border-2 border-black cursor-pointer transition-all duration-300 ${
                hoveredId === item.id
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'bg-white text-black hover:shadow-lg'
              }`}
              whileHover={{ y: -8 }}
            >
              {/* Main content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className={`text-sm mb-6 ${hoveredId === item.id ? 'text-gray-200' : 'text-gray-600'}`}>
                  {item.description}
                </p>

                {/* Metric reveal on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={hoveredId === item.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-current pt-4 mt-4"
                >
                  <p className={`text-sm font-semibold mb-2 ${hoveredId === item.id ? 'text-green-300' : 'text-black'}`}>
                    {item.metric}
                  </p>
                  <p className={`text-xs ${hoveredId === item.id ? 'text-gray-300' : 'text-gray-500'}`}>
                    {item.tooltip}
                  </p>
                </motion.div>
              </div>

              {/* Background accent on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/10 rounded-xl"
                initial={{ opacity: 0 }}
                animate={hoveredId === item.id ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Summary note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-600 mt-12 text-sm"
        >
          Pasa el mouse sobre cada bloque para descubrir métricas y contexto
        </motion.p>
      </div>
    </section>
  );
}
