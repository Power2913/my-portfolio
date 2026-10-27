import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Stack3D from "@/components/Stack3D";
import WorkGrid from "@/components/WorkGrid";
import Reveal from "@/components/Reveal";
import { blogPosts } from "./blog/posts";
import {
  site,
  proof,
  lanes,
  experience,
  education,
  skills,
  yearsLabel,
} from "@/lib/content";

const wrap = "mx-auto w-full max-w-[1200px] px-4 sm:px-8";
const h2 = "text-[34px] font-semibold tracking-[-0.03em] sm:text-[40px]";

function formatDate(iso: string) {
  return new Date(iso)
    .toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
    .toUpperCase();
}

export default function HomePage() {
  const posts = [...blogPosts]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 3);

  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* HERO */}
        <section className={`${wrap} flex flex-wrap items-center gap-12 pb-16 pt-14 sm:pb-[72px] sm:pt-[88px]`}>
          <div className="flex min-w-0 flex-[1_1_600px] flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3 font-mono text-[13px] text-muted">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#263040] px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {site.availability}
              </span>
              <span>{site.location}</span>
            </div>
            <p className="font-mono text-[13px] tracking-[0.04em] text-accent sm:text-sm">
              FULL-STACK DEVELOPER — SYSTEM DESIGN · SAAS · DATA
            </p>
            <h1 className="text-[clamp(38px,4.4vw,58px)] font-semibold leading-[1.04] tracking-[-0.035em]">
              Design the system.
              <br />
              Build the product.
              <br />
              <span className="text-accent">Ship it at scale.</span>
              <span className="cursor text-accent">_</span>
            </h1>
            <p className="max-w-[580px] text-[17px] leading-relaxed text-muted sm:text-lg">
              I&apos;m Shakti — Full-Stack Developer at Graphicosmos, Gurugram, with{" "}
              {yearsLabel.replace(" yrs", " years")} in production. I designed and built Cosmos Connect, a
              live WhatsApp Business SaaS, end to end — and took a 35M-row trade search from minutes to
              seconds.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 text-[15px] font-semibold text-ground transition hover:bg-accent-hi"
              >
                See selected work
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center rounded-full border border-line2 px-6 text-[15px] font-medium text-fg transition hover:border-accent hover:text-accent"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="flex min-w-0 flex-[1_1_420px] justify-center">
            <Stack3D />
          </div>
        </section>

        {/* PROOF STRIP */}
        <section className={`${wrap} pb-20 sm:pb-24`} aria-label="At a glance">
          <Reveal>
            <div className="grid grid-cols-2 gap-px border-y border-line bg-line lg:grid-cols-4">
              {proof.map((p) => (
                <div
                  key={p.label}
                  className="flex flex-col gap-1.5 bg-ground px-4 py-6 sm:px-6 sm:py-7"
                >
                  <span className="font-heading text-[30px] font-semibold tracking-[-0.03em] sm:text-[44px]">
                    {p.value}
                  </span>
                  <span className="text-[13px] text-muted sm:text-sm">{p.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* WHAT I BUILD */}
        <section className={`${wrap} pb-24 sm:pb-28`}>
          <Reveal className="flex flex-col gap-9">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className={h2}>What I build</h2>
              <p className="font-mono text-[13px] text-dim">{"// all shipped to production"}</p>
            </div>
            <div className="flex flex-wrap gap-5">
              {lanes.map((l) => (
                <article
                  key={l.n}
                  className="flex flex-[1_1_320px] flex-col gap-3.5 rounded-[20px] border border-line bg-surface p-7"
                >
                  <span className="font-mono text-[13px] text-accent">{l.n}</span>
                  <h3 className="text-2xl font-semibold">{l.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{l.body}</p>
                  <p className="font-mono text-[12px] text-dim">{l.stack}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        {/* WORK */}
        <section id="work" className={`${wrap} pb-24 sm:pb-28`}>
          <Reveal>
            <WorkGrid />
          </Reveal>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className={`${wrap} flex flex-wrap gap-12 pb-24 sm:pb-28`}>
          <div className="flex flex-[1_1_280px] flex-col gap-3.5">
            <h2 className={h2}>Experience</h2>
            <p className="text-[15px] leading-relaxed text-muted">
              Four teams since May 2022 — no gaps.
            </p>
          </div>
          <ol className="m-0 flex min-w-0 flex-[999_1_560px] list-none flex-col gap-10 border-l border-[#263040] p-0">
            {experience.map((r) => (
              <li key={r.company} className="relative flex flex-col gap-2 pl-8">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[7px] top-1.5 h-[13px] w-[13px] rounded-full ${
                    r.current ? "bg-accent" : "border-[1.5px] border-[#5a6677] bg-ground"
                  }`}
                />
                <Reveal className="flex flex-col gap-2">
                  <span className={`font-mono text-[12px] ${r.current ? "text-accent" : "text-dim"}`}>
                    {r.period.toUpperCase()} · {r.duration.toUpperCase()} · FULL-TIME
                  </span>
                  <h3 className="text-[22px] font-semibold">
                    {r.title} · {r.company}
                  </h3>
                  {r.subline && <p className="font-mono text-[12px] text-fg">{r.subline}</p>}
                  <p className="text-[15px] leading-relaxed text-muted">{r.body}</p>
                  <p className="text-[15px] leading-relaxed text-fg">
                    <span className="text-accent">↗</span> {r.result}
                  </p>
                  <p className="font-mono text-[12px] text-dim">{r.stack}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        {/* EDUCATION */}
        <section id="education" className={`${wrap} flex flex-wrap gap-12 pb-24 sm:pb-28`}>
          <div className="flex-[1_1_280px]">
            <h2 className={h2}>Education</h2>
          </div>
          <Reveal className="flex min-w-0 flex-[999_1_560px] flex-wrap items-start justify-between gap-5 rounded-[20px] border border-line bg-surface p-7">
            <div className="flex flex-[1_1_360px] flex-col gap-2">
              <h3 className="text-[22px] font-semibold">{education.degree}</h3>
              <p className="text-[15px] text-fg">{education.school}</p>
              <p className="text-[15px] leading-relaxed text-muted">{education.note}</p>
            </div>
            <span className="rounded-full border border-line2 px-3.5 py-2 font-mono text-[13px] uppercase text-accent">
              {education.period}
            </span>
          </Reveal>
        </section>

        {/* SKILLS */}
        <section id="skills" className={`${wrap} pb-24 sm:pb-28`}>
          <Reveal className="flex flex-col gap-8">
            <h2 className={h2}>Skills, by how often I use them</h2>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-line bg-line md:grid-cols-3">
              {skills.map((g) => (
                <div key={g.label} className="flex flex-col gap-3.5 bg-surface p-7">
                  <span className="flex items-center gap-2.5 font-mono text-[12px] uppercase text-fg">
                    <span className="flex gap-[3px]" aria-hidden="true">
                      {[1, 2, 3].map((n) => (
                        <span
                          key={n}
                          className={`h-1.5 w-3.5 rounded-[3px] ${
                            n <= g.level
                              ? g.level === 3
                                ? "bg-accent"
                                : "bg-fg"
                              : "border border-[#5a6677]"
                          }`}
                        />
                      ))}
                    </span>
                    <span className={g.level === 3 ? "text-accent" : ""}>{g.label}</span>
                  </span>
                  <ul className="m-0 list-none p-0 text-base leading-[1.9]">
                    {g.items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* WRITING */}
        <section id="writing" className={`${wrap} pb-24 sm:pb-28`}>
          <Reveal className="flex flex-col gap-7">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className={h2}>Writing</h2>
              <Link href="/blog" className="inline-flex min-h-11 items-center text-sm text-accent hover:text-accent-hi">
                All posts →
              </Link>
            </div>
            <div className="flex flex-col border-t border-line">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-wrap justify-between gap-6 border-b border-line py-[22px]"
                >
                  <span className="flex-[1_1_420px] font-heading text-lg font-medium transition group-hover:text-accent sm:text-xl">
                    {post.title}
                  </span>
                  <span className="font-mono text-[12px] text-dim">
                    {formatDate(post.publishedAt)} · {post.tags[0]?.toUpperCase()}
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact" className={`${wrap} pb-20`}>
          <Reveal className="flex flex-wrap items-end justify-between gap-10 rounded-[28px] border border-line bg-surface px-6 py-12 sm:px-10 sm:py-14">
            <div className="flex flex-[1_1_460px] flex-col gap-4">
              <p className="font-mono text-[13px] text-accent">$ ./get-in-touch.sh</p>
              <h2 className="text-[clamp(32px,4.4vw,56px)] font-semibold leading-[1.05] tracking-[-0.035em]">
                Hiring a full-stack developer? Let&apos;s talk.
              </h2>
              <p className="text-base text-muted">
                {site.availability}. Replies within one working day, IST.
              </p>
            </div>
            <div className="flex flex-[1_1_300px] flex-col gap-3">
              <a
                href={`mailto:${site.email}`}
                className="flex min-h-[52px] items-center justify-between rounded-[14px] bg-accent px-5 font-semibold text-ground transition hover:bg-accent-hi"
              >
                <span className="truncate">{site.email}</span>
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[52px] items-center justify-between rounded-[14px] border border-line2 px-5 text-fg transition hover:border-accent hover:text-accent"
              >
                <span>WhatsApp</span>
                <span aria-hidden="true">↗</span>
              </a>
              <div className="flex gap-3">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 flex-1 items-center justify-center rounded-[14px] border border-line2 text-fg transition hover:border-accent hover:text-accent"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 flex-1 items-center justify-center rounded-[14px] border border-line2 text-fg transition hover:border-accent hover:text-accent"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
