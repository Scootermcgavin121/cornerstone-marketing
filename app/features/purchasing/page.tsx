import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PurchasingFeatures from "../../components/PurchasingFeatures";
import FAQSection from "../../components/FAQSection";
import RelatedPages from "../../components/RelatedPages";

export const metadata = {
  title: "Vendor Bids, Purchasing & Design Center for Home Builders — Cornerstone PM",
  description:
    "Auto-generated, scope-filtered bid templates. No-login vendor file-upload portal. Side-by-side bid comparison, lock-after-acceptance, 64 Designer Packages, POs, and full data export.",
  alternates: { canonical: "https://cornerstonepm.ai/features/purchasing" },
  openGraph: {
    title: "Vendor Bids, Purchasing & Design Center for Home Builders — Cornerstone PM",
    description:
      "Bid templates that write themselves. No-login vendor portal. One-click bid-to-all-vendors. Lock-after-acceptance. Built for residential home builders.",
    url: "https://cornerstonepm.ai/features/purchasing",
    siteName: "Cornerstone Builder Software",
    type: "website",
  },
};

const faqs = [
  {
    q: "How does vendor bidding work in Cornerstone?",
    a: "One-click bid-to-all-vendors per scope. Builders assign which vendors get to bid per community (respecting existing relationships, not lowest-bid auctions). Bids come back with line-item pricing tied to real takeoff parts. Side-by-side comparison view shows differences. Award one vendor, and the awarded pricing locks — no drift.",
  },
  {
    q: "What is lock-after-acceptance?",
    a: "Once a bid is awarded, neither builder nor vendor can edit it. Awarded pricing is locked, which protects the builder from drift and the vendor from accidental changes that could cost them money. Edits require a formal change order with full audit trail.",
  },
  {
    q: "Can one vendor win in one community and another vendor win in a different community for the same scope?",
    a: "Yes. Multiple accepted bids per scope are supported — one vendor in Community A, a different vendor in Community B for the exact same scope item. This matches the real-world flexibility of how builders actually run vendor relationships.",
  },
  {
    q: "How do vendors submit bids? Do they need a login?",
    a: "No login, no training. Vendors get a token-protected URL when invited. They download an auto-generated, scope-filtered Excel template (Base / Structural / Designer tabs), fill in their numbers in their own workflow, then upload PDF/Excel/CSV files back to the portal. Two clicks to submit. Builders don't end up doing data entry on behalf of subs who hate logins.",
  },
  {
    q: "What's in the auto-generated bid template?",
    a: "Three tabs: (1) Base — floorplan-location-scope rows for the vendor's trade with option pricing; (2) Structural — takeoff-driven structural options for that scope; (3) Designer — design center option classes the vendor is responsible for. Everything is scope-filtered — your electrician doesn't see plumbing rows. The template is attached to the vendor invite email and also downloadable from the portal.",
  },
  {
    q: "How is bid status tracked?",
    a: "Every bid request flows through Invited → Viewed → Submitted → Declined, with timestamps. You can see at a glance who opened the link, who's working on it, and who never showed up — so you know who to chase before the bid window closes.",
  },
  {
    q: "Can I get my data out if I leave?",
    a: "Yes. Settings > Backups lets you download a full org export (91 tables) as CSV or JSON anytime, with sensitive fields automatically excluded. Nightly auto-backups run with 7-day retention. Your data is always yours — no vendor lock-in, no exit fees.",
  },
  {
    q: "What about design center?",
    a: "64 curated Designer Packages across 7 categories. Buyers pick a package and all category options auto-lock to that package; à la carte unlocks if the package is removed. Per-floorplan options. Token-protected buyer selection portal. See /design for the full design center pillar.",
  },
  {
    q: "How does pricing flow from bids to the budget?",
    a: "Awarded vendor bids feed scope item pricing. Scope items feed the budget. Budget feeds buyer-facing pricing. Material breakdown comes from real takeoff parts (via Blueprint AI); labor comes from accepted vendor bids. Every dollar traces back to something real — no synthetic splits, no estimator filler.",
  },
  {
    q: "Is there AI in the purchasing module?",
    a: "Yes. Foreman has purchasing skills: summarize differences between vendor bids, flag bid line items out-of-range vs the community average, draft vendor follow-ups, and auto-populate scope from accepted bids into the schedule. See /ai-agents for the full picture.",
  },
  {
    q: "What does it cost?",
    a: "Purchasing & design center are core modules, included on every Cornerstone PM plan starting at $149/month. Unlimited vendor logins included.",
  },
];

const related = [
  { label: "Design Center", href: "/design", desc: "Designer Packages cluster" },
  { label: "AI Material Takeoff", href: "/ai-takeoff", desc: "Blueprint AI feeds the bids" },
  { label: "Construction Scheduling Software", href: "/construction-scheduling-software", desc: "Where awarded vendors land" },
  { label: "Home Builder Project Management", href: "/home-builder-project-management", desc: "Pillar overview" },
  { label: "Sales & Pricing", href: "/features/sales", desc: "How pricing flows to buyers" },
  { label: "AI Agents for Home Builders", href: "/ai-agents", desc: "Foreman's purchasing skills" },
];

export default function PurchasingFeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PurchasingFeatures />
        <FAQSection items={faqs} subheading="Common questions about Cornerstone's purchasing and design center modules." />
        <RelatedPages items={related} />
      </main>
      <Footer />
    </>
  );
}
