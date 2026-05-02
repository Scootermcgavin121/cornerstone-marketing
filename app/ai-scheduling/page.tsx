import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PillarLayout from "../components/PillarLayout";
import FAQSection from "../components/FAQSection";

export const metadata = {
  title: "AI Construction Scheduling for Home Builders — Cornerstone PM",
  description:
    "AI construction scheduling that drafts schedules from plans, flags over-allocated vendors, and surfaces highest-risk slips. Built into Cornerstone PM.",
  alternates: { canonical: "https://cornerstonepm.ai/ai-scheduling" },
  openGraph: {
    title: "AI Construction Scheduling for Home Builders — Cornerstone PM",
    description:
      "Foreman drafts schedules, flags over-allocated vendors, and surfaces the slips that matter — every week.",
    url: "https://cornerstonepm.ai/ai-scheduling",
    siteName: "Cornerstone Builder Software",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is AI construction scheduling?",
    a: "AI construction scheduling is using an AI agent to handle the mechanical parts of building and maintaining a home builder schedule — drafting initial schedules from a plan and lot, flagging vendors over-allocated across multiple homes, surfacing the slips most likely to cascade, and re-sequencing when a permit fails. The PM still makes the calls; AI absorbs the busywork.",
  },
  {
    q: "How does Foreman draft a schedule?",
    a: "Foreman starts from the plan, lot, and community template, then sequences phases (foundation → framing → rough-in → finish → closeout) using your historical durations for that floorplan. It assigns the awarded vendors per scope, applies dependencies, and accounts for permit gates. The PM reviews and adjusts before publishing — Foreman proposes, the PM disposes.",
  },
  {
    q: "What does 'over-allocated vendors' mean?",
    a: "If your drywall sub is scheduled to be on three different homes during the same two-day window, that's over-allocation. Foreman scans the schedule across all active homes and flags conflicts before they hit the field. You see it in advance instead of finding out when the sub no-shows.",
  },
  {
    q: "How does cascade risk work?",
    a: "When a task slips, every downstream task shifts. Foreman ranks slips by how much downstream impact they cause — a one-day slip on a critical-path task that gates eight downstream tasks matters more than a five-day slip on a non-gating finish item. The weekly digest surfaces the top slips, not all slips.",
  },
  {
    q: "Does it auto-update vendors?",
    a: "Yes — but with builder approval. When a task moves, Foreman drafts the vendor notification with new dates. The PM approves before sends go out. You don't get an AI accidentally pinging fifty subs at midnight.",
  },
  {
    q: "What if I don't trust the AI's scheduling decisions?",
    a: "Foreman never executes without builder approval. Every action — drafting a schedule, sending a notification, re-sequencing a phase — is proposed first. You can also disable individual skills if you don't want them surfacing. Cornerstone PM works fully without any AI features enabled.",
  },
  {
    q: "Does it work across multiple communities?",
    a: "Yes. Cornerstone is built around the multi-home, multi-community reality of production and semi-custom builders. Foreman's vendor over-allocation, cascade risk, and weekly digest all run across your full active pipeline, not one home at a time.",
  },
  {
    q: "Is it included in pricing?",
    a: "Yes. Foreman with all 47 skills (including the scheduling skills) is included on every plan starting at $149/month.",
  },
];

const related = [
  { label: "Construction Scheduling Software", href: "/construction-scheduling-software", desc: "Scheduling pillar" },
  { label: "AI Agents for Home Builders", href: "/ai-agents", desc: "Foreman + Blueprint + assistants" },
  { label: "AI Material Takeoff", href: "/ai-takeoff", desc: "Blueprint AI" },
  { label: "Construction Module", href: "/features/construction", desc: "Scheduling features deep dive" },
  { label: "Home Builder Software", href: "/home-builder-software", desc: "All modules overview" },
  { label: "Spreadsheets Are Killing Your Schedule", href: "/blog/spreadsheets-killing-schedule", desc: "Blog post" },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <PillarLayout
          eyebrow="AI for builders"
          h1="AI construction scheduling that surfaces the slips that actually matter"
          intro="Foreman drafts schedules from plans, flags vendors over-allocated across homes, surfaces the highest-risk slips, and re-sequences when permits fail — all with builder approval before anything executes."
          related={related}
        >
          <h2>The scheduling problem AI is good for</h2>
          <p>
            Most schedule slip isn&apos;t caused by bad planning. It&apos;s caused by the schedule
            falling out of sync with the field — a permit fails on Tuesday and nobody re-sequences
            until Thursday, a vendor is double-booked across two communities and nobody notices until
            the no-show, a critical-path task slips a day and the cascade isn&apos;t flagged until
            the framers can&apos;t start.
          </p>
          <p>
            <strong>AI construction scheduling</strong> is not about replacing the PM&apos;s judgment.
            It&apos;s about making sure the PM sees the right slip, with the right context, in time
            to do something about it.
          </p>

          <h2>Foreman&apos;s scheduling skills</h2>

          <h3>Draft a schedule from a plan and lot</h3>
          <p>
            Given the plan, the lot, and your community template, Foreman drafts a full sequenced
            schedule using your historical durations for that floorplan. Phases (foundation, framing,
            rough-in, finish, closeout), dependencies, awarded vendors per scope, and permit gates
            are all populated. The PM reviews and adjusts before publishing.
          </p>

          <h3>Flag over-allocated vendors</h3>
          <p>
            Your drywall sub scheduled across three homes in the same two-day window? Foreman flags
            it in advance. You see the conflict on the dashboard, not at the no-show.
          </p>

          <h3>Surface highest-risk slips</h3>
          <p>
            Foreman ranks slips by downstream impact. A one-day slip on a critical-path task that
            gates eight downstream tasks ranks higher than a five-day slip on a non-gating finish
            item. The weekly digest surfaces the top slips, not all slips.
          </p>

          <h3>Re-sequence on permit failure</h3>
          <p>
            When a permit fails, Foreman proposes a re-sequence: which downstream tasks pause, which
            can run in parallel during the delay, which vendors need notification. PM approves before
            anything goes out.
          </p>

          <h3>Vendor notification drafting</h3>
          <p>
            When tasks shift, Foreman drafts the vendor notifications with new dates. PM approves the
            batch before sends. No accidental midnight pings to fifty subs.
          </p>

          <h3>Weekly slip digest</h3>
          <p>
            Every Monday, every PM gets a digest: top 10 slips by impact, vendors at risk of
            over-allocation, permits trending toward failure, design selections approaching install
            deadlines. Five-minute read.
          </p>

          <h2>How AI scheduling fits with the rest of Cornerstone</h2>
          <p>
            Foreman&apos;s scheduling skills are tightly connected to the rest of the platform:
          </p>
          <ul>
            <li><strong><a href="/features/purchasing">Vendor bidding</a></strong> — awarded vendors auto-populate the schedule.</li>
            <li><strong><a href="/permitting">Permitting</a></strong> — permit gates pause downstream tasks; permit failures trigger re-sequence proposals.</li>
            <li><strong><a href="/design">Design center</a></strong> — selection deadlines tie to install dates; missed deadlines surface as scheduling risk.</li>
            <li><strong><a href="/features/sales">Sales</a></strong> — sale → auto-budget → schedule kickoff in seconds.</li>
            <li><strong><a href="/ai-takeoff">Blueprint AI</a></strong> — takeoff drives scope items, which drive vendor bids, which drive the schedule.</li>
          </ul>

          <h2>Builder approval, always</h2>
          <p>
            Foreman never executes without builder approval. Every action — drafting a schedule,
            re-sequencing on permit failure, sending vendor notifications — is proposed and the PM
            approves. AI proposes, humans dispose. Cornerstone PM also works fully without any AI
            features enabled if you prefer.
          </p>

          <h2>Pricing</h2>
          <p>
            All 47 Foreman skills (including the scheduling skills) are included on every Cornerstone
            PM plan starting at <strong>$149/month</strong>. <a href="/#pricing">See full pricing</a>.
          </p>

          <h2>Get started</h2>
          <p>
            <a href="/beta">Request beta access</a> and we&apos;ll get you into a working environment
            with Foreman enabled. Start from the <a href="/construction-scheduling-software">scheduling
            pillar</a> or the <a href="/ai-agents">AI agents pillar</a> for full context.
          </p>
        </PillarLayout>
        <FAQSection
          items={faqs}
          subheading="Common questions about AI construction scheduling."
        />
      </main>
      <Footer />
    </>
  );
}
