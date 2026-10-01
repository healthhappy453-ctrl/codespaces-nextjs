// components/Logo.js
// Symbole : un « S » dessiné avec trois lignes de texte reliées.
// La première ligne, en bleu, est l'extrait mis en avant (le snippet).
export function LogoMark({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M80 20H38A15 15 0 0 0 38 50" stroke="#2438E0" />
      <path d="M38 50H62A15 15 0 0 1 62 80H20" stroke="#151A3A" />
    </svg>
  );
}

export default function Logo() {
  return (
    <a href="/" aria-label="SearchSnippets.com, BlueCode Agency" className="inline-flex items-center gap-2.5 text-ink">
      <LogoMark />
      <span className="font-display font-bold text-[23px] tracking-tight leading-none">
        searchsnippets<span className="text-cobalt">.com</span>
      </span>
      <span className="hidden sm:inline text-sm text-mute border-l border-line pl-3 ml-1">BlueCode Agency</span>
    </a>
  );
}