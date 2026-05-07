import { motion } from 'framer-motion';
import { CONTENT } from '../../utils/constants';
import { useInView } from '../../hooks/useInView';

export default function EvolutionPath() {
  const [ref, inView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={ref}
      id="camino"
      className="bg-white dark:bg-black py-12 md:py-16 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {CONTENT.evolution.headline}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {CONTENT.evolution.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute -z-10 left-10 md:left-1/2 top-0 bottom-0 w-px md:w-1 bg-gray-200 dark:bg-gray-800 md:transform md:-translate-x-1/2" />

          {/* Phases */}
          <div className="space-y-12 md:space-y-16">
            {CONTENT.evolution.phases.map((phase, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 w-20 md:w-32 flex items-center justify-center">
                  <motion.div
                    className="w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black absolute z-10"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: i * 0.2 + 0.3, type: 'spring' }}
                  />
                </div>

                {/* Content */}
                <div
                  className={`flex-1 pb-8 ${
                    i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.2 + 0.4 }}
                    className="relative z-10 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-semibold">{phase.duration}</p>
                    <p className="text-gray-700 dark:text-gray-200 mb-4">{phase.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                      <span className="px-3 py-1 bg-black/5 dark:bg-white/10 rounded-full">
                        {phase.focus}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
