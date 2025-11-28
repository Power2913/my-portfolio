// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Shakti Raghav | Senior Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of Shakti Raghav — Senior Software Engineer specializing in Laravel, Vue.js, Next.js, Shopify, Tailwind CSS, and scalable full-stack development. I build high-performance web applications, custom Shopify stores, and automation tools for global brands.",
  keywords: [
    "Shakti Raghav",
    "Software Engineer",
    "Full Stack Developer",
    "Shopify Developer",
    "Laravel Developer",
    "Vue.js Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "MySQL",
    "Freelance Developer",
    "Ecommerce Developer",
  ],
  openGraph: {
    title: "Shakti Raghav — Senior Software Engineer",
    description:
      "Full-stack engineer skilled in Laravel, Vue.js, Next.js, Shopify, PHP, and scalable architectures. Explore my work, tech stack, and client projects.",
    url: "https://your-vercel-url-here",
    siteName: "Shakti Raghav Portfolio",
    images: [
      {
        url: "/og.png", // we can create one later
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <head>
        {/* GOOGLE FONTS */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="min-h-screen bg-slate-950 text-slate-100 font-body">
        {children}
      </body>
    </html>
  );
}