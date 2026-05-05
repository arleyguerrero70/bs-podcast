import { CONTENT } from '../../utils/constants';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">{CONTENT.company}</h3>
            <p className="text-sm text-gray-600">{CONTENT.description}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Enlaces</h4>
            <ul className="space-y-2">
              {CONTENT.footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Podcast</h4>
            <p className="text-sm text-gray-600 mb-4">Únete a nuestra comunidad.</p>
            <div className="flex gap-2">
              <a href="https://spotify.com" className="text-xs px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 transition">
                Spotify
              </a>
              <a href="https://podcasts.apple.com" className="text-xs px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 transition">
                Apple
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-xs text-gray-600">
          <p>{CONTENT.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
