// pages/_app.js : polices auto-hébergées avec next/font (plus de requête bloquante vers Google Fonts)
import '../global.css';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';

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
  return (
    <div className={`${sans.className} ${sans.variable} ${display.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}