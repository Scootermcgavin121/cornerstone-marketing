import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "About — Cornerstone Builder Software",
  description:
    "Cornerstone PM is built by Scott Alan Homes — a residential home builder who got tired of spreadsheets and expensive software that didn't fit.",
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
                Built by builders,{" "}
                <span className="gradient-text">for builders.</span>
              </h1>
            </div>

            <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
              <p>
                Cornerstone PM is built by{" "}
                <strong className="text-white">Scott Alan Homes</strong> — a residential home builder
                who got tired of spreadsheets and expensive software that didn&apos;t fit.
              </p>

              <p>
                We tried BuilderTrend. We tried CoConstruct. We tried spreadsheets held together with
                formulas and prayer. None of it worked the way a small-to-mid production builder actually
                works. The big platforms are built for enterprise builders running hundreds of homes.
                We&apos;re building{" "}
                <strong className="text-white">10 to 50 homes a year</strong> — and we needed something
                that fit our operation.
              </p>

              <p>
                So we built it.
              </p>

              <p>
                Cornerstone started as an internal tool. A way to manage vendor schedules, track
                purchasing, and give our sales team real-time pricing at the model home. The more we
                built, the more we realized: every builder needs this. And no one was building it for us.
              </p>

              <p>
                Today, Cornerstone covers the full lifecycle of a new home — from the moment a buyer
                walks into the model home, through contract, structural options, permitting, construction,
                and warranty. One platform. One price. No hidden add-ons.
              </p>

              <div className="my-12 border-l-4 border-cyan-500/50 pl-6">
                <p className="text-xl italic text-slate-200">
                  &ldquo;We built the tool we wished existed: fast, simple, and designed specifically
                  for production home builders.&rdquo;
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
