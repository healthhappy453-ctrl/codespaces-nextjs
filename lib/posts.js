// lib/posts.js : articles du blog. Pour ajouter un article, ajoutez un objet au tableau.
// Types de blocs : h2, p, ul (items), table (head, rows), note.
// À CONFIRMER : les ordres de grandeur du marché sont indicatifs ; vérifiez-les avant publication.

export const posts = [
  {
    slug: 'prix-creation-site-web-maroc',
    title: 'Prix de création d\'un site web au Maroc en 2026 : combien prévoir ?',
    description:
      "Combien coûte un site web au Maroc en 2026 ? Facteurs de prix, ordres de grandeur par type de prestataire, tarifs détaillés de BlueCode Agency et pièges à éviter.",
    date: '2026-10-01',
    updated: '2026-10-01',
    category: 'Tarifs',
    readingTime: 6,
    answer:
      "Au Maroc, un site vitrine coûte de quelques milliers à une vingtaine de milliers de dirhams selon le prestataire et le nombre de pages ; une boutique en ligne ou une application coûte nettement plus. Chez BlueCode Agency, les forfaits vont de 2 799 MAD (landing page) à 12 499 MAD (vitrine avancée multilingue), et les projets e-commerce ou SaaS sont chiffrés sur devis.",
    blocks: [
      { t: 'p', text: `Le prix d'un site web varie du simple au décuple, et c'est la première source de confusion quand on demande plusieurs devis. Cet article explique ce qui fait varier le prix, donne des ordres de grandeur pour comparer, et détaille nos propres tarifs.` },

      { t: 'h2', text: 'Ce qui fait varier le prix d\'un site' },
      { t: 'ul', items: [
        `Le nombre de pages : une landing page d'une seule page n'a rien à voir avec une vitrine de vingt pages.`,
        `Le design : un thème retouché coûte moins cher qu'un design dessiné pour votre activité.`,
        `Les fonctionnalités : formulaire simple, blog, paiement en ligne, espace client, synchronisation des stocks.`,
        `Les langues : chaque langue supplémentaire (français, arabe, anglais) demande des contenus et des vérifications de mise en page.`,
        `La rédaction des contenus : fournis par vous, ou écrits par le prestataire.`,
        `Le référencement technique : structure des pages, données structurées, vitesse de chargement.`,
        `Le suivi après la mise en ligne : support, corrections, évolutions.`,
      ]},

      { t: 'h2', text: 'Ordres de grandeur selon le type de prestataire' },
      { t: 'p', text: `Ces fourchettes sont indicatives et varient beaucoup d'un prestataire à l'autre. Comparez toujours des devis écrits, avec le même périmètre.` },
      { t: 'table', head: ['Type de prestataire', 'Ordre de grandeur', 'À savoir'], rows: [
        ['Créateur de site en ligne, à faire soi-même', 'Abonnement mensuel ou annuel', 'Vous faites tout le travail, le site reste sur la plateforme.'],
        ['Freelance', '1 500 à 8 000 MAD pour une vitrine', 'Très variable selon l\'expérience ; vérifiez des réalisations en ligne.'],
        ['Agence locale', '5 000 à 25 000 MAD pour une vitrine', 'Souvent un suivi plus structuré ; demandez ce qui est inclus.'],
        ['Boutique en ligne ou application sur mesure', '15 000 MAD et plus', 'Dépend du paiement, des stocks et des intégrations.'],
      ]},

      { t: 'h2', text: 'Les tarifs de BlueCode Agency' },
      { t: 'p', text: `Nos prix sont affichés et le périmètre est écrit dans le devis. Le code source vous est remis dans tous les cas.` },
      { t: 'table', head: ['Offre', 'Prix', 'Ce qui est inclus'], rows: [
        ['Essentiel', '2 799 MAD', 'Landing page d\'une page plus mentions légales, design sur mesure, SEO de base, hébergement 1 an, nom de domaine, SSL.'],
        ['Standard', '6 999 MAD', 'Vitrine de 5 à 10 pages, blog, SEO avancé, rédaction de 5 pages, formulaire avancé, hébergement 1 an, domaine, SSL.'],
        ['Premium', '12 499 MAD', 'Vitrine avancée de 10 à 20 pages, blog, multilingue FR/AR/EN, formulaire avec CRM, SEO et données structurées, formation de 1 h.'],
        ['Sur mesure', 'Sur devis', 'Boutique en ligne, SaaS ou application : paiement CMI, Stripe ou PayPal, intégrations, accompagnement.'],
      ]},

      { t: 'h2', text: 'Les coûts annuels à ne pas oublier' },
      { t: 'ul', items: [
        `Le nom de domaine (.ma ou .com), à renouveler chaque année.`,
        `L'hébergement : dans nos forfaits, la première année est incluse.`,
        `Le certificat SSL (HTTPS), souvent gratuit mais à vérifier dans le devis.`,
        `La maintenance et les mises à jour de contenu si vous ne les faites pas vous-même.`,
      ]},

      { t: 'h2', text: 'Les pièges à éviter' },
      { t: 'ul', items: [
        `Un devis flou, sans liste précise de ce qui est inclus.`,
        `Un site sans remise du code source : vous restez dépendant du prestataire.`,
        `Un nom de domaine enregistré au nom du prestataire plutôt qu'au vôtre.`,
        `Une promesse de « première place sur Google » : personne ne peut la garantir.`,
        `Un site construit sur des dizaines de plugins qu'il faudra mettre à jour.`,
        `Un acompte demandé sans calendrier de livraison écrit.`,
      ]},

      { t: 'h2', text: 'Comment comparer deux devis' },
      { t: 'p', text: `Alignez les devis sur les mêmes critères : nombre de pages, langues, contenus rédigés ou non, hébergement et domaine, remise du code source, durée du support après la mise en ligne, calendrier. Un devis moins cher qui exclut la moitié de ces points n'est pas moins cher.` },

      { t: 'h2', text: 'Quel budget selon votre situation' },
      { t: 'p', text: `Un indépendant qui a besoin d'une présence claire et d'un moyen de contact peut commencer par une landing page. Une PME qui présente plusieurs services et veut publier du contenu aura besoin d'une vitrine avec blog. Une activité qui vend en ligne ou vise plusieurs langues doit prévoir un budget plus élevé, chiffré sur devis. Le plus simple est de décrire votre projet en deux lignes : nous répondons sous 24 h ouvrées.` },
    ],
    faq: [
      ['Combien coûte un site vitrine au Maroc ?', "Les prix vont de quelques milliers à une vingtaine de milliers de dirhams selon le prestataire et le nombre de pages. Chez BlueCode Agency, une landing page démarre à 2 799 MAD et une vitrine de 5 à 10 pages à 6 999 MAD."],
      ['Faut-il payer chaque année après la création du site ?', "Le nom de domaine se renouvelle chaque année, et l'hébergement après la première année. Dans nos forfaits, l'hébergement et le nom de domaine de la première année sont inclus."],
      ['Le code source du site m\'est-il remis ?', "Oui. À la livraison, vous recevez le code source complet et tous les accès, pour pouvoir confier la suite à qui vous voulez."],
      ['Comment se passe le paiement ?', "Le devis écrit indique le calendrier et l'acompte. Le prix annoncé est le prix payé."],
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug) || null;

export const formatDate = (d) =>
  new Date(`${d}T00:00:00Z`).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });