"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const pains = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Missed Deadlines, Zero Visibility",
    desc: "Schedules buried in spreadsheets. No one knows what's next until it's too late.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: '"When Am I On Site?"',
    desc: "Vendors calling daily. Subs texting you at 6 AM. Everyone asking the same question.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Juggling Emails, Texts & Calls",
    desc: "Important updates lost across 5 different apps. Nothing is in one place.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Paying $500+/mo for Bloated Software",
    desc: "Enterprise tools built for billion-dollar GCs. You're building 10–20 homes a year — you shouldn't need a $500/mo app for that.",
  },
];

export default function PainPoints() {
  return (
    <section id="pain" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Still managing schedules in{" "}
            <span className="gradient-text">spreadsheets?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            You&apos;re not alone. Most builders are drowning in the same problems.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-6">
          {pains.map((p, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="group relative p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-red-500/30 transition-all duration-300 hover:bg-slate-900/80">
                <div className="text-red-400/80 mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
