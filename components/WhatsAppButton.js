// components/WhatsAppButton.js : bouton flottant en bas à droite
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP } from '../lib/site';

export default function WhatsAppButton() {
  const text = encodeURIComponent('Bonjour, je souhaite discuter de mon projet de site web.');
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-xl hover:scale-105 transition-transform"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
}