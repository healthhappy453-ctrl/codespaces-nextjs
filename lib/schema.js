// lib/schema.js : données structurées (JSON-LD) réutilisées sur tout le site
import { SITE_URL, EMAIL, PHONE_INTL } from './site';

export const ORG_ID = `${SITE_URL}/#organization`;

const offer = (name, price, description) => ({
  '@type': 'Offer',
  priceCurrency: 'MAD',
  price: String(price),
  url: `${SITE_URL}/#offres`,
  itemOffered: { '@type': 'Service', name, description },
});

export const professionalService = {
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: 'BlueCode Agency',
  alternateName: 'SearchSnippets.com',
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo-mark.svg` },
  image: `${SITE_URL}/og.png`,
  description:
    "Agence web à Aït Melloul, Agadir. Création de sites Next.js sur mesure : vitrines, e-commerce et SaaS, avec référencement technique et code source remis au client.",
  email: EMAIL,
  telephone: PHONE_INTL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Aït Melloul',
    addressRegion: 'Souss-Massa',
    addressCountry: 'MA',
  },
  areaServed: [{ '@type': 'Country', name: 'Maroc' }],
  availableLanguage: ['fr', 'ar', 'en'],
  knowsAbout: ['Création de site web', 'Next.js', 'SEO technique', 'Données structurées', 'E-commerce'],
  // À COMPLÉTER quand vos profils existent : sameAs: ['https://www.linkedin.com/...', 'https://www.facebook.com/...'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Offres de création de site web',
    itemListElement: [
      offer('Essentiel', 2799, 'Landing page sur mesure : 1 page, SEO de base, hébergement 1 an, nom de domaine et SSL.'),
      offer('Standard', 6999, 'Site vitrine de 5 à 10 pages avec blog, SEO avancé, hébergement 1 an, nom de domaine et SSL.'),
      offer('Premium', 12499, 'Vitrine avancée de 10 à 20 pages, blog, multilingue FR/AR/EN, données structurées et formation.'),
    ],
  },
};

export const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'SearchSnippets.com',
  inLanguage: 'fr',
  publisher: { '@id': ORG_ID },
};

export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [professionalService, website],
};