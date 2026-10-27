"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/content";

/** base = "" on the home page (pure #anchors), "/" elsewhere */
export default function SiteHeader({ base = "" }: { base?: string }) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: `${base}#work`, label: "Work" },
    { href: `${base}#skills`, label: "Skills" },
    { href: `${base}#experience`, label: "Experience" },
    { href: "/blog", label: "Writing" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#1a2029] bg-ground/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3.5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-accent font-mono text-sm font-medium text-ground">
            SR
          </span>
          <span className="font-heading text-[17px] font-semibold tracking-tight text-fg">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-muted transition hover:text-accent">
              {l.label}
            </a>
          ))}
          <a
            href={`${base}#contact`}
            className="inline-flex min-h-11 items-center rounded-full border border-line2 px-[18px] text-fg transition hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-line2 text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-[#1a2029] px-4 pb-4 md:hidden">
          {[...links, { href: `${base}#contact`, label: "Get in touch" }].map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-line text-base text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
