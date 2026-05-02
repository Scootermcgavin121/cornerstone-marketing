import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PillarLayout from "../components/PillarLayout";
import FAQSection from "../components/FAQSection";

export const metadata = {
  title: "Home Builder Project Management Software — Cornerstone PM",
  description:
    "Home builder project management software that combines scheduling, purchasing, design center, and sales pricing in one platform. Built for residential builders running 1–500 homes/year.",
  alternates: { canonical: "https://cornerstonepm.ai/home-builder-project-management" },
  openGraph: {
    title: "Home Builder Project Management Software — Cornerstone PM",
    description:
      "All-in-one project management for residential home builders. Scheduling, vendor bids, design center, sales pricing — with AI agents that handle the busywork.",
    url: "https://cornerstonepm.ai/home-builder-project-management",
    siteName: "Cornerstone Builder Software",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is home builder project management software?",
    a: "Home builder project management software coordinates everything that happens between selling a home and handing the keys over: construction scheduling, vendor bidding, purchase orders, design center selections, change orders, buyer communication, and pricing. The best platforms replace the typical stack of spreadsheets, email threads, separate CRMs, and design center binders with one system that all teams (sales, construction, purchasing, design, vendors, buyers) work inside.",
  },
  {
    q: "How is it different from generic project management software like Asana or Monday?",
    a: "Generic PM tools have no concept of communities, floorplans, lots, scope items, vendor bids, takeoff parts, design options, or buyer pricing. Home builders end up rebuilding all of that in spreadsheets next to the tool. Cornerstone PM is built around the home builder data model from day one — every feature already understands the way builders actually work.",
  },
  {
    q: "What does Cornerstone PM include?",
    a: "Construction scheduling (Gantt, dependencies, cascade notifications), purchasing & vendor bidding, design center, sales pipeline, pricing matrix, permitting tracker, buyer portal, document delivery, change orders, and AI agents (Foreman with 47 skills, plus Blueprint AI takeoff). Every plan includes every module — no per-seat fees for subcontractors or buyers.",
  },
  {
    q: "Who is it for?",
    a: "Residential home builders running 1–500 homes per year. Production builders, semi-custom builders, and custom builders all use Cornerstone. The Starter tier ($149/mo) fits a small builder running up to 25 active homes; the Enterprise tier scales to unlimited homes with white-label buyer portals and API access.",
  },
  {
    q: "How does it compare to BuilderTrend or CoConstruct?",
    a: "Cornerstone PM is purpose-built for the production and semi-custom segment, with native vendor bidding tied to community assignment, lock-after-acceptance pricing protection, and AI agents in every module. BuilderTrend and CoConstruct are strong general tools, but pricing flows, design center, and vendor coordination usually require workarounds. Pricing also tends to be lower with Cornerstone because subcontractor and buyer logins are unlimited.",
  },
  {
    q: "Does it handle vendor bids?",
    a: "Yes — and it's one of the strongest differentiators. One-click bid-to-all-vendors per scope item, side-by-side bid comparison, lock-after-acceptance protection (so awarded pricing can't drift), and a token-protected vendor portal that lets subs self-serve their pending bids without needing a login. Multiple accepted bids per scope are supported (one vendor in Community A, a different vendor in Community B).",
  },
  {
    q: "Is there an AI component?",
    a: "Foreman is our AI agent for builders, with 47 skills across scheduling, vendor coordination, change-order tracking, document drafting, and reporting. Blueprint AI handles material takeoff from plans. Role-specific assistants surface in sales, purchasing, design, and permitting modules.",
  },
  {
    q: "Can I see it before signing up?",
    a: "Cornerstone PM is in public beta. You can request access at cornerstonepm.ai/beta and we'll get you a working environment with sample data — usually within a day.",
  },
];

const related = [
  { label: "Construction Scheduling Software", href: "/construction-scheduling-software", desc: "Gantt charts, dependencies, cascade notifications" },
  { label: "Home Builder Software (Overview)", href: "/home-builder-software", desc: "Every module in one platform" },
  { label: "AI Agents for Home Builders", href: "/ai-agents", desc: "Foreman, Blueprint, and module-specific assistants" },
  { label: "Construction Module", href: "/features/construction", desc: "Scheduling features deep dive" },
  { label: "Purchasing & Vendor Bids", href: "/features/purchasing", desc: "Bidding, POs, design center" },
  { label: "Sales & Pricing", href: "/features/sales", desc: "Pricing matrix, MLS, 60-second sale" },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <PillarLayout
          eyebrow="Pillar guide"
          h1="Home builder project management software, built around how builders actually work"
          intro="One platform for scheduling, vendor bidding, design center, sales, and pricing — purpose-built for residential home builders running 1 to 500 homes per year."
        >
          <h2>Why builders outgrow generic PM tools and spreadsheets</h2>
          <p>
            The typical mid-sized residential builder runs operations across a dozen tools: a spreadsheet
            for the schedule, a separate sheet for vendor bids, a CRM for sales, a design center binder,
            email threads for change orders, QuickBooks for accounting, and a customer portal that&apos;s
            usually three months out of date. Every handoff between sales, construction, purchasing, and
            design becomes a manual re-entry. Pricing drifts. Schedules slip. Vendors get paid for work
            that wasn&apos;t actually scoped.
          </p>
          <p>
            <strong>Home builder project management software</strong> exists to collapse that stack into
            one system that already understands the data model — communities, floorplans, lots, scope
            items, vendor bids, takeoff parts, design options, change orders, and buyer pricing — without
            the team rebuilding it in spreadsheets next to the tool.
          </p>

          <h2>What Cornerstone PM includes</h2>
          <p>
            Cornerstone PM is the all-in-one platform for residential builders. Every plan includes every
            module, with unlimited subcontractor and buyer logins.
          </p>
          <ul>
            <li><strong><a href="/construction-scheduling-software">Construction scheduling</a></strong> — Gantt charts, drag-and-drop dependencies, cascade notifications when tasks shift, vendor schedule visibility, and buyer-facing schedule updates.</li>
            <li><strong><a href="/features/purchasing">Purchasing & vendor bidding</a></strong> — One-click bid-to-all-vendors per scope, side-by-side comparison, lock-after-acceptance protection, and a token-protected vendor portal.</li>
            <li><strong><a href="/design">Design center</a></strong> — 64 curated Designer Packages across 7 categories, per-floorplan options, and à la carte unlock when packages are removed.</li>
            <li><strong><a href="/features/sales">Sales & pricing</a></strong> — 60-second home sale flow, pricing matrix by community/floorplan/lot, auto-budget on sale, and MLS listing description generation.</li>
            <li><strong><a href="/permitting">Permitting</a></strong> — Permit tracking pipeline tied to construction milestones.</li>
            <li><strong><a href="/ai-agents">AI agents</a></strong> — Foreman (47 skills), Blueprint AI (takeoff), and role-specific assistants in every module.</li>
          </ul>

          <h2>What makes Cornerstone different</h2>

          <h3>Community-assigned vendor wins, not lowest-bid auctions</h3>
          <p>
            Most vendor-bidding platforms push a lowest-bid auction model. That breaks the way real
            builders work — every builder has trusted subs per community, built over years of
            relationships. Cornerstone respects that: <strong>builders assign which vendors get to bid
            per community</strong>, and pricing flows automatically from accepted bids into scope items,
            budgets, and buyer-facing pricing. One vendor can win in Community A and a different vendor
            can win in Community B for the exact same scope.
          </p>

          <h3>Lock-after-acceptance pricing protection</h3>
          <p>
            Once a bid is awarded, neither builder nor vendor can edit it. Awarded pricing is locked,
            which protects the builder from drift, and the vendor from accidental changes that could
            cost them money. Edits require a formal change order with full audit trail.
          </p>

          <h3>No filler or default pricing — anywhere</h3>
          <p>
            Every dollar shown to a buyer or builder traces back to actual vendor pricing. Material
            breakdown comes from real takeoff parts; labor from accepted vendor bids. There are no
            synthetic material/labor splits and no estimator fudging — every line item is real.
          </p>

          <h3>Vendor self-serve portal (no login required)</h3>
          <p>
            Vendors get a token-protected URL when invited to bid. They can view scope items, edit their
            pending bid, attach line-item notes, and submit — all without creating an account. Builders
            don&apos;t end up doing data entry on behalf of subs who hate logins.
          </p>

          <h3>Designer Packages</h3>
          <p>
            64 curated <a href="/design">Designer Packages</a> across 7 categories. Buyers pick a
            package and all category options auto-lock to that package; à la carte unlocks if the
            package is removed. It&apos;s a real differentiator vs spreadsheet-style design centers.
          </p>

          <h2>Pricing</h2>
          <p>
            Plans start at <strong>$149/month</strong> (Starter, up to 25 active homes) and scale to
            <strong> $599/month</strong> (Enterprise, unlimited homes plus white-label buyer portal and
            API access). Every plan includes every module and unlimited subcontractor and buyer logins.
            See the <a href="/#pricing">full pricing breakdown</a>.
          </p>

          <h2>Get started</h2>
          <p>
            Cornerstone PM is in public beta. <a href="/beta">Request access</a> and we&apos;ll get you
            into a working environment with sample data, usually within a day. If you&apos;re comparing
            tools, also check our <a href="/blog/buildertrend-vs-cornerstone">comparison vs
            BuilderTrend</a>.
          </p>
        </PillarLayout>
        <FAQSection
          items={faqs}
          subheading="Common questions about home builder project management software."
        />
      </main>
      <Footer />
    </>
  );
}
