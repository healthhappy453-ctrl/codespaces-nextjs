// pages/blog/[slug].js
import Link from 'next/link';
import PageShell from '../../components/PageShell';
import { posts, getPost, formatDate } from '../../lib/posts';
import { SITE_URL } from '../../lib/site';
import { ORG_ID } from '../../lib/schema';

export async function getStaticPaths() {
  return { paths: posts.map((p) => ({ params: { slug: p.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPost(params.slug);
  if (!post) return { notFound: true };
  return { props: { post } };
}

function Block({ b }) {
  switch (b.t) {
    case 'h2':
      return <h2 className="mt-14 font-display font-bold text-2xl sm:text-3xl tracking-tight">{b.text}</h2>;
    case 'p':
      return <p className="mt-4 text-[17px] leading-relaxed text-ink/85">{b.text}</p>;
    case 'ul':
      return (
        <ul className="mt-4 space-y-2.5">
          {b.items.map((it) => (
            <li key={it} className="flex gap-3 text-[17px] leading-relaxed text-ink/85">
              <span className="mt-3 w-1.5 h-1.5 rounded-full bg-cobalt shrink-0" aria-hidden="true" />
              {it}
            </li>
          ))}
        </ul>
      );
    case 'table':
      return (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
            <thead>
              <tr className="border-b-2 border-line">
                {b.head.map((h) => (
                  <th key={h} scope="col" className="py-3 pr-4 font-display font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r) => (
                <tr key={r[0]} className="border-b border-line align-top">
                  {r.map((c, i) => (
                    <td key={i} className={`py-3.5 pr-4 ${i === 0 ? 'font-display font-bold text-ink' : 'text-ink/80'}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default function Post({ post }) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.updated,
        inLanguage: 'fr',
        mainEntityOfPage: url,
        image: `${SITE_URL}/og.png`,
        author: { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: post.faq.map(([q, a]) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };

  return (
    <PageShell path={`/blog/${post.slug}`} title={`${post.title} | BlueCode Agency`} description={post.description} ogType="article" jsonLd={jsonLd}>
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24 lg:pt-24">
        <nav aria-label="Fil d'Ariane" className="text-sm text-mute">
          <Link href="/" className="hover:text-cobalt">Accueil</Link> / <Link href="/blog" className="hover:text-cobalt">Blog</Link>
        </nav>

        <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl tracking-tight leading-[1.08]">{post.title}</h1>
        <p className="mt-5 text-sm text-mute">
          Par BlueCode Agency · Publié le {formatDate(post.date)}
          {post.updated !== post.date && <> · Mis à jour le {formatDate(post.updated)}</>} · {post.readingTime} min de lecture
        </p>

        <div className="mt-8 rounded-2xl bg-mist p-6">
          <p className="font-display font-bold text-lg">En bref</p>
          <p className="mt-2 leading-relaxed text-ink/90">{post.answer}</p>
        </div>

        {post.blocks.map((b, i) => (
          <Block key={i} b={b} />
        ))}

        <h2 className="mt-14 font-display font-bold text-2xl sm:text-3xl tracking-tight">Questions fréquentes</h2>
        <div className="mt-4">
          {post.faq.map(([q, a]) => (
            <details key={q} className="group border-b border-line py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display font-bold text-lg">
                {q}
                <span className="text-cobalt text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-mute leading-relaxed">{a}</p>
            </details>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-[#151A3A] text-white p-8 sm:p-10">
          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight leading-tight">Un devis écrit pour votre projet</h2>
          <p className="mt-3 text-white/75 leading-relaxed">Décrivez votre projet en deux lignes, nous répondons sous 24 h ouvrées.</p>
          <Link href="/contact" className="inline-block mt-6 px-7 py-3.5 rounded-full bg-white text-cobalt font-semibold hover:bg-mist">Contactez-nous</Link>
        </div>
      </article>
    </PageShell>
  );
}