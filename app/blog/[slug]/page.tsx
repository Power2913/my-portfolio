// app/blog/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../posts";
import { timeAgo } from "../utils";


type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Let Next know which slugs exist at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // ⬅️ Important: unwrap the Promise
  const { slug } = await params;

  console.log("slug from params =", slug);
  console.log("available slugs =", blogPosts.map((p) => p.slug));

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString(
    "en-IN",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Breadcrumbs */}
        <nav className="text-xs text-slate-400 flex items-center gap-1">
            <Link href="/" className="hover:text-slate-200 transition">
            Home
            </Link>
            <span className="text-slate-500">/</span>

            <Link href="/blog" className="hover:text-slate-200 transition">
            Blog
            </Link>
            <span className="text-slate-500">/</span>

            <span className="text-slate-500 truncate max-w-[160px] sm:max-w-none">
            {post.title}
            </span>
        </nav>

        <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-sky-400">
            Blog · {formattedDate} · {timeAgo(post.publishedAt)}
            </p>
            <h1 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
            {post.title}
            </h1>
            <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
                <span
                key={tag}
                className="text-[11px] rounded-full border border-slate-700 px-2 py-0.5 text-slate-400"
                >
                {tag}
                </span>
            ))}
            </div>
        </header>

        <article className="space-y-4 text-sm text-slate-200 leading-relaxed">
            {post.content
            .trim()
            .split("\n\n")
            .map((para, idx) =>
                para.trim() ? <p key={idx}>{para.trim()}</p> : null
            )}
        </article>
    </main>
  );
}
