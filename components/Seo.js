// components/Seo.js : balises SEO communes (title, description, canonical, Open Graph, JSON-LD)
import Head from 'next/head';
import { SITE_URL } from '../lib/site';

export default function Seo({ title, description, path = '/', ogType = 'website', jsonLd }) {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const image = `${SITE_URL}/og.png`; // à créer : 1200×630 px dans /public/og.png
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content="SearchSnippets.com" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {jsonLd && (
        <script key="jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </Head>
  );
}