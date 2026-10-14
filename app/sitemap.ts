import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://read.notcodesid.com";
  return [
    {
      url: `${base}/`,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${base}/support`,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/privacy`,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
