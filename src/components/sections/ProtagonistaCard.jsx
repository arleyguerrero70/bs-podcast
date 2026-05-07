import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

export default function ProtagonistaCard() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="py-12 md:py-16 px-6 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto">
        <motion.a
          href="#protagonista"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="group block rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm hover:shadow-lg transition-shadow"
        >
          <div className="relative bg-gray-50 dark:bg-black">
            <div className="absolute top-4 right-4">
              <div className="h-10 w-10 rounded-full bg-white/90 dark:bg-white/90 grid place-items-center border border-black/5">
                <span className="text-black text-lg leading-none">↗</span>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex items-end gap-4">
              <p className="text-2xl sm:text-5xl font-extrabold tracking-tight text-amber-500">
                ¿Por qué un Podcast fortalece la cultura?
              </p>
            </div>

            <p className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3">
              Como creador de: <a href="https://open.spotify.com/show/1fjj9cqZelYuDbf5HjMpDP" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">Oye Arlo</a> he aprendido cositas
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-500">
              Conoce un poco más de mi para entenderlo <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}

