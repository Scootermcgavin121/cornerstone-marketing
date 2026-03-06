"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";

export default function PoweredBy() {
  return (
    <section className="relative py-1">
      <div className="max-w-4xl mx-auto px-4">
        <AnimateOnScroll className="text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-slate-500 mb-1">
            Powered by industry-leading technology
          </p>
          <Image
            src="/assets/integration-logos.png"
            alt="Excel and ChatGPT integration"
            width={280}
            height={75}
            className="object-contain opacity-90 hover:opacity-100 transition-opacity mx-auto"
          />
          <p className="text-slate-400 text-[11px] max-w-xl mx-auto mt-1">
            Import from Excel. AI-powered support from ChatGPT — built right in.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
