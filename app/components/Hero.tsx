"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Geometric accents */}
      <svg className="absolute top-32 right-20 w-64 h-64 text-cyan-500/5 animate-float hidden lg:block" viewBox="0 0 200 200">
        <rect x="20" y="20" width="160" height="160" rx="8" fill="none" stroke="currentColor" strokeWidth="1" />
        <rect x="50" y="50" width="100" height="100" rx="4" fill="none" stroke="currentColor" strokeWidth="1" />
        <rect x="80" y="80" width="40" height="40" rx="2" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-40 left-20 w-48 h-48 text-emerald-500/5 animate-float hidden lg:block" style={{ animationDelay: "3s" }} viewBox="0 0 200 200">
        <polygon points="100,10 190,190 10,190" fill="none" stroke="currentColor" strokeWidth="1" />
        <polygon points="100,50 160,170 40,170" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/50 text-sm text-slate-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Now in Beta — Contact us for free beta access with 5 years free
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
        >
          From Sale to Slab in
          <br />
          <span className="gradient-text">Under 60 Seconds.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-4"
        >
          The all-in-one platform for home builders — sales pipeline, automated budgets, purchasing, scheduling, and construction management.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl font-bold gradient-text mb-10"
        >
          Starting at $79.99/month
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/beta"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-slate-950 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:opacity-90 transition-opacity"
          >
            Request Beta Access
          </a>
          <a
            href="#cta"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-slate-300 border border-slate-700 hover:border-cyan-500/50 hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20"
        >
          <a href="#pain" className="inline-flex flex-col items-center text-slate-500 hover:text-slate-300 transition-colors">
            <span className="text-xs mb-2">Scroll to learn more</span>
            <motion.svg
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
