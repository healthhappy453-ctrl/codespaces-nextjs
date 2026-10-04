// components/Header.js
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <div className="min-w-0"><Logo /></div>
        <nav className="hidden lg:flex gap-7 text-sm text-mute whitespace-nowrap" aria-label="Navigation principale">
          <Link href="/#methode" className="hover:text-cobalt">Méthode</Link>
          <Link href="/#realisations" className="hover:text-cobalt">Réalisations</Link>
          <Link href="/#offres" className="hover:text-cobalt">Offres</Link>
          <Link href="/#faq" className="hover:text-cobalt">Questions</Link>
          <Link href="/blog" className="hover:text-cobalt">Blog</Link>
          <Link href="/about" className="hover:text-cobalt">À propos</Link>
        </nav>
        <Link href="/contact" className="shrink-0 whitespace-nowrap px-4 py-2 rounded-full bg-cobalt text-white text-sm font-semibold hover:opacity-90">
          <span className="sm:hidden">Contact</span>
          <span className="hidden sm:inline">Contactez-nous</span>
        </Link>
      </div>
    </header>
  );
}