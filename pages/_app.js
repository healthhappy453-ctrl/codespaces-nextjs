// pages/_app.js : polices auto-hébergées (Fontsource) + Google Analytics
import '../global.css';
import Script from 'next/script';
import '@fontsource/instrument-sans/latin-400.css';
import '@fontsource/instrument-sans/latin-500.css';
import '@fontsource/instrument-sans/latin-600.css';
import '@fontsource/bricolage-grotesque/latin-500.css';
import '@fontsource/bricolage-grotesque/latin-700.css';
import { GA_ID } from '../lib/site';

const FONT_SANS = "'Instrument Sans', system-ui, sans-serif";
const FONT_DISPLAY = "'Bricolage Grotesque', 'Instrument Sans', system-ui, sans-serif";

export default function MyApp({ Component, pageProps }) {
  // Analytics uniquement en production : vos tests locaux ne polluent pas les statistiques.
  const withAnalytics = GA_ID && process.env.NODE_ENV === 'production';
  return (
    <div style={{ fontFamily: FONT_SANS, '--font-sans': FONT_SANS, '--font-display': FONT_DISPLAY }}>
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
