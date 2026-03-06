"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";

const features = [
  {
    icon: "/assets/icons/scheduling.png",
    title: "Smart Scheduling",
    desc: "Auto-cascading dependencies, weekday-only scheduling, and holiday-aware timelines that adjust automatically.",
  },
  {
    icon: "/assets/icons/vendor.png",
    title: "Vendor Portal",
    desc: "Magic links — no accounts needed. Vendors confirm or decline in one click. Dead simple.",
  },
  {
    icon: "/assets/icons/messaging.png",
    title: "Built-in Messaging",
    desc: "Email notifications with full task context. No more phone tag or missed updates.",
  },
  {
    icon: "/assets/icons/dashboards.png",
    title: "Real-time Dashboards",
    desc: "KPIs, progress bars, overdue alerts — everything at a glance. Know exactly where every project stands.",
  },
  {
    icon: "/assets/icons/phases.png",
    title: "Phase Management",
    desc: "12 construction phases, milestone tracking, and permit gates built right in.",
  },
  {
    icon: "/assets/icons/ai-support.png",
    title: "AI Support",
    desc: "24/7 intelligent chatbot that knows your schedule inside and out. Ask anything, get instant answers.",
  },
  {
    icon: "/assets/icons/mobile.png",
    title: "Mobile Ready",
    desc: "Responsive design that works on any device. Check schedules from the job site.",
  },
  {
    icon: "/assets/icons/documents.png",
    title: "Document Management",
    desc: "Drag & drop file attachments per task. Keep plans, permits, and photos organized.",
  },
];

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
          {features.map((f, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-900/80 h-full">
                <Image src={f.icon} alt={f.title} width={64} height={64} className="mb-4 object-contain" />
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
