// pages/index.js
import Head from 'next/head';
import { Check } from 'lucide-react';
import Portfolio from '../components/Portfolio';
import TechMarquee from '../components/TechMarquee';
import Pricing from '../components/Pricing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import { homeJsonLd } from '../lib/schema';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { EMAIL, WHATSAPP } from '../lib/site';

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

const faqs = [
  ['Quelle différence avec une agence classique ?', "Nous ne posons pas un thème sur votre site. Chaque page est développée en Next.js pour votre activité : moins de dépendances, un chargement rapide et un code qui vous appartient."],
  ['Quel lien entre SearchSnippets.com et BlueCode Agency ?', "SearchSnippets.com est notre plateforme web et SEO. BlueCode Agency est l'équipe d'ingénieurs et de designers qui conçoit et suit vos projets."],
  ['Pouvez-vous garantir la vitesse et le référencement ?', "Nous visons un score supérieur à 90 sur Google PageSpeed Insights et le mesurons à la livraison. Le classement sur Google dépend de nombreux facteurs : nous posons les bases techniques, sans promettre une position."],
  ['Comment se passe une commande ?', "Un échange de cadrage de 20 minutes, un devis avec acompte, une maquette à valider, puis le développement."],
];

const why = [
  ['Un cadrage avant le design', "Nous partons de vos clients, de votre offre et de vos concurrents locaux avant de dessiner la première page."],
  ['Un affichage pensé pour le mobile', "Une grande partie des visites vient du téléphone, souvent avec une connexion moyenne. Les pages restent lisibles et rapides dans ces conditions."],
  ['Un code conçu pour Google', "Structure des pages, données structurées, vitesse de chargement et HTTPS sont traitées dès le développement, pas ajoutées après coup."],
  ['Des contenus qui font agir', "Textes clairs, formulaires courts, boutons d'appel et WhatsApp : chaque page mène vers un contact ou une commande."],
  ['Un suivi après la mise en ligne', "Hébergement, sauvegardes, corrections et évolutions : le site continue de fonctionner et de s'améliorer."],
];

// À CONFIRMER : n'affichez que des engagements que vous tiendrez réellement.
const commitments = [
  ['Au devis', 'Un délai de livraison écrit', 'Le calendrier figure dans le devis, avant toute signature : vous savez quand votre site sera en ligne.'],
  ['30 jours', 'De support après la mise en ligne', 'Corrections et questions techniques sans frais pendant un mois.'],
  ['30 min', 'De formation à la prise en main', 'Une session en visio pour apprendre à mettre à jour votre site seul.'],
];

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        title="SearchSnippets.com | BlueCode Agency — Sites Next.js sur mesure à Agadir"
        description="BlueCode Agency crée des sites Next.js rapides et bien référencés à Agadir : vitrines, e-commerce et SaaS, avec code source remis au client."
        jsonLd={homeJsonLd}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </Head>

      <Header />

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
                  <span className="w-6 h-6 rounded-full bg-mist grid place-items-center"><img src="/logo-mark.svg" alt="" className="w-4 h-4" /></span>
                  <span>searchsnippets.com</span>
                </div>
                <p className="mt-1.5 text-[19px] leading-snug text-[#1A0DAB]">BlueCode Agency — Sites Next.js sur mesure</p>
                <p className="mt-1 text-sm text-mute leading-relaxed">Vitrines, e-commerce et SaaS. Code source remis au client, données structurées incluses.</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {['Landing · 1 399 MAD', 'Vitrine · 2 899 MAD', 'E-commerce · Sur devis'].map((t) => (
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

        <TechMarquee />

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

        {/* Offres : tableau comparatif */}
        <Pricing />

        {/* Engagement */}
        <section className="bg-mist">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">Notre engagement</h2>
            <p className="mt-4 text-mute max-w-xl">Ce que vous pouvez attendre de nous, par écrit, avant de signer.</p>
            <div className="mt-12 grid md:grid-cols-3 md:divide-x md:divide-[#DCE0EF]">
              {commitments.map(([big, label, text]) => (
                <div key={label} className="py-6 md:py-0 md:px-8 md:first:pl-0 md:last:pr-0 border-t md:border-t-0 border-line">
                  <div className="font-display font-bold text-4xl sm:text-5xl text-cobalt">{big}</div>
                  <h3 className="mt-3 font-display font-bold text-lg">{label}</h3>
                  <p className="mt-2 text-mute leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi : texte de fond pour le référencement */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="rounded-3xl bg-[#151A3A] text-white p-8 sm:p-14 grid lg:grid-cols-[1fr_1.1fr] gap-12">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight leading-[1.1]">Créer son site web au Maroc : ce qu'un bon prestataire doit vous apporter</h2>
              <p className="mt-6 text-white/75 leading-relaxed">Votre site est souvent le premier endroit où un client vérifie que vous existez, que vous êtes sérieux et que vous répondez à son besoin. Un site sur mesure réunit trois choses : un design clair, une technique rapide et une présence sur Google.</p>
              <p className="mt-4 text-white/75 leading-relaxed">Bien conçu, il devient un outil de prospection : il attire des demandes qualifiées et rassure avant même le premier appel.</p>
              <a href="#contact" className="inline-block mt-8 px-7 py-3.5 rounded-full bg-white text-cobalt font-semibold hover:bg-mist">Demander un devis gratuit</a>
            </div>
            <ul className="space-y-6">
              {why.map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <Check className="w-5 h-5 mt-1 shrink-0 text-[#8FA0FF]" aria-hidden="true" />
                  <div>
                    <h3 className="font-display font-bold text-lg">{t}</h3>
                    <p className="mt-1 text-white/70 leading-relaxed">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
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
        <section id="contact" className="contact relative overflow-hidden text-white">
          {/* Filigrane : nom de domaine géant et très discret */}
          <div aria-hidden="true" className="watermark font-display font-bold">
            searchsnippets
          </div>

          <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-32">
            <p className="flex items-center gap-2.5 text-sm font-semibold tracking-wide text-white/60">
              <span className="w-2 h-2 rounded-full bg-[#5B6DFF]" aria-hidden="true" />
              Contact
            </p>

            <h2 className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-3xl leading-[1.05]">
              Décrivez votre projet en deux lignes.{' '}
              <span className="text-white/45">Nous répondons sous </span>
              <span className="text-[#8FA0FF]">24 h ouvrées.</span>
            </h2>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={`mailto:${EMAIL}`} className="px-7 py-3.5 rounded-full bg-white text-ink font-semibold hover:bg-mist transition-colors">
                {EMAIL}
              </a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/25 font-semibold hover:bg-white/10 transition-colors"><WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                Écrire sur WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}