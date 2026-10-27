"use client";

import Link from "next/link";
import { useState } from "react";
import { featured, projects, alsoShipped, type ProjectCategory } from "@/lib/content";
import { BrowserFrame, CosmosInboxMock, ProjectMock } from "./Mocks";

type Filter = "all" | ProjectCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "saas", label: "SaaS" },
  { id: "shopify", label: "Shopify" },
  { id: "data", label: "Laravel & data" },
  { id: "wordpress", label: "WordPress" },
];

function Chip({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className={`rounded-full border px-2.5 py-1 font-mono text-[11px] ${
        accent ? "border-accent text-accent" : "border-line2 text-muted"
      }`}
    >
      {children}
    </span>
  );
}

export default function WorkGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const showFeatured = filter === "all" || filter === "saas";
  const list = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-[34px] font-semibold tracking-[-0.03em] sm:text-[40px]">Selected work</h2>
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const on = f.id === filter;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(f.id)}
                className={`min-h-10 cursor-pointer rounded-full border px-4 py-2 text-[13px] transition ${
                  on
                    ? "border-accent bg-accent font-semibold text-ground"
                    : "border-line2 text-fg hover:border-accent hover:text-accent"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {showFeatured && (
        <article className="tilt flex flex-wrap items-center gap-9 rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {featured.tags.map((t, i) => (
                <Chip key={t} accent={i === 1}>
                  {t}
                </Chip>
              ))}
            </div>
            <h3 className="text-[26px] font-semibold tracking-tight sm:text-[32px]">{featured.title}</h3>
            <p className="text-base leading-relaxed text-muted">{featured.desc}</p>
            <div className="flex flex-wrap gap-6">
              {featured.stats.map((s) => (
                <div key={s.value} className="flex flex-col gap-0.5">
                  <span className="font-heading text-[22px] font-semibold">{s.value}</span>
                  <span className="text-[12px] text-dim">{s.label}</span>
                </div>
              ))}
            </div>
            <p className="font-mono text-[12px] text-dim">{featured.stack}</p>
            <a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-sm font-medium text-accent hover:text-accent-hi"
            >
              cosmosconnect.io ↗
            </a>
          </div>
          <div className="min-w-0 flex-[1_1_420px] [perspective:1200px]">
            <div className="angled overflow-hidden rounded-2xl border border-line2 bg-ground">
              <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-line2" />
                <span className="h-2.5 w-2.5 rounded-full bg-line2" />
                <span className="h-2.5 w-2.5 rounded-full bg-line2" />
                <span className="ml-3 font-mono text-[11px] text-dim">{featured.domain}</span>
              </div>
              <CosmosInboxMock />
            </div>
          </div>
        </article>
      )}

      <div className="flex flex-wrap gap-5">
        {list.map((p) => (
          <article
            key={p.slug}
            className="tilt flex min-w-0 flex-[1_1_340px] flex-col gap-3.5 rounded-[20px] border border-line bg-surface p-[22px]"
          >
            <BrowserFrame domain={p.domain} dark={p.mock === "terminal"}>
              <ProjectMock kind={p.mock} />
            </BrowserFrame>
            <div className="flex flex-wrap gap-2">
              <Chip>{p.tag}</Chip>
              <Chip>{p.where}</Chip>
            </div>
            <h3 className="text-[22px] font-semibold">{p.title}</h3>
            <p className="flex-grow text-sm leading-relaxed text-muted">{p.desc}</p>
            <p className="font-mono text-[12px] text-dim">{p.stack}</p>
            {p.external ? (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-sm font-medium text-accent hover:text-accent-hi"
              >
                {p.cta}
              </a>
            ) : (
              <Link
                href={p.href}
                className="inline-flex min-h-11 items-center text-sm font-medium text-accent hover:text-accent-hi"
              >
                {p.cta}
              </Link>
            )}
          </article>
        ))}
        {list.length === 0 && !showFeatured && (
          <p className="text-sm text-dim">Nothing in this category yet.</p>
        )}
      </div>

      {filter === "all" && (
        <p className="text-sm text-dim">
          Also shipped:{" "}
          {alsoShipped.map((a, i) => (
            <span key={a.name}>
              <a href={a.href} target="_blank" rel="noopener noreferrer" className="text-fg underline-offset-4 hover:text-accent hover:underline">
                {a.name}
              </a>{" "}
              ({a.note}){i < alsoShipped.length - 1 ? " · " : ""}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
