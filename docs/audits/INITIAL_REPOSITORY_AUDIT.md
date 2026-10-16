# Initial repository audit — 2026-10-15

## Scope and evidence

Read-only Phase 0 assessment of the copied application, configuration, assets, tests, and supplied content. Code discovery used the indexed codebase-memory graph (1,196 nodes, 1,632 edges) before focused source reads. The graph's route label is incomplete for Next.js file routes, so the route filesystem and sitemap were inspected directly. No application, dependency, deployment, or Git configuration was changed. This directory has **no `.git` repository**.

## Current architecture

| Area       | Finding                                                                                                                                                   | Evidence                                                                                                                                                     |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Runtime    | Next.js 16.3.8 App Router, React 19.3.0, TypeScript 6.0.3, Node 24, pnpm 11.17.0                                                                          | [`package.json`](../../package.json), [`.node-version`](../../.node-version)                                                                                 |
| Styling    | Tailwind 4, shadcn CSS vocabulary, Radix components, CSS variables in one global sheet; current palette and two self-hosted sans fonts belong to Platinum | [`globals.css`](../../src/app/globals.css), [`layout.tsx`](../../src/app/layout.tsx)                                                                         |
| Routes     | About, employer, industry, job seeker, jobs, resources, contact, privacy, terms, accessibility under App Router; dynamic employer/industry/resource slugs | [`src/app/(marketing)`](../../src/app/%28marketing%29), [`sitemap.ts`](../../src/app/sitemap.ts)                                                             |
| Content    | TypeScript modules under `src/content`; no NCOGA content model, MDX, CMS, or database evident in the copied app                                           | [`src/content`](../../src/content)                                                                                                                           |
| Forms      | React Hook Form + Zod + Server Actions; submission boundary writes Google Sheets and notifies through Resend; résumé uploads use private Vercel Blob      | [`forms.ts`](../../src/app/actions/forms.ts), [`submissions.ts`](../../src/lib/submissions.ts), [`upload-resume.ts`](../../src/app/actions/upload-resume.ts) |
| SEO        | Root metadata, Open Graph image, Organization/Breadcrumb JSON-LD, sitemap, robots; all current organization values and routes are for Platinum            | [`layout.tsx`](../../src/app/layout.tsx), [`json-ld.tsx`](../../src/components/seo/json-ld.tsx), [`sitemap.ts`](../../src/app/sitemap.ts)                    |
| Deployment | Vercel config, security headers/CSP, environment validation, GitHub Actions CI, security, browser, deployment verification                                | [`next.config.ts`](../../next.config.ts), [`vercel.json`](../../vercel.json), [`.github/workflows`](../../.github/workflows)                                 |
| Tests      | Vitest unit tests; Playwright Chromium/Firefox/WebKit smoke and accessibility tests; Lighthouse config                                                    | [`tests`](../../tests), [`playwright.config.ts`](../../playwright.config.ts), [`lighthouserc.cjs`](../../lighthouserc.cjs)                                   |

## Reusable infrastructure

Retain and retheme the responsive `Container`, editorial image/hero, headings, section, prose, button, accordion, dialog, sheet, inputs, field/status, skip link, and JSON-LD/sitemap **mechanics**. The header's mobile sheet and dropdown structure are useful, though its navigation, CTAs, and desktop menu accessibility need review. Form validation and delivery boundaries are reusable only after NCOGA data/consent fields and authorized destinations are defined. Motion `Reveal` and animated stat helpers are optional; do not carry effects over by default. Image optimization, security headers, dependency pins, and CI checks provide a foundation after identity-specific settings are replaced.

## Branding and content contamination

- [`package.json`](../../package.json) names `platinum-staffing`; [`site.ts`](../../src/content/site.ts) contains the former name, 2019 founding date, tri-state service area, and staffing description.
- [`DESIGN.json`](../../DESIGN.json) is a generated Platinum design-system artifact with purple/navy ramps. Archive or replace it when the NCOGA system is approved; do not mistake it for approved NCOGA tokens.
- [`layout.tsx`](../../src/app/layout.tsx), [`json-ld.tsx`](../../src/components/seo/json-ld.tsx), favicon/OG files, [`navigation.ts`](../../src/content/navigation.ts), [`site-header.tsx`](../../src/components/navigation/site-header.tsx), and [`site-footer.tsx`](../../src/components/navigation/site-footer.tsx) expose former identity and destinations. JSON-LD even points to `/logos/platinum-lockup.png`, which is absent from the local asset inventory.
- App routes, page metadata/copy, legal drafts, forms, error page, sitemap, and tests are staffing-specific. Existing design tokens are purple/navy/silver and globally animated scrolling; none is an approved NCOGA visual decision.
- [`.github/CODEOWNERS`](../../.github/CODEOWNERS) references `@platinumstaffing`; [deployment verification](../../.github/workflows/deployment-verification.yml) expects `platinumstaffing/landing-page`. These must not be reused as-is for a future NCOGA remote or deployment.
- [`.env.example`](../../.env.example) is labeled NCOGA but still describes employer inquiries, applications, and résumé storage. It contains empty examples, not live credentials. It should be rewritten during technical foundation work after integration decisions.

## Assets and integrations

See [asset inventory](ASSET_INVENTORY.md). `public/brand` holds 94 previous-site images/SVGs and occupies about 112 MB; six NCOGA YAY logo PNGs and a separate `logo.png` are candidates needing owner provenance and usage approval. Public icons and OG art belong to the prior site. Source JPEGs are ignored by `.gitignore` while WebP outputs are present. No asset was removed.

No CMS or authentication implementation was found in the copied application. The supplied [meeting notes](../../references/Website%20updates%20meeting%20%28Tiz%202026%29.md) describe an existing **WordPress** publishing workflow on the current NCOGA site; assess headless or migration options before selecting a new CMS. Existing Resend, Sheets, Blob, Cloudflare Turnstile environment names and Vercel configuration are integration candidates, **not authorization to connect NCOGA forms to former accounts**.

## Security and technical debt

- Former forms collect employment, company, and résumé information; they must be disabled or replaced before any NCOGA deployment. Existing private Blob access and input validation are positive mechanics, but NCOGA privacy, retention, consent, access control, and destination ownership remain unresolved.
- Turnstile is described as optional locally and required by deployment environment validation; the server action shown uses a honeypot. Verify actual server-side Turnstile use and rate limiting before any public NCOGA form.
- Current CSP allows inline scripts/styles for documented framework reasons and Cloudflare frames. Re-evaluate it when adding embeds, WordPress previews, video, or other services rather than broadening it blindly.
- Root metadata, JSON-LD, and sitemap would publish false former-organization facts if deployed unchanged. Legal copy is explicitly draft Platinum content.
- No `.git` repository exists. Inspect ignored and hidden material, secret scan, repository identity, and `.gitignore` before initializing one. Do not create a remote without authorization.
- The root [`README.md`](../../README.md) is empty. Future maintainers need setup, content, verification, and release guidance after architecture decisions are made.

## Verification status

Attempted `pnpm typecheck` and `pnpm test`. Neither reached project checks: dependencies were not locally available and package fetches from npm failed (`ENOTFOUND`/metadata fetch failure). `node_modules` was created by pnpm's attempted install; its completeness is unknown. No passing build, test, lint, browser, accessibility, or performance result is claimed. Do not interpret cached `.next`, coverage, or Playwright reports as fresh verification.

## Recommended changes, risks, and immediate priorities

1. Preserve the Next.js/Tailwind/Radix foundation and reusable structural components; replace all active branding and routes only after the design system and content priorities are approved.
2. Build a content provenance layer and route mapping from the live NCOGA site and supplied YAY documents. Keep draft, verified, approved, and obsolete statuses distinct.
3. Decide visual foundation through Phase 1 research and a focused showcase. Then retheme shared tokens, header/footer, metadata, and forms in Phase 2.
4. Evaluate retaining WordPress for editorial publishing before introducing a new CMS. Event/news needs shared NCOGA/YAY ownership and date-aware behavior.
5. Audit all public assets for licensing and references; move obsolete prior-site imagery out of public serving only during a reviewed migration. Do not delete organizational records or historical banners without authorization.
6. Resolve current-site placeholder content, leadership changes, approved logo/photography, form destinations, CMS ownership, and redirect list before publication.

**Phase 0 conclusion:** The technical foundation is reusable, but the application is not ready to represent NCOGA. Phase 1 can proceed on documentation and visual exploration without implementing the full site.
