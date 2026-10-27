// app/layout.tsx
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import {
  Space_Grotesk,
  Inter,
  JetBrains_Mono,
  Playfair_Display,
  DM_Sans,
} from "next/font/google";
import "./globals.css";
import { site, experience, education } from "@/lib/content";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

// Only used inside the Gunasheela / 11Tareng project previews.
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "Shakti Raghav — Full-Stack Developer with 4+ years building SaaS products, custom Shopify themes and data-heavy Laravel platforms. Lead developer of Cosmos Connect, a live WhatsApp Business SaaS.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Full-Stack Developer | SaaS, Shopify & Laravel`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "Shakti Raghav",
    "Full-Stack Developer",
    "Shopify Developer",
    "Laravel Developer",
    "Python Developer",
    "Elasticsearch",
    "SaaS Developer",
    "Vue.js Developer",
    "Next.js Developer",
    "Gurugram",
    "India",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Full-Stack Developer`,
    description,
    url: site.url,
    siteName: `${site.name} Portfolio`,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Full-Stack Developer`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c10",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin, site.github],
  worksFor: { "@type": "Organization", name: experience[0].company },
  alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  knowsAbout: [
    "Python",
    "Laravel",
    "PHP",
    "Shopify Liquid",
    "MySQL",
    "Elasticsearch",
    "Vue.js",
    "Nuxt.js",
    "Next.js",
    "WordPress",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable} ${playfair.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
