# Cornerstone Builder Software â€" Product Knowledge

## Overview
Cornerstone is construction scheduling software built specifically for residential home builders. Our slogan is **"Built by builders, for builders"** â€" because the founders are builders themselves who got tired of clunky, overpriced software that wasn't designed for how residential construction actually works.

Website: https://cornerstonepm.ai

## What Cornerstone Does
Cornerstone helps residential builders schedule, track, and manage their construction projects from start to finish. It replaces spreadsheets, whiteboards, and the chaos of managing builds through texts and phone calls.

## Core Features

### Task Scheduling & Dependencies
- Create tasks with start/end dates
- Set dependencies between tasks (Task B can't start until Task A is done)
- **Auto-shifting**: When a task slips, all dependent tasks automatically shift forward â€" no manual rescheduling
- Drag-and-drop scheduling

### Vendor Portal
- Vendors (subs/suppliers) get their own login
- **Self-registration** — send vendors a one-time invite link and they fill in all their own info (company, scopes, contact details, password). Zero admin data entry.
- Email verification required before sign-in
- They can **confirm or decline** assigned tasks
- See only what's relevant to them — their upcoming work, dates, and details
- **Configurable document requirements** — toggle SOW, W-9, GL, and WC on/off per account
- Reduces phone calls and miscommunication

### PM Ready / Vendor Ready Workflow
- Two-step readiness system: the PM marks a task as "PM Ready" (site is prepped), then the vendor marks "Vendor Ready" (they're confirmed to show up)
- Everyone knows the real status â€" no guessing

### Views
- **Gantt Charts**: Visual timeline of the entire project
- **Calendar View**: See what's happening day by day, week by week
- **List View**: Simple task list with filters

### Phase Management
- Organize tasks into construction phases (Foundation, Framing, MEPs, Drywall, Finishes, etc.)
- Track progress by phase

### Milestone Tracking
- Set key milestones (e.g., "Frame Complete", "Drywall Hung", "Final Inspection")
- Monitor project progress against milestones

### Permit Gates
- Create permit gates that block downstream work until permits are obtained
- Prevents scheduling errors when permits are pending

### Document Management
- Upload and organize project documents
- Attach documents to specific tasks, phases, or the project level
- Keep plans, specs, and permits in one place

### Insurance Tracking
- Track vendor/sub insurance certificates and expiration dates
- **30-day auto-notifications**: Automatically notifies vendors when their insurance is expiring within 30 days
- Stay compliant without manual tracking

### Communication & Notifications
- Email notifications for task assignments, schedule changes, and updates
- Keep everyone in the loop automatically

### Import & Export
- **Import from Excel**: Upload your existing schedules and templates from Excel/CSV â€" no need to start from scratch
- **Export to Excel**: Export schedules and data for reporting, sharing with owners/lenders, or backup
- Generate reports for owners, lenders, or internal use

### Multi-Community Support
- Manage multiple communities/subdivisions from one account
- Great for production builders running several neighborhoods

### Role-Based Access
- **Admin**: Full access to everything â€" settings, users, all projects
- **Project Manager (PM)**: Manage assigned projects, schedules, vendors
- **Vendor**: Limited access â€" see and respond to their assigned tasks only

## Pricing
All plans are monthly subscriptions, no long-term contracts required.

| Plan | Price | Best For |
|------|-------|----------|
| **Starter** | $60/month | Unlimited homes & projects. Self-service - perfect for builders who don't need hand-holding. |
| **Pro** | $120/month | Unlimited homes & projects. Includes dedicated human support & onboarding assistance. |
| **Enterprise** | $250/month | Unlimited homes & projects. Priority human support, custom onboarding, and account management. |

Visit https://cornerstonepm.ai for full pricing details and feature comparison.

## Target Audience
- **Residential home builders** (custom and production)
- **Custom home builders** building 5-50+ homes per year
- **Production/volume builders** managing multiple communities
- **Construction project managers** looking for better scheduling tools

## Who Cornerstone is NOT For
- Commercial construction (office buildings, retail, industrial)
- Civil engineering / heavy highway
- Renovation-only companies (though some features may still help)
- General contractors doing non-residential work

## Why Cornerstone Over Competitors

### The Industry Problem
- Most construction software companies make you **schedule a demo** before you can even see the product
- You sit through a 30-60 minute sales pitch, then they hit you with **$500-$1,000+/month** pricing
- You're locked into annual contracts before you even know if the software works for your workflow
- Cornerstone is different: **transparent pricing starting at $60/month**, no long-term contracts, and you can explore a live demo yourself â€" no sales call required. We believe the product should sell itself.

### vs. Buildertrend
- Buildertrend is bloated with features most builders don't use (CRM, proposals, selections, financial tools)
- Cornerstone focuses on **scheduling done right** â€" the #1 thing builders need
- Much more affordable â€" Buildertrend starts at $499/month and requires a demo/sales presentation before you can even try it
- Simpler to learn and adopt, less training overhead
- No annual contract required

### vs. CoConstruct
- CoConstruct is expensive and complex, designed for high-end custom builders
- Requires a demo call before you see pricing â€" typical setup to justify high monthly fees
- Cornerstone is simpler, faster to set up, and works for both custom and production builders
- Better vendor portal experience
- Transparent pricing â€" no surprises after a sales pitch

### vs. Spreadsheets / Excel
- Spreadsheets don't auto-shift when things change
- No vendor portal â€" you're still calling and texting
- No real-time visibility for the team
- Cornerstone gives you everything a spreadsheet can't: automation, collaboration, and real-time updates

### vs. Generic PM Tools (Monday.com, Asana, etc.)
- Those tools don't understand construction workflows
- No concept of phases, permit gates, or vendor confirmation
- Cornerstone speaks builder language â€" scopes, subs, punch lists

## Company Values
- Built by people who've actually run job sites
- No corporate buzzwords â€" we talk like builders because we are builders
- Focused on scheduling because that's what makes or breaks a project
- Fair pricing â€" we're not trying to be the most expensive tool in the shed

## Getting Started
- Sign up at https://cornerstonepm.ai
- Free trial available
- Setup takes minutes, not days
- Support team available to help with onboarding

## Getting in Touch
- **Demo site**: We have a live demo site where builders can explore the product hands-on - no signup required. (Link TBD - will be added once demo site is live)
- **Email**: support@cornerstonepm.ai for questions the chatbot can't answer
- **Sign up**: https://cornerstonepm.ai to create an account


---

# Detailed Feature Documentation

# Cornerstone Builder Software â€" Feature Highlights & Selling Points

> *Built by builders, for builders.*

_Last updated: 2026-03-02_

A summary of key features and differentiators for the Cornerstone Builder Software construction scheduling platform.

---

## ðŸ-ï¸ Construction Scheduling Engine
- **Phase-based scheduling** with 12 construction phases + permitting phase
- **Task dependencies** with automatic downstream cascading when dates shift
- **Weekday-only scheduling** respecting US federal holidays + custom overrides
- **Milestone tracking** with progress percentages per task
- **Permit gate system** â€" construction phases stay locked until building permit is received. Configurable via Settings toggle (ON by default) â€" disable to allow all tasks to proceed without permit approval.
- **Smart cascading** â€" auto-sets start/end dates when tasks are marked in-progress or complete

## ðŸ"‹ Template System
Three template types work together to cover the full construction lifecycle:
- **Construction templates** â€" define the full build sequence from sitework through landscaping. Variants for foundation types (basement, crawlspace, slab) and story count (1-story, 2-story).
- **Permitting templates** â€" define the permit application and approval workflow. Gate task ("Building Permit Received") unlocks the construction schedule when complete.
- **Inspection templates** â€" 20 granular inspection scopes (footing, framing, mechanical, final building, etc.) that can be independently assigned to either internal users or external vendors per community. This matters because not all inspections are handled the same way: a **Mechanical Rough-In Inspection** might be performed by a private third-party inspection company (vendor), while a **Foundation Inspection** is scheduled through the local municipality â€" since county inspectors won't create app logins, the PM is assigned as the coordinator. Each community can configure this differently based on local jurisdiction requirements.

## ðŸ"¥ Data Import System â€" Migrate from Anywhere
Builders switching from BuilderTrend, CoConstruct, Procore, or spreadsheets can bulk-import their existing data from a single page (`/admin/import`):

### 8 Importers (recommended order):
1. **Scopes** â€" import scope names from Excel/CSV. Shows new vs already-existing. Simple one-column format.
2. **Master Tasks** â€" import task library with phases, durations, dependencies, milestone/PM/PA flags. Full diff preview with field-level changes.
3. **Vendors** â€" company info, contacts, emails, phones, scopes. Universal Column Mapper for any format.
4. **Communities** â€" name and state. Matches existing by name (case-insensitive).
5. **Homes** â€" import every home you currently have under construction, in pre-construction, or even completed/closed builds you want on record. Just provide address, lot, community, status, and optional start date. PM and Permitting Agent are auto-assigned. Additive only (no deletions).
6. **Users/Team** â€" name, email, role. Creates accounts with temporary passwords. Additive only (no deletions).
7. **Vendor-Community Assignments** â€" links vendors to communities with scope defaults. Additive only.
8. **Templates** â€" schedule templates with task matching. Auto-creates missing master tasks (optional).

### Key Features:
- **Universal Column Mapper** â€" upload any Excel/CSV file and map its columns to Cornerstone Builder Software fields via dropdowns. Handles duplicate column names (shows "#1", "#2"). No reformatting needed â€" works with exports from any platform.
- **Diff Preview** before applying â€" see exactly what will be added or modified with field-level change tracking
- **Validation warnings** â€" catches duplicates, missing scope references, invalid data before import
- **Download templates** â€" pre-formatted Excel templates with example data for each import type
- **100% additive** â€" no importer deletes existing records. Add new data and update existing, but never remove. Manual deletion available from individual admin pages.
- **Accepts .xlsx and .csv** formats

All three are **independent and composable** â€" mix and match any permitting template with any construction template and any inspection template without creating duplicates for every combination.
- **Why this matters:** A builder with 5 communities and 3 floorplans doesn't need 15+ templates. One permitting template + one inspection template + a few construction templates covers everything. Templates run in sync once applied â€" permitting, inspection, and construction tasks auto-cascade alongside each other on the same timeline.
- **Master task library** with canonical definitions shared across all templates â€" change a task once, it updates everywhere
- **One-click template application** with configurable start date

## ðŸ"" Insurance, Compliance & Document Management

### Vendor Document Uploads
Each vendor can upload and manage the following documents:
- **General Liability Certificate (GL COI)** â€" with expiration date tracking
- **Workers Compensation Policy (WC)** â€" with expiration date tracking
- **W-9 / 1099** â€" tax documentation
- **Scope of Work (SOW)** â€" requires admin/permitting agent verification (verify/unverify toggle)

All documents maintain a full upload history with timestamps â€" previous versions are preserved, not overwritten.

### Expiration Monitoring & Notifications
- **Dashboard warnings** â€" admin dashboard shows vendors with expiring or expired insurance
- **Vendor dashboard alerts** â€" vendors see banner warnings when their own docs are expiring/expired
- **Automated email notifications:**
  - Sent **30 days before expiration** for GL and WC policies
  - **Reminder emails every 7 days** thereafter until a new certificate with updated expiry is uploaded
  - Emails sent to admin + vendor's scheduling/contact email addresses
  - Notifications created in-app alongside email delivery
- **Daily cron job** runs the expiry check automatically

### SOW Verification
- Admins and permitting agents can **verify** a vendor's Scope of Work document
- Verified status shown with timestamp and verifier name
- Can be unverified if SOW needs updating

## ðŸŽ¨ Branding & Customization
- **Company branding** â€" custom logo uploads (icon, dark, light variants)
- **Dark/Light mode** toggle
- **White-label ready** â€" company name configurable in settings, "Powered by Cornerstone Builder Software" badge

## ðŸ'· Vendor Portal â€" Built for Builders AND Subs

### Secure, Scoped Access
Vendors (subcontractors) get their own login with a purpose-built dashboard that shows only what they need â€" nothing more.

### Vendor Task Visibility
- **Active tasks:** Vendors see ONLY their own assigned tasks across all homes
- **Completed tasks:** Vendors see ALL completed tasks for project timeline visibility, but **vendor/assignee names are hidden** on tasks not assigned to them
- **Why this matters:** Builders protect their proprietary vendor lists â€" subs can't export or share which companies are assigned to other scopes. This is a real concern in residential construction where vendor relationships are competitive advantages.

### Vendor Dashboard
- **My Homes** view grouped by community with next-task, estimated date, and progress
- **Task filter dropdown** â€" filter homes by specific task type (e.g., show only homes needing "Hardwood / LVP Flooring Install")
- **Active vs. Completed toggle** with counts
- **Upcoming & Overdue Tasks** panel with confirm/decline actions

### Vendor Calendar & Export
- **ðŸ"… Printable calendar view** (`/vendor-calendar`) â€" month grid showing all scheduled tasks across homes
- **Color-coded entries:** cyan (in progress), green (confirmed), red (declined), gray (pending)
- **Task filter** â€" filter calendar to specific task types (e.g., just carpet jobs)
- **Month navigation** â€" browse forward/backward through schedule
- **ðŸ-¨ Print-optimized** â€" landscape layout, navbar hidden, print-friendly colors, plus a clean **task list table** on page 2 for easy reading
- **ðŸ"Š Excel/CSV export** â€" one-click download with date, task, address, lot, community, duration, status. Respects active filter. File auto-named (e.g., `schedule-march-2026-carpet-install.csv`)
- **Why this matters:** Subs can print their monthly schedule, stick it on the wall at the shop, hand it to crews, or import into their own systems. No more calling the builder's office to ask "when am I at Lot 7?"

### Three-State Task Confirmation
- âœ… **Confirmed** â€" vendor accepts the scheduled task
- âŒ **Declined** â€" vendor can't make it (triggers notifications to PM + Permitting Agent)
- â˜ **Pending** â€" awaiting vendor response
- Confirming and declining are mutually exclusive (one clears the other)

### Vendor Notifications
- ðŸ"" **In-app notification bell** + dedicated **/notifications page**
- Vendors receive notifications when tasks are confirmed or declined on their behalf
- PMs and Permitting Agents receive notifications when vendors confirm or decline
- Click-to-navigate from notification to the relevant home

### Magic Link Access
- Vendors can access their portal via secure magic link (no password required)
- Token-based authentication tied to vendor record

## ðŸ"" Notification System
- **Phase 1:** Vendor confirm/decline notifications to PM + Permitting Agent + Vendor
- **Phase 2 (planned):** Email notifications for declines, daily digest of confirmations
- Bell icon with animated unread badge, 30-second polling
- Full notifications page with mark-as-read (individual + bulk)

## ðŸ"¬ Messaging System
- **In-app messaging** between builders and vendors per task
- **Threaded conversations** tied to specific tasks and homes
- **File attachments** via Vercel Blob (drag & drop, up to 5 files / 10MB each) â€" _TODO: increase to 30MB per file when on production database_
- **Smart recipient routing:** vendor user â†' vendor email â†' task assignee â†' PM/PA â†' warning
- **Floating chat bubble** with unread count badge and red ping animation

## ðŸ˜ï¸ Community & Home Management
- Multi-community support with per-community vendor assignments
- **Auto-assign vendors** to tasks based on community scope defaults
- Home detail page with sticky header (address, community, PM, lot always visible)
- Construction progress bar with phase-by-phase breakdown
- **Task urgency color coding:**
  - ðŸ"´ **Red dates** â€" task end date is past due (overdue)
  - ðŸŸ¡ **Yellow dates** â€" task end date is within 3 days (due soon)
  - âšª **Normal dates** â€" task end date is more than 3 days out
  - Row highlighting matches: red left border for overdue, yellow left border for due soon
  - Completed and locked tasks are excluded from urgency highlighting
- **Bulk Mark as Complete:** Checkbox column on task tables allows selecting multiple tasks and marking them all complete at once via a floating action bar. Useful for onboarding homes already under construction.

## ðŸ"Š Dashboard
- Role-specific views (Admin, PM, Permitting, Vendor, Customer)
- KPI cards: completed homes, in-progress, overdue tasks, expiring insurance
- Overdue task alerts with vendor decline warnings (last 24h)
- Recent activity feed

## ðŸ"š Master Task Library

The Master Task Library is the single source of truth for all task definitions. Changes here propagate to templates.

### Task Dependencies
- Dependencies define which tasks must complete before another can start (e.g., "Drywall" can't start until "Framing" and "Electrical Rough-In" are done)
- In the UI, click **"+ Add"** or the **âœŽ** icon in the Task Dependencies column to open a search/select picker
- Dependencies are shown as removable pills â€" click âœ• to remove one
- The scheduling engine uses dependencies to auto-cascade dates: when a task's dates shift, all downstream dependent tasks shift too

### Sort Order vs Dependencies
- **Sort Order** is for **display only** â€" it controls the visual position of tasks in lists and schedules
- **Task Dependencies** control the **scheduling engine** â€" a task won't start until all its dependencies are complete
- These are completely independent systems. Changing sort order never affects dates or scheduling logic.

### Excel Import/Export
- **Export** downloads the full library as a branded `.xlsx` with phase grouping, color coding, and an info note explaining sort order vs dependencies
- **Import** reads an `.xlsx` file and shows a diff preview before applying (also available on `/admin/import` â†' Master Tasks tab):
  - New tasks and modified tasks shown separately (additive only â€" no deletions)
  - **Task Dependencies column** uses comma-separated task names (e.g., `Framing, Electrical Rough-In`)
  - The parser matches dependency names against existing tasks â€" typos are caught with warnings like *"Drywall" depends on "Framng" which doesn't exist*
  - Sort Order column accepts numbers (0, 1, 2â€¦) for display ordering
  - Accepts both "Task Dependencies" and "Depends On" as column headers for backward compatibility
  - **Inspection scope protection:** PM Auto-Assign values for any task with an Inspection scope are ignored on import â€" inspection assignments are configured per community (some go to PM for municipality inspections, others to private vendors)

---

## ðŸ"Š Excel Exports
All exports feature a consistent branded header with builder logo, company name, and professional formatting.

### Home Schedule Export
- **From:** Home detail page â†' "Export Excel" button
- **Contents:** Full construction schedule grouped by phase, with task name, scope, duration, start/end dates, assigned vendor, PM Ready, Vendor Ready, status, % complete
- **Vendor-aware:** When a vendor exports, they see ONLY their own tasks â€" builder's full vendor list is never exposed
- **Formatting:** Phase-colored group headers, alternating row colors, thick borders between phases, status color coding

### Vendor Calendar Export
- **From:** Vendor Calendar page â†' "Export" button
- **Contents:** All scheduled tasks for the visible month: date, end date, task, address, lot, community, duration, status (confirmed/declined/pending)
- **Respects filters:** If filtered to a specific task type or home, export matches what's on screen
- **Auto-named:** e.g., `schedule-march-2026-carpet-install.xlsx`

### Upcoming & Overdue Tasks Export
- **From:** Dashboard â†' Upcoming & Overdue Tasks section â†' "Export Excel" button
- **Contents:** Tasks due in next 7 days + overdue: task name, community, address, lot, status, PM ready, vendor ready, date
- **Role-aware columns:** Vendors see "Builder Ready / Confirm", builders see "PM Ready / Vendor Ready"
- **Overdue highlight:** Overdue rows get a light red tint for quick visual identification

### My Tasks Export
- **From:** Dashboard â†' My Tasks section â†' "Export" button
- **Contents:** All vendor-assigned tasks grouped by community: address, lot, PM, next task, estimated date, completed/total tasks, progress %
- **Tab-aware:** Exports either "In Progress" or "Completed" tasks based on active tab

## ðŸ" Role-Based Access Control

### Builder-Side Roles

**Admin**
- Full access to everything â€" homes, vendors, templates, settings, user management
- Can create/edit communities, assign vendors, manage master task library
- Access to all reports, exports, and configuration
- Can impersonate other roles for testing

**Project Manager (PM)**
- Dashboard with assigned homes and overdue task alerts
- Full schedule management on assigned homes (edit dates, mark tasks, cascade)
- Messaging with vendors on assigned homes
- Notifications for vendor declines, task completions, schedule changes
- Auto-assigned to tasks flagged with "PM Auto-Assign" in master task library

**Permitting Agent (PA)**
- Dashboard with permitting-focused views
- Access to all homes for permitting task management
- Customer management (homeowner contact info)
- Auto-assigned to all PERMITTING phase tasks on home creation
- Messaging and notifications

**Sales / Design** _(planned)_
- Limited access for customer-facing roles

### External Roles

**Vendor (Subcontractor)**
- Scoped dashboard showing only their assigned tasks across all homes
- Confirm/decline tasks with timestamped tracking
- Vendor calendar with month view of upcoming work
- Messaging with builder team per home
- My Company page for company profile, insurance docs, W-9 uploads
- Builder Contacts directory
- Excel exports (filtered to own data only â€" never sees other vendors)
- **Vendor Admin** sub-role: can edit company info, manage team members, invite users
- **Vendor Member** sub-role: same access as above minus company management
- Magic link login (no password required)

**Customer (Homeowner)**
- Read-only progress view of their home under construction
- See task completion %, milestone status, estimated timeline
- No access to vendor details, costs, or internal notes

## ðŸ-ï¸ Architecture
- **Multi-tenant ready** â€" architected with future SaaS in mind
- **Next.js 16** App Router with server/client components
- **Prisma ORM** with PostgreSQL (Neon for production)
- **Vercel deployment** with auto-deploy from GitHub
- **Middleware-based route protection** per role

---

_For technical details, see [ARCHITECTURE.md](./ARCHITECTURE.md). For messaging specs, see [MESSAGING_SPEC.md](./MESSAGING_SPEC.md)._


---
