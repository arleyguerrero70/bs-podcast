import { motion } from 'framer-motion';
import { CONTENT } from '../../utils/constants';
import { useInView } from '../../hooks/useInView';

export default function Hero() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center bg-white pt-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold text-gray-600 mb-6 tracking-wide uppercase"
          >
            {CONTENT.hero.eyebrow}
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            {CONTENT.hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            {CONTENT.hero.subheadline}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            variants={itemVariants}
            className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {CONTENT.hero.cta}
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-black rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-black rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
