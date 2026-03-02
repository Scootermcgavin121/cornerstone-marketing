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
            Now in Beta — Join 50+ builders already on board
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
        >
          Construction Scheduling,
          <br />
          <span className="gradient-text">Simplified.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-4"
        >
          Built by builders, for builders.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl font-bold gradient-text mb-10"
        >
          Starting at $60/month
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://app.cornerstonepm.ai/register"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-slate-950 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 transition-all shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            Start Free Trial
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-all hover:-translate-y-0.5"
          >
            <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo
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
