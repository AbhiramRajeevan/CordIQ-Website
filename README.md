# CordIQ — Next.js site

A React + Next.js (App Router) rebuild of the landing page, with Tailwind CSS
for styling and Framer Motion for real scroll-linked animation.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build && npm start` for a
production build.

## What's here

- `/` — the landing page (hero, pinned scroll story, services, industries,
  process, work, FAQ, contact)
- `/services` — index of all 8 services
- `/services/[slug]` — a dedicated page per service (content sourced from
  makdit.in), each with its own hero, who-it's-for / problems-we-solve,
  what's included, a WhatsApp-deep-link quote form with session details,
  why-us, process, FAQ and related-services links:
  - `/services/web-development`
  - `/services/web-application-mvp`
  - `/services/ui-ux-design`
  - `/services/domain-hosting`
  - `/services/cctv-installation`
  - `/services/it-networking`
  - `/services/computer-amc-it-support`
  - `/services/office-it-setup`
- The navbar's **Services** link is a mega-dropdown linking to all 8 pages.

## Session details

The "free consultation" CTA (homepage final section, and each service page's
quote panel) now shows session details: duration, format (call / WhatsApp /
on-site), and what you get (a written proposal, no obligation) — see
`components/SessionDetails.tsx`.

## Icons

All service icons and small UI glyphs are custom-drawn line SVGs in
`components/visuals/Icons.tsx` — no external icon library, no image
downloads, nothing that can 404.

## On images

This build does not include AI-generated or stock photography. There's no
AI image-generation tool available in the environment this was built in, and
hotlinking to stock photos in a handed-off project is fragile (links rot,
and licensing needs sorting per-image). Instead, every visual is a custom,
animated SVG/CSS illustration built to match the brand — see
`components/visuals/Illustrations.tsx` and `components/visuals/Icons.tsx`.

If you want real photography or AI-generated art instead, drop images into
`/public` and swap them into the relevant component (e.g. replace
`<NetworkHub />` in `Hero.tsx` with an `<Image />`).

## Structure

- `lib/services-data.ts` — structured content for all 8 service pages
- `app/page.tsx` — composes the homepage
- `app/services/page.tsx` — services index
- `app/services/[slug]/page.tsx` — dynamic service detail page
- `components/Hero.tsx` — hero with parallax (Framer Motion `useScroll`)
- `components/StoryScroll.tsx` — pinned, scroll-scrubbed 5-panel sequence
- `components/ProcessSteps.tsx`, `FAQAccordion.tsx` — shared, reused by both
  the homepage and every service page
- `components/QuoteForm.tsx` — client-side quote form (builds a prefilled
  WhatsApp deep link, no backend needed)
- `components/SessionDetails.tsx` — the consultation session-details chips
- `components/visuals/Icons.tsx` — custom SVG icon set
- `components/visuals/Illustrations.tsx` — animated hero/story illustrations

All motion respects `prefers-reduced-motion`.
