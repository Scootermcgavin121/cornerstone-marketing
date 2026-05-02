import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PillarLayout from "../components/PillarLayout";
import FAQSection from "../components/FAQSection";

export const metadata = {
  title: "Construction Scheduling Software for Home Builders — Cornerstone PM",
  description:
    "Construction scheduling software with Gantt charts, drag-and-drop dependencies, cascade notifications, and vendor schedule visibility. Built for residential home builders.",
  alternates: { canonical: "https://cornerstonepm.ai/construction-scheduling-software" },
  openGraph: {
    title: "Construction Scheduling Software for Home Builders — Cornerstone PM",
    description:
      "Gantt charts, dependencies, and cascade notifications. Schedule that actually stays in sync with the field.",
    url: "https://cornerstonepm.ai/construction-scheduling-software",
    siteName: "Cornerstone Builder Software",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is construction scheduling software?",
    a: "Construction scheduling software is a tool builders use to plan, track, and update the sequence of tasks that turn a lot into a finished home. The best tools are visual (Gantt charts), understand dependencies (rough-in must finish before drywall), and cascade automatically — so when one task slips, every downstream task and every affected vendor gets the new dates without anyone re-typing them.",
  },
  {
    q: "What's wrong with using a spreadsheet?",
    a: "Spreadsheets don't understand dependencies, don't notify vendors, don't update buyers, and break the moment two people try to edit at the same time. Most slipping schedules aren't slipping because of bad planning — they're slipping because the spreadsheet got stale and nobody knew rough-in was three days late until the drywall crew showed up.",
  },
  {
    q: "How does cascade notification work?",
    a: "When a task moves — say, foundation slips three days because of weather — every dependent task automatically shifts, and every vendor scheduled on those downstream tasks gets a notification with the new dates. The builder doesn't manually re-call ten subcontractors. The schedule and the field stay in sync.",
  },
  {
    q: "Can subcontractors see their schedule?",
    a: "Yes. Subcontractors get a token-protected portal showing only their assigned tasks across all the builder's homes. No login, no per-seat fee, no app to install. They see their week, accept or push back on dates, and update status from the field.",
  },
  {
    q: "Does it work on mobile?",
    a: "Yes — the schedule is fully responsive, and the field-facing views (vendor portal, status updates, photo uploads) are designed phone-first. Field managers spend more time on phones than at desks; the tool is built for that.",
  },
  {
    q: "How does it integrate with the rest of the build?",
    a: "Construction scheduling is one module of Cornerstone PM. The schedule connects to vendor bids (so awarded vendors auto-populate the right tasks), purchasing (POs trigger off scheduled tasks), permitting (permit milestones gate construction), design center (selection deadlines tied to install dates), and the buyer portal (buyers see live schedule updates).",
  },
  {
    q: "How does it compare to Microsoft Project or Primavera?",
    a: "MS Project and Primavera are powerful but not built for residential — they assume one giant project, not 100 homes running in parallel across multiple communities with shared vendors. Cornerstone is purpose-built for the way home builders actually run multi-home, multi-community operations.",
  },
  {
    q: "What does it cost?",
    a: "Construction scheduling is included in every Cornerstone PM plan, starting at $149/month for the Starter tier. Unlimited subcontractor logins included on every plan.",
  },
];

const related = [
  { label: "Home Builder Project Management", href: "/home-builder-project-management", desc: "The pillar guide" },
  { label: "AI Construction Scheduling", href: "/ai-scheduling", desc: "How Foreman AI handles scheduling busywork" },
  { label: "Construction Module Features", href: "/features/construction", desc: "Feature-by-feature deep dive" },
  { label: "Compare: BuilderTrend vs Cornerstone", href: "/blog/buildertrend-vs-cornerstone", desc: "Side-by-side comparison" },
  { label: "Spreadsheets Are Killing Your Schedule", href: "/blog/spreadsheets-killing-schedule", desc: "Blog: why spreadsheets break" },
  { label: "All Features", href: "/features", desc: "Every module in Cornerstone PM" },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <PillarLayout
          eyebrow="Pillar guide"
          h1="Construction scheduling software that actually stays in sync with the field"
          intro="Gantt charts, drag-and-drop dependencies, cascade notifications, and a vendor portal that subs will actually use — built for residential home builders."
          related={related}
        >
          <h2>Why home builder schedules slip</h2>
          <p>
            Most slipping schedules aren&apos;t slipping because of bad planning. They&apos;re slipping
            because the schedule and the field are out of sync. The spreadsheet on the laptop says
            drywall starts Tuesday. The rough-in inspector failed yesterday and rough-in needs another
            two days. Nobody updates the spreadsheet, nobody calls the drywall sub, and the crew shows
            up Tuesday to a job they can&apos;t start.
          </p>
          <p>
            <strong>Construction scheduling software</strong> solves that by making the schedule live:
            dependencies cascade automatically when a task slips, every affected vendor gets a
            notification with new dates, the buyer portal updates the customer without a phone call,
            and the field manager sees the new week without re-typing anything.
          </p>

          <h2>What Cornerstone&apos;s construction scheduling includes</h2>

          <h3>Gantt charts with drag-and-drop dependencies</h3>
          <p>
            Visual Gantt across every active home. Drag a task to move it; dependencies follow.
            Multi-home views show your full pipeline; single-home views show one job in detail.
            Color-coded by phase (foundation, framing, rough-in, finish, closeout).
          </p>

          <h3>Cascade notifications</h3>
          <p>
            When a task slips, every downstream task shifts and every affected vendor gets a notification
            with the new dates. No re-typing. No phone-tag. The schedule and the field stay in sync.
          </p>

          <h3>Vendor schedule portal</h3>
          <p>
            Subcontractors get a token-protected URL showing only their assigned tasks across all your
            homes. No login, no app to install, no per-seat fee. They see their week, push back on dates
            if they need to, and update status from the field. See more in our
            <a href="/features/purchasing"> purchasing & vendor module</a>.
          </p>

          <h3>Buyer portal updates</h3>
          <p>
            Buyers see a clean, milestone-level view of their home&apos;s schedule. They don&apos;t see
            internal dependencies or vendor names — just the milestones they care about. When the
            schedule shifts, their view updates automatically.
          </p>

          <h3>Field updates from phone</h3>
          <p>
            Photo uploads, status updates, punch list items — all from the field manager&apos;s phone.
            The whole tool is responsive, but the field-facing views are designed phone-first.
          </p>

          <h3>Connected to the rest of the build</h3>
          <p>
            The schedule isn&apos;t an island. It connects to <a href="/features/purchasing">vendor bids</a>
            (awarded vendors auto-populate the right tasks), <a href="/permitting">permitting</a>
            (permit milestones gate construction), <a href="/design">design center</a> (selection
            deadlines tied to install dates), and the <a href="/features/sales">sales pipeline</a>
            (sale → auto-budget → schedule kickoff in seconds).
          </p>

          <h2>How it compares</h2>
          <p>
            Generic PM tools (Asana, Monday, MS Project) don&apos;t understand the home builder data
            model — multi-home, multi-community, shared vendor pool, dependent permits, design center
            install dates. Builder-specific tools like BuilderTrend and CoConstruct cover scheduling but
            charge per-seat for subcontractors and tend to bolt scheduling onto a CRM rather than
            building it as the spine. See our <a href="/blog/buildertrend-vs-cornerstone">BuilderTrend
            comparison</a> for the full breakdown.
          </p>

          <h2>AI-powered scheduling</h2>
          <p>
            Foreman, our <a href="/ai-agents">AI agent for builders</a>, has 47 skills — many of which
            live in the schedule. Foreman can draft a schedule from a plan and lot, suggest dependency
            fixes when a sequence breaks, identify when a vendor is over-allocated across multiple
            homes, and surface the highest-risk slips in a weekly digest. See <a href="/ai-scheduling">AI
            construction scheduling</a> for the full picture.
          </p>

          <h2>Pricing</h2>
          <p>
            Construction scheduling is included in every Cornerstone PM plan, starting at
            <strong> $149/month</strong> (Starter tier, up to 25 active homes). Every plan includes
            unlimited subcontractor logins and unlimited buyers. <a href="/#pricing">See full pricing</a>.
          </p>

          <h2>Get started</h2>
          <p>
            Cornerstone PM is in public beta. <a href="/beta">Request access</a> and we&apos;ll get you
            into a working environment with a sample schedule and sample homes — usually within a day.
          </p>
        </PillarLayout>
        <FAQSection
          items={faqs}
          subheading="Common questions about construction scheduling software for home builders."
        />
      </main>
      <Footer />
    </>
  );
}
