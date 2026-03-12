"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const sections = [
  {
    title: "Homeowner Portal",
    icon: "🏠",
    features: [
      {
        name: "Milestone Journey Carousel",
        desc: "Homeowners see a beautiful horizontal carousel of 20 construction milestones — from Pre-Construction Meeting to Certificate of Occupancy. Phase-colored borders, status badges (Complete / In Progress / Upcoming), and real job site photos at every step.",
      },
      {
        name: "Real-Time Build Progress",
        desc: "Homeowners watch their home come to life. Each milestone updates as PMs complete tasks — no manual status updates needed. Progress flows automatically from your construction schedule.",
      },
      {
        name: "Job Site Photo Gallery",
        desc: "Every milestone showcases real construction photos uploaded by your PMs. Homeowners get a curated visual journal of their home being built — from breaking ground to handing over keys.",
      },
      {
        name: "Download All Photos (.zip)",
        desc: "Homeowners download every job site photo as a single zip file organized by milestone. A keepsake of their entire build journey — ready to print, share, or archive.",
      },
      {
        name: "Warranty Service Requests",
        desc: "After closing, homeowners submit warranty requests with descriptions, photos, and category selection. Track status in real-time — Pending, Approved, In Progress, Completed. No more phone calls.",
      },
      {
        name: "Direct Messaging",
        desc: "Homeowners message their PM and sales agent directly from the portal. Threaded conversations keep communication organized and in context — no more lost emails or phone tag.",
      },
    ],
  },
  {
    title: "Communication",
    icon: "💬",
    features: [
      {
        name: "4-Tier Smart Notifications",
        desc: "Four intelligent notification tiers: Schedule Confirmation (≤7 days), Advance Notice (≤21 days), Date Moved Up, and Date Postponed. Each tier has its own color-coded branded email template. Configure lead times and toggle tiers on/off per account.",
      },
      {
        name: "Auto-Cascade Notifications",
        desc: "When a task completes and downstream dates shift, vendors are notified automatically — grouped by vendor so each sub gets one email listing all their affected tasks. Respects lead time windows so vendors aren't spammed about tasks months away.",
      },
      {
        name: "One-Click Confirm from Email",
        desc: "Vendors confirm their schedule directly from the notification email — no login required. Cryptographically signed magic links confirm all tasks in the email with a single click. Confirmation page is idempotent — repeat clicks just show 'Already Confirmed ✓'.",
      },
      {
        name: "Per-Vendor Lead Time Overrides",
        desc: "Set a global default lead time for all vendors, then override it per vendor. Your excavator needs 2 weeks notice? Your plumber needs 3 days? Configure each one independently.",
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
        desc: "Your AI assistant learns your business. The more you use it, the smarter it gets about your operation — with a dedicated memory file for every account. Ask anything, get instant answers tailored to your company.",
      },
      {
        name: "Jobsite Notes",
        desc: "Per-home notes with titles, timestamps, and author tracking. Search across all homes from a central notes hub — never lose a field observation or meeting note again.",
      },
      {
        name: "Customer Photo Gallery",
        desc: "PMs upload milestone photos grouped by construction phase. Homeowners browse a visual timeline of their build. Photo hub shows all homes with counts, cover images, and latest activity.",
      },
    ],
  },
  {
    title: "Templates & Setup",
    icon: "📋",
    features: [
      {
        name: "Construction Templates",
        desc: "Define the full build sequence for 1-story and 2-story homes. Pair with any permitting, inspection, and foundation template — they all merge into one unified schedule.",
      },
      {
        name: "7 Foundation Templates",
        desc: "Slab on Grade, Basement, Stem Wall (Block/CMU), Stem Wall (Panels), Crawlspace (Pier & Beam), and Coastal Pilings — each with accurate task sequences, durations, and dependencies built by real builders.",
      },
      {
        name: "Smart Foundation Logic",
        desc: "Auto-skips irrelevant tasks based on foundation type. Garage slab pours skip for slab and basement foundations. The system thinks so you don't have to.",
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
        name: "17 Pre-Built Templates, 270 Combinations",
        desc: "Hit the ground running with 6 foundation templates, 5 construction templates, 3 inspection templates, and 3 permitting templates — all pre-loaded with accurate task sequences, durations, and dependencies. Mix and match for 270 unique build variations out of the box. Build a home anywhere in the US with minor modifications.",
      },
      {
        name: "4 Modular Template Types",
        desc: "Permitting, Foundation, Inspection, and Construction templates are fully independent and composable. Mix and match without creating duplicates. They run in sync on the same timeline.",
      },
      {
        name: "Template Copy & Clone",
        desc: "Duplicate any template with one click — all tasks, durations, and dependencies are remapped automatically. Start from a proven base and customize for each community.",
      },
      {
        name: "Master Task Library",
        desc: "Single source of truth for all task definitions. Change a task once, it updates everywhere across all templates. Smart delete warnings, scope dropdowns, and active home counts per task.",
      },
      {
        name: "Template Task Reordering",
        desc: "Drag-and-drop task ordering within templates plus a searchable dropdown to add tasks from the master library. Build your schedule in minutes.",
      },
      {
        name: "Permit Gate System",
        desc: "Block downstream construction tasks until permits are obtained. Configurable per account — toggle on or off.",
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
        desc: "Three-state task confirmation — vendors confirm they're showing up, decline if they can't, or it stays pending. Confirm directly from email with one click or from the vendor portal. Everyone knows the real status.",
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
    title: "Scheduling Engine",
    icon: "🏗️",
    features: [
      {
        name: "Task Dependencies with Auto-Cascade",
        desc: "When a task completes, all downstream tasks automatically cascade forward — and affected vendors are notified instantly. Complete a task, uncomplete to restore dates. No manual rescheduling — ever.",
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
        name: "Smart Column Recognition",
        desc: "Our importer automatically recognizes similar column names — \"Job\", \"Title\", or \"Position\" all map to Role. \"Mobile\" or \"Cell\" maps to Cell Phone. No need to rename your columns to match our format.",
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
        name: "Mass Vendor Invite",
        desc: "Import your vendor list from Excel, then send magic link invites to all of them at once. Entire vendor network onboarded in minutes, not weeks.",
      },
      {
        name: "Excel Export",
        desc: "Branded exports with builder logo, phase-colored headers, and professional formatting. Home schedules, vendor calendars, task lists — all exportable.",
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
      {
        name: "Branded Insurance Emails",
        desc: "Automated expiry alerts match your company branding with status badges, info cards, and CTA buttons. Org-scoped — each builder's admins get their own vendor alerts.",
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
        name: "Company Documents",
        desc: "Admins upload company-wide documents (insurance, licenses, permits, safety docs) visible to all users. One central place for everything your team and vendors need.",
      },
      {
        name: "Vendor Admin & Member Roles",
        desc: "Vendor Admin manages company info, team members, and invites. Vendor Members get the same portal access minus company management.",
      },
    ],
  },
  {
    title: "Warranty Management",
    icon: "🔧",
    features: [
      {
        name: "2-Year Warranty Tracking",
        desc: "Automatic 2-year warranty window from Certificate of Occupancy. Homeowners submit service requests through the customer portal with descriptions, photos, and category selection.",
      },
      {
        name: "Service Categories for All Tasks",
        desc: "Plumbing, Electrical, HVAC, Structural/Drywall, General/Other, and more. Categorize warranty requests and route them to the right tech automatically.",
      },
      {
        name: "Admin Approval Workflow",
        desc: "Service requests require admin approval before work begins. Assign to internal warranty techs, set priority, add notes, and track through completion.",
      },
      {
        name: "Customer Status Tracking",
        desc: "Homeowners see real-time status updates on their service requests — Pending, Approved, In Progress, Completed. No more phone calls asking 'where's my repair?'",
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
        desc: "Upload your logo (icon + full wordmark), customize your company name. Your brand shows in the navbar, emails, and exports. White-label ready with 'Powered by Cornerstone' badge.",
      },
      {
        name: "Dark & Light Mode",
        desc: "Toggle between dark and light themes. Because not everyone likes staring at a bright screen at 6 AM on the job site.",
      },
      {
        name: "Permit Gate Toggle",
        desc: "Lock construction tasks until building permits are obtained — or turn it off if your workflow doesn't need it. One toggle controls the entire gate system.",
      },
      {
        name: "Warranty System Toggle",
        desc: "Enable or disable the homeowner warranty request system per account. Turn it on when you're ready to accept service requests through the portal.",
      },
      {
        name: "Auto-Notify Vendors Toggle",
        desc: "Control whether vendors automatically receive email notifications when schedule dates change. Turn it off during initial setup, flip it on when you go live.",
      },
      {
        name: "Moved Up / Postponed Alerts",
        desc: "Independent toggles for date-moved-earlier and date-postponed notification tiers. Want vendors to know when dates move up but not when they're pushed back? You can do that.",
      },
      {
        name: "Document Requirement Toggles",
        desc: "Turn SOW, W-9, GL Insurance, and Workers Comp requirements on or off independently. Every builder has different compliance needs — configure yours in seconds.",
      },
      {
        name: "Lead Time Configuration",
        desc: "Set a global default lead time for schedule confirmations (default 7 days) and advance notice window (default 21 days). Override per vendor for subs who need more or less heads-up.",
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
          <span
            className="inline-block px-10 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 cursor-default"
          >
            Coming Soon!
          </span>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
