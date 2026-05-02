"use client";

import { useState } from "react";

export type FAQItem = { q: string; a: string };

type Props = {
  items: FAQItem[];
  heading?: string;
  subheading?: string;
  /** Optional id used for jump-links */
  id?: string;
};

export default function FAQSection({ items, heading = "Frequently asked questions", subheading, id = "faq" }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section id={id} className="relative py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{heading}</h2>
          {subheading && (
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">{subheading}</p>
          )}
        </div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-slate-800/80 bg-slate-900/40 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex items-center justify-between w-full text-left p-5 hover:bg-slate-900/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white pr-4">{item.q}</span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
