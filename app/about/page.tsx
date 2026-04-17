import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "About — Cornerstone Builder Software",
  description:
    "We were builders before we were software makers. Cornerstone PM was born out of frustration with expensive enterprise platforms that weren't built for residential home builders.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative py-32 sm:py-40">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Our Story</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 mb-6">
                We were builders first,{" "}
                <span className="gradient-text">software makers second.</span>
              </h1>
            </div>

            <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

              {/* Pain Point Section */}
              <h2 className="text-2xl font-bold text-white mt-2">The Problem With "Enterprise" Software</h2>

              <p>
                If you&apos;re a residential builder, you&apos;ve probably looked at the big platforms.
                BuilderTrend starts at <strong className="text-white">$499/month</strong>. Procore
                and CoConstruct cost even more. And here&apos;s the thing nobody tells you upfront:
                those platforms were built for{" "}
                <strong className="text-white">commercial construction</strong> — not production home builders.
              </p>

              <p>
                They&apos;re loaded with features for managing 500-unit apartment complexes, hospital
                builds, and highway projects. Submittals. RFIs. Change order workflows designed for
                teams of 50. We didn&apos;t need any of that. We needed to schedule subcontractors,
                track a budget, and sell a house at the model home — and we were paying{" "}
                <strong className="text-white">enterprise prices for features we&apos;d never touch.</strong>
              </p>

              <p>
                So we went back to spreadsheets. Which meant chasing down vendors by phone, losing
                track of budget changes, and having our sales team pull up a Google Sheet when a buyer
                asked what countertop upgrades cost. It wasn&apos;t working either.
              </p>

              <div className="my-10 rounded-2xl bg-slate-900/60 border border-slate-800/50 p-8">
                <p className="text-lg font-semibold text-white mb-4">The platforms we tried — and why they didn&apos;t fit:</p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">✕</span>
                    <span><strong className="text-white">BuilderTrend</strong> — $499+/mo. Built for commercial. 90% of features unused by production builders.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">✕</span>
                    <span><strong className="text-white">Procore</strong> — Enterprise pricing, enterprise complexity. Overkill for 10–50 homes/year.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">✕</span>
                    <span><strong className="text-white">CoConstruct</strong> — Closer, but still priced and designed for custom builders with unlimited budgets.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">✕</span>
                    <span><strong className="text-white">Spreadsheets</strong> — Free, but fragile. No vendor portal. No real-time pricing. No audit trail.</span>
                  </li>
                </ul>
              </div>

              <p>
                We didn&apos;t need 90% of what those platforms offered. But we were forced to pay for
                everything — or go without. There was no middle ground built for builders like us.
              </p>

              <p>
                <strong className="text-white">So we built it ourselves.</strong>
              </p>

              {/* Origin Story */}
              <h2 className="text-2xl font-bold text-white mt-10">Built From the Inside Out</h2>

              <p>
                Cornerstone PM is built by{" "}
                <strong className="text-white">Scott Alan Homes</strong> — a residential home builder
                in the thick of it. We started with an internal tool to manage vendor schedules and
                track purchasing. Then we added a sales flow so our team could close a deal at the
                model home in under 60 seconds. Then a design center for buyer selections. Then
                permitting handoffs. Then construction scheduling.
              </p>

              <p>
                Every feature we built, we built because we needed it. Every workflow we designed,
                we designed because we&apos;d lived the pain of not having it. We weren&apos;t
                solving imaginary problems — we were solving{" "}
                <strong className="text-white">our own problems</strong>, and then realizing every
                builder we talked to had the same ones.
              </p>

              <p>
                Today, Cornerstone covers the full lifecycle of a new home — from the moment a buyer
                walks into the model home, through sale, budget, purchasing, design center selections,
                permitting, and construction, all the way to warranty. One platform. One price.
                No hidden add-ons.
              </p>

              <div className="my-12 border-l-4 border-cyan-500/50 pl-6">
                <p className="text-xl italic text-slate-200">
                  &ldquo;We built the tool we wished existed: fast, simple, and designed specifically
                  for production home builders — not the enterprise market.&rdquo;
                </p>
                <p className="mt-4 text-sm text-slate-400">— Scott, Founder, Scott Alan Homes</p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-10">Why Cornerstone?</h2>

              <p>
                The name comes from the most important stone in any structure — the one everything else
                is built on. We wanted a platform that would be that foundation for your business.
                Not another tool to manage. Not another login to remember. The single source of truth
                for your entire operation.
              </p>

              <h2 className="text-2xl font-bold text-white mt-10">Who It&apos;s For</h2>

              <p>
                If you&apos;re building{" "}
                <strong className="text-white">5 to 200 homes a year</strong>, Cornerstone was built
                for you. Production builders who need real scheduling, real purchasing tools, and
                real pricing — without paying enterprise prices for features they&apos;ll never use.
              </p>

              <p>
                We&apos;re currently in beta. Early adopters get{" "}
                <strong className="text-white">5 years free access</strong> — because we want builders
                who are serious about making it better alongside us.
              </p>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-4">
              <a
                href="/beta"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-slate-950 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:opacity-90 transition-opacity"
              >
                Request Beta Access
              </a>
              <a
                href="/#cta"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-slate-300 border border-slate-700 hover:border-cyan-500/50 hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
