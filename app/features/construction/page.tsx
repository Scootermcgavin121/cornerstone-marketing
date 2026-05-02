import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ConstructionFeatures from "../../components/ConstructionFeatures";
import FAQSection from "../../components/FAQSection";
import RelatedPages from "../../components/RelatedPages";

export const metadata = {
  title: "Construction Scheduling for Home Builders — Cornerstone PM",
  description:
    "Construction scheduling features for residential home builders: Gantt charts, drag-and-drop dependencies, cascade notifications, vendor portal, and buyer schedule updates.",
  alternates: { canonical: "https://cornerstonepm.ai/features/construction" },
  openGraph: {
    title: "Construction Scheduling for Home Builders — Cornerstone PM",
    description:
      "Gantt charts, dependencies, cascade notifications, and a vendor portal subs will actually use. Built for residential home builders.",
    url: "https://cornerstonepm.ai/features/construction",
    siteName: "Cornerstone Builder Software",
    type: "website",
  },
};

const faqs = [
  {
    q: "Is this scheduling tool built for home builders specifically?",
    a: "Yes. Every feature is built around the way residential builders actually work — multi-home, multi-community, shared vendor pool, dependent permits, design center install dates. Generic PM tools (Asana, Monday, MS Project) don't understand that data model; you end up rebuilding it in spreadsheets next to the tool.",
  },
  {
    q: "How are subcontractors notified when tasks shift?",
    a: "Cascade notifications. When a task moves, every dependent task shifts and every affected vendor gets a notification with the new dates. Foreman drafts the notifications; PM approves the batch before sends go out.",
  },
  {
    q: "Do subs need a paid login to see their schedule?",
    a: "No. Vendors get a token-protected portal showing only their assigned tasks across all the builder's homes. No login, no app to install, no per-seat fee. Unlimited subcontractor logins on every plan.",
  },
  {
    q: "Does it work on mobile in the field?",
    a: "Yes. The whole tool is responsive, and the field-facing views (vendor portal, status updates, photo uploads, punch list) are designed phone-first. Field managers spend more time on phones than at desks; the tool is built for that.",
  },
  {
    q: "How does scheduling connect to the rest of the platform?",
    a: "The schedule is connected to vendor bids (awarded vendors auto-populate the right tasks), permitting (permit milestones gate construction), design center (selection deadlines tied to install dates), sales (sale → auto-budget → schedule kickoff), and the buyer portal (live schedule visibility for customers).",
  },
  {
    q: "Is there AI in the scheduling module?",
    a: "Yes. Foreman has multiple scheduling skills: drafting a schedule from a plan, flagging over-allocated vendors, surfacing highest-risk slips, re-sequencing on permit failure, and drafting vendor notifications. Every AI action requires builder approval.",
  },
  {
    q: "How does this compare to BuilderTrend or CoConstruct?",
    a: "Cornerstone is purpose-built for the production and semi-custom segment with native vendor coordination, lock-after-acceptance pricing protection, and AI agents in every module. BuilderTrend and CoConstruct are mature general tools but typically charge per-seat for subs and require workarounds for production-builder workflows. See /blog/buildertrend-vs-cornerstone for the full comparison.",
  },
  {
    q: "What does it cost?",
    a: "Construction scheduling is included in every Cornerstone PM plan, starting at $149/month for the Starter tier (up to 25 active homes). Unlimited subcontractor logins included on every plan.",
  },
];

const related = [
  { label: "Construction Scheduling Software", href: "/construction-scheduling-software", desc: "Pillar guide" },
  { label: "AI Construction Scheduling", href: "/ai-scheduling", desc: "How Foreman handles scheduling" },
  { label: "Home Builder Project Management", href: "/home-builder-project-management", desc: "Pillar overview" },
  { label: "Purchasing & Vendor Bids", href: "/features/purchasing", desc: "Where vendors come from" },
  { label: "Permitting", href: "/permitting", desc: "Permit gates on the schedule" },
  { label: "Sales & Pricing", href: "/features/sales", desc: "Where homes start" },
];

export default function ConstructionFeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ConstructionFeatures />
        <FAQSection items={faqs} subheading="Common questions about Cornerstone's construction scheduling module." />
        <RelatedPages items={related} />
      </main>
      <Footer />
    </>
  );
}
