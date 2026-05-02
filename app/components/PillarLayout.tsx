import { ReactNode } from "react";

export type RelatedLink = {
  label: string;
  href: string;
  desc?: string;
};

type Props = {
  eyebrow?: string;
  h1: string;
  intro: string;
  children: ReactNode;
  related?: RelatedLink[];
  ctaText?: string;
};

export default function PillarLayout({
  eyebrow,
  h1,
  intro,
  children,
  related = [],
  ctaText = "Request beta access",
}: Props) {
  return (
    <article className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          {eyebrow && (
            <div className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3">
              {eyebrow}
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {h1}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">{intro}</p>
        </header>

        {/* Body */}
        <div className="pillar-content space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
          {children}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            See it run on your operation
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Cornerstone PM is in public beta. Builders pricing in real vendor bids,
            scheduling real homes, and selling them with our pricing engine — today.
          </p>
          <a
            href="/beta"
            className="inline-flex items-center px-6 py-3 rounded-lg text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:opacity-90 transition-opacity"
          >
            {ctaText}
          </a>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <nav className="mt-16" aria-label="Related pages">
            <h2 className="text-xl font-bold text-white mb-6">Keep reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((r) => (
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
          </nav>
        )}
      </div>
    </article>
  );
}
