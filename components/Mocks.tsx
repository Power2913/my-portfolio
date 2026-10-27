// components/Mocks.tsx
// Lightweight, code-drawn previews of each project (no screenshots to maintain).
import type { MockKind } from "@/lib/content";

function Dots() {
  return (
    <>
      <span className="h-2 w-2 rounded-full bg-line2" />
      <span className="h-2 w-2 rounded-full bg-line2" />
      <span className="h-2 w-2 rounded-full bg-line2" />
    </>
  );
}

export function BrowserFrame({
  domain,
  children,
  dark = false,
}: {
  domain: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-xl border border-[#222a35] ${dark ? "bg-[#06080b]" : "bg-ground"}`}>
      <div className="flex items-center gap-[5px] border-b border-[#1a2029] px-3 py-[9px]">
        <Dots />
        <span className="ml-2 truncate font-mono text-[11px] text-dim">{domain}</span>
      </div>
      <div aria-hidden="true" className="h-[180px] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

function Gunasheela() {
  return (
    <div className="flex h-full flex-col bg-[#fbf7f4] font-dm text-[#2a1622]">
      <div className="h-[5px] bg-[#850263]" />
      <div className="flex items-center justify-between border-b border-[#efe4ea] px-3.5 py-2">
        <span className="font-serif text-[13px] font-semibold text-[#850263]">Gunasheela</span>
        <span className="rounded-full bg-[#850263] px-2 py-1 text-[8px] text-white">Book Appointment</span>
      </div>
      <div className="flex flex-col gap-[7px] px-4 py-3.5">
        <span className="text-[8px] tracking-[0.1em] text-[#9a742a]">FERTILITY &amp; MATERNITY CARE</span>
        <span className="font-serif text-[19px] leading-[1.12]">
          Where Science Meets <em className="text-[#a9822f]">Compassion</em>
          <br />— and Families Begin
        </span>
        <span className="mt-0.5 flex gap-1.5">
          <span className="rounded-full bg-[#850263] px-2.5 py-[5px] text-[8px] text-white">Schedule Your Consultation</span>
          <span className="rounded-full border border-[#850263] px-2.5 py-1 text-[8px] text-[#850263]">Explore Treatments</span>
        </span>
        <span className="mt-1 flex gap-4 text-[9px] text-[#6b5562]">
          <span><b className="text-[#850263]">3</b> Centres</span>
          <span><b className="text-[#850263]">24×7</b> Open</span>
          <span><b className="text-[#850263]">In-house</b> Genetics Lab</span>
        </span>
      </div>
    </div>
  );
}

function EightOne() {
  const items = [
    { name: "Couture [ Pants ]", price: "Rs. 7,500", bg: "#cfc8bc" },
    { name: "Couture [ Top ]", price: "Rs. 4,500", bg: "#b6ae9f" },
    { name: "Couture [ Cord Set ]", price: "Rs. 12,000", bg: "#8e8679" },
  ];
  return (
    <div className="flex h-full flex-col bg-[#ece9e3] font-sans text-[#141414]">
      <div className="flex items-center justify-between px-3.5 py-2 text-[8px] tracking-[0.08em]">
        <span className="flex gap-2.5"><span>WOMEN</span><span>MEN</span><span>ABOUT</span></span>
        <span className="text-[13px] font-semibold tracking-[0.05em]">8•1</span>
        <span className="flex gap-2.5"><span>SEARCH</span><span>CART</span></span>
      </div>
      <div className="flex flex-col items-start gap-[5px] bg-[#1b1a18] px-4 py-3.5 text-[#f2efea]">
        <span className="text-[11px] font-medium tracking-[0.22em]">HOUSE OF FIBRE ARCHITECTURE</span>
        <span className="text-[9px] text-[#bdb7ad]">Engineered in fibre. Mastered in form.</span>
        <span className="mt-[3px] border border-[#f2efea] px-2 py-1 text-[7px] tracking-[0.12em]">DISCOVER THE COLLECTION</span>
      </div>
      <div className="grid grid-cols-3 gap-2 px-3.5 py-2.5">
        {items.map((it) => (
          <span key={it.name} className="flex flex-col gap-[3px]">
            <span className="h-[30px]" style={{ background: it.bg }} />
            <span className="text-[7px]">{it.name}</span>
            <span className="text-[7px] text-[#5e5a54]">{it.price}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Search() {
  const rows = Array.from({ length: 4 });
  return (
    <div className="flex h-full flex-col gap-2 p-3.5 font-mono text-[10px]">
      <div className="flex justify-between rounded-lg border border-line2 px-[11px] py-[9px] text-muted">
        <span>HS 85 · Vietnam<span className="cursor text-accent">|</span></span>
        <span className="text-accent">&lt; 5 s</span>
      </div>
      <div className="flex gap-1.5 text-dim">
        {["Importer", "Port", "Date"].map((c) => (
          <span key={c} className="rounded-full border border-line2 px-2 py-[3px]">{c}</span>
        ))}
      </div>
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-1.5">
        {rows.map((_, r) =>
          [0, 1, 2].map((c) => (
            <span key={`${r}-${c}`} className={`h-4 rounded ${r % 2 ? "bg-[#131820]" : "bg-[#161c25]"}`} />
          ))
        )}
      </div>
    </div>
  );
}

function Fashion() {
  return (
    <div className="flex h-full flex-col bg-[#f5f2ec] text-[#1c1b19]">
      <div className="flex items-center justify-between border-b border-[#e4dfd6] px-3.5 py-[9px]">
        <span className="flex gap-2">
          <span className="h-1 w-[22px] bg-[#cfc8bc]" />
          <span className="h-1 w-[22px] bg-[#cfc8bc]" />
          <span className="h-1 w-[22px] bg-[#cfc8bc]" />
        </span>
        <span className="font-serif text-[12px] tracking-[0.2em]">11TARENG</span>
        <span className="h-1 w-10 bg-[#cfc8bc]" />
      </div>
      <div className="flex flex-1 gap-2.5 px-3.5 py-3">
        <span className="flex flex-[1.3] items-end bg-[#ddd5c9] p-2.5">
          <span className="flex flex-col gap-[5px]">
            <span className="h-[7px] w-[90px] bg-[#1c1b19]" />
            <span className="h-[7px] w-[60px] bg-[#1c1b19]" />
            <span className="mt-1 h-3 w-[46px] border border-[#1c1b19]" />
          </span>
        </span>
        <span className="grid flex-1 grid-cols-2 gap-1.5">
          <span className="bg-[#e7e1d7]" />
          <span className="bg-[#d4ccbf]" />
          <span className="bg-[#d4ccbf]" />
          <span className="bg-[#e7e1d7]" />
        </span>
      </div>
    </div>
  );
}

function Terminal() {
  const ok = <span className="text-accent">✓</span>;
  return (
    <div className="flex h-full flex-col gap-1.5 px-4 py-3.5 font-mono text-[11px] text-muted">
      <span><span className="text-accent">$</span> python ingest.py trade_data.xlsx</span>
      <span className="text-dim">› reading sheets…</span>
      <span>› cleaning &amp; normalising columns {ok}</span>
      <span>› validating rows {ok}</span>
      <span>› bulk insert → mysql.shipments {ok}</span>
      <span>› run logged to Laravel admin {ok}</span>
      <span><span className="text-accent">$</span> <span className="cursor text-accent">▍</span></span>
    </div>
  );
}

function DataSite() {
  return (
    <div className="flex h-full flex-col bg-white font-sans text-[#0f2a4a]">
      <div className="flex items-center justify-between border-b border-[#e5eaf0] px-3.5 py-[9px]">
        <span className="text-[11px] font-semibold">USImportData</span>
        <span className="flex gap-2">
          <span className="h-1 w-6 bg-[#d5dde7]" />
          <span className="h-1 w-6 bg-[#d5dde7]" />
          <span className="h-1 w-6 bg-[#d5dde7]" />
        </span>
      </div>
      <div className="flex flex-col gap-[7px] bg-[#0f2a4a] p-3.5">
        <span className="h-2 w-40 bg-white" />
        <span className="h-[5px] w-[110px] bg-[#7f96b2]" />
        <span className="mt-[3px] flex gap-1.5">
          <span className="flex-1 rounded bg-white px-2 py-[5px] text-[8px] text-[#6a7f98]">Search by HS code, product or company</span>
          <span className="rounded bg-[#e8a33d] px-2 py-[5px] text-[8px] font-semibold">Search</span>
        </span>
      </div>
      <div className="flex flex-col gap-[5px] px-3.5 py-2.5">
        <span className="h-[9px] bg-[#eef2f6]" />
        <span className="h-[9px] bg-[#f6f8fa]" />
        <span className="h-[9px] bg-[#eef2f6]" />
      </div>
    </div>
  );
}

export function ProjectMock({ kind }: { kind: MockKind }) {
  switch (kind) {
    case "gunasheela":
      return <Gunasheela />;
    case "eightone":
      return <EightOne />;
    case "search":
      return <Search />;
    case "fashion":
      return <Fashion />;
    case "terminal":
      return <Terminal />;
    case "datasite":
      return <DataSite />;
  }
}

export function CosmosInboxMock() {
  return (
    <div className="flex min-h-[280px]" aria-hidden="true">
      <div className="flex flex-[0_0_38%] flex-col gap-2 border-r border-line p-3 font-mono text-[11px]">
        <div className="rounded-lg border border-accent p-[9px] text-fg">Booking · 4:30 PM</div>
        <div className="rounded-lg border border-[#222a35] p-[9px] text-dim">Order enquiry</div>
        <div className="rounded-lg border border-[#222a35] p-[9px] text-dim">Human request</div>
        <div className="rounded-lg border border-[#222a35] p-[9px] text-dim">Broadcast reply</div>
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-3.5 text-[12px]">
        <div className="max-w-[80%] self-start rounded-[12px_12px_12px_4px] bg-[#141a22] px-3 py-[9px] text-muted">
          Hi, can I book for Saturday?
        </div>
        <div className="max-w-[80%] self-end rounded-[12px_12px_4px_12px] border border-[#3a4a22] bg-[#1b2414] px-3 py-[9px] text-fg">
          Sure — pick a slot below
        </div>
        <div className="flex gap-1.5 self-end font-mono text-[11px]">
          <span className="rounded-full border border-accent px-[9px] py-1 text-accent">11:00</span>
          <span className="rounded-full border border-line2 px-[9px] py-1 text-muted">2:00</span>
          <span className="rounded-full border border-line2 px-[9px] py-1 text-muted">4:30</span>
        </div>
        <div className="mt-auto rounded-[10px] border border-[#222a35] px-3 py-[9px] font-mono text-[11px] text-faint">
          AI Assist suggests a reply…<span className="cursor text-accent">|</span>
        </div>
      </div>
    </div>
  );
}
