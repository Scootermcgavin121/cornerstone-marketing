"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  desc: string;
  accent: string; // border hover + icon bg/text color token
}

const features: Feature[] = [
  // 🏗️ Construction
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Smart Scheduling",
    desc: "Auto-cascading dependencies, weekday-only scheduling, and holiday-aware timelines that adjust automatically.",
    accent: "amber",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Vendor Portal",
    desc: "Magic links — no accounts needed. Vendors confirm or decline in one click. Dead simple.",
    accent: "amber",
  },
  // 📦 Purchasing
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Bid Management",
    desc: "Send a floorplan to bid to every vendor with one click. Track responses, compare side-by-side, and award — all in one workflow.",
    accent: "cyan",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    title: "Budget & Cost Tracking",
    desc: "3-level budget hierarchy: Scope → Task → Parts. See exactly where every dollar goes with real-time financial rollups per home.",
    accent: "cyan",
  },
  // 🎨 Design Center
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Design Center",
    desc: "Room-by-room selection walkthrough for flooring, cabinets, countertops, and more. Buyers pick finishes, you track the cost.",
    accent: "purple",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI Support",
    desc: "Your AI assistant learns your business. The more you use it, the smarter it gets — with a dedicated memory for every account.",
    accent: "purple",
  },
  // 💰 Sales
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Sales Pricing & PDFs",
    desc: "Retail pricing matrix per floorplan × community. Export branded PDF price sheets and customer selection reports in one click.",
    accent: "emerald",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Promotions & Incentives",
    desc: "Create closing cost credits, discounts, and custom incentives with date ranges. Net-after-promotion pricing flows automatically to your sales team.",
    accent: "emerald",
  },
];

const accentClasses: Record<string, { bg: string; text: string; border: string }> = {
  amber:   { bg: "bg-amber-500/10 group-hover:bg-amber-500/20",     text: "text-amber-400",   border: "hover:border-amber-500/30" },
  cyan:    { bg: "bg-cyan-500/10 group-hover:bg-cyan-500/20",       text: "text-cyan-400",    border: "hover:border-cyan-500/30" },
  purple:  { bg: "bg-purple-500/10 group-hover:bg-purple-500/20",   text: "text-purple-400",  border: "hover:border-purple-500/30" },
  emerald: { bg: "bg-emerald-500/10 group-hover:bg-emerald-500/20", text: "text-emerald-400", border: "hover:border-emerald-500/30" },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Subtle divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Everything you need,{" "}
            <span className="gradient-text">nothing you don&apos;t</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Purpose-built for residential builders. No bloat, no complexity, no enterprise nonsense.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const a = accentClasses[f.accent] || accentClasses.cyan;
            return (
              <AnimateOnScroll key={i} delay={i * 0.05}>
                <div className={`group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 ${a.border} transition-all duration-300 hover:bg-slate-900/80 h-full`}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${a.bg} ${a.text} mb-5 transition-colors`}>
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Feature page links — four pillars */}
        <AnimateOnScroll className="mt-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <a
              href="/features/construction"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                  🏗️ Construction →
                </div>
                <div className="text-xs text-slate-500">
                  Scheduling, Gantt charts, vendors, notifications
                </div>
              </div>
            </a>
            <a
              href="/features/purchasing"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                  📦 Purchasing →
                </div>
                <div className="text-xs text-slate-500">
                  Parts catalog, budgets, change orders, POs
                </div>
              </div>
            </a>
            <a
              href="/features/purchasing"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                  🎨 Design Center →
                </div>
                <div className="text-xs text-slate-500">
                  Selections, spec levels, collections, takeoffs
                </div>
              </div>
            </a>
            <a
              href="/features/sales"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                  💰 Sales →
                </div>
                <div className="text-xs text-slate-500">
                  Pricing matrix, PDFs, promotions, incentives
                </div>
              </div>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
