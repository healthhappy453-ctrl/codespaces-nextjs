import { useEffect } from 'react';

// Effets au curseur : torche sur la grille du hero, inclinaison 3D de la carte,
// halo des cartes, boutons magnétiques. Inactif sur mobile et si "réduire les animations".
export default function Fx() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || calm) return;

    const root = document.documentElement;
    const hero = document.querySelector('.hero-bg');
    const card = document.querySelector('.serp-card');
    const spots = [...document.querySelectorAll('.spot')];
    const btns = [...document.querySelectorAll('main a.rounded-full')];
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    let raf = 0, ev = null;

    const frame = () => {
      raf = 0;
      if (!ev) return;
      const { clientX: x, clientY: y } = ev;
      if (hero) {
        const r = hero.getBoundingClientRect();
        if (y > r.top - 60 && y < r.bottom + 60) {
          hero.style.setProperty('--hx', x - r.left + 'px');
          hero.style.setProperty('--hy', y - r.top + 'px');
        }
      }
      if (card) {
        const r = card.getBoundingClientRect();
        const px = clamp((x - (r.left + r.width / 2)) / (window.innerWidth / 2), -1, 1);
        const py = clamp((y - (r.top + r.height / 2)) / (window.innerHeight / 2), -1, 1);
        card.style.setProperty('--ry', (px * 8).toFixed(2) + 'deg');
        card.style.setProperty('--rx', (-py * 6).toFixed(2) + 'deg');
      }
      for (const s of spots) {
        const r = s.getBoundingClientRect();
        s.style.setProperty('--mx', x - r.left + 'px');
        s.style.setProperty('--my', y - r.top + 'px');
      }
      for (const b of btns) {
        const r = b.getBoundingClientRect();
        const dx = x - (r.left + r.width / 2), dy = y - (r.top + r.height / 2);
        if (Math.hypot(dx, dy) < 120) b.style.translate = (dx * 0.16).toFixed(1) + 'px ' + (dy * 0.24).toFixed(1) + 'px';
        else if (b.style.translate) b.style.translate = '';
      }
    };
    const move = (e) => { ev = e; if (!raf) raf = requestAnimationFrame(frame); };
    const leave = () => {
      ev = null;
      if (card) { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); }
      for (const b of btns) b.style.translate = '';
    };
    window.addEventListener('pointermove', move, { passive: true });
    root.addEventListener('pointerleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      root.removeEventListener('pointerleave', leave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
