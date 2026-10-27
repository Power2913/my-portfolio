import { site } from "@/lib/content";

export default function SiteFooter() {
  return (
    <>
      <footer className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-4 border-t border-[#1a2029] px-4 pb-28 pt-6 font-mono text-[12px] text-dim sm:px-8 md:pb-10">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span className="flex gap-4">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</a>
          <span>Built with Next.js · Vercel</span>
        </span>
      </footer>

      {/* Phone-only contact bar */}
      <div className="fixed inset-x-4 bottom-4 z-40 flex gap-2.5 rounded-[20px] border border-line2 bg-[#11151c]/95 p-2.5 backdrop-blur md:hidden">
        <a
          href={`mailto:${site.email}`}
          className="flex min-h-[46px] flex-1 items-center justify-center rounded-xl bg-accent text-sm font-semibold text-ground"
        >
          Email me
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[46px] flex-1 items-center justify-center rounded-xl border border-line2 text-sm text-fg"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}
