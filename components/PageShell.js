// components/PageShell.js : cadre commun des pages secondaires
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Seo from './Seo';

export default function PageShell({ title, description, path, ogType, jsonLd, children }) {
  return (
    <>
      <Seo title={title} description={description} path={path} ogType={ogType} jsonLd={jsonLd} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}