"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const baseFeatures = [
  "1,000 homes, vendors, users & customers",
  "Full scheduling engine with task dependencies",
  "Auto-shifting critical path on delays",
  "Vendor portal with magic links",
  "Gantt charts with critical path view",
  "Vendor insurance expiry alerts",
  "Email notifications for everything",
  "In-app messaging with file attachments",
  "Excel import from any platform",
  "Customer CRM portal for build progress",
  "AI chatbot support",
  "Real-time dashboards",
];

const addonFeatures = [
  "Complete sales pipeline (9-step workflow)",
  "Create a new home sale in under 60 seconds",
  "Structural options & upgrades pricing matrix",
  "Auto-budget generation from pricing matrix",
  "Permitting pipeline handoff",
  "Promotions & incentive management",
  "Purchasing & vendor management module",
  "Design center selections & change orders",
  "Sales analytics & reporting",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            No hidden fees. No long contracts. Cancel anytime.
          </p>
        </AnimateOnScroll>

        {/* Two-column pricing */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Base Plan */}
          <AnimateOnScroll>
            <div className="relative flex flex-col p-8 rounded-2xl border border-slate-700/50 bg-slate-900/50 h-full">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Base Plan</p>
                <h3 className="text-2xl font-bold text-white mb-1">Construction Scheduling</h3>
                <p className="text-sm text-slate-400">Everything you need to run your job sites.</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">$79.99</span>
                <span className="text-slate-400">/month</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {baseFeatures.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="/beta"
                className="block text-center py-3 rounded-xl font-semibold text-white border border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
              >
                Request Beta Access
              </a>
            </div>
          </AnimateOnScroll>

          {/* Add-on Bundle */}
          <AnimateOnScroll delay={0.1}>
            <div className="relative flex flex-col p-8 rounded-2xl border border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-emerald-500/5 glow h-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-500 to-emerald-500">
                Add-On Bundle
              </div>

              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Add-On Bundle</p>
                <h3 className="text-2xl font-bold text-white mb-1">Purchasing / Sales / Design Center</h3>
                <p className="text-sm text-slate-400">The complete sales-to-construction workflow.</p>
              </div>

              <div className="mb-2">
                <span className="text-5xl font-extrabold text-white">$99.99</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-xs text-slate-500 mb-8">Added on top of the base plan</p>

              <ul className="space-y-3 mb-8 flex-1">
                {addonFeatures.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="/beta"
                className="block text-center py-3 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:opacity-90 transition-opacity"
              >
                Request Beta Access
              </a>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Total callout */}
        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto rounded-2xl border border-slate-800/50 bg-slate-900/30 p-8 text-center">
            <p className="text-slate-400 text-sm uppercase tracking-widest font-semibold mb-3">Everything included</p>
            <p className="text-4xl font-extrabold text-white mb-2">
              $179.98<span className="text-slate-400 text-xl font-normal">/month</span>
            </p>
            <p className="text-slate-400 text-sm mb-1">
              Base plan ($79.99) + Add-on bundle ($99.99) = Full platform access
            </p>
            <p className="text-emerald-400 text-sm font-semibold">
              Compare to BuilderTrend starting at $499/mo — for a fraction of the features you actually need.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="text-center mt-8 mb-4">
          <p className="text-sm text-slate-500">
            All plans include 150 GB construction storage, 200 GB purchasing storage, and 500K records per organization.{" "}
            <a href="/service-limits" className="text-cyan-400 hover:text-cyan-300 underline">
              View all service limits →
            </a>
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll className="text-center mt-6">
          <a
            href="/features"
            className="inline-block px-10 py-4 text-lg font-bold rounded-2xl border-2 border-cyan-500/50 text-white hover:bg-cyan-500/10 hover:border-cyan-400 transition-all shadow-lg shadow-cyan-500/10"
          >
            See All Features →
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
