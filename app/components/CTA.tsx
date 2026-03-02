"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Ready to ditch the{" "}
            <span className="gradient-text">spreadsheets?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Join builders who&apos;ve switched to smarter scheduling. Set up in minutes, not days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="https://app.cornerstonepm.ai/register"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-xl text-lg font-semibold text-slate-950 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 transition-all shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
              Start Your Free Trial
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-slate-500">
            No credit card required · Free 14-day trial · Cancel anytime
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
