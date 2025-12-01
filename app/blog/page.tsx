import Link from "next/link";
import { blogPosts } from "./posts";
import { timeAgo } from "./utils";

export const metadata = {
  title: "Blog | Shakti Raghav",
  description:
    "Articles by Shakti Raghav on Shopify development, Laravel, performance, Next.js, and practical web development for real businesses.",
};

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1
  );

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <nav className="text-xs text-slate-400 flex items-center gap-1 mb-4">
            <Link href="/" className="hover:text-slate-200 transition">
                Home
            </Link>
            <span className="text-slate-500">/</span>

            <span className="text-slate-500">
                Blog
            </span>
        </nav>


        <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-sky-400">
            Blog
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight">
            Articles & insights
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
            I write about building fast Shopify stores, scalable Laravel + Vue
            platforms, and practical tips for founders and developers who care
            about performance and clarity.
            </p>
        </header>

      <section className="space-y-5">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 hover:border-sky-500/70 hover:bg-slate-900/70 transition"
          >
            <div className="flex items-center justify-between gap-3 mb-2">
              <p className="text-xs text-slate-400">
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
                · {timeAgo(post.publishedAt)}
              </p>
            </div>
            <h2 className="font-heading text-lg sm:text-xl font-semibold text-slate-100 mb-1">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-sky-400 transition"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-slate-300 mb-3">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] rounded-full border border-slate-700 px-2 py-0.5 text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="text-xs font-medium text-sky-400 hover:text-sky-300"
            >
              Read article ↗
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}