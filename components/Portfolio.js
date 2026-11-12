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
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-[#2438E0]/10 transition-all duration-300 motion-reduce:transition-none group-hover:-translate-y-1 group-hover:shadow-2xl">
              <div className="flex items-center gap-3 border-b border-line bg-mist px-4 py-2.5" aria-hidden="true">
                <span className="flex gap-1.5"><i className="block h-2.5 w-2.5 rounded-full bg-[#FF5F57]" /><i className="block h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" /><i className="block h-2.5 w-2.5 rounded-full bg-[#28C840]" /></span>
                <span className="min-w-0 flex-1 truncate rounded-md bg-white px-3 py-1 text-xs text-mute">{p.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-mist">
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