import { motion } from 'framer-motion';
import { CONTENT } from '../utils/constants';
import { Heart } from 'lucide-react';

export default function Protagonista() {
  const diploma = CONTENT.protagonista?.diploma;
  const learned = CONTENT.protagonista?.learned;

  return (
    <div className="min-h-[calc(100vh-80px)] px-6 pt-28 pb-20 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white"
        >
          Soy Arley Guerrero
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
          className="mt-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          En mis 10 años de experiencia laboral he trabajado en una universidad dónde nadie quería irse, y la mayoría de vacantes se llenaban por referidos, como Rappitendero, en call centers, en el Banco Agrario, empresas creadas por familias, <span className="font-bold text-amber-500">y en la competencia...</span>

        </motion.p>

        {diploma && (
          <motion.a
            href={diploma.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="mt-10 block rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-4 p-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 dark:bg-black border border-gray-200 dark:border-gray-800 flex-shrink-0">
                <img
                  src={diploma.thumbnailSrc}
                  alt={diploma.thumbnailAlt}
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-lg font-bold tracking-tight text-black dark:text-white truncate">
                  {diploma.title}
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 truncate">
                  {diploma.subtitle}
                </p>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-500 truncate">
                  {diploma.providerLabel} · {diploma.providerUrl}
                </p>
              </div>
            </div>
          </motion.a>
        )}

        {learned?.items?.length ? (
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
            className="mt-10"
          >
            <p className="text-sm font-semibold text-black dark:text-white">
              {learned.heading}
            </p>

            <div className="mt-4 flex flex-col gap-3">
              {learned.items.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-950/60 backdrop-blur px-5 py-3 hover:bg-white dark:hover:bg-gray-950 transition"
                >
                  <span className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-black/5 dark:bg-white/10 text-amber-500">
                    <Heart className="h-4 w-4" />
                  </span>
                  <span className="text-sm md:text-base font-semibold text-black dark:text-white">
                    {item.title}
                  </span>
                  <span className="ml-auto text-amber-500 opacity-80 group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </motion.section>
        ) : null}

        <div className="mt-10">
          <a
            href="#preambulo"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 transition"
          >
            Volver
          </a>
        </div>
      </div>
    </div>
  );
}

