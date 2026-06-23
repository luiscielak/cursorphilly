# Deploy Cursor Philly web (`sites/cursorphilly`)

Production target: **[Vercel](https://vercel.com)** with the **Root Directory** set to `sites/cursorphilly` (this folder).

## One-time setup

1. Push the monorepo to GitHub (or connect your Git host to Vercel).
2. In Vercel: **Add New Project** → import the repository.
3. **Root Directory**: `sites/cursorphilly`
4. **Build Command**: `pnpm run build` (default when `pnpm-lock.yaml` is present)
5. **Output**: Next.js default (no static export).
6. **Install Command**: `pnpm install` (default)

## Environment variables (optional)

- `NEXT_PUBLIC_SITE_URL` — canonical site URL for `sitemap.xml` and `robots.txt`, e.g. `https://cursorphilly.com`. If unset, Vercel’s production URL is used when `VERCEL_PROJECT_PRODUCTION_URL` is set; otherwise the fallback is `https://cursorphilly.com`.

## Custom domain

In the Vercel project: **Settings → Domains** → add `cursorphilly.com` (and `www` if needed). Update DNS at your registrar per Vercel’s instructions (apex **A** records or **CNAME** for `www`). SSL is automatic.

## Cutover from GitHub Pages (`landing-page/`)

When this app serves production traffic:

1. Point DNS for `cursorphilly.com` to Vercel (remove GitHub Pages **A/CNAME** records that pointed at Pages).
2. Disable or remove `.github/workflows/deploy.yml` under `landing-page/` so two hosts do not compete for the same domain.
3. See `landing-page/README.md` for the legacy Vite app note.

## Local development

```bash
cd sites/cursorphilly
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content updates

- Events: `content/events.ts`
- Recaps: `content/recaps/*.ts` — register slugs in `content/recaps/index.ts` and set `recapPath` on past events
- Site copy & links: `content/site.config.ts`
- Partners / ambassadors / hero photos: `content/partners.ts`, `content/ambassadors.ts`, `content/header-photos.ts`

## Syncing upstream template updates

This site is a customized fork of [`luisfer/cursor-ambassador-evergreen`](https://github.com/luisfer/cursor-ambassador-evergreen). To pull in upstream improvements:

1. Clone the template to a scratch dir (never committed): `git clone --depth 1 https://github.com/luisfer/cursor-ambassador-evergreen /tmp/evergreen`.
2. Diff each file: `diff -q /tmp/evergreen/<path> <path>`.
3. Apply changes by category:

**Template-owned (take upstream, then re-verify Philly tokens render):**

- Shared components in `components/` and `modules/slides/components/*` that read from `content/` (e.g. `JsonLd.tsx`, `SlideContent.tsx`, `DiagramSlide.tsx`).
- `lib/`, `app/recaps/[slug]/page.tsx`, `app/slides/[id]/page.tsx`, `app/not-found.tsx`.
- Configs: `tsconfig.json`, `postcss.config.js`, `.oxlintrc.json`, `.oxfmtrc.json`, dependency bumps in `package.json`.
- Security layer: `middleware.ts` + `securityHeaders` in `next.config.js`.

**Philly-owned (do NOT overwrite — these carry local customizations):**

- All `content/*` (config, events, recaps, ambassadors, partners, featured, header-photos, world-events, locales).
- `app/page.tsx` (custom section composition) and the custom sections `WhatToExpectSection`, `CommunityStats`, `NewsletterSignupSection`, `SpeakerApplicationSection`.
- `app/globals.css` (Cursor brand orange `#f54e00`, fonts, `.noise-bg-philly`), `app/layout.tsx` (Philly metadata), `app/robots.ts` / `app/sitemap.ts` (cursorphilly.com domain), `public/images/*`.
- Components customized with the accent color / extra behavior: `Navbar.tsx`, `Footer.tsx`, `FeaturedSection.tsx`, `PastEvents.tsx`, and the `lib/i18n.tsx` locale-typing fix.

**Notes / gotchas:**

- `app/layout.tsx` must `await headers()` so pages render dynamically and Next applies the per-request CSP nonce from `middleware.ts` to its scripts. Without it, the `strict-dynamic` CSP blocks the site's own JS.
- The strict CSP needs `https://fonts.googleapis.com` (`style-src`) and `https://fonts.gstatic.com` (`font-src`) to allow the Google Fonts (Thasadith) used by the navbar wordmark.
- `@vercel/analytics` does not accept a `nonce` prop; analytics still works because `strict-dynamic` propagates trust from the nonced bundle that injects its script.

After syncing: `pnpm install && pnpm run lint && pnpm run build`.
