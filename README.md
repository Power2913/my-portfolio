# Shakti Raghav — Portfolio

Next.js 16 + Tailwind CSS v4, deployed on Vercel at https://shaktiraghav.vercel.app

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build check
```

## Where to edit things

| What | File |
| --- | --- |
| All homepage copy — title, projects, experience, education, skills, links | `lib/content.ts` |
| Blog posts | `app/blog/posts.ts` |
| TradeImeX case study | `app/work/tradeimex-search/page.tsx` |
| Colours, fonts, 3D/animation CSS | `app/globals.css` |
| SEO metadata, JSON-LD | `app/layout.tsx` |

Experience totals ("4+ yrs") and the current-role duration are calculated from the dates in
`lib/content.ts`, so they update on every deploy.

## Structure

- `components/Stack3D.tsx` — interactive 3D "full stack" in the hero (CSS 3D transforms, no WebGL)
- `components/WorkGrid.tsx` — filterable project grid + featured Cosmos Connect card
- `components/Mocks.tsx` — code-drawn project previews (no screenshots to maintain)
- `components/SiteHeader.tsx` / `SiteFooter.tsx` — nav with mobile menu, footer + phone contact bar
- `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx` — sitemap, robots and social share image
