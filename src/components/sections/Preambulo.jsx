import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../utils/constants';
import { useInView } from '../../hooks/useInView';

export default function Preambulo() {
  const [ref, inView] = useInView();
  const [expanded, setExpanded] = useState(false);

  const title =
    'La mejora del 1% en muchas áreas genera un cambio extraordinario a largo plazo.';

  return (
    <section
      ref={ref}
      id="preambulo"
      className="py-12 md:py-16 px-6 bg-white dark:bg-black"
    >
      <div className="max-w-3xl mx-auto">
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm"
        >
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="block w-full text-left focus:outline-none"
            aria-expanded={expanded}
            aria-controls="preambulo-content"
          >
            <div className="relative bg-gray-50 dark:bg-black max-h-[320px] sm:max-h-[380px] md:max-h-[280px] lg:max-h-[320px] overflow-hidden">
              <img
                src="/dist/assets/habitosatomicos.webp"
                alt="Hábitos atómicos"
                className="w-full h-full block object-cover object-center md:object-[center_58%]"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="p-5 sm:p-6">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Click para {expanded ? 'ver menos' : 'ver más'}
              </p>
            </div>
          </button>

          <motion.div
            id="preambulo-content"
            initial={false}
            animate={expanded ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black p-5 sm:p-6">
                <p className="text-base md:text-lg font-semibold text-black dark:text-white">
                  “{CONTENT.preambulo.quote}”
                </p>

                <p className="mt-5 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {CONTENT.preambulo.body.intro}
                </p>

                <ul className="mt-5 space-y-3 text-gray-700 dark:text-gray-200">
                  {CONTENT.preambulo.body.improvements.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black dark:bg-white flex-shrink-0" />
                      <span className="text-sm md:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <p className="text-sm font-semibold text-black dark:text-white">
                    {CONTENT.preambulo.body.resultsTitle}
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-200">
                    {CONTENT.preambulo.body.results.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black dark:bg-white flex-shrink-0" />
                        <span className="text-sm md:text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-7 text-sm md:text-base italic text-gray-700 dark:text-gray-300 leading-relaxed">
                  {CONTENT.preambulo.body.closing}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="px-6 sm:px-8 pb-6 sm:pb-8">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="w-full rounded-xl px-4 py-3 font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 transition"
            >
              {expanded ? 'Ver menos' : 'Ver más'}
            </button>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

