import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Blog — Cornerstone Builder Software",
  description:
    "Insights on construction scheduling, home builder software, and how production builders can run leaner, faster operations.",
};

const posts = [
  {
    slug: "spreadsheets-killing-schedule",
    title: "Why Spreadsheets Are Killing Your Construction Schedule",
    date: "April 10, 2026",
    readTime: "6 min read",
    excerpt:
      "Manual scheduling in Excel feels like control — until one vendor moves a date and your entire schedule falls apart. Here's what cascading failures actually cost production home builders.",
    tag: "Scheduling",
  },
  {
    slug: "60-second-home-sale",
    title: "How to Create a New Home Sale in Under 60 Seconds",
    date: "April 12, 2026",
    readTime: "5 min read",
    excerpt:
      "Walk through Cornerstone's complete sales pipeline — from buyer info and structural options to auto-budget generation and permitting handoff — in one seamless workflow.",
    tag: "Sales Pipeline",
  },
  {
    slug: "buildertrend-vs-cornerstone",
    title: "BuilderTrend vs Cornerstone PM: What Production Home Builders Actually Need",
    date: "April 14, 2026",
    readTime: "7 min read",
    excerpt:
      "BuilderTrend is the industry default. But is it right for builders doing 10–50 homes a year? An honest comparison focused on simplicity, price, and features that actually matter.",
    tag: "Comparison",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative py-32 sm:py-40">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
          <div className="absolute inset-0 grid-pattern opacity-20" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Resources</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 mb-4">
                The Builder&apos;s <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-lg text-slate-400">
                Insights on scheduling, software, and running a tighter operation.
              </p>
            </div>

            <div className="space-y-8">
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block p-8 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-900/80"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
                      {post.tag}
                    </span>
                    <span className="text-slate-500 text-sm">{post.date}</span>
                    <span className="text-slate-600 text-sm">·</span>
                    <span className="text-slate-500 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm text-cyan-400 font-medium">
                    Read article
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
