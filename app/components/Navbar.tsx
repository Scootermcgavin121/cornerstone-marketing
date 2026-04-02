"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Compare", href: "#compare" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#cta" },
];

const featureLinks = [
  {
    label: "All Features",
    href: "/features",
    desc: "Everything included in every plan",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    label: "Construction Scheduling",
    href: "/features/construction",
    desc: "Gantt charts, vendors, notifications",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "amber",
  },
  {
    label: "Purchasing & Design",
    href: "/features/purchasing",
    desc: "Budgets, POs, design center",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    color: "cyan",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setFeaturesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(30,41,59,0.5),0_10px_15px_-3px_rgba(0,0,0,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img src="/logo-new.png" alt="Cornerstone PM" className="h-10 sm:h-16 w-auto object-contain" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {/* Features dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
              >
                Features
                <svg
                  className={`w-4 h-4 transition-transform ${featuresOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {featuresOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-xl bg-slate-900 border border-slate-800/80 shadow-2xl overflow-hidden"
                  >
                    <div className="p-2">
                      {featureLinks.map((fl) => (
                        <a
                          key={fl.href}
                          href={fl.href}
                          onClick={() => setFeaturesOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-800/60 transition-colors group"
                        >
                          <div
                            className={`mt-0.5 ${
                              fl.color === "amber"
                                ? "text-amber-400"
                                : fl.color === "cyan"
                                ? "text-cyan-400"
                                : "text-slate-400"
                            } group-hover:text-white transition-colors`}
                          >
                            {fl.icon}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{fl.label}</div>
                            <div className="text-xs text-slate-500">{fl.desc}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <span
              className="hidden sm:inline-flex text-sm text-slate-500 cursor-default"
            >
              Sign In
            </span>
            <span
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-500 to-emerald-500 cursor-default"
            >
              Coming Soon!
            </span>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50"
          >
            <div className="px-4 py-4 space-y-1">
              {/* Features accordion */}
              <button
                onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                className="flex items-center justify-between w-full text-slate-300 hover:text-white py-2"
              >
                <span>Features</span>
                <svg
                  className={`w-4 h-4 transition-transform ${mobileFeaturesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {mobileFeaturesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 space-y-1 overflow-hidden"
                  >
                    {featureLinks.map((fl) => (
                      <a
                        key={fl.href}
                        href={fl.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 text-slate-400 hover:text-white py-2 text-sm"
                      >
                        <span
                          className={
                            fl.color === "amber"
                              ? "text-amber-400"
                              : fl.color === "cyan"
                              ? "text-cyan-400"
                              : "text-slate-500"
                          }
                        >
                          {fl.icon}
                        </span>
                        {fl.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-slate-300 hover:text-white py-2"
                >
                  {l.label}
                </a>
              ))}
              <span
                className="block text-slate-500 py-2 cursor-default"
              >
                Sign In (Coming Soon)
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
