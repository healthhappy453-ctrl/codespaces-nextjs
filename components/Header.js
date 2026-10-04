// components/Header.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  ['Méthode', '/#methode'],
  ['Réalisations', '/#realisations'],
  ['Offres', '/#offres'],
  ['Questions', '/#faq'],
  ['Blog', '/blog'],
  ['À propos', '/about'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Ferme le menu après chaque navigation
  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on('routeChangeComplete', close);
    router.events.on('hashChangeComplete', close);
    return () => {
      router.events.off('routeChangeComplete', close);
      router.events.off('hashChangeComplete', close);
    };
  }, [router.events]);

  // Échap ferme le menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <div className="min-w-0"><Logo /></div>

        <nav className="hidden lg:flex gap-7 text-sm text-mute whitespace-nowrap" aria-label="Navigation principale">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-cobalt">{label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <Link href="/contact" className="hidden sm:inline-block whitespace-nowrap px-4 py-2 rounded-full bg-cobalt text-white text-sm font-semibold hover:opacity-90">
            Contactez-nous
          </Link>
          <button
            type="button"
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full hover:bg-mist"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Menu mobile" className="lg:hidden absolute left-0 right-0 top-full bg-white border-b border-line shadow-lg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block py-3.5 border-b border-line font-display font-bold text-lg hover:text-cobalt"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block my-4 px-6 py-3.5 rounded-full bg-cobalt text-white text-center font-semibold hover:opacity-90"
            >
              Contactez-nous
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}