"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Parts Catalog",
    desc: "200+ construction parts with real pricing. Multiple unit types — each, hour, sqft, lnft, yard, and more. Organized by category and scope for fast lookup.",
    badge: "200+ Parts",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    title: "Budget Hierarchy",
    desc: "Industry-first 3-level visibility: Scope → Task → Parts. Collapsible tree view lets you drill from high-level scopes down to individual part costs. Know exactly where every dollar goes.",
    badge: "Industry First",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Base Budgets",
    desc: "Template budgets per floorplan with task-level cost breakdown. Apply to any home with one click — budget lines and design selections created simultaneously.",
    badge: "One Click",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Active Homes Dashboard",
    desc: "Financial rollup table at a glance: Base Budget, Change Orders, Adjusted Budget, POs Generated, and Variance. Toggle between Active and Closed homes.",
    badge: "Real-Time",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Apply Budget Flow",
    desc: "Auto-matches floorplan + community and auto-detects spec level. Creates budget lines AND design selections simultaneously. One action, full financial setup.",
    badge: "Smart Match",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Design Center",
    desc: "Room-by-room selection walkthrough with takeoff-driven quantities. Option classes for Flooring, Cabinets, Countertops, Fixtures, and more. Buyers pick their finishes, you track the cost.",
    badge: "Room by Room",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Designer Collections",
    desc: "Professionally curated selections designed to complement your lifestyle. Curated option bundles with savings badges, one-click apply, à la carte vs. package pricing.",
    badge: "Curated",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Unlimited Spec Levels",
    desc: "Create as many finish tiers as you need — Standard, Upgrade, Premium, or anything custom. Each community is assigned a spec level, and the Design Center automatically pulls in the right options and upgrade pricing for that tier. Buyers see exactly what's included and what each step-up costs.",
    badge: "Custom Tiers",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Base Pricing Matrix",
    desc: "Retail price per floorplan × community × spec level. Editable matrix for your sales team. Know the price of every home before the buyer walks in.",
    badge: "Sales Tool",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: "Change Orders",
    desc: "Full approval workflow: Draft → Pending → Approved → Executed. Track cost and retail impact on every change. Audit trail for every modification.",
    badge: "Full Workflow",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0l-3 3zM8.3 12.7a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0l-3 3zM3 21l3-3M10 14l-4 4" />
      </svg>
    ),
    title: "Bid Management",
    desc: "Send a floorplan to bid to every vendor with one click. Track responses in real-time and manage the full RFP lifecycle. Vendors submit through a branded portal with token-based secure access. Excel import/export for line items, document attachments, and automated reminder emails.",
    badge: "Full Lifecycle",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 6h6l3-6M6 6h12M12 3v3M9 12a3 3 0 106 0M3 12h2m14 0h2" />
      </svg>
    ),
    title: "Bid Comparison",
    desc: "Side-by-side vendor bid comparison with automatic lowest-price highlighting. Filter by scope, community, or floorplan. Line-item level comparison shows exactly where each vendor is cheaper or more expensive — green for lowest, red for highest.",
    badge: "Side by Side",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8m-4-4v4M6 4h12l-1 7a5 5 0 01-10 0L6 4zM4 4h1M19 4h1M4 4c0 2-1 3-2 4M20 4c0 2 1 3 2 4" />
      </svg>
    ),
    title: "Award & Budget Flow",
    desc: "Award the winning bid and automatically update your base budgets and generate PO drafts in one click. Vendors receive branded acceptance or rejection emails. The winning bid's pricing flows directly into your cost management system.",
    badge: "One Click",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Purchase Orders",
    desc: "Auto-generation from budget task lines. Status tracking: Draft → Sent → Acknowledged → Invoiced → Paid. Complete PO lifecycle in one system.",
    badge: "Auto-Generated",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Buildertrend Migration",
    desc: "Full data mapping for builders switching from BT. Cost codes, schedule templates, and selections all import cleanly. Switch in days, not months.",
    badge: "Easy Switch",
  },
];

export default function PurchasingFeatures() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <AnimateOnScroll className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            Purchasing &amp; Design Center
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Know where{" "}
            <span className="gradient-text">every dollar goes</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From bid management to purchase orders — a complete purchasing, bidding, and design system
            built for home builders who refuse to fly blind on costs.
          </p>
        </AnimateOnScroll>

        {/* Pricing callout */}
        <AnimateOnScroll className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900/80 border border-slate-800/50">
            <span className="text-3xl font-extrabold text-white">$39.99</span>
            <span className="text-slate-400">/month add-on</span>
            <span className="text-slate-600">·</span>
            <span className="text-sm text-slate-400">$99.98/mo total with scheduling</span>
          </div>
        </AnimateOnScroll>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div className="group relative h-full p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-900/80">
                {/* Badge */}
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-cyan-500/60">
                  {f.badge}
                </span>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-500/10 text-cyan-400 mb-5 group-hover:bg-cyan-500/20 transition-colors">
                  {f.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
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
              <span className="gradient-text">less</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Buildertrend charges $800/month and doesn&apos;t even include purchasing. We include everything.
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
                    Purchasing module costs extra
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Per-home pricing adds up fast
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Feature gates on lower tiers
                  </li>
                </ul>
              </div>
            </div>

            {/* Cornerstone */}
            <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-cyan-500/30 ring-1 ring-cyan-500/10">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold">
                8× Cheaper
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-1">Cornerstone</h3>
              <p className="text-sm text-slate-500 mb-6">Everything included</p>

              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-cyan-400">$99.98</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <p className="text-sm text-slate-400">~$1,200/year · Scheduling + Purchasing</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Full purchasing &amp; design center
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
            <span className="gradient-text">take control of your costs?</span>
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Join our beta and get 5 years free. Full purchasing and design center included — no add-on fees during beta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#cta"
              className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:from-cyan-400 hover:to-emerald-400 transition-all"
            >
              Get Free Beta Access
            </a>
            <a
              href="/features/construction"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-2xl border border-slate-700 text-slate-300 hover:border-amber-500/50 hover:text-white transition-all"
            >
              Construction Features →
            </a>
            <a
              href="/features/sales"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-2xl border border-slate-700 text-slate-300 hover:border-emerald-500/50 hover:text-white transition-all"
            >
              Sales Features →
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
