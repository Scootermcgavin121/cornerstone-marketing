"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const competitors = [
  { name: "Buildertrend", price: "$99–499/mo", con: "Every add-on costs extra" },
  { name: "CoConstruct", price: "$99+/mo", con: "Features locked behind tiers" },
  { name: "Procore", price: "$375+/mo", con: "Per-home pricing adds up fast" },
];

const cornerstone = {
  name: "Cornerstone",
  price: "$60/mo",
  pro: "Modern, fast, AI-powered",
};

export default function Comparison() {
  return (
    <section id="compare" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Why pay more for{" "}
            <span className="gradient-text">less?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            See how Cornerstone stacks up against the competition.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="rounded-2xl border border-slate-800/50 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-slate-900/80 text-sm font-semibold text-slate-400 px-6 py-4 border-b border-slate-800/50">
              <span>Software</span>
              <span className="text-center">Price</span>
              <span className="text-right">Verdict</span>
            </div>

            {/* Competitors */}
            {competitors.map((c, i) => (
              <div
                key={i}
                className="grid grid-cols-3 items-center px-6 py-5 border-b border-slate-800/30 text-sm"
              >
                <span className="font-medium text-slate-300">{c.name}</span>
                <span className="text-center text-slate-400">{c.price}</span>
                <span className="text-right text-red-400/80">{c.con}</span>
              </div>
            ))}

            {/* Cornerstone row */}
            <div className="grid grid-cols-3 items-center px-6 py-5 bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 border-t-2 border-cyan-500/30">
              <span className="font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                {cornerstone.name}
              </span>
              <span className="text-center font-bold gradient-text text-lg">{cornerstone.price}</span>
              <span className="text-right text-emerald-400 font-medium">{cornerstone.pro}</span>
            </div>
          </div>

          <p className="text-center text-slate-400 text-sm mt-6">
            <span className="text-white font-semibold">Cornerstone: one price, every feature, up to 1,000 homes.</span>{" "}
            No per-home fees. No feature gates. No surprises.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
