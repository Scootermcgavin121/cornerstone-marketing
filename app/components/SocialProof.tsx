"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const stats = [
  { value: "500+", label: "Tasks Scheduled" },
  { value: "50+", label: "Active Builders" },
  { value: "98%", label: "On-time Delivery" },
  { value: "4.9★", label: "User Rating" },
];

export default function SocialProof() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-4">
            Trusted by Builders
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Builders across Delaware{" "}
            <span className="gradient-text">trust Cornerstone</span>
          </h2>
        </AnimateOnScroll>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((s, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-2">
                {s.value}
              </div>
              <div className="text-sm text-slate-400">{s.label}</div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Testimonial placeholder */}
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto">
            <div className="relative p-8 sm:p-12 rounded-2xl bg-slate-900/50 border border-slate-800/50 text-center">
              <svg className="w-10 h-10 text-cyan-500/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg sm:text-xl text-slate-300 italic leading-relaxed mb-6">
                &quot;Cornerstone replaced our entire scheduling workflow. Our vendors love the portal — they just click a link and confirm. No more phone calls.&quot;
              </p>
              <div>
                <p className="font-semibold text-white">Coming Soon</p>
                <p className="text-sm text-slate-500">Real testimonials from our beta users</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
