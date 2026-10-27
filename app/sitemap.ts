import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { blogPosts } from "./blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/work/tradeimex-search`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ...blogPosts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
