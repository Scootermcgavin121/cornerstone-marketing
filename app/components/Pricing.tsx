"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const tiers = [
  {
    name: "Starter",
    price: "$60",
    period: "/month",
    desc: "Enterprise-grade power at a fraction of the price.",
    features: [
      "1,000 homes, vendors, users & customers",
      "Full scheduling engine",
      "Task dependencies with auto-shifting",
      "Vendor portal with magic links",
      "AI chatbot support",
      "Real-time dashboards",
      "Gantt charts with critical path",
      "Vendor insurance expiry alerts",
      "Email notifications for everything",
      "In-app messaging with file attachments",
      "Excel import from any platform",
      "Customer portal for build progress",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$120",
    period: "/month",
    desc: "For builders who want hands-on support.",
    badge: "Most Popular",
    features: [
      "Everything in Starter, plus:",
      "Priority email support",
      "Onboarding assistance",
      "Dedicated setup & training",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$250",
    period: "/month",
    desc: "For multi-company operations.",
    features: [
      "Everything in Pro, plus:",
      "Custom branding & white-label",
      "Custom API access",
      "Dedicated account manager",
      "Custom integrations",
      "Priority support",
      "Multi-company management",
      "Volume discounts available",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div
                className="relative flex flex-col p-8 rounded-2xl border border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-emerald-500/5 glow h-full"
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-500 to-emerald-500">
                    {tier.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-sm text-slate-400">{tier.desc}</p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-slate-400">{tier.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                      <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.name === "Enterprise" ? "#cta" : "https://app.cornerstonepm.ai/register"}
                  className="block text-center py-3 rounded-xl font-semibold transition-all bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:from-cyan-400 hover:to-emerald-400 shadow-lg shadow-cyan-500/25"
                >
                  {tier.cta}
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="text-center mt-12">
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
