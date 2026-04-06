"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    title: "Smart Scheduling",
    desc: "Interactive Gantt charts with drag-and-drop task management. 3-tier dependency system — template dependencies, master task dependencies, and cross-template dependencies. Lag days, critical path highlighting, and auto-cascade when tasks complete.",
    badge: "Core Engine",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
    title: "Template System",
    desc: "Reusable schedule templates for every home type — 1-story, 2-story, block, frame, and 7 foundation types. Clone any template and customize per community. 270+ build combinations out of the box.",
    badge: "17 Pre-Built",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Vendor Management",
    desc: "Unlimited vendor profiles with community-vendor assignments. Vendor portal with magic links — no passwords needed. One-click batch confirmation lets subs confirm all tasks from a single email.",
    badge: "Zero Friction",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Smart Cascade Notifications",
    desc: "4-tier email system: Schedule Confirmation, Advance Notice, Date Moved Up, and Date Postponed. Intelligent threshold algorithm factors how far out × how much shifted. Vendor-specific lead time overrides.",
    badge: "4 Tiers",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Daily & Weekly Digests",
    desc: "Automated vendor summaries delivered on your schedule. Configurable send time and timezone per account. Every sub knows exactly what's coming up — without you lifting a finger.",
    badge: "Automated",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Customer Portal",
    desc: "Milestone carousel showing 20 construction phases with real job site photos. Photo gallery, direct messaging with PMs, and one-click ZIP download of all build photos. Your buyers stay informed and excited.",
    badge: "Homeowner Facing",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Permit Gate System",
    desc: "Phase-based locking prevents downstream construction tasks from starting until permits are cleared. Toggle on or off per account — your workflow, your rules.",
    badge: "Compliance",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Closing Workflow",
    desc: "6-step closing process: Certificate of Occupancy → Orientation → Punch List → Sign-Off → Closing Docs → Home Closed. Every step tracked, nothing falls through the cracks.",
    badge: "6 Steps",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Multi-Role Access",
    desc: "12 distinct roles: Admin, Project Manager, Sales, Design Center, Purchasing, Customer, Subcontractor, Permitting, and more. Everyone sees exactly what they need — nothing more, nothing less.",
    badge: "12 Roles",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile Responsive",
    desc: "Full functionality on any device. Check schedules from the job site, confirm tasks from your truck, review progress from anywhere. No app download required.",
    badge: "Any Device",
  },
];

export default function ConstructionFeatures() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <AnimateOnScroll className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Construction Scheduling
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Build homes,{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              not spreadsheets
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Smart scheduling that auto-cascades dependencies, notifies vendors instantly, and keeps every
            stakeholder in the loop — from permits to punch list.
          </p>
        </AnimateOnScroll>

        {/* Pricing callout */}
        <AnimateOnScroll className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900/80 border border-slate-800/50">
            <span className="text-3xl font-extrabold text-white">$59.99</span>
            <span className="text-slate-400">/month</span>
            <span className="text-slate-600">·</span>
            <span className="text-sm text-slate-400">Unlimited homes &amp; users</span>
          </div>
        </AnimateOnScroll>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div className="group relative h-full p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-amber-500/30 transition-all duration-300 hover:bg-slate-900/80">
                {/* Badge */}
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-amber-500/60">
                  {f.badge}
                </span>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-amber-500/10 text-amber-400 mb-5 group-hover:bg-amber-500/20 transition-colors">
                  {f.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Workflow visual */}
        <AnimateOnScroll className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              From dirt to{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                closing day
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              One connected workflow. Every phase, every stakeholder, every notification — handled.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { step: "1", label: "Templates", sub: "Build your playbook" },
              { step: "2", label: "Schedule", sub: "Auto-cascade dates" },
              { step: "3", label: "Notify", sub: "Vendors get alerted" },
              { step: "4", label: "Track", sub: "Real-time progress" },
              { step: "5", label: "Close", sub: "6-step workflow" },
              { step: "6", label: "Deliver", sub: "Happy homeowner" },
            ].map((s, i) => (
              <div
                key={i}
                className="relative p-4 rounded-xl bg-slate-900/80 border border-slate-800/50 text-center group hover:border-amber-500/30 transition-all"
              >
                <div className="text-2xl font-extrabold text-amber-500/40 mb-1">{s.step}</div>
                <div className="text-sm font-bold text-white">{s.label}</div>
                <div className="text-xs text-slate-500 mt-1">{s.sub}</div>
                {i < 5 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-slate-700">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Bottom CTA */}
        <AnimateOnScroll className="text-center mt-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              streamline your builds?
            </span>
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Join our beta and get 5 years free. All construction scheduling features included — no feature gates, no per-home pricing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#cta"
              className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:from-amber-400 hover:to-orange-400 transition-all"
            >
              Get Free Beta Access
            </a>
            <a
              href="/features/purchasing"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-2xl border border-slate-700 text-slate-300 hover:border-cyan-500/50 hover:text-white transition-all"
            >
              See Purchasing Features →
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
