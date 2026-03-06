"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const sections = [
  {
    title: "Scheduling Engine",
    icon: "🏗️",
    features: [
      {
        name: "Task Dependencies with Auto-Shifting",
        desc: "When a task slips, all downstream tasks automatically cascade forward. No manual rescheduling — ever.",
      },
      {
        name: "Gantt Charts with Critical Path",
        desc: "Visual timeline of your entire project. See the critical path at a glance and know exactly what's holding things up.",
      },
      {
        name: "Phase-Based Scheduling",
        desc: "12 construction phases from sitework through landscaping, plus a dedicated permitting phase. Organize your build the way you actually build.",
      },
      {
        name: "Weekday-Only Scheduling",
        desc: "Respects US federal holidays and custom overrides. No more manually skipping weekends.",
      },
      {
        name: "Milestone Tracking",
        desc: "Set key milestones like Frame Complete, Drywall Hung, Final Inspection — and track progress against them.",
      },
      {
        name: "Calendar & List Views",
        desc: "See what's happening day by day, week by week, or as a simple filtered task list. Your schedule, your way.",
      },
    ],
  },
  {
    title: "Vendor Portal",
    icon: "👷",
    features: [
      {
        name: "Magic Link Access",
        desc: "Vendors click a link, they're in. No passwords to remember, no accounts to create. Dead simple.",
      },
      {
        name: "Confirm / Decline Workflow",
        desc: "Three-state task confirmation — vendors confirm they're showing up, decline if they can't, or it stays pending. Everyone knows the real status.",
      },
      {
        name: "Vendor Calendar",
        desc: "Printable month view showing all scheduled tasks across homes. Color-coded by status. Print it, stick it on the shop wall.",
      },
      {
        name: "Excel & CSV Export",
        desc: "One-click download of their schedule. Respects filters. Auto-named files. Vendors can import into their own systems.",
      },
      {
        name: "Protected Vendor Lists",
        desc: "Vendors see only their own tasks. Your proprietary vendor relationships stay private — subs can never see who else you're using.",
      },
      {
        name: "Self-Service Company Profile",
        desc: "Vendors manage their own info — company details, contacts, insurance docs, W-9s. Zero admin data entry on your end.",
      },
    ],
  },
  {
    title: "Templates & Setup",
    icon: "📋",
    features: [
      {
        name: "Construction Templates",
        desc: "Define the full build sequence. Variants for foundation types (basement, crawlspace, slab) and story count.",
      },
      {
        name: "Permitting Templates",
        desc: "Define your permit workflow. Gate task unlocks construction when the building permit is received.",
      },
      {
        name: "Inspection Templates",
        desc: "20+ granular inspection scopes — footing, framing, mechanical, final building, and more. Assignable per community to internal users or external vendors.",
      },
      {
        name: "Unified Schedule",
        desc: "All three template types are independent and composable. Mix and match without creating duplicates. They run in sync on the same timeline.",
      },
      {
        name: "Master Task Library",
        desc: "Single source of truth for all task definitions. Change a task once, it updates everywhere across all templates.",
      },
      {
        name: "Permit Gate System",
        desc: "Block downstream construction tasks until permits are obtained. Configurable per account — toggle on or off.",
      },
    ],
  },
  {
    title: "Data Import",
    icon: "📥",
    features: [
      {
        name: "Import from Any Platform",
        desc: "Switching from Buildertrend, CoConstruct, Procore, or spreadsheets? Bulk-import your existing data. 8 importers cover scopes, tasks, vendors, communities, homes, users, assignments, and templates.",
      },
      {
        name: "Universal Column Mapper",
        desc: "Upload any Excel or CSV file and map columns via dropdowns. No reformatting needed — works with exports from any platform.",
      },
      {
        name: "Diff Preview Before Applying",
        desc: "See exactly what will be added or modified with field-level change tracking. Nothing changes until you approve.",
      },
      {
        name: "100% Additive",
        desc: "No importer deletes existing records. Add new data, update existing — never remove. Safe by design.",
      },
      {
        name: "Excel Export",
        desc: "Branded exports with builder logo, phase-colored headers, and professional formatting. Home schedules, vendor calendars, task lists — all exportable.",
      },
    ],
  },
  {
    title: "Communication",
    icon: "💬",
    features: [
      {
        name: "Email Notifications",
        desc: "Task assignments, schedule changes, vendor declines, insurance expirations — everyone stays in the loop automatically.",
      },
      {
        name: "In-App Messaging",
        desc: "Threaded conversations tied to specific tasks and homes. Drag & drop file attachments up to 10MB each.",
      },
      {
        name: "Notification Center",
        desc: "Bell icon with unread badge, full notifications page with mark-as-read. 30-second polling keeps everything fresh.",
      },
      {
        name: "AI Chatbot Support",
        desc: "24/7 intelligent chatbot that knows your schedule inside and out. Ask anything, get instant answers.",
      },
    ],
  },
  {
    title: "Insurance & Compliance",
    icon: "🛡️",
    features: [
      {
        name: "Vendor Insurance Expiry Alerts",
        desc: "Automated email notifications 30 days before GL and WC policies expire. Reminders every 7 days until updated.",
      },
      {
        name: "Document Management",
        desc: "GL certificates, Workers Comp, W-9s, Scope of Work — all tracked with full upload history. Previous versions preserved.",
      },
      {
        name: "SOW Verification",
        desc: "Admins verify vendor Scope of Work documents with timestamp and verifier name. Unverify if updates are needed.",
      },
      {
        name: "Dashboard Warnings",
        desc: "Admin dashboard surfaces vendors with expiring or expired insurance. Vendor dashboard shows their own alerts.",
      },
    ],
  },
  {
    title: "Multi-Community & Roles",
    icon: "🏘️",
    features: [
      {
        name: "Multi-Community Support",
        desc: "Manage multiple communities and subdivisions from one account. Auto-assign vendors by community scope defaults.",
      },
      {
        name: "Role-Based Access Control",
        desc: "Admin, Project Manager, Permitting Agent, Vendor, and Customer roles — each sees only what they need.",
      },
      {
        name: "Customer Portal",
        desc: "Homeowners get a read-only view of their build progress. Task completion, milestone status, estimated timeline — no access to vendor details or costs.",
      },
      {
        name: "Vendor Admin & Member Roles",
        desc: "Vendor Admin manages company info, team members, and invites. Vendor Members get the same portal access minus company management.",
      },
    ],
  },
  {
    title: "Dashboards & Reporting",
    icon: "📊",
    features: [
      {
        name: "Role-Specific Dashboards",
        desc: "Every role gets a tailored view. KPI cards, overdue alerts, recent activity, progress tracking — all at a glance.",
      },
      {
        name: "Construction Progress Bars",
        desc: "Phase-by-phase breakdown with visual progress indicators. Know exactly where every home stands.",
      },
      {
        name: "Task Urgency Color Coding",
        desc: "Red for overdue, yellow for due within 3 days. Highlighted rows make it impossible to miss what needs attention.",
      },
      {
        name: "Bulk Mark as Complete",
        desc: "Select multiple tasks and mark them all complete at once. Perfect for onboarding homes already under construction.",
      },
    ],
  },
  {
    title: "Customization",
    icon: "🎨",
    features: [
      {
        name: "Custom Branding",
        desc: "Upload your logo, customize your company name. White-label ready with 'Powered by Cornerstone' badge.",
      },
      {
        name: "Dark & Light Mode",
        desc: "Toggle between dark and light themes. Because not everyone likes staring at a bright screen at 6 AM on the job site.",
      },
      {
        name: "Configurable Document Requirements",
        desc: "Toggle SOW, W-9, GL, and WC requirements on or off per account. Every builder runs differently.",
      },
      {
        name: "Custom API Access",
        desc: "Enterprise plan includes API access for custom integrations with your existing tools and workflows.",
      },
    ],
  },
];

export default function FeaturesDetail() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <AnimateOnScroll className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Every feature.{" "}
            <span className="gradient-text">Every plan.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            No feature gates, no per-home pricing, no surprises. Here's everything
            you get starting at $60/month.
          </p>
        </AnimateOnScroll>

        {/* Feature Sections */}
        <div className="space-y-24">
          {sections.map((section, si) => (
            <AnimateOnScroll key={si}>
              <div>
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-4xl">{section.icon}</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                    {section.title}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
                </div>

                {/* Feature Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.features.map((f, fi) => (
                    <div
                      key={fi}
                      className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-900/80"
                    >
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {f.name}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateOnScroll className="text-center mt-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Ready to{" "}
            <span className="gradient-text">ditch the chaos?</span>
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            All of this — starting at $60/month. No demo required. No sales calls. Just sign up and go.
          </p>
          <a
            href="https://app.cornerstonepm.ai/register"
            className="inline-block px-10 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:from-cyan-400 hover:to-emerald-400 shadow-lg shadow-cyan-500/25 transition-all"
          >
            Start Free Trial →
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
