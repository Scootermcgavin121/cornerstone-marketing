import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SalesFeatures from "../../components/SalesFeatures";
import FAQSection from "../../components/FAQSection";
import RelatedPages from "../../components/RelatedPages";

export const metadata = {
  title: "Sales, Pricing & Pipeline for Home Builders — Cornerstone PM",
  description:
    "Home builder sales software: 60-second home sale flow, pricing matrix by community/floorplan/lot, auto-budget on sale, MLS listing generation, and 9-step pipeline.",
  alternates: { canonical: "https://cornerstonepm.ai/features/sales" },
  openGraph: {
    title: "Sales, Pricing & Pipeline for Home Builders — Cornerstone PM",
    description:
      "60-second home sale, pricing matrix, auto-budget, MLS listings. Built for residential home builders.",
    url: "https://cornerstonepm.ai/features/sales",
    siteName: "Cornerstone Builder Software",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is the 60-second home sale?",
    a: "A guided flow that takes a sales agent from lead-to-deposit in under a minute. Pick the community, pick the lot, pick the floorplan, apply Designer Packages and à la carte selections, and the system auto-generates the contract, the deposit invoice, the budget, and kicks off the construction schedule. See /blog/60-second-home-sale for the full walkthrough.",
  },
  {
    q: "How does the pricing matrix work?",
    a: "Pricing is structured by community, floorplan, and lot — three levers that all real builders use. The matrix lets you set a base price per floorplan with lot premium adjustments, then layer Designer Package pricing on top. Promotions and incentives apply at the matrix level so they're consistent across every sale.",
  },
  {
    q: "What does 'auto-budget on sale' mean?",
    a: "When a home sells, the budget auto-generates from the pricing matrix and the buyer's selections. Material comes from takeoff parts, labor comes from accepted vendor bids — the same chain that powers buyer-facing pricing. No double-entry between sales and the construction budget.",
  },
  {
    q: "Does it generate MLS listings?",
    a: "Yes. The sales assistant drafts MLS listings from floorplan + lot data — square footage, bedroom count, lot size, community amenities, school district, key selling points. Sales reviews and adjusts before posting.",
  },
  {
    q: "What is the 9-step pipeline?",
    a: "A structured sales pipeline that takes a lead through the full lifecycle: inquiry → showing → application → contract → deposit → design center selections → permitting handoff → construction kickoff → closeout. Each stage has its own checklist, owner, and SLA.",
  },
  {
    q: "How does sales hand off to construction?",
    a: "Automatically. When the sale completes the design center selections and clears permitting handoff, construction gets a kickoff event with the budget, the schedule template, the awarded vendors per scope, and the buyer's selection deadlines all populated. Field manager doesn't re-type anything.",
  },
  {
    q: "Is there a buyer portal?",
    a: "Yes. Buyers see their selections, their pricing, their schedule, their change orders, and their documents in one portal. No login required for buyers either — token-protected and unlimited on every plan.",
  },
  {
    q: "What does it cost?",
    a: "Sales & pricing are core modules, included on every Cornerstone PM plan starting at $149/month. Unlimited buyer logins included.",
  },
];

const related = [
  { label: "Home Builder Software", href: "/home-builder-software", desc: "All modules overview" },
  { label: "Design Center", href: "/design", desc: "Designer Packages and selections" },
  { label: "Purchasing & Vendor Bids", href: "/features/purchasing", desc: "Where pricing comes from" },
  { label: "Construction Scheduling Software", href: "/construction-scheduling-software", desc: "Where homes get built" },
  { label: "AI Agents for Home Builders", href: "/ai-agents", desc: "Sales assistant + Foreman" },
  { label: "60-Second Home Sale (Blog)", href: "/blog/60-second-home-sale", desc: "Walkthrough" },
];

export default function SalesFeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <SalesFeatures />
        <FAQSection items={faqs} subheading="Common questions about Cornerstone's sales and pricing modules." />
        <RelatedPages items={related} />
      </main>
      <Footer />
    </>
  );
}
