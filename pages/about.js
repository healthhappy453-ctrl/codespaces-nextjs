// pages/about.js
import Link from 'next/link';
import PageShell from '../components/PageShell';
import { ADDRESS } from '../lib/site';

const principles = [
  ['Du code écrit pour votre activité', "Nous ne posons pas un thème sur votre site. Chaque page est développée en Next.js : moins de dépendances, un chargement rapide, rien d'inutile."],
  ['Le référencement technique dès le départ', "Structure des pages, données structurées, vitesse et HTTPS sont traitées pendant le développement, pas ajoutées après coup."],
  ['Un code qui vous appartient', "À la livraison, vous recevez le code source complet et tous les accès. Vous pouvez confier la suite à qui vous voulez."],
];

export default function About() {
  return (
    <PageShell
      title="À propos | SearchSnippets.com — BlueCode Agency"
      description="BlueCode Agency conçoit des sites Next.js sur mesure depuis Aït Melloul, Agadir, pour des entreprises au Maroc et à l'export."
    >
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 lg:pt-28">
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] max-w-3xl">
          Une équipe qui dessine, développe et suit votre site.
        </h1>
        <p className="mt-6 text-lg text-mute max-w-2xl leading-relaxed">
          SearchSnippets.com est notre plateforme web et SEO. BlueCode Agency est l'équipe d'ingénieurs et de designers qui conçoit et suit vos projets, depuis {ADDRESS}.
        </p>
      </section>

      <section className="bg-mist">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-x-12 gap-y-10">
          {principles.map(([t, d]) => (
            <div key={t}>
              <h2 className="font-display font-bold text-xl">{t}</h2>
              <p className="mt-3 text-mute leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">Pour qui nous travaillons</h2>
        <div className="space-y-5 text-mute leading-relaxed max-w-2xl">
          <p>Nos clients sont des indépendants, des cabinets, des PME et des marques en croissance, au Maroc comme à l'export. Certains ont besoin d'une vitrine claire, d'autres d'une boutique en ligne ou d'un produit SaaS.</p>
          <p>Avant de dessiner la première page, nous partons de vos clients, de votre offre et de vos concurrents locaux. Le devis est écrit, le prix annoncé est le prix payé, et vous validez une maquette avant toute ligne de code.</p>
          <p>
            Vous pouvez voir nos <Link href="/#realisations" className="text-cobalt font-semibold underline underline-offset-4">réalisations</Link> et nos <Link href="/#offres" className="text-cobalt font-semibold underline underline-offset-4">tarifs</Link> sur la page d'accueil.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl bg-[#151A3A] text-white p-8 sm:p-14 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight max-w-xl leading-[1.1]">Parlons de votre projet en 20 minutes.</h2>
          <Link href="/contact" className="self-start sm:self-auto px-7 py-3.5 rounded-full bg-white text-cobalt font-semibold hover:bg-mist whitespace-nowrap">Nous contacter</Link>
        </div>
      </section>
    </PageShell>
  );
}