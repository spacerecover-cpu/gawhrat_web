# GAWHRAT JARNAN TRAD S.P.C — Corporate Website

Premium corporate website for GAWHRAT JARNAN TRAD S.P.C, an Oman-based fleet
technology company (speed limiters, IVMS, fleet management).

**Live domain:** https://gawhrat.com

## Stack

- **Next.js 15** (App Router, fully static output, React 19)
- **TypeScript**, strict
- **Tailwind CSS v4** (design tokens in `app/globals.css` under `@theme`)
- **Motion** (Framer Motion's current package) for scroll reveals and micro-interactions
- **Lucide** icons at 1.5 stroke weight
- Fonts via `next/font`: Space Grotesk (display), Geist (body), Geist Mono (data)

## Commands

```bash
npm install     # install dependencies
npm run dev     # dev server on http://localhost:3000
npm run build   # production build (all routes prerender statically)
npm start       # serve the production build
```

## Structure

```
app/                    Routes (App Router). Every page exports metadata.
  layout.tsx            Fonts, navbar, footer, Organization/WebSite JSON-LD
  page.tsx              Homepage
  services/…            Services index + speed-limiter, ivms, fleet-management
  blog/[slug]/          Statically generated articles from lib/posts.ts
  sitemap.ts robots.ts  Generated sitemap.xml and robots.txt
  opengraph-image.tsx   Branded OG card rendered at build time
components/
  home/                 Homepage sections
  layout/               Navbar (mega menu), footer, page header, WhatsApp button
  mockups/              Real coded previews of the fleet platform (map, dashboard,
                        phone app, gauge, certificate). Not screenshots.
  ui/                   Button, Reveal, Counter, Accordion, CtaBand, primitives
  forms/QuoteForm.tsx   Quote form (opens a pre-filled email; see TODO below)
lib/
  site.ts               Contact details, nav structure  ← edit company info here
  data.ts               Services, industries, projects, FAQs, stats, testimonials
  posts.ts              Blog articles
  schema.ts             schema.org builders (LocalBusiness, Service, FAQ, Article)
```

## Before going live

1. **Confirm sample content** in `lib/data.ts`: statistics (`stats`), testimonials
   and project case studies are realistic placeholders awaiting real figures.
2. **Photography**: images load from Unsplash (free license) as high-quality
   placeholders. Replace with brand photography when available; swap URLs in
   `lib/data.ts` (`images`) and add the new host to `next.config.ts` if remote.
3. **Contact form**: currently opens a pre-filled email draft (no backend).
   Wire `components/forms/QuoteForm.tsx` to an API route or form service when ready.
4. **Exact address**: `lib/site.ts` and the schema use "Muscat, Oman" generically.
   Add the street address, Google Maps place link and Google Business Profile URL.
5. **Regulatory copy**: pages describe ROP, PDO and OPAL alignment in general
   terms. Have GAWHRAT confirm wording against current regulations.
