// components/Portfolio.js
export default function Portfolio({ projects }) {
  if (!projects.length) return null;

  return (
    <section id="realisations" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">Réalisations</h2>
      <p className="mt-4 text-mute max-w-xl">Passez la souris sur un aperçu : la page défile comme sur le vrai site.</p>

      <div className="mt-12 grid sm:grid-cols-2 gap-x-8 gap-y-14">
        {projects.map((p) => (
          <a key={p.url} href={p.url} target="_blank" rel="noreferrer" className="group block">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-mist">
              {/* Affiché seulement si l'image est absente */}
              <span className="absolute inset-0 grid place-items-center font-display font-bold text-2xl text-cobalt/40">{p.name}</span>
              <img
                src={p.image}
                alt={`Aperçu du site ${p.name}`}
                loading="lazy"
                className="shot-img absolute left-0 w-full h-auto min-h-full object-cover object-top"
                style={p.scroll ? { '--scroll': p.scroll } : undefined}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <p className="mt-5 text-sm text-mute">{p.type}</p>
            <h3 className="font-display font-bold text-2xl mt-1">{p.name}</h3>
            <p className="mt-2 text-mute leading-relaxed max-w-md">{p.summary}</p>
            <span className="inline-block mt-4 font-semibold text-cobalt underline underline-offset-4 decoration-cobalt/30 group-hover:decoration-cobalt">Visiter le site</span>
          </a>
        ))}
      </div>
    </section>
  );
}