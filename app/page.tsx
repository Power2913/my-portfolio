"use client";

import Link from "next/link";
import { useRef, MouseEvent } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

type SectionId = "skills" | "projects" | "contact";

const projects = [
  {
    title: "11Tareng – Fashion eCommerce Store",
    tech: ["Shopify", "Tailwind CSS", "Custom Sections"],
    desc: "A clean, editorial-style Shopify build for a premium fashion brand, rebuilt from the Dawn theme with custom sections, advanced product views, and optimized cart UX.",
    link: "https://11tareng.com/",
  },
  {
    title: "Designum Leviowsa – Fashion & Lifestyle Brand",
    tech: ["Shopify", "Custom Theme Development", "Tailwind CSS"],
    desc: "Fully custom Shopify store for a New Zealand fashion brand. Rebuilt layouts, product pages, and collection experiences from scratch based on the client’s brand direction, ensuring high performance and premium visual identity.",
    link: "https://www.designumleviowsa.com/",
  },
  {
    title: "Tradeimex – Global Trade Intelligence",
    tech: ["Laravel", "MySQL", "Custom CMS", "UI/UX"],
    desc: "Official corporate website for Tradeimex Info, featuring custom CMS-managed product pages, global trade content, optimized landing funnels, and business-oriented conversions.",
    link: "https://tradeimex.in/",
  },
  {
    title: "USImportData – Import Data Platform",
    tech: ["Laravel", "Blade", "MySQL"],
    desc: "Niche product website for Tradeimex offering U.S. import datasets. Includes optimized service pages, strong SEO foundation, and structured enquiry pathways.",
    link: "https://usimportdata.com/",
  },
  {
    title: "VietnamExportData – Export Data Platform",
    tech: ["Laravel", "Blade", "MySQL"],
    desc: "Tradeimex’s Vietnam-focused export data portal, built with consistent branding and optimized service pages aimed at converting industry-specific clients.",
    link: "https://www.vietnamexportdata.com/",
  },
  {
    title: "House of Five Studio – Interior Design Portfolio",
    tech: ["Web Design", "Responsive UI", "Brand Storytelling"],
    desc: "A premium portfolio website for an interior design studio, highlighting project galleries, brand storytelling, and a clean enquiry funnel for high-ticket clients.",
    link: "https://houseof5studio.com/",
  },
  {
    title: "Khanijo – Custom Shopify Theme",
    tech: ["Shopify", "Liquid", "Tailwind CSS", "Alpine.js"],
    desc: "Bespoke storefront for a luxury fashion label with custom product modules, AJAX cart sidebar, and an appointment-based purchase flow for exclusive edits.",
    link: "https://khanijo.com",
  },
  {
    title: "Coach Niranjan – Performance Coaching",
    tech: ["WordPress", "Landing Pages", "Forms"],
    desc: "High-converting WordPress site for a performance coach with consultation funnels, optimized landing pages, and structured user journeys.",
    link: "https://coachniranjan.com/",
  },
  {
    title: "Trade Data Platform – Internal Automation System",
    tech: ["Python", "Excel Automation", "MySQL", "Laravel Admin"],
    desc: "An internal tool built for Tradeimex to automate the ingestion of massive Excel datasets (hundreds of thousands of rows). Developed a Python bot to clean, validate, and insert large trade data into MySQL/phpMyAdmin, drastically reducing manual workload.",
    link: "#",
  },
];


const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
  "Vue.js",
  "Shopify (Liquid)",
  "WordPress",
  "MySQL",
  "REST APIs",
  "Python automation scripts",
];

export default function HomePage() {
  const sectionRefs = useRef<Record<SectionId, HTMLElement | null>>({
    skills: null,
    projects: null,
    contact: null,
  });

  const scrollToSection = (id: SectionId) => {
    const target = sectionRefs.current[id];
    if (!target) return;

    gsap.to(window, {
      duration: 0.8,
      // @ts-ignore ScrollToPlugin adds this
      scrollTo: { y: target, offsetY: 80 },
      ease: "power2.out",
      onComplete: () => {
        gsap.fromTo(
          target,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
      },
    });
  };

  const handleNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    id: SectionId
  ) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-24">
      {/* Navbar */}
      <header className="flex items-center justify-between">
        <div className="font-heading font-semibold tracking-tight text-sky-400">
          Shakti Raghav
        </div>
        <nav className="flex gap-4 text-sm text-slate-300">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="hover:text-sky-400 transition"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, "skills")}
            className="hover:text-sky-400 transition"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hover:text-sky-400 transition"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="grid gap-8 md:grid-cols-[3fr,2fr] items-center">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-400">
            Software Engineer
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            I design & build{" "}
            <span className="text-sky-400">fast, reliable</span> web
            experiences for brands and B2B teams.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I’m Shakti, a full-stack engineer working across{" "}
            <span className="font-medium text-slate-100">
              Shopify, Laravel, Vue, and Next.js
            </span>
            . I help clients turn ideas into production-ready websites, data
            platforms, and eCommerce stores that are easy to maintain and
            focused on business results.
          </p>

          {/* Quick badges */}
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
            <span className="rounded-full border border-slate-700 px-3 py-1">
              3+ years shipping production code
            </span>
            <span className="rounded-full border border-slate-700 px-3 py-1">
              Specialised in Laravel, MERN & Shopify Liquid
            </span>
            <span className="rounded-full border border-slate-700 px-3 py-1">
              Open to remote & freelance work
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-sky-400 transition"
            >
              View my work
            </button>
            <Link
              href="mailto:raghavshakti652@gmail.com"
              className="inline-flex items-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-sky-400 hover:text-sky-300 transition"
            >
              Let’s work together
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-800/40 p-5">
          <p className="text-xs font-heading font-medium uppercase tracking-[0.2em] text-slate-400 mb-3">
            Snapshot
          </p>
          <ul className="space-y-3 text-sm text-slate-200">
            <li className="flex justify-between">
              <span>Experience</span>
              <span className="text-slate-300">3+ years</span>
            </li>
            <li className="flex justify-between">
              <span>Focus</span>
              <span className="text-slate-300">
                Software Engineer
              </span>
            </li>
            <li className="flex justify-between">
              <span>Current stack</span>
              <span className="text-slate-300">Shopify Liquid  · Laravel · MERN</span>
            </li>
            <li className="flex justify-between">
              <span>Location</span>
              <span className="text-slate-300">India (IST)</span>
            </li>
            <li className="flex justify-between">
              <span>Availability</span>
              <span className="text-emerald-400">Open for new projects</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        ref={(el) => {
          sectionRefs.current.skills = el;
        }}
        className="space-y-6"
      >
        <h2 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight">
          Tech stack & strengths
        </h2>
        <p className="text-slate-300 text-sm max-w-2xl">
          I work end-to-end: from frontend experiences in React/Next.js and
          Tailwind to robust backends in Laravel with MySQL, custom APIs, and
          Shopify theme development for direct-to-consumer brands.
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs sm:text-sm text-slate-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        ref={(el) => {
          sectionRefs.current.projects = el;
        }}
        className="space-y-6"
      >
        <h2 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight">
          Selected client work
        </h2>
        <p className="text-slate-300 text-sm max-w-2xl">
          A mix of eCommerce builds, data platforms, and marketing sites. These
          projects reflect how I approach performance, UX, and business goals in
          real-world environments.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 hover:border-sky-500/70 hover:bg-slate-900/70 transition"
            >
              <h3 className="font-heading text-lg font-semibold text-slate-100 mb-1">
                {project.title}
              </h3>
              <p className="text-[11px] text-slate-400 mb-3">
                {project.tech.join(" · ")}
              </p>
              <p className="text-sm text-slate-300 mb-4">{project.desc}</p>
              {project.link !== "#" && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-xs font-medium text-sky-400 hover:text-sky-300"
                >
                  View live site ↗
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        ref={(el) => { sectionRefs.current.contact = el;}}
        className="space-y-4 pb-10"
      >
        <h2 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight">
          Let’s build something great
        </h2>
        <p className="text-slate-300 text-sm max-w-xl">
          Whether you need a custom Shopify theme, a Laravel-based platform, or
          a fast portfolio site for your brand, I can help you plan, design, and
          ship it with a focus on performance and clarity.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href="mailto:raghavshakti652@gmail.com"
            className="rounded-full bg-sky-500 px-5 py-2.5 font-medium text-white hover:bg-sky-400 transition"
          >
            Email me
          </Link>
          <Link
            href="https://wa.me/919557425592"
            className="rounded-full border border-slate-700 px-5 py-2.5 font-medium text-slate-100 hover:border-sky-400 transition"
          >
            WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}