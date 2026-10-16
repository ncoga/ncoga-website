# System overview — Phase 0 baseline

As inspected on 2026-10-15, the application is a copied Platinum Staffing site built with **Next.js 16 App Router, React 19, TypeScript 6, Tailwind 4, Radix/shadcn components, and pnpm 11**. It is not yet an NCOGA application. See the evidence-backed [repository audit](../audits/INITIAL_REPOSITORY_AUDIT.md) and [asset inventory](../audits/ASSET_INVENTORY.md).

```text
src/app/(marketing) pages and layouts
   → src/components/{layout,navigation,home,sections,forms,ui,seo,motion}
   → src/content/*.ts (static former-organization content)
src/components/forms
   → src/app/actions/forms.ts (Zod validation)
   → src/lib/submissions.ts
   → Google Sheets storage + Resend notification
résumé form → src/app/actions/upload-resume.ts → private Vercel Blob
src/app/layout.tsx → metadata + Organization JSON-LD + global tokens
src/app/{sitemap,robots}.ts → generated SEO endpoints
```

There is no copied CMS, database, authentication, or localization layer evident in source or dependencies. The current NCOGA WordPress workflow is an **external existing-site system** described in the supplied meeting notes, not an integration already present here. The design system, route hierarchy, content model, editorial backend, and NCOGA deployment target are pending later decisions.

## Phase 2 foundation added on 2026-10-15

An isolated NCOGA route group now serves `/design-system` as a **noindex internal preview**. Its layout imports [scoped tokens and layout CSS](../../src/styles/ncoga-theme.css), a reusable [NCOGA header](../../src/components/ncoga/ncoga-header.tsx), and [footer](../../src/components/ncoga/ncoga-footer.tsx). The route uses the existing button primitive and adds a reusable [empty state](../../src/components/ncoga/ncoga-empty-state.tsx). [Editorial types](../../src/content/editorial-types.ts) define owner, publication status, source, and core story/event fields without publishing records or connecting a CMS.

The copied `(marketing)` route group and its pages remain in place while NCOGA routes are built. Its Organization JSON-LD, metadata, and local font loading moved out of the root layout and into the legacy marketing layout. The root is now neutral; the NCOGA preview supplies its own noindex metadata, preview icon, and locally hosted Newsreader/DM Sans faces with system fallbacks. Global CSS still contains legacy theme values for old pages, with NCOGA values scoped to the new route group. This is a staged local implementation, not a production-ready identity migration.

Reusable boundaries: structural layout, accessible UI primitives, form validation patterns, SEO generators, image utilities, security headers, and test tooling. Organization-specific boundaries: current routes, content, branding, form fields/destinations, JSON-LD, legal copy, imagery, CI ownership, and deployment identity. No production integration should be carried forward without confirming NCOGA ownership and privacy requirements.
