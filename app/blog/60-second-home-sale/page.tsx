import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "How to Create a New Home Sale in Under 60 Seconds — Cornerstone Blog",
  description:
    "Walk through Cornerstone's complete sales pipeline — from buyer info and structural options to auto-budget generation and permitting handoff — in one seamless workflow.",
};

export default function Article60SecondSale() {
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
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">Sales Pipeline</span>
                <span className="text-slate-500 text-sm">April 12, 2026</span>
                <span className="text-slate-600 text-sm">·</span>
                <span className="text-slate-500 text-sm">5 min read</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                How to Create a New Home Sale in Under 60 Seconds
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Walk through Cornerstone&apos;s complete sales pipeline — from buyer info and structural options to auto-budget generation and permitting handoff — in one seamless workflow.
              </p>
            </div>

            {/* Body */}
            <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-white">The Problem with Today&apos;s Sales Process</h2>

              <p>
                A buyer walks into your model home on a Saturday afternoon. They love the Brookstone floorplan, they want the finished basement, and they&apos;re asking about price. Your sales agent pulls up a PDF price sheet that was updated three weeks ago, tries to calculate the basement add-on from memory, and says &ldquo;let me follow up on Monday.&rdquo;
              </p>

              <p>
                That buyer goes home. They look at two other builders. By Monday, the moment is gone.
              </p>

              <p>
                The problem isn&apos;t your product — it&apos;s your sales process. Your agent didn&apos;t have real-time pricing at their fingertips. And once the buyer said yes, creating the sale meant filling out a paper contract, handing it to admin, waiting for it to get entered into whatever system you use, and hoping someone remembered to kick off the permitting process.
              </p>

              <p>
                Cornerstone fixes this. Here&apos;s exactly how a new home sale works from first contact to construction handoff.
              </p>

              <h2 className="text-2xl font-bold text-white">Step 1: Select Community, Floorplan &amp; Elevation</h2>

              <p>
                The sale starts with three dropdowns. Your sales agent selects the community (Pinecrest South), the floorplan (Brookstone), and the elevation (Craftsman B). That&apos;s it. Cornerstone already knows the base price, the available structural options, the pricing matrix, and the active promotions for that combination.
              </p>

              <h2 className="text-2xl font-bold text-white">Step 2: Enter Buyer Information</h2>

              <p>
                Name, email, phone, co-buyer info if applicable. This is also where the buyer gets linked to the homeowner portal — they&apos;ll eventually use it to track their build progress and submit warranty requests. One form, thirty seconds.
              </p>

              <h2 className="text-2xl font-bold text-white">Step 3: Pick Structural Options</h2>

              <p>
                This is where the real magic happens. Cornerstone shows all available structural options for the selected floorplan — finished basement, bonus room over garage, 8&apos; interior doors, kitchen expansion, garage extension, irrigation well, and more. Each option shows the cost adder and the retail price delta in real time.
              </p>

              <p>
                Your sales agent checks the boxes the buyer wants. The total updates instantly. No calculators. No looking up spreadsheets. No &ldquo;let me call the office.&rdquo;
              </p>

              <h2 className="text-2xl font-bold text-white">Step 4: Apply Incentives (If Active)</h2>

              <p>
                If you have an active promotion — closing cost credit, price reduction, or custom incentive — it applies automatically for the selected community. The net price updates in real time. Your agent can show the buyer exactly what they&apos;re saving without fumbling with math.
              </p>

              <h2 className="text-2xl font-bold text-white">Step 5: Submit — The Pipeline Auto-Creates</h2>

              <p>
                When the agent hits submit, Cornerstone automatically creates a 9-step sales pipeline checklist for the home:
              </p>

              <ol className="list-decimal list-inside space-y-2 text-slate-300">
                <li>Contract Signed</li>
                <li>Deposit Received</li>
                <li>Financing Confirmed</li>
                <li>Manager Approval</li>
                <li>Lot Reserved</li>
                <li>Structural Options Locked</li>
                <li>Budget Generated</li>
                <li>Purchasing Approval</li>
                <li>Handoff to Permitting</li>
              </ol>

              <p>
                Each step is a gate task — the next one doesn&apos;t unlock until the previous is completed. Your sales manager sees every active sale and its current step on their dashboard. Nothing falls through the cracks.
              </p>

              <h2 className="text-2xl font-bold text-white">Step 6: Auto-Budget Generation</h2>

              <p>
                When Structural Options are locked, Cornerstone automatically generates a full home budget from the floorplan takeoffs. Roughly 97 budget line items — framing lumber quantities, concrete, windows, doors, roofing, MEP, finishes — all calculated from the floorplan data, with the selected structural options layered on top.
              </p>

              <p>
                Your purchasing team doesn&apos;t create this budget manually. It appears. They review it, adjust if needed, and approve. The entire approval workflow lives in the same system.
              </p>

              <h2 className="text-2xl font-bold text-white">Step 7: Permitting Handoff</h2>

              <p>
                Once all sales pipeline tasks are complete, the home automatically appears in the Permitting Agent&apos;s dashboard. They see the buyer name, floorplan, structural options, lot number, and community — everything they need to start the permit application. One click to apply the permitting template and they&apos;re off.
              </p>

              <p>
                No emails. No &ldquo;did you send me that contract?&rdquo; No gaps. The sale flows into permitting flows into construction — automatically, with a complete audit trail.
              </p>

              <h2 className="text-2xl font-bold text-white">Step 8: Construction Schedule Auto-Applied</h2>

              <p>
                When the building permit is received and marked in Cornerstone, the construction template auto-applies. The PM gets a fully built schedule with all task dependencies intact, the right subcontractors assigned, and the first wave of vendor notifications queued. From permit to schedule: 60 seconds.
              </p>

              <div className="my-10 p-6 rounded-2xl bg-slate-900/60 border border-emerald-500/20">
                <p className="text-lg font-semibold text-white mb-2">See it in action</p>
                <p className="text-slate-400 mb-4">
                  Cornerstone&apos;s full sales pipeline — pricing matrix, structural options, auto-budget, and permitting handoff — is included with the Purchasing add-on bundle at $179.98/month total. Beta testers get 5 years free.
                </p>
                <a
                  href="/beta"
                  className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:opacity-90 transition-opacity"
                >
                  Request Beta Access →
                </a>
              </div>

              <p className="text-slate-500 text-sm italic">
                Cornerstone PM is built by Scott Alan Homes — a residential production builder who built the tool we wished existed. The 60-second sale workflow is live in beta.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
