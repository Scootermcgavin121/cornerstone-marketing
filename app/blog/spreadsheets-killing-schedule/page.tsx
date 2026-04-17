import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Why Spreadsheets Are Killing Your Construction Schedule — Cornerstone Blog",
  description:
    "Manual scheduling in Excel feels like control — until one vendor moves a date and your entire schedule falls apart. Here's what cascading failures actually cost production home builders.",
};

export default function ArticleSpreadsheets() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <article className="relative py-32 sm:py-40">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <a href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-10">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </a>

            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold">Scheduling</span>
                <span className="text-slate-500 text-sm">April 10, 2026</span>
                <span className="text-slate-600 text-sm">·</span>
                <span className="text-slate-500 text-sm">6 min read</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                Why Spreadsheets Are Killing Your Construction Schedule
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Manual scheduling in Excel feels like control — until one vendor moves a date and your entire schedule falls apart.
              </p>
            </div>

            {/* Body */}
            <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-white">The False Comfort of the Spreadsheet</h2>

              <p>
                Most production home builders started in spreadsheets. A tab for each home. Color-coded phases. Vendor names in column B, dates in column C. It feels organized — you built it, you understand it, you own it.
              </p>

              <p>
                But the moment your framing crew calls to say they&apos;re running two weeks behind, that spreadsheet becomes a liability. You&apos;re not just moving one cell. You&apos;re manually updating twenty downstream tasks across four trade partners — hoping you don&apos;t miss one.
              </p>

              <p>
                You always miss one.
              </p>

              <h2 className="text-2xl font-bold text-white">The Cascade Problem</h2>

              <p>
                Construction scheduling is a dependency chain. Framing can&apos;t start until foundation passes inspection. MEP rough-in can&apos;t start until framing is closed in. Drywall can&apos;t start until MEP is inspected. Each task unlocks the next.
              </p>

              <p>
                In a spreadsheet, those dependencies are invisible. There&apos;s no logic layer — just cells and your memory. When framing moves back 12 days, nothing automatically shifts. You have to cascade it manually: update rough-in, update insulation, update drywall, update trim, update close-out. For one home. Multiply that by 15 active builds.
              </p>

              <p>
                Builders using spreadsheets spend an average of 4–6 hours per week just updating schedules after changes. That&apos;s time that doesn&apos;t go toward the next sale, the next walkthrough, or the next community.
              </p>

              <h2 className="text-2xl font-bold text-white">Missed Notifications, Wasted Trips</h2>

              <p>
                Here&apos;s the scenario every builder knows: your electrician shows up on Monday because his schedule shows rough-in starting that week. But framing wrapped late and failed inspection — you updated your spreadsheet but forgot to call the electrician. Now he&apos;s on your job site with nothing to do, billing you a show-up fee, and you&apos;ve burned the relationship.
              </p>

              <p>
                Or worse: he doesn&apos;t show up when framing is actually done because no one told him the revised date. Your home sits idle for four days waiting for rough-in. That&apos;s a $2,000–$4,000 carrying cost depending on your loan rate — for a phone call that didn&apos;t happen.
              </p>

              <p>
                Spreadsheets don&apos;t send notifications. They don&apos;t know when dates change. They don&apos;t cascade automatically. They&apos;re static documents in a dynamic industry.
              </p>

              <h2 className="text-2xl font-bold text-white">The Vendor Communication Gap</h2>

              <p>
                Subcontractors work for multiple builders. They&apos;re managing their own schedules across three or four job sites simultaneously. If your communication process is a weekly text blast or a call from the PM, you&apos;re competing with every other builder in your market for their attention.
              </p>

              <p>
                The best vendors — the ones who show up on time, do quality work, and don&apos;t disappear — have their pick of builders to work with. They gravitate toward the ones who make scheduling easy. Clear notifications, confirmed dates, no surprises.
              </p>

              <p>
                A spreadsheet makes you the builder who calls at 7am to confirm. A modern scheduling tool makes you the builder who sends an automatic confirmation email three days in advance — and the vendor just clicks to confirm. No phone tag. No missed messages.
              </p>

              <h2 className="text-2xl font-bold text-white">What the Real Cost Looks Like</h2>

              <p>
                Take a builder running 20 homes a year with an average close price of $450,000. Carrying costs run roughly $1,200 to $1,800 per month per home depending on financing. If poor scheduling adds even 2 weeks of average delay per home across the portfolio, that&apos;s $600–$900 per home, or $12,000–$18,000 per year in extra carrying costs.
              </p>

              <p>
                Add in the PM hours lost to manual schedule updates ($75–$100/hr), the vendor no-shows and reschedules, and the sales delays caused by late completions — and the real cost of a spreadsheet-based operation can easily exceed $30,000 per year for a 20-home builder.
              </p>

              <p>
                That&apos;s before you account for the stress, the missed vacations, and the fact that your competitors who have automated this are closing homes faster and reinvesting that time into growth.
              </p>

              <h2 className="text-2xl font-bold text-white">What Good Scheduling Actually Looks Like</h2>

              <p>
                The alternative isn&apos;t complicated — it&apos;s a scheduling system that understands task dependencies, auto-shifts downstream dates when something changes, and sends notifications to your vendors automatically.
              </p>

              <p>
                When your framing crew finishes early, the system should automatically update MEP rough-in and send your electrician a heads-up that the date moved forward. When a task slips, it should cascade the delay and notify affected vendors — without you touching anything.
              </p>

              <p>
                That&apos;s what Cornerstone does. Task dependencies are built in at the template level. When one task moves, the entire downstream schedule adjusts automatically. Vendors get branded email notifications with a one-click confirm link — no login required. And your PM&apos;s 4 hours of weekly schedule updates becomes 20 minutes.
              </p>

              <div className="my-10 p-6 rounded-2xl bg-slate-900/60 border border-cyan-500/20">
                <p className="text-lg font-semibold text-white mb-2">Ready to stop fighting your schedule?</p>
                <p className="text-slate-400 mb-4">
                  Cornerstone is currently in beta. Early adopters get 5 years of free access — because we want builders who are serious about fixing this problem alongside us.
                </p>
                <a
                  href="/beta"
                  className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:opacity-90 transition-opacity"
                >
                  Request Beta Access →
                </a>
              </div>

              <p className="text-slate-500 text-sm italic">
                Cornerstone PM is built by Scott Alan Homes — a residential production builder who got tired of spreadsheets and built the scheduling tool we wished existed.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
