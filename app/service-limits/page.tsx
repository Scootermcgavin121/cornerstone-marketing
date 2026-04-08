import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Service Limits | Cornerstone PM",
  description:
    "Storage limits, file restrictions, and fair use policies for Cornerstone PM.",
};

const storageLimits = [
  {
    module: "Construction",
    limit: "150 GB",
    includes: [
      "Task & milestone photos",
      "Home documents",
      "Company documents",
      "Message attachments",
      "User avatars & logos",
    ],
  },
  {
    module: "Purchasing",
    limit: "200 GB",
    includes: [
      "Bid documents",
      "Floorplan plans & specs",
      "Design package images",
      "Parts catalog imports",
      "Vendor compliance documents",
    ],
  },
];

const fileLimits = [
  { label: "Maximum file size", value: "50 MB per file" },
  {
    label: "Supported image formats",
    value: "JPG, PNG, WebP, HEIC, GIF, SVG",
  },
  {
    label: "Supported document formats",
    value: "PDF, DOC, DOCX, XLS, XLSX, CSV, TXT",
  },
  {
    label: "Image compression",
    value: "Automatic — WebP at quality 85, max 2400px, metadata stripped",
  },
];

const entityDescriptions: Record<string, string> = {
  Homes: "Active and archived homes/projects",
  Vendors: "Subcontractor & supplier companies",
  Users: "Team members with login access",
  Floorplans: "Floor plan models with templates",
  "Schedule Templates": "Construction schedule templates",
  "Master Tasks": "Tasks across all templates",
  "Budget Lines": "Base budget line items across all budgets",
  Takeoffs: "Material takeoff entries (base + room-level)",
  Bids: "Vendor bid submissions",
  "Purchase Orders": "Generated POs",
  "Parts Catalog": "Catalog parts with pricing",
  Options: "Design center upgrade options",
};

export default function ServiceLimits() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Service Limits
          </h1>
          <p className="text-slate-400 mb-12">
            These limits apply to all plans. We believe in generous defaults —
            most builders will never hit these.
          </p>

          {/* Storage */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-cyan-400">📦</span> Storage
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {storageLimits.map((s) => (
                <div
                  key={s.module}
                  className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6"
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">
                      {s.module}
                    </h3>
                    <span className="text-2xl font-extrabold gradient-text">
                      {s.limit}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-3">
                    Per organization
                  </p>
                  <ul className="space-y-2">
                    {s.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <svg
                          className="w-4 h-4 text-emerald-400 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* File Restrictions */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-cyan-400">📄</span> File Restrictions
            </h2>
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 overflow-hidden">
              {fileLimits.map((f, i) => (
                <div
                  key={f.label}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 ${
                    i < fileLimits.length - 1
                      ? "border-b border-slate-700/30"
                      : ""
                  }`}
                >
                  <span className="text-sm font-medium text-white">
                    {f.label}
                  </span>
                  <span className="text-sm text-slate-400 mt-1 sm:mt-0">
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Record Tracking */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-cyan-400">📊</span> Records
            </h2>
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 mb-6">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-lg font-semibold text-white">
                  Total Record Limit
                </span>
                <span className="text-2xl font-extrabold gradient-text">
                  500,000
                </span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wide mb-3">
                Per organization — across all entity types combined
              </p>
              <p className="text-sm text-slate-400">
                This includes homes, vendors, users, floorplans, templates,
                budget lines, takeoffs, bids, purchase orders, parts, and
                options. Most builders use a fraction of this. If you need
                more, contact us — we&apos;re happy to work with high-volume
                operations.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-slate-700/20">
                {Object.entries(entityDescriptions).map(([entity, desc]) => (
                  <div key={entity} className="bg-slate-800/60 p-4">
                    <p className="text-sm font-semibold text-white">{entity}</p>
                    <p className="text-xs text-slate-500 mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-cyan-400">🤖</span> AI Assistant
            </h2>
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 space-y-3 text-sm text-slate-300">
              <p>
                The in-app AI chatbot is included with all plans at no
                additional cost. Usage is subject to fair-use limits that may be
                adjusted based on demand.
              </p>
              <p>
                AI-generated responses are for informational purposes only and
                should not be relied upon as legal, financial, engineering, or
                construction compliance advice.
              </p>
            </div>
          </section>

          {/* Fair Use */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-cyan-400">🤝</span> Fair Use Policy
            </h2>
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6 space-y-3 text-sm text-slate-300">
              <p>
                Cornerstone PM is designed for construction companies to manage
                their projects, vendors, and purchasing workflows. We expect
                normal business use.
              </p>
              <p>We reserve the right to limit or suspend access if we detect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Automated scraping or bulk data extraction</li>
                <li>Sharing a single account across multiple organizations</li>
                <li>
                  Activity that degrades performance for other users
                </li>
                <li>Use of the platform for purposes other than construction management</li>
              </ul>
              <p>
                We&apos;ll always reach out before taking action — no surprise
                shutdowns.
              </p>
            </div>
          </section>

          {/* Questions */}
          <section>
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 text-center">
              <p className="text-white font-semibold mb-2">
                Questions about limits?
              </p>
              <p className="text-sm text-slate-400 mb-4">
                If you think you&apos;ll exceed these limits, let&apos;s talk.
                We&apos;re happy to work with high-volume builders.
              </p>
              <a
                href="mailto:support@cornerstonepm.ai"
                className="inline-block px-6 py-2 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
