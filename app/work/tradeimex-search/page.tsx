import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { featured } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case study — Trade search from 3–4 minutes to under 5 seconds",
  description:
    "How TradeImeX's import/export portals moved country-wise search over a 35M+ record database onto Elasticsearch, and automated Excel data ingestion with Python.",
  alternates: { canonical: "/work/tradeimex-search" },
};

const cw = "mx-auto w-full max-w-[1080px] px-4 sm:px-8";

const facts = [
  { k: "Role", v: "Frontend Developer, full-stack scope" },
  { k: "Stack", v: "Elasticsearch · Laravel · Vue/Nuxt · MySQL · Python" },
  { k: "Scale", v: "35M+ rows" },
];

const flow = [
  { k: "Input", t: "Excel datasets", s: "100k+ rows per file" },
  { k: "Python bot", t: "Clean · validate", s: "bulk insert" },
  { k: "MySQL", t: "35M+ rows", s: "source of truth" },
  { k: "Elasticsearch", t: "Search index", s: "results in < 5 s", hot: true },
  { k: "Laravel", t: "Search API", s: "+ admin panel" },
  { k: "Vue / Nuxt", t: "Data pages", s: "portals & SEO pages" },
];

const built = [
  {
    n: "01 · Search",
    t: "Elasticsearch search",
    b: "With the backend developer, moved HS code, country and company search off MySQL and onto an Elasticsearch index, and rebuilt the Vue/Nuxt search pages around it.",
  },
  {
    n: "02 · Ingestion",
    t: "Excel → MySQL bot",
    b: "Python bot that cleans, validates and bulk-inserts trade files, replacing manual entry. Runs are monitored from a Laravel admin.",
  },
  {
    n: "03 · Ops",
    t: "Hosting & security",
    b: "Server setup, deployments and hardening for high-availability data pages across the TradeImeX portals.",
  },
];

const results = [
  { v: "3–4 min → <5 s", l: "HS code 85 on Vietnam, the largest dataset" },
  { v: "35M+ rows", l: "searchable across countries" },
  { v: "0 manual", l: "Excel loads — ingestion runs through the bot" },
];

export default function TradeimexCaseStudy() {
  return (
    <>
      <SiteHeader base="/" />
      <main>
        <div className={`${cw} py-7`}>
          <Link href="/#work" className="inline-flex min-h-11 items-center font-mono text-[13px] text-muted hover:text-accent">
            ← Back to all work
          </Link>
        </div>

        <header className={`${cw} flex flex-col gap-5 pb-14 pt-6`}>
          <p className="font-mono text-[13px] text-accent">CASE STUDY · @ TRADEIMEX · SEP 2023 — SEP 2025</p>
          <h1 className="max-w-[900px] text-[clamp(36px,5vw,64px)] font-semibold leading-[1.03] tracking-[-0.035em]">
            Trade search from 3–4 minutes to under 5 seconds
          </h1>
          <p className="max-w-[720px] text-lg leading-relaxed text-muted">
            How TradeImeX&apos;s import/export portals moved country-wise search over a 35M+ record database
            onto Elasticsearch — and how new datasets get in without manual entry.
          </p>
          <dl className="mt-3 grid grid-cols-1 gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.k} className="flex flex-col gap-1.5 bg-surface p-5">
                <dt className="font-mono text-[11px] uppercase text-dim">{f.k}</dt>
                <dd className="m-0 text-[15px]">{f.v}</dd>
              </div>
            ))}
            <div className="flex flex-col gap-1.5 bg-surface p-5">
              <dt className="font-mono text-[11px] uppercase text-dim">Live</dt>
              <dd className="m-0 text-[15px]">
                <a href="https://tradeimex.in/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  tradeimex.in ↗
                </a>
              </dd>
            </div>
          </dl>
        </header>

        <section className={`${cw} flex flex-wrap gap-10 pb-[72px]`}>
          <h2 className="flex-[1_1_240px] text-[28px] font-semibold">The problem</h2>
          <Reveal className="min-w-0 flex-[999_1_520px]">
            <p className="text-[17px] leading-[1.7] text-muted">
              TradeImeX lets users search import and export shipment data country by country. Vietnam has by
              far the largest dataset, and with search running straight on MySQL, a query like HS code 85 on
              Vietnam took 3–4 minutes to return — far too long for anyone to wait. New country datasets
              also arrived as large Excel files that had to be loaded by hand.
            </p>
          </Reveal>
        </section>

        <section className={`${cw} flex flex-col gap-7 pb-[72px]`}>
          <h2 className="text-[28px] font-semibold">How the data flows</h2>
          <Reveal>
            <ol className="m-0 flex list-none flex-wrap items-stretch gap-y-3 p-0">
              {flow.map((f, i) => (
                <li key={f.k} className="flex flex-[1_1_160px] items-stretch">
                  <div
                    className={`flex flex-1 flex-col gap-1.5 rounded-[14px] p-[18px] ${
                      f.hot ? "border-[1.5px] border-accent bg-[#121810]" : "border border-line2 bg-surface"
                    }`}
                  >
                    <span className={`font-mono text-[11px] uppercase ${f.hot ? "text-accent" : "text-dim"}`}>{f.k}</span>
                    <span className="font-heading text-[17px] font-semibold">{f.t}</span>
                    <span className="text-[13px] text-muted">{f.s}</span>
                  </div>
                  {i < flow.length - 1 && (
                    <span aria-hidden="true" className="flex w-9 flex-none items-center justify-center text-xl text-accent">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <section className={`${cw} flex flex-col gap-6 pb-[72px]`}>
          <h2 className="text-[28px] font-semibold">What I built</h2>
          <Reveal className="flex flex-wrap gap-5">
            {built.map((b) => (
              <article key={b.n} className="flex flex-[1_1_300px] flex-col gap-2.5 rounded-[18px] border border-line bg-surface p-6">
                <span className="font-mono text-[12px] uppercase text-accent">{b.n}</span>
                <h3 className="text-xl font-semibold">{b.t}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{b.b}</p>
              </article>
            ))}
          </Reveal>
        </section>

        <section className={`${cw} flex flex-col gap-6 pb-[72px]`}>
          <h2 className="text-[28px] font-semibold">Results</h2>
          <Reveal className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {results.map((r) => (
              <div key={r.v} className="flex flex-col gap-1.5 border-t-2 border-accent pt-[18px]">
                <span className="font-heading text-[34px] font-semibold tracking-[-0.03em] sm:text-[40px]">{r.v}</span>
                <span className="text-sm text-muted">{r.l}</span>
              </div>
            ))}
          </Reveal>
        </section>

        <section className={`${cw} pb-24`}>
          <div className="flex flex-wrap items-center justify-between gap-5 rounded-[22px] border border-line bg-surface p-8">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[12px] text-dim">NEXT PROJECT</span>
              <span className="font-heading text-2xl font-semibold">{featured.title}</span>
            </div>
            <a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center rounded-full bg-accent px-[22px] font-semibold text-ground hover:bg-accent-hi"
            >
              See it live ↗
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
