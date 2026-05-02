import type { MetadataRoute } from "next";

const BASE = "https://cornerstonepm.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number; changeFreq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFreq: "weekly" },

    // Pillar pages
    { path: "/home-builder-project-management", priority: 0.95, changeFreq: "weekly" },
    { path: "/construction-scheduling-software", priority: 0.95, changeFreq: "weekly" },
    { path: "/home-builder-software", priority: 0.95, changeFreq: "weekly" },
    { path: "/ai-agents", priority: 0.9, changeFreq: "weekly" },
    { path: "/ai-takeoff", priority: 0.9, changeFreq: "weekly" },
    { path: "/ai-scheduling", priority: 0.9, changeFreq: "weekly" },

    // Feature/cluster pages
    { path: "/features", priority: 0.85, changeFreq: "weekly" },
    { path: "/features/construction", priority: 0.85, changeFreq: "weekly" },
    { path: "/features/purchasing", priority: 0.85, changeFreq: "weekly" },
    { path: "/features/sales", priority: 0.85, changeFreq: "weekly" },
    { path: "/design", priority: 0.85, changeFreq: "weekly" },
    { path: "/permitting", priority: 0.85, changeFreq: "weekly" },

    // Conversion / company
    { path: "/beta", priority: 0.9, changeFreq: "monthly" },
    { path: "/about", priority: 0.7, changeFreq: "monthly" },
    { path: "/blog", priority: 0.8, changeFreq: "weekly" },

    // Blog posts
    { path: "/blog/60-second-home-sale", priority: 0.7, changeFreq: "monthly" },
    { path: "/blog/buildertrend-vs-cornerstone", priority: 0.75, changeFreq: "monthly" },
    { path: "/blog/spreadsheets-killing-schedule", priority: 0.7, changeFreq: "monthly" },

    // Legal
    { path: "/privacy", priority: 0.3, changeFreq: "yearly" },
    { path: "/terms", priority: 0.3, changeFreq: "yearly" },
    { path: "/service-limits", priority: 0.3, changeFreq: "yearly" },
  ];

  return pages.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFreq,
    priority: p.priority,
  }));
}
