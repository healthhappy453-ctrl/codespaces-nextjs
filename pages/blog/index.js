// pages/blog/index.js
import Link from 'next/link';
import PageShell from '../../components/PageShell';
import { posts, formatDate } from '../../lib/posts';

export default function Blog() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <PageShell
      path="/blog"
      title="Blog | SearchSnippets.com — BlueCode Agency"
      description="Guides pratiques sur la création de site web au Maroc : prix, SEO, e-commerce, bonnes pratiques. Par BlueCode Agency, Agadir."
    >
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-24 lg:pt-28">
        <h1 className="font-display font-bold text-4xl sm:text-5xl tracking-tight leading-[1.05]">Le blog</h1>
        <p className="mt-5 text-lg text-mute leading-relaxed">Des guides concrets pour créer, faire connaître et faire grandir un site web au Maroc.</p>

        <div className="mt-12">
          {sorted.map((p) => (
            <article key={p.slug} className="border-t border-line py-8">
              <p className="text-sm text-mute">{p.category} · {formatDate(p.date)} · {p.readingTime} min de lecture</p>
              <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl tracking-tight leading-snug">
                <Link href={`/blog/${p.slug}`} className="hover:text-cobalt">{p.title}</Link>
              </h2>
              <p className="mt-3 text-mute leading-relaxed">{p.description}</p>
              <Link href={`/blog/${p.slug}`} className="inline-block mt-4 text-cobalt font-semibold underline underline-offset-4">Lire l'article</Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}