import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PillarLayout from "../components/PillarLayout";
import FAQSection from "../components/FAQSection";

export const metadata = {
  title: "AI Material Takeoff for Home Builders — Blueprint AI by Cornerstone PM",
  description:
    "AI material takeoff that extracts counts, dimensions, and room-level breakdowns from plan sets — feeding budgets and vendor bids automatically.",
  alternates: { canonical: "https://cornerstonepm.ai/ai-takeoff" },
  openGraph: {
    title: "AI Material Takeoff for Home Builders — Blueprint AI",
    description:
      "Upload plans. Blueprint returns a structured material list that feeds the budget and vendor bidding.",
    url: "https://cornerstonepm.ai/ai-takeoff",
    siteName: "Cornerstone Builder Software",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is AI material takeoff?",
    a: "AI material takeoff is the automated extraction of material counts, dimensions, and room-level breakdowns from a plan set. Instead of an estimator spending two days manually counting outlets, measuring window openings, and tabulating square footage, Blueprint AI processes the plans and returns a structured material list in minutes. The estimator's role shifts from doing the count to validating it.",
  },
  {
    q: "What plan formats does Blueprint accept?",
    a: "PDF plan sets are the primary input. Most builders' architects deliver PDF — that's what Blueprint is built around. Vector and raster PDFs both work; vector is more accurate.",
  },
  {
    q: "How accurate is it?",
    a: "Accuracy depends on plan quality. On well-marked vector PDFs, Blueprint typically gets within a few percent on counts and dimensions. The output is always reviewed by a human estimator before it feeds the budget — Blueprint absorbs the mechanical hours, not the judgment.",
  },
  {
    q: "Does it replace my estimator?",
    a: "No. Blueprint replaces the manual count, not the estimator's judgment. The estimator validates the AI output, adjusts for plan ambiguities, and handles the parts of estimating that require experience — vendor negotiation, scope boundary calls, and pricing intelligence. Blueprint just gives them their week back.",
  },
  {
    q: "What does it output?",
    a: "A structured material list — every item, count, dimension, and room-level grouping. The output feeds directly into the Cornerstone PM budget and into the purchasing module so vendor bidding can use real takeoff numbers, not estimator approximations.",
  },
  {
    q: "How does this connect to vendor bids?",
    a: "Takeoff parts feed scope items. When you push a scope to vendors for bidding, vendors see the actual material list — not a vague description. Their bids come back with line-item pricing tied to real parts. Material breakdown in the budget comes from those parts; labor comes from accepted vendor bids. No filler, no synthetic splits.",
  },
  {
    q: "Is Blueprint AI included in pricing?",
    a: "Yes. Blueprint is included on every Cornerstone PM plan starting at $149/month. Usage scales with active home count, not as a separate AI add-on.",
  },
  {
    q: "Where do I start?",
    a: "Request beta access at /beta. We'll get you into a working environment and you can upload a plan set to see Blueprint run on your own data.",
  },
];

const related = [
  { label: "AI Agents for Home Builders", href: "/ai-agents", desc: "Foreman + Blueprint + assistants" },
  { label: "Purchasing & Vendor Bids", href: "/features/purchasing", desc: "Where Blueprint output goes" },
  { label: "Home Builder Software", href: "/home-builder-software", desc: "All modules overview" },
  { label: "Construction Scheduling Software", href: "/construction-scheduling-software", desc: "Scheduling pillar" },
  { label: "AI Construction Scheduling", href: "/ai-scheduling", desc: "Foreman in the schedule" },
  { label: "Construction Module", href: "/features/construction", desc: "Scheduling features" },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <PillarLayout
          eyebrow="AI for builders"
          h1="AI material takeoff that gives estimators their week back"
          intro="Blueprint AI processes plan sets and returns a structured material list — counts, dimensions, room-level breakdowns — that feeds the budget and vendor bidding automatically."
          related={related}
        >
          <h2>The takeoff problem</h2>
          <p>
            Manual takeoff is the slowest, least-creative work in home building estimating. An
            estimator spends a day or two counting outlets, measuring window openings, tabulating
            square footage, and re-typing it all into a spreadsheet that feeds the budget. The work
            is mechanical, error-prone (a mis-count compounds across every bid that scope feeds), and
            doesn&apos;t use any of the estimator&apos;s actual experience.
          </p>
          <p>
            <strong>AI material takeoff</strong> exists to absorb that work, free up the estimator&apos;s
            calendar, and reduce the count errors that quietly cost builders margin every month.
          </p>

          <h2>What Blueprint AI does</h2>
          <p>
            Upload a PDF plan set. Blueprint returns:
          </p>
          <ul>
            <li><strong>Material counts</strong> — outlets, switches, fixtures, doors, windows, etc.</li>
            <li><strong>Dimensions</strong> — square footage by room, linear feet of trim, drywall surface area, etc.</li>
            <li><strong>Room-level breakdowns</strong> — each room as its own bucket so design center selections and labor allocations land in the right place.</li>
            <li><strong>Structured output</strong> — every item is a part record that can feed scope items, vendor bidding, and the budget directly.</li>
          </ul>

          <h2>How takeoff feeds the rest of the platform</h2>

          <h3>Into the budget</h3>
          <p>
            Material breakdown in the budget comes from real takeoff parts — not estimator
            approximations or synthetic material/labor splits. Every line item traces back to a
            specific part with a specific count.
          </p>

          <h3>Into vendor bidding</h3>
          <p>
            When you push a <a href="/features/purchasing">scope to vendors for bidding</a>, vendors
            see the actual material list. Their bids come back with line-item pricing tied to real
            parts. Awarded bids feed back into the scope item pricing, which feeds the budget. The
            chain is closed-loop: takeoff → scope → vendor bid → award → budget → buyer pricing —
            with no manual re-entry.
          </p>

          <h3>Into the schedule</h3>
          <p>
            Awarded vendors auto-populate the <a href="/construction-scheduling-software">construction
            schedule</a> with their assigned tasks, dates, and contact info — across every home in the
            community.
          </p>

          <h3>Into the design center</h3>
          <p>
            <a href="/design">Design center</a> selections (Designer Packages, à la carte options)
            adjust the material list dynamically. Selecting an upgraded package re-runs the affected
            takeoff parts so the budget reflects the buyer&apos;s actual choices.
          </p>

          <h2>The estimator&apos;s new role</h2>
          <p>
            Blueprint doesn&apos;t replace estimators — it changes what they spend their time on. The
            mechanical count work is gone. What&apos;s left is what estimators are actually good at:
            scope boundary calls, vendor pricing intelligence, plan ambiguity resolution, and
            bid-strategy decisions. Estimators report Blueprint giving them back two to three days a
            week.
          </p>

          <h2>How accurate is AI takeoff really?</h2>
          <p>
            On well-marked vector PDFs, Blueprint typically gets within a few percent on counts and
            dimensions. Raster PDFs and poor markup are harder, and Blueprint will flag low-confidence
            items rather than guess. The output is always reviewed by a human estimator before it
            feeds the budget. The accuracy bar isn&apos;t "perfect" — it&apos;s "consistently better
            than a tired estimator at hour 9 of manual counting."
          </p>

          <h2>Pricing</h2>
          <p>
            Blueprint AI is included on every Cornerstone PM plan starting at <strong>$149/month</strong>.
            See <a href="/#pricing">full pricing</a>.
          </p>

          <h2>Get started</h2>
          <p>
            <a href="/beta">Request beta access</a> and you can upload a plan set to see Blueprint run
            on your own data. If you want the full platform context first, start from the
            <a href="/ai-agents"> AI agents pillar</a> or the <a href="/home-builder-software">home
            builder software overview</a>.
          </p>
        </PillarLayout>
        <FAQSection
          items={faqs}
          subheading="Common questions about AI material takeoff."
        />
      </main>
      <Footer />
    </>
  );
}
