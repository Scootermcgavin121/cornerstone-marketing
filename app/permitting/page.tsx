import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PillarLayout from "../components/PillarLayout";
import FAQSection from "../components/FAQSection";

export const metadata = {
  title: "Permitting Software for Home Builders — Cornerstone PM",
  description:
    "Permit tracking software that ties permit milestones to construction schedule. Auto-pause downstream tasks on failure; auto-resume on approval. Built for residential home builders.",
  alternates: { canonical: "https://cornerstonepm.ai/permitting" },
  openGraph: {
    title: "Permitting Software for Home Builders — Cornerstone PM",
    description:
      "Permit tracking that gates the construction schedule and re-sequences when permits fail.",
    url: "https://cornerstonepm.ai/permitting",
    siteName: "Cornerstone Builder Software",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is permitting software for home builders?",
    a: "Permitting software is the tool a builder uses to track every permit across every active home — submission, status, deadlines, approvals, failures, re-submissions. The strongest tools tie permit milestones directly to the construction schedule so downstream tasks pause automatically when a permit fails and resume when it clears.",
  },
  {
    q: "Why not just track permits in a spreadsheet?",
    a: "Permits gate construction. If your foundation permit is two weeks late and the schedule still says foundation pours Tuesday, the framing crew shows up to a job they can't start. Spreadsheets don't gate the schedule. Cornerstone's permitting module does — when a permit isn't cleared, the schedule respects it automatically.",
  },
  {
    q: "How does the permitting module connect to scheduling?",
    a: "Permit milestones are gates on the construction schedule. Foundation permit must clear before foundation tasks can run. Framing inspection must clear before drywall. When a permit fails, every downstream task pauses and Foreman proposes a re-sequence. See /ai-scheduling for the full mechanism.",
  },
  {
    q: "Does it integrate with municipality systems?",
    a: "Permitting workflows differ wildly by municipality. Cornerstone's module focuses on tracking the permit lifecycle inside your operation (submitted, in review, approved, failed, re-submitted) and tying that to your schedule. Direct municipality API integration is on the roadmap; for now, status updates are entered by the permitting coordinator.",
  },
  {
    q: "What does the permitting assistant do?",
    a: "The permitting assistant tracks permit deadlines, drafts follow-up emails to municipalities when status hasn't changed in N days, surfaces permits trending toward failure based on historical patterns, and re-sequences the schedule when a permit fails — all with builder approval before anything goes out.",
  },
  {
    q: "Can vendors see permit status?",
    a: "Vendors see permit status as it affects their assigned tasks. If a permit failure pauses their install date, they get a notification with the new date once the schedule re-sequences. No separate permit portal for vendors — they see the consequences via the schedule, which is what they care about.",
  },
  {
    q: "Is there an audit trail?",
    a: "Yes. Every permit status change, every re-submission, every schedule re-sequence triggered by a permit, every notification sent — full audit trail by home and by community.",
  },
  {
    q: "Is permitting included in pricing?",
    a: "Yes. Permitting is a core module, included on every Cornerstone PM plan starting at $149/month.",
  },
];

const related = [
  { label: "Construction Scheduling Software", href: "/construction-scheduling-software", desc: "Where permit gates live" },
  { label: "AI Construction Scheduling", href: "/ai-scheduling", desc: "Re-sequence on permit failure" },
  { label: "Home Builder Project Management", href: "/home-builder-project-management", desc: "Pillar guide" },
  { label: "Home Builder Software", href: "/home-builder-software", desc: "All modules overview" },
  { label: "Construction Module", href: "/features/construction", desc: "Schedule features deep dive" },
  { label: "AI Agents for Home Builders", href: "/ai-agents", desc: "Foreman + permitting assistant" },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <PillarLayout
          eyebrow="Permitting"
          h1="Permitting that gates the schedule — automatically"
          intro="Track every permit across every home. Permit milestones are gates on the construction schedule. When a permit fails, downstream tasks pause and the schedule re-sequences. When it clears, work resumes — without a coordinator manually re-typing a thing."
          related={related}
        >
          <h2>The permitting problem most builders run into</h2>
          <p>
            Permits gate construction, but most builders track permits separately from the schedule.
            The permitting coordinator has a spreadsheet. The PM has a schedule. The two are updated
            on different cadences, and when a permit fails — or just sits in review longer than
            expected — the schedule keeps moving as if everything&apos;s fine. The framing crew shows
            up Tuesday. The foundation pour didn&apos;t happen because the foundation permit failed
            inspection on Friday. Nobody told the framers.
          </p>
          <p>
            <strong>Permitting software</strong> for home builders has to do two things: track every
            permit across every home, and gate the construction schedule on those permits so the
            schedule and reality stay in sync.
          </p>

          <h2>Permit lifecycle tracking</h2>
          <p>
            Cornerstone&apos;s permitting module tracks the full permit lifecycle:
          </p>
          <ul>
            <li><strong>Submitted</strong> — date, municipality, permit type, fees paid</li>
            <li><strong>In review</strong> — days in review, expected approval window</li>
            <li><strong>Approved</strong> — approval date, conditions, expiration</li>
            <li><strong>Failed</strong> — failure reason, required revisions, re-submission target</li>
            <li><strong>Re-submitted</strong> — re-submission date, revision summary</li>
            <li><strong>Re-approved</strong> — closes the loop, unlocks downstream tasks</li>
          </ul>

          <h2>Permit gates on the schedule</h2>
          <p>
            Permits are gates on the <a href="/construction-scheduling-software">construction
            schedule</a>. Foundation permit must clear before foundation tasks can run. Framing
            inspection must clear before drywall. When a permit clears, the gate opens and downstream
            work proceeds. When a permit fails, downstream tasks pause and the schedule waits.
          </p>

          <h2>Foreman re-sequences on failure</h2>
          <p>
            When a permit fails, <a href="/ai-scheduling">Foreman</a> proposes a re-sequence: which
            downstream tasks pause, which can run in parallel during the delay, which vendors need
            new dates, which buyers need updates. PM approves before anything goes out. AI proposes,
            humans dispose.
          </p>

          <h2>The permitting assistant</h2>
          <p>
            The <a href="/ai-agents">permitting assistant</a> handles the busywork:
          </p>
          <ul>
            <li>Tracks permit deadlines and surfaces permits at risk of expiring before use</li>
            <li>Drafts follow-up emails to municipalities when status hasn&apos;t changed in N days</li>
            <li>Surfaces permits trending toward failure based on historical patterns (e.g., permits with similar revision histories)</li>
            <li>Re-sequences the schedule on failure — with builder approval</li>
          </ul>

          <h2>Connected across the platform</h2>
          <p>
            Permitting isn&apos;t an island. It&apos;s connected to:
          </p>
          <ul>
            <li><strong><a href="/construction-scheduling-software">Construction schedule</a></strong> — permit gates pause and resume tasks automatically.</li>
            <li><strong><a href="/features/purchasing">Vendor bidding</a></strong> — vendors get new install dates when permits re-sequence.</li>
            <li><strong>Buyer portal</strong> — buyers see schedule updates without a phone call, even when permits push milestones.</li>
            <li><strong><a href="/ai-agents">AI agents</a></strong> — Foreman and the permitting assistant handle the mechanical work.</li>
          </ul>

          <h2>Audit trail</h2>
          <p>
            Every permit status change, every re-submission, every schedule re-sequence triggered by
            a permit, every notification sent — full audit trail by home and by community. Useful for
            municipality conversations, useful for buyer disputes, useful for your own
            post-mortem on why a particular community ran behind.
          </p>

          <h2>Pricing</h2>
          <p>
            Permitting is a core module, included on every Cornerstone PM plan starting at
            <strong> $149/month</strong>. <a href="/#pricing">See full pricing</a>.
          </p>

          <h2>Get started</h2>
          <p>
            <a href="/beta">Request beta access</a> and we&apos;ll get you into a working environment
            with sample permits gated to a sample schedule. For platform context, see
            <a href="/home-builder-software"> home builder software</a> or
            <a href="/home-builder-project-management"> home builder project management</a>.
          </p>
        </PillarLayout>
        <FAQSection
          items={faqs}
          subheading="Common questions about permitting software for home builders."
        />
      </main>
      <Footer />
    </>
  );
}
