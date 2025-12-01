// app/blog/posts.ts

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-every-business-needs-a-clean-fast-website",
    title: "Why Every Business Needs a Clean, Fast Website (Developer’s Perspective)",
    excerpt:
      "Most business owners underestimate how much a slow or cluttered website is costing them. Here’s how a well-built site impacts trust, conversions, and revenue.",
    content: `
As a developer working with brands, agencies, and data companies, I’ve seen one pattern repeat: most businesses treat their website like a brochure, not a revenue channel.

In this post, I break down why a clean, fast website matters more than ever, and what I focus on when building sites for fashion brands, coaches, and B2B data platforms:

1. First impressions: how design and speed impact trust.
2. Performance: why page load time directly affects conversions.
3. UX and clarity: making it easy for users to take action.
4. Tech stack choices: when I use Shopify, Laravel, or Next.js.
5. Real examples from projects like Khanijo, 11Tareng, and Tradeimex.

This is written for non-technical founders and business owners who want to understand how a good website translates to actual ROI, not just “looking nice on the internet”.
`,
    publishedAt: "2025-11-30",
    readTime: "6 min read",
    tags: ["Web Development", "Business", "Performance", "UX"],
  },
];

export function getAllPosts() {
  // newest first
  return [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  );
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}