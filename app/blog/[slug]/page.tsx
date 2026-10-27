// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { blogPosts } from "../posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.publishedAt },
  };
}

/** **bold** → <strong>, *italic* → <em> */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**"))
      return (
        <strong key={i} className="font-semibold text-fg">
          {part.slice(2, -2)}
        </strong>
      );
    if (part.length > 2 && part.startsWith("*") && part.endsWith("*"))
      return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });
}

/** Turns the plain-text post format (blank-line blocks, "- " lists, short title lines) into HTML. */
function renderContent(content: string) {
  const blocks = content
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((b) =>
      b
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean)
    )
    .filter((lines) => lines.length);

  return blocks.map((lines, i) => {
    if (lines.length === 1 && /^-{3,}$/.test(lines[0])) {
      return <hr key={i} className="my-2 border-line" />;
    }
    if (lines.every((l) => l.startsWith(">"))) {
      return (
        <blockquote key={i} className="m-0 border-l-2 border-accent pl-5 font-heading text-xl text-fg">
          {inline(lines.map((l) => l.replace(/^>\s?/, "")).join(" "))}
        </blockquote>
      );
    }
    if (lines.every((l) => l.startsWith("- "))) {
      return (
        <ul key={i} className="flex list-none flex-col gap-2 p-0">
          {lines.map((l, j) => (
            <li key={j} className="flex gap-3">
              <span className="text-accent" aria-hidden="true">→</span>
              <span>{inline(l.slice(2))}</span>
            </li>
          ))}
        </ul>
      );
    }
    // Mixed block: a lead-in line followed by list items
    const listStart = lines.findIndex((l) => l.startsWith("- "));
    if (listStart > 0 && lines.slice(listStart).every((l) => l.startsWith("- "))) {
      return (
        <div key={i} className="flex flex-col gap-3">
          <p>{inline(lines.slice(0, listStart).join(" "))}</p>
          <ul className="flex list-none flex-col gap-2 p-0">
            {lines.slice(listStart).map((l, j) => (
              <li key={j} className="flex gap-3">
                <span className="text-accent" aria-hidden="true">→</span>
                <span>{inline(l.slice(2))}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    const single = lines.length === 1 ? lines[0] : null;
    if (single && single.length < 90 && !/[.:,;!—]$/.test(single) && !single.startsWith("**")) {
      return (
        <h2 key={i} className="pt-4 text-2xl font-semibold text-fg">
          {single}
        </h2>
      );
    }
    return <p key={i}>{inline(lines.join(" "))}</p>;
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <SiteHeader base="/" />
      <main className="mx-auto flex max-w-[760px] flex-col gap-8 px-4 pb-24 pt-10 sm:px-8">
        <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1.5 font-mono text-[12px] text-dim">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-accent">Writing</Link>
          <span>/</span>
          <span className="truncate text-muted">{post.title}</span>
        </nav>

        <header className="flex flex-col gap-4">
          <p className="font-mono text-[13px] text-accent">{formattedDate.toUpperCase()}</p>
          <h1 className="text-[clamp(30px,4vw,44px)] font-semibold leading-[1.1] tracking-[-0.03em]">{post.title}</h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line2 px-2.5 py-0.5 font-mono text-[11px] text-muted">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article className="flex flex-col gap-5 text-[17px] leading-[1.75] text-muted">
          {renderContent(post.content)}
        </article>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[20px] border border-line bg-surface p-6">
          <span className="font-heading text-lg font-semibold">Written by Shakti Raghav, Full-Stack Developer</span>
          <Link href="/blog" className="inline-flex min-h-11 items-center text-sm text-accent hover:text-accent-hi">
            More writing →
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
