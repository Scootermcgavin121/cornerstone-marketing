import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PillarLayout from "../components/PillarLayout";
import FAQSection from "../components/FAQSection";

export const metadata = {
  title: "Home Builder Software — All-in-One Platform for Residential Builders",
  description:
    "Home builder software that combines scheduling, vendor bids, design center, sales, pricing, and permitting. Built for residential builders running 1–500 homes/year.",
  alternates: { canonical: "https://cornerstonepm.ai/home-builder-software" },
  openGraph: {
    title: "Home Builder Software — All-in-One Platform for Residential Builders",
    description:
      "Scheduling, vendor bids, design center, sales, pricing — every module in one place. AI agents included.",
    url: "https://cornerstonepm.ai/home-builder-software",
    siteName: "Cornerstone Builder Software",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is home builder software?",
    a: "Home builder software is the operating system a residential builder runs their business on. It covers sales (taking deposits, generating contracts, MLS listings), construction (scheduling, vendor coordination, change orders), purchasing (vendor bids, POs, takeoff), design (selections, packages, options), pricing (community/floorplan/lot matrix), permitting, and buyer communication. Strong builder software handles all of those in one platform instead of forcing builders to stitch together five different tools.",
  },
  {
    q: "What should I look for in home builder software?",
    a: "Five things: (1) the data model — does it understand communities, floorplans, lots, scope items, and vendor bids natively, or does the builder rebuild that in spreadsheets? (2) Vendor coordination — can subs work without a paid login? (3) Pricing integrity — does pricing flow from real vendor bids, or is it manual entry that drifts? (4) Buyer experience — is the portal something a buyer actually uses, or an afterthought? (5) Total cost — does it scale by per-seat fees, or by homes/usage?",
  },
  {
    q: "How does Cornerstone PM compare to BuilderTrend, CoConstruct, and Buildxact?",
    a: "BuilderTrend and CoConstruct are mature general tools, strong on the basics but typically require workarounds for production-builder workflows like community-assigned vendor bidding, lock-after-acceptance pricing protection, and per-floorplan design packages. Buildxact leans estimating-first. Cornerstone is purpose-built for the production and semi-custom segment with vendor bidding tied to community assignment, no filler pricing anywhere, and AI agents in every module. See our full comparison at /blog/buildertrend-vs-cornerstone.",
  },
  {
    q: "Is everything included or is it modular?",
    a: "Every plan includes every module — scheduling, purchasing, design, sales, pricing, permitting, buyer portal, and AI agents. Pricing scales by active home count, not by which features you use. Subcontractor and buyer logins are always unlimited.",
  },
  {
    q: "What if I only need scheduling?",
    a: "You can absolutely use Cornerstone for scheduling only. Most builders start there and pull the other modules in over the first 30–60 days as they hit the next pain point. The Starter plan ($149/mo) is sized for that — up to 25 active homes, all modules, unlimited subs and buyers.",
  },
  {
    q: "Does it have AI?",
    a: "Yes. Foreman is our AI agent with 47 skills covering scheduling, vendor coordination, change orders, document drafting, and reporting. Blueprint AI does material takeoff from plans. Module-specific assistants surface in sales, purchasing, design, and permitting. See /ai-agents for the full picture.",
  },
  {
    q: "Who built Cornerstone PM?",
    a: "Scott Buescher — third-generation home builder and software engineer. Built Cornerstone after 15 years running production home building operations and watching every existing tool fall short of what builders actually need. Read the founder story at /about.",
  },
  {
    q: "How do I get started?",
    a: "Cornerstone PM is in public beta. Request access at /beta and we'll get you into a working environment with sample data, usually within a day.",
  },
];

const related = [
  { label: "Home Builder Project Management", href: "/home-builder-project-management", desc: "The pillar guide" },
  { label: "Construction Scheduling Software", href: "/construction-scheduling-software", desc: "Scheduling deep dive" },
  { label: "AI Agents for Home Builders", href: "/ai-agents", desc: "Foreman, Blueprint, and assistants" },
  { label: "Construction Module", href: "/features/construction", desc: "Scheduling features" },
  { label: "Purchasing & Vendor Bids", href: "/features/purchasing", desc: "Bidding and design center" },
  { label: "Sales & Pricing", href: "/features/sales", desc: "Pricing matrix and MLS" },
  { label: "Design Center", href: "/design", desc: "Designer Packages and options" },
  { label: "Permitting", href: "/permitting", desc: "Permit tracking" },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <PillarLayout
          eyebrow="Pillar guide"
          h1="Home builder software, end-to-end — sales to closeout, in one platform"
          intro="Cornerstone PM is the operating system for residential home builders. Scheduling, vendor bids, design center, sales, pricing, permitting, and AI agents — every module included on every plan."
          related={related}
        >
          <h2>What home builder software actually has to do</h2>
          <p>
            Running a residential home building operation means coordinating five things at once: a sales
            pipeline that turns leads into signed contracts, a construction schedule that turns dirt into
            a finished home, a purchasing operation that gets the right materials and the right
            subcontractors to the right job at the right time, a design center that lets buyers
            personalize their home without breaking the budget, and a buyer experience that keeps the
            customer informed without burying the team in phone calls.
          </p>
          <p>
            <strong>Home builder software</strong> exists to do all of that in one place — instead of
            forcing builders to stitch together a CRM, a scheduling tool, a spreadsheet for bids, a
            binder for design, and a customer portal that&apos;s perpetually out of date.
          </p>

          <h2>The Cornerstone PM modules</h2>

          <h3><a href="/features/sales">Sales & pricing</a></h3>
          <p>
            60-second home sale flow, pricing matrix by community/floorplan/lot, auto-budget on sale,
            MLS listing description generation, and a sales pipeline that hands directly to construction.
          </p>

          <h3><a href="/construction-scheduling-software">Construction scheduling</a></h3>
          <p>
            Gantt charts, drag-and-drop dependencies, cascade notifications when tasks shift, vendor
            schedule visibility, and buyer portal updates. The schedule connects to vendor bids,
            permitting, and design center milestones.
          </p>

          <h3><a href="/features/purchasing">Purchasing & vendor bidding</a></h3>
          <p>
            One-click bid-to-all-vendors, side-by-side bid comparison, lock-after-acceptance protection,
            multiple accepted bids per scope (one vendor per community), and a token-protected vendor
            portal that subs can use without a login.
          </p>

          <h3><a href="/design">Design center</a></h3>
          <p>
            64 curated <strong>Designer Packages</strong> across 7 categories. Per-floorplan options
            with auto-locking when a package is selected, à la carte unlocking when packages are
            removed, and a buyer-facing selection portal.
          </p>

          <h3><a href="/permitting">Permitting</a></h3>
          <p>
            Permit tracking pipeline tied to construction milestones. The schedule won&apos;t move past
            a permit-gated milestone until the permit clears.
          </p>

          <h3><a href="/ai-agents">AI agents</a></h3>
          <p>
            Foreman with 47 skills (scheduling, vendor coordination, change orders, reporting),
            <a href="/ai-takeoff">Blueprint AI</a> for material takeoff, and module-specific assistants
            in sales, purchasing, design, and permitting.
          </p>

          <h2>Why "all in one" actually matters</h2>
          <p>
            "All-in-one" gets thrown around as marketing copy, but the real value is in the
            <em> connections</em> between modules. A few examples:
          </p>
          <ul>
            <li>Selling a home auto-creates the budget from the pricing matrix and kicks off the construction schedule — no double-entry.</li>
            <li>Awarding a vendor bid auto-populates the schedule with that vendor&apos;s tasks, with their dates, with their contact info — across every home in that community.</li>
            <li>A buyer changing a design selection updates the budget, updates the install date on the schedule, and notifies the vendor scheduled to install — all in one click.</li>
            <li>A permit clearing unlocks the next phase of the schedule. A permit failing pauses it and notifies the field manager.</li>
          </ul>
          <p>
            None of those connections work when builders run on a stitched-together stack. Every handoff
            becomes manual re-entry, and every re-entry is a chance for things to drift.
          </p>

          <h2>Pricing</h2>
          <p>
            Plans start at <strong>$149/month</strong> (Starter, up to 25 active homes) and scale to
            <strong> $599/month</strong> (Enterprise, unlimited homes plus white-label buyer portal and
            API access). Every plan includes every module and unlimited subcontractor and buyer logins.
            See <a href="/#pricing">full pricing</a>.
          </p>

          <h2>Compare</h2>
          <p>
            Side-by-side comparisons:
          </p>
          <ul>
            <li><a href="/blog/buildertrend-vs-cornerstone">BuilderTrend vs Cornerstone</a></li>
            <li><a href="/blog/spreadsheets-killing-schedule">Spreadsheets are killing your schedule</a></li>
            <li><a href="/blog/60-second-home-sale">The 60-second home sale</a></li>
          </ul>

          <h2>Get started</h2>
          <p>
            <a href="/beta">Request beta access</a> — we&apos;ll get you into a working environment
            with sample data, usually within a day.
          </p>
        </PillarLayout>
        <FAQSection
          items={faqs}
          subheading="Common questions about home builder software."
        />
      </main>
      <Footer />
    </>
  );
}
