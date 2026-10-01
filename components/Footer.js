// components/Footer.js
import Link from 'next/link';
import Logo from './Logo';
import { EMAIL, WHATSAPP, WHATSAPP_DISPLAY, ADDRESS } from '../lib/site';

const linkClass = 'text-mute hover:text-cobalt';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Logo />
            <p className="mt-5 text-sm text-mute leading-relaxed max-w-xs">
              Sites Next.js sur mesure pour les entreprises au Maroc et à l'export. Design, code et référencement technique par la même équipe.
            </p>
          </div>

          <nav aria-label="Sections du site">
            <h2 className="font-display font-bold text-base">Le site</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/#methode" className={linkClass}>Méthode</Link></li>
              <li><Link href="/#realisations" className={linkClass}>Réalisations</Link></li>
              <li><Link href="/#offres" className={linkClass}>Offres et tarifs</Link></li>
              <li><Link href="/#faq" className={linkClass}>Questions fréquentes</Link></li>
            </ul>
          </nav>

          <nav aria-label="Informations">
            <h2 className="font-display font-bold text-base">L'agence</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about" className={linkClass}>À propos</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
              <li><Link href="/privacy" className={linkClass}>Confidentialité</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className="font-display font-bold text-base">Nous contacter</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-mute">
              <li><a href={`mailto:${EMAIL}`} className={linkClass}>{EMAIL}</a></li>
              <li><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className={linkClass}>WhatsApp : {WHATSAPP_DISPLAY}</a></li>
              <li>{ADDRESS}</li>
              <li>Réponse sous 24 h ouvrées</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-mute">
          <p>© {new Date().getFullYear()} SearchSnippets.com — BlueCode Agency</p>
          <p>Fait à Agadir, avec Next.js</p>
        </div>
      </div>
    </footer>
  );
}