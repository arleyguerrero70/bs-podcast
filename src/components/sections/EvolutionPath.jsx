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
            {CONTENT.evolution.headline}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform md:-translate-x-1/2" />

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
                    className="w-4 h-4 bg-black rounded-full border-4 border-white absolute z-10"
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
                    className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                    <p className="text-sm text-gray-500 mb-3 font-semibold">{phase.duration}</p>
                    <p className="text-gray-700 mb-4">{phase.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="px-3 py-1 bg-black/5 rounded-full">
                        {phase.focus}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Este es el roadmap. Pero todo comienza ahora.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300"
          >
            Empecemos juntos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
