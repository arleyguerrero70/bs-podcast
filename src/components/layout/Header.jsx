import { useState } from 'react';
import { CONTENT } from '../../utils/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">BlackSip</h1>
          <span className="text-xs font-medium text-gray-500">Podcast</span>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#home" className="text-sm font-medium hover:text-gray-600 transition">
            {CONTENT.nav.home}
          </a>
          <a href="#about" className="text-sm font-medium hover:text-gray-600 transition">
            {CONTENT.nav.about}
          </a>
          <a href="#podcast" className="text-sm font-medium hover:text-gray-600 transition">
            {CONTENT.nav.podcast}
          </a>
          <button className="px-6 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition">
            {CONTENT.nav.contact}
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
        >
          <div className={`w-6 h-0.5 bg-black transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-black transition ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-black transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#home" className="text-sm font-medium">
              {CONTENT.nav.home}
            </a>
            <a href="#about" className="text-sm font-medium">
              {CONTENT.nav.about}
            </a>
            <a href="#podcast" className="text-sm font-medium">
              {CONTENT.nav.podcast}
            </a>
            <button className="w-full px-6 py-2 bg-black text-white rounded-lg text-sm font-medium">
              {CONTENT.nav.contact}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
