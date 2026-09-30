// pages/index.js
import Head from 'next/head';
import Logo from '../components/Logo';
import { Check } from 'lucide-react';
import Portfolio from '../components/Portfolio';

const EMAIL = 'contact@searchsnippets.com';
const WHATSAPP = '212600000000'; // TODO : remplacer par votre vrai numéro

const projects = [
  {
    name: 'Nova Stone Trav', url: 'https://novastonetrav.ma', image: '/portfolio/novastonetrav.webp',
    type: 'Site vitrine et catalogue',
    summary: 'Pierre de Taza et marbre : catalogue produits, projets, demande de devis et contact WhatsApp. Site en français, anglais et arabe.',
  },
  {
    name: 'MegaDealTech', url: 'https://www.megadealtech.com', image: '/portfolio/megadealtech.webp',
    type: 'Boutique en ligne',
    summary: "Serrures intelligentes, pointeuses biométriques et contrôle d'accès : catalogue par catégories, panier et blog.",
  },
  // Ajoutez les 2 prochains ici, même format (scroll: '12s' pour une capture très longue).
];

const steps = [
  ['Cadrage', "Un appel de 20 minutes pour comprendre votre activité, vos clients et ce que le site doit accomplir."],
  ['Devis', "Un devis écrit avec calendrier et acompte. Le prix annoncé est le prix payé."],
  ['Maquette', "Vous validez une maquette interactive avant la moindre ligne de code."],
  ['Développement et livraison', "Développement Next.js, tests sur mobile, mise en ligne sur Vercel, puis remise du code source."],
];

const differences = [
  ['Pas de plugins à maintenir', "Un site WordPress repose souvent sur des dizaines de plugins à mettre à jour, qui peuvent le ralentir ou le casser. Ici, le site est du code écrit pour votre besoin, et rien d'autre."],
  ['Des pages que Google sait lire', "Nous ajoutons les données structurées Schema.org (JSON-LD) : prix, disponibilité, questions fréquentes. Elles rendent vos pages éligibles aux résultats enrichis. Personne ne peut garantir leur affichage, et nous ne le promettons pas."],
  ['Le code est à vous', "À la livraison, vous recevez le code source complet et tous les accès. Vous pouvez confier la suite à qui vous voulez."],
];

const offers = [
  {
    name: 'Site vitrine', who: 'Indépendants, cabinets, PME', price: '18 000 MAD', sub: '≈ 1 800 € · livré en 15 jours',
    items: ['Design sur mesure, sans template', 'Affichage soigné sur iOS et Android', 'Données structurées et balisage SEO de base', 'Score PageSpeed visé : 90+, mesuré à la livraison'],
  },
  {
    name: 'E-commerce et SaaS', who: 'Marques en croissance', price: '36 000 MAD', sub: '≈ 3 600 € · 4 à 6 semaines', highlight: true,
    items: ['Boutique headless Next.js et React', 'Paiement CMI, Stripe ou PayPal, stocks synchronisés', 'Données structurées pour les fiches produits', 'Formation vidéo et assistance prioritaire'],
  },
  {
    name: 'Accompagnement SEO', who: 'Sites déjà en ligne', price: 'Sur devis', sub: 'Abonnement mensuel',
    items: ['Audit technique de votre domaine', 'Correction des Core Web Vitals', 'Déploiement des données structurées', 'Rapport mensuel : visibilité et contacts générés'],
  },
];

const faqs = [
  ['Quelle différence avec une agence classique ?', "Nous ne posons pas un thème sur votre site. Chaque page est développée en Next.js pour votre activité : moins de dépendances, un chargement rapide et un code qui vous appartient."],
  ['Quel lien entre SearchSnippets.com et BlueCode Agency ?', "SearchSnippets.com est notre plateforme web et SEO. BlueCode Agency est l'équipe d'ingénieurs et de designers qui conçoit et suit vos projets."],
  ['Pouvez-vous garantir la vitesse et le référencement ?', "Nous visons un score supérieur à 90 sur Google PageSpeed Insights et le mesurons à la livraison. Le classement sur Google dépend de nombreux facteurs : nous posons les bases techniques, sans promettre une position."],
  ['Comment se passe une commande ?', "Un échange de cadrage de 20 minutes, un devis avec acompte, une maquette à valider, puis le développement."],
];

export default function Home() {
  return (
    <>
      <Head>
        <title>SearchSnippets.com | BlueCode Agency — Sites Next.js sur mesure</title>
        <meta name="description" content="BlueCode Agency crée des sites Next.js rapides et bien référencés : vitrines, e-commerce et SaaS, avec code source remis au client." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex gap-8 text-sm text-mute">
            <a href="#methode" className="hover:text-cobalt">Méthode</a>
            <a href="#realisations" className="hover:text-cobalt">Réalisations</a>
            <a href="#offres" className="hover:text-cobalt">Offres</a>
            <a href="#faq" className="hover:text-cobalt">Questions</a>
          </nav>
          <a href="#contact" className="px-4 py-2 rounded-full bg-cobalt text-white text-sm font-semibold hover:opacity-90">Demander un devis</a>
        </div>
      </header>

      <main>
        {/* Hero : la page de résultats Google est le décor */}
        <section className="bg-cobalt text-white">
          <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
            <div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Un site rapide, que Google sait lire et que vos clients trouvent.
              </h1>
              <p className="mt-6 text-lg text-white/85 max-w-xl leading-relaxed">
                Nous développons des sites Next.js sur mesure pour des entreprises au Maroc et à l'export. Design, code et référencement technique sont faits par la même équipe.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a href="#contact" className="px-7 py-3.5 rounded-full bg-white text-cobalt font-semibold hover:bg-mist">Parler de mon projet</a>
                <a href="#offres" className="font-semibold underline underline-offset-4 decoration-white/50 hover:decoration-white">Voir les tarifs</a>
              </div>
            </div>

            <div className="rounded-2xl bg-white text-ink p-5 sm:p-6 shadow-2xl" aria-label="Exemple illustratif de résultats de recherche">
              <div className="flex items-center gap-3 rounded-full border border-line px-4 py-2.5 text-[15px]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5A6079" strokeWidth="2.2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
                <span><span className="typed">agence web next.js maroc</span><span className="caret text-cobalt">|</span></span>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 text-xs text-mute">
                  <span className="w-6 h-6 rounded-full bg-cobalt text-white grid place-items-center font-bold text-[10px]">BC</span>
                  <span>searchsnippets.com</span>
                </div>
                <p className="mt-1.5 text-[19px] leading-snug text-[#1A0DAB]">BlueCode Agency — Sites Next.js sur mesure</p>
                <p className="mt-1 text-sm text-mute leading-relaxed">Vitrines, e-commerce et SaaS. Code source remis au client, données structurées incluses.</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {['Site vitrine · 18 000 MAD', 'E-commerce · 36 000 MAD', 'Audit SEO'].map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full bg-mist text-cobalt font-semibold">{t}</span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-line opacity-60">
                <div className="text-xs text-mute">monsite-wordpress.ma</div>
                <p className="mt-1 text-[17px] text-[#1A0DAB]">Accueil – Mon site</p>
                <p className="mt-1 text-sm text-mute">Bienvenue sur notre site. Découvrez nos services et contactez-nous…</p>
              </div>
              <p className="mt-5 text-[11px] text-mute">Exemple illustratif : un résultat enrichi se distingue d'un résultat standard.</p>
            </div>
          </div>
        </section>

        {/* Différences */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl">Ce qui change quand le site est écrit sur mesure</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-x-12 gap-y-10">
            {differences.map(([t, d]) => (
              <div key={t}>
                <h3 className="font-display font-bold text-xl">{t}</h3>
                <p className="mt-3 text-mute leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Méthode : une vraie séquence, donc numérotée */}
        <section id="methode" className="bg-mist">
          <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-[1fr_1.4fr] gap-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">Un projet se déroule en quatre étapes</h2>
            <ol className="space-y-8">
              {steps.map(([t, d], i) => (
                <li key={t} className="flex gap-5">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-cobalt text-white grid place-items-center font-display font-bold">{i + 1}</span>
                  <div>
                    <h3 className="font-display font-bold text-xl">{t}</h3>
                    <p className="mt-1.5 text-mute leading-relaxed">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Portfolio projects={projects} />

        {/* Offres */}
        <section id="offres" className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl">Des prix affichés, un périmètre écrit</h2>
          <p className="mt-4 text-mute max-w-xl">Le devis détaille ce qui est inclus. Le code source vous est remis dans tous les cas.</p>
          <div className="mt-10">
            {offers.map((o) => (
              <div key={o.name} className={`grid md:grid-cols-[1fr_1.5fr_auto] gap-6 md:gap-10 p-6 md:p-8 items-start ${o.highlight ? 'bg-mist rounded-3xl' : 'border-t border-line'}`}>
                <div>
                  <h3 className="font-display font-bold text-2xl">{o.name}</h3>
                  <p className="mt-1 text-sm text-mute">{o.who}</p>
                </div>
                <ul className="space-y-2.5 text-[15px]">
                  {o.items.map((it) => (
                    <li key={it} className="flex gap-2.5"><Check className="w-4 h-4 mt-1 text-cobalt shrink-0" aria-hidden="true" />{it}</li>
                  ))}
                </ul>
                <div className="md:text-right">
                  <div className="font-display font-bold text-3xl">{o.price}</div>
                  <div className="text-sm text-mute mt-1">{o.sub}</div>
                  <a href="#contact" className={`inline-block mt-4 px-5 py-2.5 rounded-full text-sm font-semibold ${o.highlight ? 'bg-cobalt text-white' : 'border border-cobalt text-cobalt hover:bg-mist'}`}>Demander ce devis</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-mist">
          <div className="max-w-3xl mx-auto px-6 py-24">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">Questions fréquentes</h2>
            <div className="mt-8">
              {faqs.map(([q, a]) => (
                <details key={q} className="group border-b border-line py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display font-bold text-lg">
                    {q}
                    <span className="text-cobalt text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 text-mute leading-relaxed max-w-2xl">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-cobalt text-white">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight max-w-3xl leading-[1.05]">Décrivez votre projet en deux lignes. Nous répondons sous 24 h ouvrées.</h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={`mailto:${EMAIL}`} className="px-7 py-3.5 rounded-full bg-white text-cobalt font-semibold hover:bg-mist">{EMAIL}</a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="px-7 py-3.5 rounded-full border border-white/60 font-semibold hover:bg-white/10">Écrire sur WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-mute">
          <Logo />
          <p>© {new Date().getFullYear()} SearchSnippets.com — BlueCode Agency</p>
        </div>
      </footer>
    </>
  );
}