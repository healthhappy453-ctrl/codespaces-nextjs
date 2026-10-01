// components/Header.js
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex gap-8 text-sm text-mute" aria-label="Navigation principale">
          <Link href="/#methode" className="hover:text-cobalt">Méthode</Link>
          <Link href="/#realisations" className="hover:text-cobalt">Réalisations</Link>
          <Link href="/#offres" className="hover:text-cobalt">Offres</Link>
          <Link href="/#faq" className="hover:text-cobalt">Questions</Link>
          <Link href="/about" className="hover:text-cobalt">À propos</Link>
        </nav>
        <Link href="/contact" className="px-4 py-2 rounded-full bg-cobalt text-white text-sm font-semibold hover:opacity-90">Demander un devis</Link>
      </div>
    </header>
  );
}