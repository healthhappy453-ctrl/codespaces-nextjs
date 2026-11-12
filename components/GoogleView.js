import { useEffect, useRef, useState } from 'react';

// Lit les données structurées (JSON-LD) réellement présentes dans la page et les montre au visiteur.
function readBlocks() {
  const found = [];
  document.querySelectorAll('script[type="application/ld+json"]').forEach((s) => {
    try { found.push(JSON.parse(s.textContent)); } catch (e) { /* bloc invalide : ignoré */ }
  });
  return found;
}

const TOKEN = /("(?:\\.|[^"\\])*")(\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;

function highlight(text) {
  const nodes = [];
  let last = 0, k = 0, m;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0], str = m[1], colon = m[2];
    if (str) {
      const cls = colon ? (str.charAt(1) === '@' ? 'gv-at' : 'gv-key') : 'gv-str';
      nodes.push(<span key={k++} className={cls}>{str}</span>);
      if (colon) nodes.push(colon);
    } else {
      nodes.push(<span key={k++} className={/^-?\d/.test(tok) ? 'gv-num' : 'gv-kw'}>{tok}</span>);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export default function GoogleView() {
  const [blocks, setBlocks] = useState(null);
  const [open, setOpen] = useState(false);
  const [xray, setXray] = useState(false);
  const [copied, setCopied] = useState(false);
  const btn = useRef(null), closeBtn = useRef(null), wasOpen = useRef(false);

  useEffect(() => { setBlocks(readBlocks()); }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('xray', open && xray);
    return () => document.documentElement.classList.remove('xray');
  }, [open, xray]);

  useEffect(() => {
    if (open) {
      const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
      window.addEventListener('keydown', onKey);
      if (closeBtn.current) closeBtn.current.focus();
      wasOpen.current = true;
      return () => window.removeEventListener('keydown', onKey);
    }
    if (wasOpen.current && btn.current) btn.current.focus();
    wasOpen.current = false;
  }, [open]);

  if (!blocks || !blocks.length) return null;
  const json = JSON.stringify(blocks.length === 1 ? blocks[0] : blocks, null, 2);

  const copy = () => {
    try {
      navigator.clipboard.writeText(json).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1600); }).catch(() => {});
    } catch (e) { /* presse-papiers indisponible */ }
  };

  return (
    <>
      <button ref={btn} type="button" className="gv-btn" aria-expanded={open} aria-controls="gv-panel" onClick={() => setOpen((v) => !v)}>
        <span className="gv-dot" aria-hidden="true" />
        Voir ce que Google lit
      </button>

      {open && (
        <div id="gv-panel" role="dialog" aria-label="Données structurées de cette page" className="gv-panel">
          <div className="gv-head">
            <span>Ce que Google lit sur cette page</span>
            <button ref={closeBtn} type="button" className="gv-x" onClick={() => setOpen(false)} aria-label="Fermer">×</button>
          </div>
          <div className="gv-bar">
            <label className="gv-switch">
              <input type="checkbox" checked={xray} onChange={(e) => setXray(e.target.checked)} />
              <span className="gv-track" aria-hidden="true" />
              Repérer les titres sur la page
            </label>
            <button type="button" className="gv-copy" onClick={copy}>{copied ? 'Copié' : 'Copier le JSON'}</button>
          </div>
          <pre className="gv-code" tabIndex={0}><code>{highlight(json)}</code></pre>
          <p className="gv-note">Données JSON-LD réellement présentes dans le code de cette page ({blocks.length} bloc{blocks.length > 1 ? 's' : ''}).</p>
        </div>
      )}
    </>
  );
}
