// pages/contact.js
import PageShell from '../components/PageShell';
import { EMAIL, WHATSAPP, WHATSAPP_DISPLAY, ADDRESS } from '../lib/site';

const brief = [
  "Votre activité et votre ville",
  "Le type de site : vitrine, boutique ou application",
  "Vos langues (français, arabe, anglais)",
  "Une date de mise en ligne souhaitée, si vous en avez une",
];

export default function Contact() {
  return (
    <PageShell
      title="Contact | SearchSnippets.com — BlueCode Agency"
      description="Contactez BlueCode Agency par e-mail ou WhatsApp pour un devis de site Next.js. Réponse sous 24 h ouvrées. Aït Melloul, Agadir."
    >
      <section className="contact relative overflow-hidden text-white">
        <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight max-w-3xl leading-[1.05]">
            Décrivez votre projet en deux lignes.{' '}
            <span className="text-white/45">Nous répondons sous </span>
            <span className="text-[#8FA0FF]">24 h ouvrées.</span>
          </h1>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={`mailto:${EMAIL}`} className="px-7 py-3.5 rounded-full bg-white text-ink font-semibold hover:bg-mist transition-colors">{EMAIL}</a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="px-7 py-3.5 rounded-full border border-white/25 font-semibold hover:bg-white/10 transition-colors">Écrire sur WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14">
        <div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">Pour un devis précis, dites-nous</h2>
          <ul className="mt-6 space-y-3">
            {brief.map((b) => (
              <li key={b} className="flex gap-3 text-mute leading-relaxed">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-cobalt shrink-0" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-mute leading-relaxed">Pas de formulaire à remplir : un court message suffit. Nous vous proposons ensuite un appel de cadrage de 20 minutes.</p>
        </div>

        <dl className="divide-y divide-line border-y border-line">
          <div className="py-5 grid sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6">
            <dt className="font-display font-bold">E-mail</dt>
            <dd><a href={`mailto:${EMAIL}`} className="text-cobalt font-semibold hover:underline">{EMAIL}</a></dd>
          </div>
          <div className="py-5 grid sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6">
            <dt className="font-display font-bold">WhatsApp</dt>
            <dd><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="text-cobalt font-semibold hover:underline">{WHATSAPP_DISPLAY}</a></dd>
          </div>
          <div className="py-5 grid sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6">
            <dt className="font-display font-bold">Adresse</dt>
            <dd className="text-mute">{ADDRESS}</dd>
          </div>
          <div className="py-5 grid sm:grid-cols-[9rem_1fr] gap-1 sm:gap-6">
            <dt className="font-display font-bold">Délai de réponse</dt>
            <dd className="text-mute">Sous 24 h ouvrées</dd>
          </div>
        </dl>
      </section>
    </PageShell>
  );
}