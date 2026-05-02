type RelatedLink = {
  label: string;
  href: string;
  desc?: string;
};

type Props = {
  heading?: string;
  items: RelatedLink[];
};

export default function RelatedPages({ heading = "Keep reading", items }: Props) {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">{heading}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((r) => (
            <a
              key={r.href}
              href={r.href}
              className="block p-5 rounded-xl border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700 transition-colors"
            >
              <div className="text-base font-semibold text-white mb-1">{r.label}</div>
              {r.desc && <div className="text-sm text-slate-400">{r.desc}</div>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
