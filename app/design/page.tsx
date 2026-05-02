import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PillarLayout from "../components/PillarLayout";
import FAQSection from "../components/FAQSection";

export const metadata = {
  title: "Design Center Software for Home Builders — Cornerstone PM",
  description:
    "Design center software with 64 curated Designer Packages, per-floorplan options, à la carte unlocks, and a buyer-facing selection portal. Built for residential home builders.",
  alternates: { canonical: "https://cornerstonepm.ai/design" },
  openGraph: {
    title: "Design Center Software for Home Builders — Cornerstone PM",
    description:
      "64 Designer Packages across 7 categories. Per-floorplan options. Buyer-facing selection portal.",
    url: "https://cornerstonepm.ai/design",
    siteName: "Cornerstone Builder Software",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is design center software?",
    a: "Design center software is the tool a home builder uses to manage the buyer's selection process — flooring, cabinets, countertops, fixtures, paint, exterior elevations, and so on. It replaces the binders, spreadsheets, and ad-hoc PDFs that most builders use today, and gives the buyer a guided experience that ties their selections directly to pricing, schedule install dates, and vendor coordination.",
  },
  {
    q: "What are Designer Packages?",
    a: "Designer Packages are 64 curated bundles across 7 categories (kitchen, bath, flooring, exterior, lighting, finishes, paint). A buyer picks a package and all category options auto-lock to that package's selections — fast, coherent, and on-brand. If the buyer decides they want à la carte instead, removing the package unlocks individual options. It's a real differentiator vs spreadsheet-style design centers where every selection is independent and buyers feel paralyzed.",
  },
  {
    q: "Are options per-floorplan?",
    a: "Yes. Different floorplans can have different available options, and the design center respects that automatically. A 3-bedroom plan and a 5-bedroom plan can share a Designer Package but have different room-level options under it.",
  },
  {
    q: "How does pricing work?",
    a: "Every selection ties to real takeoff parts and real vendor pricing. When a buyer picks an upgraded package, the budget reflects actual material differences from accepted vendor bids — no synthetic markup, no estimator filler. See /home-builder-software for how the modules connect.",
  },
  {
    q: "Can buyers self-serve?",
    a: "Yes. Buyers get a token-protected selection portal where they walk through categories, pick packages or à la carte options, see live pricing as they go, and submit when ready. No login required. The builder's design center coordinator gets notified and reviews before locking selections.",
  },
  {
    q: "How does it connect to the schedule?",
    a: "Selection deadlines tie to install dates on the construction schedule. If a buyer misses the cabinet selection deadline, Foreman flags it as scheduling risk before the install date slips. See /ai-scheduling for the full picture.",
  },
  {
    q: "What if buyers change their minds?",
    a: "Changes after lock require a formal change order with full audit trail and updated pricing. The change order auto-updates the budget, the install date, and the vendor scheduled to install. Lock-after-acceptance applies here too — once a selection is locked and a vendor is committed, changes are intentional and tracked.",
  },
  {
    q: "Is design center included in pricing?",
    a: "Yes. Design center is a core module, included on every Cornerstone PM plan starting at $149/month.",
  },
];

const related = [
  { label: "Purchasing & Vendor Bids", href: "/features/purchasing", desc: "Where design selections feed bids" },
  { label: "Sales & Pricing", href: "/features/sales", desc: "Where selection pricing surfaces to buyers" },
  { label: "Home Builder Software", href: "/home-builder-software", desc: "All modules overview" },
  { label: "Home Builder Project Management", href: "/home-builder-project-management", desc: "Pillar guide" },
  { label: "Construction Scheduling Software", href: "/construction-scheduling-software", desc: "Where install dates live" },
  { label: "AI Agents for Home Builders", href: "/ai-agents", desc: "Foreman + design assistant" },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <PillarLayout
          eyebrow="Design center"
          h1="A design center buyers will actually finish — and a builder can actually price"
          intro="64 curated Designer Packages, per-floorplan options, à la carte unlocks, and a buyer-facing selection portal that ties every selection to real vendor pricing and real install dates."
          related={related}
        >
          <h2>Why design centers go off the rails</h2>
          <p>
            The traditional design center experience is two hours in a showroom, a binder with hundreds
            of options, and a buyer who walks out paralyzed and emails the coordinator three weeks later
            asking what they picked. The pricing is approximate, the install dates are vague, and when
            the buyer changes their mind in week six, everyone — builder, coordinator, vendors, the
            schedule — scrambles.
          </p>
          <p>
            <strong>Design center software</strong> exists to give the buyer a guided experience that
            doesn&apos;t paralyze them, give the builder pricing that ties to real vendor bids, and
            give the coordinator a workflow that doesn&apos;t live in their inbox.
          </p>

          <h2>Designer Packages: the curated path</h2>
          <p>
            64 curated <strong>Designer Packages</strong> across 7 categories: kitchen, bath, flooring,
            exterior, lighting, finishes, paint. A buyer picks a package and all category options
            auto-lock to that package&apos;s selections. The buyer gets a coherent, on-brand result
            without the analysis paralysis of independent selections.
          </p>
          <p>
            If the buyer wants à la carte instead, removing the package unlocks individual options.
            Most buyers stay on the curated path; the ones who want full control still get it.
          </p>

          <h2>Per-floorplan options</h2>
          <p>
            Different floorplans have different available options. A 3-bedroom plan and a 5-bedroom
            plan can share a Designer Package at the kitchen level but have different room-level
            options under it. The design center respects that automatically — buyers never see options
            their plan doesn&apos;t support.
          </p>

          <h2>Real pricing, all the way down</h2>
          <p>
            Every selection ties to real takeoff parts and real <a href="/features/purchasing">vendor
            bids</a>. When a buyer picks an upgraded package, the budget reflects actual material
            differences from accepted bids — not synthetic markup, not estimator filler. Material
            breakdown comes from <a href="/ai-takeoff">Blueprint AI takeoff parts</a>; labor comes
            from accepted vendor bids. Every dollar traces back to something real.
          </p>

          <h2>Buyer-facing selection portal</h2>
          <p>
            Buyers get a token-protected portal where they walk through categories, pick packages or
            à la carte options, see live pricing as they go, and submit when ready. No login. The
            coordinator gets notified, reviews, and locks selections.
          </p>

          <h2>Connected to the schedule</h2>
          <p>
            Every selection has a deadline tied to its install date on the
            <a href="/construction-scheduling-software"> construction schedule</a>. If a buyer misses
            the cabinet selection deadline, <a href="/ai-scheduling">Foreman</a> flags it as scheduling
            risk before the install date slips. The schedule, the design center, and the buyer are
            never out of sync for more than a day.
          </p>

          <h2>Connected to vendor coordination</h2>
          <p>
            When a selection locks, the awarded vendor for that scope auto-receives the buyer&apos;s
            choices, the install date, and the line-item pricing. No coordinator emailing the cabinet
            sub a PDF. No vendor showing up to install the wrong color.
          </p>

          <h2>Change orders, not chaos</h2>
          <p>
            Changes after lock require a formal change order with full audit trail. The change order
            auto-updates the budget, the install date, and the vendor schedule. Lock-after-acceptance
            applies — once a selection is locked and a vendor is committed, changes are intentional
            and tracked.
          </p>

          <h2>Pricing</h2>
          <p>
            Design center is a core module, included on every Cornerstone PM plan starting at
            <strong> $149/month</strong>. <a href="/#pricing">See full pricing</a>.
          </p>

          <h2>Get started</h2>
          <p>
            <a href="/beta">Request beta access</a> and we&apos;ll get you into a working environment
            with sample Designer Packages and sample homes. For platform context, see
            <a href="/home-builder-software"> home builder software</a> or
            <a href="/home-builder-project-management"> home builder project management</a>.
          </p>
        </PillarLayout>
        <FAQSection
          items={faqs}
          subheading="Common questions about design center software."
        />
      </main>
      <Footer />
    </>
  );
}
