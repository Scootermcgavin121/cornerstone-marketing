"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Sales Pricing Matrix",
    desc: "Buyer-facing price per floorplan × community at a glance. Filter by community, see effective retail prices including spec level options and area costs. Your sales team's single source of truth.",
    badge: "Real-Time",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Community Price Sheet PDF",
    desc: "Export beautiful, branded PDF price sheets per community — or all communities at once. Floorplan details, square footage, beds, baths, and base pricing. Hand it to a buyer at the model home.",
    badge: "PDF Export",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: "Active Promotions & Incentives",
    desc: "Create closing cost credits, discounts, and custom incentives with date ranges and community targeting. Promotions flow automatically into pricing views with expiration countdowns.",
    badge: "Smart Promos",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Net Price Calculator",
    desc: "See net-after-promotion prices instantly across every floorplan × community combination. Global and community-specific incentives stack automatically.",
    badge: "Auto-Calculate",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Design Center Selections",
    desc: "Room-by-room selection walkthrough driven by takeoff quantities. Buyers choose finishes — flooring, cabinets, countertops, fixtures — and see upgrade costs in real-time.",
    badge: "Room by Room",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Selections PDF Export",
    desc: "Generate polished customer-facing selection sheets showing every choice, organized by room. Upgrade costs, package savings, and tier comparisons — all in a professional PDF.",
    badge: "Customer Ready",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Designer Collections",
    desc: "Professionally curated option packages with savings badges. Buyers pick a collection and all selections apply at once — with clear à la carte vs. package pricing comparison.",
    badge: "Curated Packages",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Upgrade Tracking",
    desc: "Automatic upgrade delta calculation across all spec levels. Footer totals show exactly what the buyer is paying above base. Per-unit pricing for area items, lump sum for whole-house upgrades.",
    badge: "Transparent",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    title: "Excel/CSV Export",
    desc: "One-click spreadsheet export of the entire pricing matrix. Filtered by community or exported in full. Compatible with any CRM or sales tracking system.",
    badge: "One Click",
  },
];

export default function SalesFeatures() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <AnimateOnScroll className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Sales &amp; Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Price confidently,{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              sell faster
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real-time pricing matrices, branded PDF price sheets, smart promotions, and a
            full design center — everything your sales team needs to close deals at the model home.
          </p>
        </AnimateOnScroll>

        {/* Pricing callout */}
        <AnimateOnScroll className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900/80 border border-slate-800/50">
            <span className="text-sm text-slate-400">Included with Purchasing add-on</span>
            <span className="text-slate-600">·</span>
            <span className="text-3xl font-extrabold text-white">$99.98</span>
            <span className="text-slate-400">/month total</span>
          </div>
        </AnimateOnScroll>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div className="group relative h-full p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-emerald-500/30 transition-all duration-300 hover:bg-slate-900/80">
                {/* Badge */}
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">
                  {f.badge}
                </span>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-400 mb-5 group-hover:bg-emerald-500/20 transition-colors">
                  {f.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Pricing Comparison */}
        <AnimateOnScroll className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Stop overpaying for{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">less</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Buildertrend charges $800/month and still doesn&apos;t give your sales team real-time pricing tools. We do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Buildertrend */}
            <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-red-500/20">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold">
                The Other Guys
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-1">Buildertrend</h3>
              <p className="text-sm text-slate-500 mb-6">Industry &quot;standard&quot;</p>

              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-red-400">~$800</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <p className="text-sm text-slate-400">~$9,600/year</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    No real-time pricing matrix
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    No branded PDF price sheets
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    No promotion or incentive engine
                  </li>
                </ul>
              </div>
            </div>

            {/* Cornerstone */}
            <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-emerald-500/30 ring-1 ring-emerald-500/10">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">
                8× Cheaper
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-1">Cornerstone</h3>
              <p className="text-sm text-slate-500 mb-6">Everything included</p>

              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-emerald-400">$99.98</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <p className="text-sm text-slate-400">~$1,200/year · Scheduling + Purchasing + Sales</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Full sales pricing &amp; promotions
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited homes &amp; users
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Every feature, every plan
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Savings callout */}
          <div className="text-center mt-8">
            <p className="text-lg text-slate-400">
              That&apos;s{" "}
              <span className="text-2xl font-extrabold text-emerald-400">$8,400</span>{" "}
              saved per year. Every year.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Bottom CTA */}
        <AnimateOnScroll className="text-center mt-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              arm your sales team?
            </span>
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Join our beta and get 5 years free. Full sales tools, pricing matrix, and design center included — no add-on fees during beta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="/#cta"
              className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 hover:from-emerald-400 hover:to-cyan-400 transition-all"
            >
              Get Free Beta Access
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/features/construction"
              className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-2xl border border-slate-700 text-slate-300 hover:border-amber-500/50 hover:text-white transition-all"
            >
              Construction Features →
            </a>
            <a
              href="/features/purchasing"
              className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-2xl border border-slate-700 text-slate-300 hover:border-cyan-500/50 hover:text-white transition-all"
            >
              Purchasing &amp; Design →
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
