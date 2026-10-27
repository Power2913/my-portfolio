import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { blogPosts } from "./posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Articles by Shakti Raghav on Shopify development, Laravel, performance and practical web development for real businesses.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
}

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <>
      <SiteHeader base="/" />
      <main className="mx-auto flex max-w-[960px] flex-col gap-10 px-4 pb-24 pt-10 sm:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 font-mono text-[12px] text-dim">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <span className="text-muted">Writing</span>
        </nav>

        <header className="flex flex-col gap-3">
          <p className="font-mono text-[13px] tracking-[0.04em] text-accent">WRITING</p>
          <h1 className="text-[clamp(34px,4.5vw,52px)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Articles &amp; notes
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            On building fast Shopify stores, scalable Laravel and Vue platforms, and what a well-built
            website actually does for a business.
          </p>
        </header>

        <section className="flex flex-col gap-5">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="tilt flex flex-col gap-3 rounded-[20px] border border-line bg-surface p-6"
            >
              <p className="font-mono text-[12px] text-dim">{formatDate(post.publishedAt)}</p>
              <h2 className="text-xl font-semibold sm:text-2xl">
                <Link href={`/blog/${post.slug}`} className="transition hover:text-accent">
                  {post.title}
                </Link>
              </h2>
              <p className="text-[15px] leading-relaxed text-muted">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-line2 px-2.5 py-0.5 font-mono text-[11px] text-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="inline-flex min-h-11 items-center text-sm font-medium text-accent hover:text-accent-hi">
                Read article →
              </Link>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
