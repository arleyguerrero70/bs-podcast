import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../utils/constants';
import { useInView } from '../../hooks/useInView';

export default function MetricsReveal() {
  const [ref, inView] = useInView();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {CONTENT.metrics.headline}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {CONTENT.metrics.description}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {CONTENT.metrics.stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className="p-8 bg-white rounded-xl border border-gray-200 cursor-pointer hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              {/* Metric value */}
              <motion.div
                className="mb-4"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: i * 0.1 + 0.3, type: 'spring' }}
              >
                <p className="text-5xl font-bold text-black mb-2">{stat.value}</p>
              </motion.div>

              {/* Label */}
              <p className="text-gray-700 font-semibold mb-3">{stat.label}</p>

              {/* Source - always visible but small */}
              <p className="text-xs text-gray-500 mb-4">{stat.source}</p>

              {/* Expandable content */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  expandedIndex === i
                    ? { height: 'auto', opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-sm text-gray-600">
                    Este dato subraya por qué ahora es el momento perfecto para que BlackSip
                    lance su podcast como diferenciador de mercado.
                  </p>
                </div>
              </motion.div>

              {/* Expand indicator */}
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                <span className="font-medium">
                  {expandedIndex === i ? 'Ver menos' : 'Contexto'}
                </span>
                <motion.span
                  animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action insight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-black text-white rounded-xl p-8 text-center"
        >
          <p className="text-lg font-semibold mb-2">
            {CONTENT.metrics.cta}
          </p>
          <p className="text-sm text-gray-300">
            Seamos una de las pocas agencias de ecommerce y marketing con presencia en plataformas de podcast.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
