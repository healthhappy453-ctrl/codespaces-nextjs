// pages/_app.js : polices auto-hébergées (next/font) + Google Analytics
import '../global.css';
import Script from 'next/script';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import { GA_ID } from '../lib/site';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export default function MyApp({ Component, pageProps }) {
  // Analytics uniquement en production : vos tests locaux ne polluent pas les statistiques.
  const withAnalytics = GA_ID && process.env.NODE_ENV === 'production';
  return (
    <div className={`${sans.className} ${sans.variable} ${display.variable}`}>
      <Component {...pageProps} />
      {withAnalytics && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
          <Script id="ga-init" strategy="lazyOnload">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      )}
    </div>
  );
}