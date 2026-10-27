// lib/content.ts
// Single source of truth for portfolio copy. Edit text here, not in components.

export const site = {
  name: "Shakti Raghav",
  title: "Full-Stack Developer",
  headline: "Full-Stack Developer | SaaS, Shopify & Laravel | 4+ years",
  url: "https://shaktiraghav.vercel.app",
  email: "raghavshakti652@gmail.com",
  whatsapp: "https://wa.me/919557425592",
  linkedin: "https://www.linkedin.com/in/shakti-raghav-65298218b/",
  github: "https://github.com/Power2913",
  location: "India · IST",
  availability: "Open to full-time roles",
  // Career start used to compute total experience automatically.
  careerStart: "2022-05-01",
};

/** Whole years and months since careerStart, e.g. { years: 4, months: 5 } */
export function experienceSince(start = site.careerStart, now = new Date()) {
  const s = new Date(start);
  let months =
    (now.getFullYear() - s.getFullYear()) * 12 + (now.getMonth() - s.getMonth());
  if (now.getDate() < s.getDate()) months -= 1;
  return { years: Math.floor(months / 12), months: months % 12 };
}

/** LinkedIn-style duration (start and current month both counted), e.g. "1 yr 2 mos" */
export function durationSince(startISO: string, now = new Date()) {
  const s = new Date(startISO);
  const total =
    (now.getFullYear() - s.getFullYear()) * 12 + (now.getMonth() - s.getMonth()) + 1;
  const y = Math.floor(total / 12);
  const m = total % 12;
  const parts = [];
  if (y) parts.push(`${y} yr${y > 1 ? "s" : ""}`);
  if (m) parts.push(`${m} mo${m > 1 ? "s" : ""}`);
  return parts.join(" ");
}

/** "4+ yrs" — updates itself on every deploy */
export const yearsLabel = `${experienceSince().years}+ yrs`;

export const proof = [
  { value: yearsLabel, label: "in production since May 2022 — no gaps" },
  { value: "1 SaaS", label: "live — Meta-approved WhatsApp Tech Provider" },
  { value: "35M+", label: "records searchable at TradeImeX" },
  { value: "10", label: "shipped projects — SaaS, healthcare, fashion, B2B data" },
];

export const lanes = [
  {
    n: "01",
    title: "SaaS products & data platforms",
    body: "Multi-tenant apps with onboarding, billing and admin panels, plus search and data pages over large MySQL datasets — hosting and security included.",
    stack: "Python · Laravel · MySQL · Elasticsearch · Vue/Nuxt",
  },
  {
    n: "02",
    title: "Custom Shopify themes",
    body: "Liquid themes built or migrated onto Dawn — metafield-driven product pages, custom sections, variant selectors and cart drawers.",
    stack: "Liquid · Alpine.js · Tailwind CSS",
  },
  {
    n: "03",
    title: "Business & brand websites",
    body: "Large WordPress and Next.js sites for hospitals and service businesses — dozens of service pages, location pages and booking flows a non-developer can update.",
    stack: "WordPress · Next.js · React",
  },
];

export type Layer = {
  short: string;
  title: string;
  body: string;
  chips: string;
};

// Index 0 = bottom plate, 3 = top plate.
export const layers: Layer[] = [
  {
    short: "Data",
    title: "Data — MySQL & Elasticsearch",
    body: "A 35M+ record trade database where search went from 3–4 minutes to under 5 seconds on Elasticsearch, plus a Python bot that cleans and bulk-inserts Excel datasets.",
    chips: "MySQL · Elasticsearch · Python",
  },
  {
    short: "Backend",
    title: "Backend — Python, Laravel & PHP",
    body: "The Python backend behind Cosmos Connect, plus Laravel CMS, admin panels and REST APIs — deployed and secured on my own hosting setups.",
    chips: "Python · Laravel · PHP · REST APIs",
  },
  {
    short: "Frontend",
    title: "Frontend — Vue, Nuxt & Next.js",
    body: "Fast, component-driven interfaces for SaaS dashboards, data portals and marketing sites, styled with Tailwind CSS.",
    chips: "Vue.js · Nuxt.js · Next.js · React · Tailwind",
  },
  {
    short: "Storefront",
    title: "Storefront — Shopify Liquid",
    body: "Custom and migrated themes for fashion labels: metafield-driven product pages, custom sections, variant selectors and cart drawers.",
    chips: "Shopify Liquid · Alpine.js · WordPress",
  },
];

export type ProjectCategory = "saas" | "shopify" | "data" | "wordpress";
export type MockKind =
  | "gunasheela"
  | "eightone"
  | "search"
  | "fashion"
  | "terminal"
  | "datasite";

export type Project = {
  slug: string;
  domain: string;
  category: ProjectCategory;
  tag: string;
  where: string;
  title: string;
  desc: string;
  stack: string;
  href: string;
  cta: string;
  external: boolean;
  mock: MockKind;
};

export const featured = {
  title: "Cosmos Connect — WhatsApp Business SaaS",
  tags: ["Major project · SaaS", "@ Graphicosmos", "Live in production"],
  desc: "A multi-tenant platform on Meta's official WhatsApp Cloud API: shared team inbox, bookings, a no-code flow builder with 12 node types, broadcasts, WhatsApp Forms and AI Assist — with self-serve onboarding, a 14-day trial and live Razorpay billing with GST invoices.",
  stats: [
    { value: "Meta approved", label: "Tech Provider · App Review passed" },
    { value: "12 node types", label: "visual flow builder" },
    { value: "3 plans", label: "live billing, auto GST invoices" },
  ],
  stack:
    "Python backend · WhatsApp Cloud API · Razorpay · Claude API · Shopify & WooCommerce connectors",
  href: "https://cosmosconnect.io/",
  domain: "app.cosmosconnect.io/inbox",
};

export const projects: Project[] = [
  {
    slug: "gunasheela",
    domain: "gunasheela.in",
    category: "wordpress",
    tag: "Healthcare · IVF",
    where: "@ Graphicosmos",
    title: "Gunasheela IVF Centre",
    desc: "WordPress + Elementor Pro rebuild for a fertility hospital group with three centres in Bengaluru and Ballari — 27 service pages across fertility and OB-GYN, a doctor directory, centre location pages and consultation booking.",
    stack: "WordPress · Elementor Pro · OceanWP",
    href: "https://gunasheela.in/",
    cta: "Live site ↗",
    external: true,
    mock: "gunasheela",
  },
  {
    slug: "eight-one",
    domain: "eight-one.in",
    category: "shopify",
    tag: "Fashion eCommerce",
    where: "@ Graphicosmos",
    title: "Eight One — fibre-first fashion store",
    desc: "Migrated the store from Prestige to a customised Dawn theme — product pages driven by colour and type metafields, custom variant selectors, a mobile gallery and a cart drawer.",
    stack: "Shopify Liquid · Dawn · Metafields",
    href: "https://eight-one.in/",
    cta: "Live site ↗",
    external: true,
    mock: "eightone",
  },
  {
    slug: "tradeimex-search",
    domain: "tradeimex.in/search",
    category: "data",
    tag: "B2B data platform",
    where: "@ TradeImeX",
    title: "Trade data search over 35M+ records",
    desc: "Moved country-wise import/export search onto Elasticsearch with the backend developer. The heaviest query — HS code 85 on Vietnam — went from 3–4 minutes to under 5 seconds.",
    stack: "Elasticsearch · Laravel · Vue.js · Nuxt.js · MySQL",
    href: "/work/tradeimex-search",
    cta: "Read the case study →",
    external: false,
    mock: "search",
  },
  {
    slug: "11tareng",
    domain: "11tareng.com",
    category: "shopify",
    tag: "Fashion eCommerce",
    where: "Client build",
    title: "11Tareng — editorial storefront",
    desc: "Rebuilt the Dawn theme into an editorial-style store: custom sections, richer product views and a lighter cart flow.",
    stack: "Shopify Liquid · Tailwind CSS",
    href: "https://11tareng.com/",
    cta: "Live site ↗",
    external: true,
    mock: "fashion",
  },
  {
    slug: "ingestion-bot",
    domain: "terminal · internal tool",
    category: "data",
    tag: "Internal tool",
    where: "@ TradeImeX",
    title: "Trade data ingestion bot",
    desc: "Python bot that cleans, validates and bulk-inserts Excel trade datasets (hundreds of thousands of rows) into MySQL, monitored from a Laravel admin.",
    stack: "Python · MySQL · Laravel admin",
    href: "/work/tradeimex-search",
    cta: "How it works →",
    external: false,
    mock: "terminal",
  },
  {
    slug: "usimportdata",
    domain: "usimportdata.com",
    category: "data",
    tag: "B2B data products",
    where: "@ TradeImeX",
    title: "USImportData & VietnamExportData",
    desc: "Laravel + Blade product sites for TradeImeX’s U.S. import and Vietnam export datasets — server-rendered service pages and enquiry forms.",
    stack: "Laravel · Blade · MySQL",
    href: "https://usimportdata.com/",
    cta: "Live site ↗",
    external: true,
    mock: "datasite",
  },
];

export const alsoShipped = [
  { name: "Tradeimex.in corporate site", note: "Laravel custom CMS", href: "https://tradeimex.in/" },
  { name: "House of Five Studio", note: "interior studio portfolio", href: "https://houseof5studio.com/" },
  { name: "Coach Niranjan", note: "WordPress", href: "https://coachniranjan.com/" },
];

export type Role = {
  period: string;
  duration: string;
  title: string;
  company: string;
  subline?: string;
  body: string;
  result: string;
  stack: string;
  current?: boolean;
};

export const experience: Role[] = [
  {
    period: "Sep 2025 — Present",
    duration: durationSince("2025-09-01"),
    title: "Full-Stack Developer",
    company: "Graphicosmos",
    subline: "Lead developer — Cosmos Connect",
    body: "Lead the build of Cosmos Connect, the company's WhatsApp Business SaaS, and deliver client websites end-to-end — Gunasheela IVF (WordPress) and Eight One (Shopify).",
    result:
      "Took Cosmos Connect from first release to Meta Tech Provider approval, self-serve onboarding and live Razorpay billing with automated GST invoices.",
    stack: "Python · WhatsApp Cloud API · Razorpay · Shopify Liquid · WordPress",
    current: true,
  },
  {
    period: "Sep 2023 — Sep 2025",
    duration: "2 yrs 1 mo",
    title: "Frontend Developer",
    company: "TradeImeX Info Pvt. Ltd.",
    subline: "Full-stack scope — frontend, backend & database",
    body: "Built the frontend for TradeImeX's trade-data portals — tradeimex.in, USImportData and VietnamExportData — and took on backend and database work: a 35M+ record MySQL database, hosting and security.",
    result:
      "Moved search onto Elasticsearch with the backend developer — the heaviest query (HS code 85 on Vietnam) dropped from 3–4 minutes to under 5 seconds. Automated Excel data ingestion with a Python bot.",
    stack: "Vue.js · Nuxt.js · Laravel · MySQL · Elasticsearch · Python",
  },
  {
    period: "Jun 2023 — Sep 2023",
    duration: "4 mos",
    title: "Junior Software Developer",
    company: "Eternity Automation Pvt. Ltd.",
    body: "Developed and maintained features for client web applications in a PHP and MySQL team — responsive interfaces in Bootstrap and jQuery, server-side logic in PHP and database work through phpMyAdmin.",
    result:
      "Delivered features through the full cycle — requirement, build, code review and release — under senior engineers.",
    stack: "PHP · JavaScript · jQuery · Bootstrap · MySQL",
  },
  {
    period: "May 2022 — Jun 2023",
    duration: "1 yr 2 mos",
    title: "Junior Web Developer",
    company: "Unnat Technology Services",
    body: "First role. Built and maintained web pages and modules for enterprise client projects, working from UI through to backend logic alongside senior developers.",
    result:
      "Learned the full request-to-database cycle on live client work, the base for every role since.",
    stack: "HTML · CSS · JavaScript · PHP · MySQL",
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "Indira Gandhi National Open University (IGNOU)",
  note: "Open & Distance Learning — pursued alongside full-time development work from day one. Final semester completed; result awaited.",
  period: "2022 — 2026 · Result awaited",
};

export const skills = [
  {
    level: 3,
    label: "Core · daily",
    items: ["Laravel · PHP", "MySQL & indexing", "Shopify Liquid", "WordPress · Elementor", "REST APIs"],
  },
  {
    level: 2,
    label: "Working · regular",
    items: [
      "Python · Elasticsearch",
      "Vue.js · Nuxt.js",
      "React · Next.js",
      "Tailwind CSS · Alpine.js",
      "WhatsApp Cloud API · Razorpay",
      "Hosting & server security",
    ],
  },
  {
    level: 1,
    label: "Familiar",
    items: ["TypeScript", "jQuery · Bootstrap"],
  },
];
