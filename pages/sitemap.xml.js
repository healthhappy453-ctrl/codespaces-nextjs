// pages/sitemap.xml.js : sitemap généré automatiquement (pages + articles du blog)
import { SITE_URL } from '../lib/site';
import { posts } from '../lib/posts';

const staticPages = [
  { path: '', priority: '1.0' },
  { path: '/about', priority: '0.6' },
  { path: '/contact', priority: '0.7' },
  { path: '/blog', priority: '0.8' },
  { path: '/privacy', priority: '0.3' },
];

function buildXml() {
  const urls = [
    ...staticPages.map((p) => `  <url><loc>${SITE_URL}${p.path}</loc><priority>${p.priority}</priority></url>`),
    ...posts.map((p) => `  <url><loc>${SITE_URL}/blog/${p.slug}</loc><lastmod>${p.updated}</lastmod><priority>0.8</priority></url>`),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');
  res.write(buildXml());
  res.end();
  return { props: {} };
}

export default function Sitemap() {
  return null;
}