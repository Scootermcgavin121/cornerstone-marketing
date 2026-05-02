import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PillarLayout from "../components/PillarLayout";
import FAQSection from "../components/FAQSection";

export const metadata = {
  title: "AI Agents for Home Builders — Foreman, Blueprint, and Module Assistants",
  description:
    "AI agents for home builders that handle the busywork: scheduling, vendor coordination, takeoff, change orders, and reporting. Built into Cornerstone PM.",
  alternates: { canonical: "https://cornerstonepm.ai/ai-agents" },
  openGraph: {
    title: "AI Agents for Home Builders — Cornerstone PM",
    description:
      "Foreman has 47 skills across scheduling, purchasing, and reporting. Blueprint AI handles takeoff. Built into every plan.",
    url: "https://cornerstonepm.ai/ai-agents",
    siteName: "Cornerstone Builder Software",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is an AI agent for home builders?",
    a: "An AI agent for home builders is an assistant that lives inside the builder's software and can take action — not just answer questions. It can draft a schedule from a plan, identify when a vendor is over-booked, generate a change order from a buyer email, or summarize the week's slips for the field manager. The point is to absorb the busywork that doesn't require human judgment so the builder's team can spend their time where it actually matters.",
  },
  {
    q: "What is Foreman?",
    a: "Foreman is Cornerstone's AI agent with 47 skills across scheduling, vendor coordination, change orders, document drafting, and reporting. Foreman is built into every plan and surfaces in the modules where its skills apply — scheduling, purchasing, design, sales, permitting.",
  },
  {
    q: "What is Blueprint AI?",
    a: "Blueprint AI is the takeoff agent. Upload a set of plans and Blueprint extracts the material list — counts, dimensions, room-level breakdowns — that feeds the budget and the purchasing module. It doesn't replace estimators; it replaces the days they spend doing manual takeoff so they can spend that time validating and adjusting.",
  },
  {
    q: "Are there other AI assistants?",
    a: "Yes — module-specific assistants surface inside sales, purchasing, design, and permitting. They handle role-specific tasks: drafting MLS listings (sales), summarizing vendor bid differences (purchasing), suggesting design package combinations (design), and tracking permit deadlines (permitting).",
  },
  {
    q: "Is my data safe? Are you training on my projects?",
    a: "Your project data stays your data. We do not train shared models on builder data. AI agents operate on your data inside your tenant; outputs stay in your account. See /privacy for full details.",
  },
  {
    q: "Does AI replace my project manager?",
    a: "No. AI agents handle the busywork — drafting, summarizing, flagging, surfacing — that doesn't require human judgment. The PM still makes the calls. The point is to give the PM more time for the calls that actually matter.",
  },
  {
    q: "What if I don't trust AI?",
    a: "Then don't use it. Foreman and the assistants are opt-in per skill. You can run Cornerstone PM with no AI features enabled and still get the full platform — scheduling, vendor bids, design center, sales, pricing, permitting. AI is a force multiplier, not a requirement.",
  },
  {
    q: "Is AI included in pricing?",
    a: "Foreman and Blueprint AI are included on every plan. The Starter plan ($149/mo) gets every AI feature; usage scales naturally with active home count, not as a separate AI add-on.",
  },
];

const related = [
  { label: "AI Construction Scheduling", href: "/ai-scheduling", desc: "Foreman in the schedule" },
  { label: "AI Material Takeoff", href: "/ai-takeoff", desc: "Blueprint AI for plans" },
  { label: "Home Builder Software", href: "/home-builder-software", desc: "All modules overview" },
  { label: "Construction Scheduling Software", href: "/construction-scheduling-software", desc: "Scheduling pillar" },
  { label: "Construction Module", href: "/features/construction", desc: "Where Foreman lives" },
  { label: "Purchasing & Vendor Bids", href: "/features/purchasing", desc: "Where Blueprint feeds" },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <PillarLayout
          eyebrow="AI for builders"
          h1="AI agents for home builders that take action, not just answer questions"
          intro="Foreman has 47 skills across scheduling, vendor coordination, change orders, and reporting. Blueprint AI handles material takeoff. Module-specific assistants live in sales, design, and permitting."
          related={related}
        >
          <h2>The point of AI in home building</h2>
          <p>
            The day-to-day of running a home building operation is full of work that doesn&apos;t require
            human judgment — drafting a schedule from a plan, summarizing vendor bid differences,
            re-typing a change order from a buyer email, pulling a weekly slip report. That work eats
            the field manager&apos;s, the PM&apos;s, and the estimator&apos;s time, and it&apos;s
            exactly the work AI agents are good at.
          </p>
          <p>
            The point of AI in Cornerstone PM is to <strong>absorb the busywork</strong> so the team
            can spend their hours on what actually moves the build — vendor relationships, buyer
            conversations, field decisions, and finding the next opportunity.
          </p>

          <h2>Foreman — the home builder AI agent</h2>
          <p>
            <strong>Foreman</strong> is the central AI agent in Cornerstone PM, with 47 skills
            currently shipped. Foreman is not a chatbot bolted onto the side — it lives inside the
            modules and can take action with the builder&apos;s approval.
          </p>

          <h3>Scheduling skills</h3>
          <ul>
            <li>Draft a schedule from a plan and lot</li>
            <li>Suggest dependency fixes when a sequence breaks</li>
            <li>Flag vendors over-allocated across multiple homes</li>
            <li>Surface highest-risk slips in a weekly digest</li>
            <li>Re-sequence the schedule when a permit fails</li>
          </ul>
          <p>
            See <a href="/ai-scheduling">AI construction scheduling</a> for the full breakdown.
          </p>

          <h3>Vendor & purchasing skills</h3>
          <ul>
            <li>Summarize differences between vendor bids on the same scope</li>
            <li>Flag bid line items that look out-of-range vs the community average</li>
            <li>Draft a vendor follow-up when a bid is past due</li>
            <li>Auto-populate scope from accepted bids into the schedule</li>
          </ul>

          <h3>Change order & document skills</h3>
          <ul>
            <li>Draft a change order from a buyer email or a field note</li>
            <li>Generate a buyer-facing PDF (selections summary, pricing, schedule)</li>
            <li>Pull every change order touching a given scope item</li>
            <li>Translate field markup into a structured change order</li>
          </ul>

          <h3>Reporting skills</h3>
          <ul>
            <li>Weekly slip digest by community</li>
            <li>Vendor scorecards (on-time %, bid acceptance rate, change order frequency)</li>
            <li>Margin-at-risk reports tied to design selections</li>
            <li>Closeout punch list status across active homes</li>
          </ul>

          <h2>Blueprint AI — material takeoff</h2>
          <p>
            <strong><a href="/ai-takeoff">Blueprint AI</a></strong> handles material takeoff from plan
            sets. Upload the plans, Blueprint returns a structured material list — counts, dimensions,
            room-level breakdowns — that feeds directly into the budget and into the purchasing module
            for vendor bidding. Estimators still validate and adjust; Blueprint just absorbs the
            mechanical hours.
          </p>

          <h2>Module-specific assistants</h2>

          <h3>Sales assistant</h3>
          <p>
            Drafts MLS listings from floorplan + lot data, generates buyer-facing pricing summaries,
            and pulls comparable sales context for pricing decisions.
          </p>

          <h3>Design assistant</h3>
          <p>
            Suggests Designer Package combinations based on buyer preferences, surfaces selection
            deadlines tied to install dates, and flags selections that would push the buyer over budget.
          </p>

          <h3>Permitting assistant</h3>
          <p>
            Tracks permit deadlines, drafts follow-up emails to municipalities, and re-sequences the
            schedule when a permit slips. See <a href="/permitting">permitting cluster</a> for context.
          </p>

          <h2>How AI is built into Cornerstone</h2>
          <p>
            AI agents are not an add-on; they&apos;re part of the core platform. Foreman and Blueprint
            are included on every plan starting at <a href="/#pricing">$149/month</a>. Each skill is
            opt-in, and every action requires builder approval before it executes — AI proposes,
            humans dispose. Your data stays in your tenant; we don&apos;t train shared models on
            builder data. See <a href="/privacy">privacy policy</a>.
          </p>

          <h2>Get started</h2>
          <p>
            <a href="/beta">Request beta access</a> and we&apos;ll get you into a working environment
            with Foreman and Blueprint enabled. You can also start from the <a href="/home-builder-software">home builder software overview</a> if you want the full platform context first.
          </p>
        </PillarLayout>
        <FAQSection
          items={faqs}
          subheading="Common questions about AI agents for home builders."
        />
      </main>
      <Footer />
    </>
  );
}
