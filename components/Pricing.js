// components/Pricing.js
import { Check } from 'lucide-react';

const plans = [
  { name: 'Essentiel', price: '1 399', note: 'Landing page, livrée vite' },
  { name: 'Standard', price: '2 899', note: 'Vitrine complète avec blog' },
  { name: 'Premium', price: '8 999', note: 'Vitrine avancée, multilingue', highlight: true },
  { name: 'Sur mesure', price: null, note: 'E-commerce, SaaS, application' },
];

// [fonctionnalité, Essentiel, Standard, Premium, Sur mesure]
// '✓' = inclus · '—' = non inclus · '✓ texte' = inclus avec précision
const rows = [
  ['Type de site', 'One-page / Landing', 'Vitrine 5-10 pages', 'Vitrine avancée + blog', 'E-commerce, SaaS, application'],
  ['Pages', '1 page + mentions', '5-10', '10-20+', 'Selon cahier des charges'],
  ['Design UI/UX', 'Sur mesure', 'Sur mesure + révisions', 'Sur mesure + révisions illimitées', 'Design system complet'],
  ['Affichage mobile', '✓', '✓', '✓', '✓'],
  ['Formulaire de contact', '✓', '✓ avancé', '✓ + CRM intégré', '✓ + intégrations'],
  ['Blog / Actualités', '—', '✓', '✓ + 3 articles offerts', '✓'],
  ['SEO on-page', 'Basique', 'Avancé', 'Avancé + données structurées', 'Audit + accompagnement'],
  ['Rédaction des contenus', "Page d'accueil", '5 pages', 'Toutes les pages', 'Toutes les pages'],
  ['Multilingue', '—', 'Option (sur devis)', 'Inclus (FR, AR, EN)', 'Inclus'],
  ['Paiement en ligne', '—', '—', 'Option', '✓ CMI, Stripe, PayPal'],
  ['Hébergement 1 an', '✓', '✓', '✓', '✓'],
  ['Nom de domaine .ma ou .com', '✓', '✓', '✓', '✓'],
  ['Certificat SSL', '✓', '✓', '✓', '✓'],
  ['Formation back-office', '—', '—', '1 h', '—'],
];

function Cell({ v }) {
  if (v === '—') return <span className="text-mute" aria-label="Non inclus">—</span>;
  if (v === '✓') return <Check className="w-4 h-4 text-cobalt inline" aria-label="Inclus" />;
  if (v.startsWith('✓ ')) {
    return (
      <span className="inline-flex items-center gap-1.5">
        <Check className="w-4 h-4 text-cobalt shrink-0" aria-hidden="true" />
        {v.slice(2)}
      </span>
    );
  }
  return v;
}

export default function Pricing() {
  return (
    <section id="offres" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight max-w-2xl">
        Des prix affichés, un périmètre écrit
      </h2>
      <p className="mt-4 text-mute max-w-xl">
        Le devis détaille ce qui est inclus. Le code source vous est remis dans tous les cas.
      </p>

      <div className="mt-12 overflow-x-auto -mx-6 px-6">
        <table className="w-full min-w-[860px] border-collapse text-left text-[15px]">
          <thead>
            <tr className="align-bottom">
              <th scope="col" className="w-[22%] pb-6 pr-4 font-display font-bold text-sm text-mute">
                Fonctionnalité
              </th>
              {plans.map((p) => (
                <th
                  key={p.name}
                  scope="col"
                  className={`pb-6 px-4 align-bottom font-normal ${p.highlight ? 'bg-mist rounded-t-3xl pt-6' : ''}`}
                >
                  <div className="font-display font-bold text-lg text-cobalt">{p.name}</div>
                  <div className="mt-1 font-display font-bold text-2xl text-ink whitespace-nowrap">
                    {p.price ? <>{p.price} <span className="text-base">MAD</span></> : 'Sur devis'}
                  </div>
                  <div className="mt-1 text-xs text-mute font-normal">{p.note}</div>
                  <a
                    href="#contact"
                    className={`inline-block mt-4 px-5 py-2.5 rounded-full text-sm font-semibold ${
                      p.highlight ? 'bg-cobalt text-white hover:opacity-90' : 'border border-cobalt text-cobalt hover:bg-mist'
                    }`}
                  >
                    {p.price ? 'Choisir cette offre' : 'Demander un devis'}
                  </a>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, ...vals], i) => (
              <tr key={label} className="border-t border-line">
                <th scope="row" className="py-4 pr-4 font-display font-bold text-ink">{label}</th>
                {vals.map((v, j) => (
                  <td
                    key={j}
                    className={`py-4 px-4 text-ink/85 ${plans[j].highlight ? 'bg-mist' : ''} ${
                      plans[j].highlight && i === rows.length - 1 ? 'rounded-b-3xl' : ''
                    }`}
                  >
                    <Cell v={v} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-mute sm:hidden">Faites défiler le tableau horizontalement pour comparer les offres.</p>
    </section>
  );
}