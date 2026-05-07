import { useState } from 'react';
import { CONTENT } from '../../utils/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const home = CONTENT.nav?.home;
  const homeLabel = typeof home === 'string' ? home : home?.label ?? 'Inicio';
  const homeHref = typeof home === 'string' ? '#home' : home?.href ?? '#home';

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href={homeHref} className="flex items-center gap-2">
          <h1 className="text-xl font-bold">BlackSip</h1>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Podcast</span>
        </a>

        {/* Navigation desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          <a
            href={homeHref}
            className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition"
          >
            {homeLabel}
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
        >
          <div className={`w-6 h-0.5 bg-black dark:bg-white transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-black dark:bg-white transition ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-black dark:bg-white transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a
              href={homeHref}
              className="text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              {homeLabel}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
