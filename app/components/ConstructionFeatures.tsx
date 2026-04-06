"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const features = [
  // ── CORE SCHEDULING ──
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    title: "Smart Scheduling",
    desc: "Interactive Gantt charts with drag-and-drop task management. 3-tier dependency system — template dependencies, master task dependencies, and cross-template dependencies. Lag days, critical path highlighting, and auto-cascade when tasks complete.",
    badge: "Core Engine",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Task Dependencies with Auto-Cascade",
    desc: "Move one task and everything downstream adjusts automatically. No manual re-dating, no broken timelines. The schedule stays tight even when reality shifts.",
    badge: "Auto-Cascade",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Gantt Charts with Critical Path",
    desc: "Visual timeline with critical path highlighting so you know exactly which tasks control your completion date. Drag-and-drop rescheduling with instant dependency recalculation.",
    badge: "Visual",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm0 0h18" />
      </svg>
    ),
    title: "Milestone Tracking",
    desc: "Define key milestones — permit approved, dry-in complete, final inspection — and track progress against them. Instant visibility into where every home stands.",
    badge: "At a Glance",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    title: "Calendar & List Views",
    desc: "Switch between calendar view for the big picture and list view for granular detail. Filter by vendor, phase, community, or status. Your schedule, your way.",
    badge: "Dual View",
  },
  // ── TEMPLATES & SETUP ──
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
    title: "Template System",
    desc: "Reusable schedule templates for every home type — 1-story, 2-story, block, frame, and 7 foundation types. Clone any template and customize per community. 270+ build combinations out of the box.",
    badge: "17 Pre-Built",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "7 Foundation Templates",
    desc: "Slab, Monolithic, Stem Wall, Crawl Space, Full Basement, Pier & Beam, and Helical Pile — each with pre-sequenced tasks tuned to that foundation type. Pick one and go.",
    badge: "7 Types",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Smart Foundation Logic",
    desc: "Select a home type and the correct foundation template auto-attaches to the schedule. No manual matching, no mistakes — the system knows which foundation fits which build.",
    badge: "Auto-Match",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "4 Modular Template Types",
    desc: "Construction, Foundation, Permitting, and Inspection — four template categories that snap together like building blocks. Mix and match to model any workflow.",
    badge: "Modular",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Template Copy & Clone",
    desc: "Duplicate any template in one click — then tweak it for a new community, floor plan, or build type. Start from proven schedules instead of blank slates.",
    badge: "One Click",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Master Task Library",
    desc: "A shared library of tasks used across all templates. Update a task once and it propagates everywhere. Consistent naming, durations, and vendor assignments — company-wide.",
    badge: "Centralized",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Permitting Templates",
    desc: "Pre-built permit sequences with the right order, dependencies, and lead times already baked in. Foundation permit, framing permit, final — all staged and ready.",
    badge: "Pre-Sequenced",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Inspection Templates",
    desc: "Punch list and walkthrough checklists built into your schedule as templates. Pre-loaded inspection items by phase — just assign and go. Nothing gets missed at sign-off.",
    badge: "Checklists",
  },
  // ── VENDOR & COMMS ──
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Vendor Management",
    desc: "Unlimited vendor profiles with community-vendor assignments. Vendor portal with magic links — no passwords needed. One-click batch confirmation lets subs confirm all tasks from a single email.",
    badge: "Zero Friction",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Smart Cascade Notifications",
    desc: "4-tier email system: Schedule Confirmation, Advance Notice, Date Moved Up, and Date Postponed. Intelligent threshold algorithm factors how far out × how much shifted. Vendor-specific lead time overrides.",
    badge: "4 Tiers",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Daily & Weekly Digests",
    desc: "Automated vendor summaries delivered on your schedule. Configurable send time and timezone per account. Every sub knows exactly what's coming up — without you lifting a finger.",
    badge: "Automated",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "In-App Messaging",
    desc: "Direct messaging between PMs, vendors, and homeowners — all inside the platform. No more texting from personal phones or losing context in email threads.",
    badge: "Real-Time",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Notification Center",
    desc: "One centralized inbox for every alert — schedule changes, vendor confirmations, permit updates, insurance expirations. Filter by type, mark as read, never miss what matters.",
    badge: "Centralized",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI Chatbot Support",
    desc: "Built-in AI assistant that answers questions about schedules, tasks, and features instantly. Get help without waiting for support tickets or digging through docs.",
    badge: "AI-Powered",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: "Jobsite Notes",
    desc: "Attach notes to any task, home, or vendor — right from the field. Timestamped, searchable, and visible to the whole team. Build a paper trail without the paper.",
    badge: "Field Ready",
  },
  // ── PORTALS & ACCESS ──
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Customer Portal",
    desc: "Milestone carousel showing 20 construction phases with real job site photos. Photo gallery, direct messaging with PMs, and one-click ZIP download of all build photos. Your buyers stay informed and excited.",
    badge: "Homeowner Facing",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Job Site Photo Uploads",
    desc: "Upload photos directly from the task view at each milestone. Photos auto-sync to the customer portal so buyers see real-time progress of their home being built — no manual sharing required.",
    badge: "Auto-Sync",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Multi-Role Access",
    desc: "12 distinct roles: Admin, Project Manager, Sales, Design Center, Purchasing, Customer, Subcontractor, Permitting, and more. Everyone sees exactly what they need — nothing more, nothing less.",
    badge: "12 Roles",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile Responsive",
    desc: "Full functionality on any device. Check schedules from the job site, confirm tasks from your truck, review progress from anywhere. No app download required.",
    badge: "Any Device",
  },
  // ── SCHEDULING OPTIONS ──
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Phase-Based Scheduling",
    desc: "Foundation → Framing → Rough-Ins → Finishes → Close. Organize tasks by construction phase with built-in sequencing. Each phase gates the next — no framing before the slab cures.",
    badge: "5 Phases",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Weekday-Only Scheduling",
    desc: "Auto-skips weekends when calculating task dates. No more manually dodging Saturdays and Sundays — the engine handles it so your schedules reflect reality.",
    badge: "Smart Dates",
  },
  // ── COMPLIANCE & CLOSING ──
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Permit Gate System",
    desc: "Phase-based locking prevents downstream construction tasks from starting until permits are cleared. Toggle on or off per account — your workflow, your rules.",
    badge: "Compliance",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Closing Workflow",
    desc: "6-step closing process: Certificate of Occupancy → Orientation → Punch List → Sign-Off → Closing Docs → Home Closed. Every step tracked, nothing falls through the cracks.",
    badge: "6 Steps",
  },
  // ── DATA IMPORT ──
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    title: "Import from Any Platform",
    desc: "Migrating from BuilderTrend, CoConstruct, or spreadsheets? Upload your data and we'll map it. No re-entry, no lost history — just a clean transition to Cornerstone.",
    badge: "Migration",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Universal Column Mapper",
    desc: "Drag-and-drop column mapping that works with any CSV or Excel export. Match your columns to Cornerstone fields visually — no formulas, no formatting gymnastics.",
    badge: "Drag & Drop",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Smart Column Recognition",
    desc: "AI-assisted column detection auto-suggests field mappings based on your headers. Most imports map themselves — just review, confirm, and go.",
    badge: "AI-Assisted",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "100% Additive Imports",
    desc: "Imports only add data — they never overwrite or delete existing records. Run multiple imports safely. Your current schedules and vendors stay untouched.",
    badge: "Safe",
  },
  // ── INSURANCE & DOCS ──
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Vendor Insurance Expiry Alerts",
    desc: "Automatic alerts when a vendor's insurance is expiring or already lapsed. Stop chasing certificates manually — Cornerstone watches the dates so you don't have to.",
    badge: "Auto-Alert",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Document Management",
    desc: "Upload, organize, and share contracts, permits, insurance certs, and plans. Everything lives in one place — attached to the right vendor, home, or community.",
    badge: "Organized",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Branded Insurance Request Emails",
    desc: "Send professional, company-branded emails requesting updated insurance certificates directly from the platform. Your logo, your message — sent in seconds.",
    badge: "Branded",
  },
  // ── WARRANTY ──
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "2-Year Warranty Tracking",
    desc: "Track every warranty request from submission to resolution across a full 2-year window. Categorize by trade, assign vendors, and close the loop — all in one place.",
    badge: "Post-Close",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: "Service Categories",
    desc: "Plumbing, electrical, HVAC, structural, cosmetic — categorize warranty items by trade so the right vendor gets the right ticket. Clean reporting, faster resolution.",
    badge: "By Trade",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Customer Status Tracking",
    desc: "See where every homeowner stands post-close — active warranty, pending items, resolved history. One dashboard for the entire warranty lifecycle per customer.",
    badge: "Lifecycle",
  },
];

export default function ConstructionFeatures() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <AnimateOnScroll className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Construction Scheduling
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Build homes,{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              not spreadsheets
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Smart scheduling that auto-cascades dependencies, notifies vendors instantly, and keeps every
            stakeholder in the loop — from permits to punch list.
          </p>
        </AnimateOnScroll>

        {/* Pricing callout */}
        <AnimateOnScroll className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900/80 border border-slate-800/50">
            <span className="text-3xl font-extrabold text-white">$59.99</span>
            <span className="text-slate-400">/month</span>
            <span className="text-slate-600">·</span>
            <span className="text-sm text-slate-400">Unlimited homes &amp; users</span>
          </div>
        </AnimateOnScroll>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div className="group relative h-full p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-amber-500/30 transition-all duration-300 hover:bg-slate-900/80">
                {/* Badge */}
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-amber-500/60">
                  {f.badge}
                </span>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-amber-500/10 text-amber-400 mb-5 group-hover:bg-amber-500/20 transition-colors">
                  {f.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Workflow visual */}
        <AnimateOnScroll className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              From dirt to{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                closing day
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              One connected workflow. Every phase, every stakeholder, every notification — handled.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { step: "1", label: "Templates", sub: "Build your playbook" },
              { step: "2", label: "Schedule", sub: "Auto-cascade dates" },
              { step: "3", label: "Notify", sub: "Vendors get alerted" },
              { step: "4", label: "Track", sub: "Real-time progress" },
              { step: "5", label: "Close", sub: "6-step workflow" },
              { step: "6", label: "Deliver", sub: "Happy homeowner" },
            ].map((s, i) => (
              <div
                key={i}
                className="relative p-4 rounded-xl bg-slate-900/80 border border-slate-800/50 text-center group hover:border-amber-500/30 transition-all"
              >
                <div className="text-2xl font-extrabold text-amber-500/40 mb-1">{s.step}</div>
                <div className="text-sm font-bold text-white">{s.label}</div>
                <div className="text-xs text-slate-500 mt-1">{s.sub}</div>
                {i < 5 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-slate-700">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Bottom CTA */}
        <AnimateOnScroll className="text-center mt-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              streamline your builds?
            </span>
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Join our beta and get 5 years free. All construction scheduling features included — no feature gates, no per-home pricing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#cta"
              className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:from-amber-400 hover:to-orange-400 transition-all"
            >
              Get Free Beta Access
            </a>
            <a
              href="/features/purchasing"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-2xl border border-slate-700 text-slate-300 hover:border-cyan-500/50 hover:text-white transition-all"
            >
              See Purchasing Features →
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
