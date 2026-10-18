# Decision log

## First-wave NCOGA routes and YAY visual fallback — 2026-10-17

**Status:** Implemented and verified locally on `release/dev`; organizational content approval and production publication remain pending. See [About](PHASE_4_ABOUT_VERIFICATION.md), [Contact](PHASE_4_CONTACT_VERIFICATION.md), and [YAY](PHASE_4_YAY_VERIFICATION.md).

**Decision:** Move `/about` and `/contact` from the copied marketing layout to the NCOGA layout and add `/ncoga-yay` as the connected branch landing page. Use sourced statements and the published general email, omit template contact details and copied forms, and keep historical work explicitly historical. Use the approved type-led YAY variant with a solid red field and abstract Kente strip where specific YAY imagery and mark rights are unapproved. The YAY page lists five high-level focus areas; “Internal & Public Affairs” remains a provisional short name pending the organization's decision.

**Reason:** These routes complete the planned first landing-page wave without inventing programs, people, statistics, or active events. The connected navigation no longer sends visitors from a new NCOGA page into the copied staffing site.

**Consequence:** Legacy child routes remain live in the checkout, and copied sitemap/robots output still needs replacement before launch. Copied integrations receive no NCOGA data. The old Contact form smoke assertion was replaced with a check that the NCOGA Contact page exposes no copied form. Current content, mailbox ownership, pillar naming, and publication rights need organizational review.

## Release branch workflow — 2026-10-16

**Status:** Owner directed and implemented. Nine remote Dependabot pull requests were retargeted; Dependabot closed them automatically, and their changes were applied and tested on `release/dev` as recorded in [resolution](DEPENDABOT_RESOLUTION.md).

**Decision:** Implement pages and receive dependency updates on `release/dev`. Promote `release/dev` to `main` through a reviewed pull request. The PR policy allows Dependabot only into `release/dev` and allows `main` pull requests only from `release/dev`.

**Reason:** Keep the published branch distinct from active development and dependency intake.

## Full-image homepage hero — 2026-10-16

**Status:** Implemented locally at the owner's request; verification is recorded in the [Phase 3 record](PHASE_3_HOMEPAGE_VERIFICATION.md).

**Decision:** Use the existing permitted community photograph as an edge-to-edge hero background. Place the headline, supporting text, and actions on a flat, dark green overlay, retaining the fact rail below the image. Preserve the approved palette, typography, and restrained motion system. Record the pattern in [DESIGN.md](../design/DESIGN.md) for later pages where a suitable image exists.

**Reason:** The owner requested a photograph-led first impression. The overlay keeps text contrast stable as the image crop changes between phone and desktop widths.

**Consequence:** The hero image remains semantically described and prioritized for loading. Its participant, date, and rights provenance still require publication review. The NCOGA homepage remains the only migrated public route.

## Homepage editorial motion and second photograph — 2026-10-16

**Status:** Implemented locally on `/` and verified in the [Phase 3 record](PHASE_3_HOMEPAGE_VERIFICATION.md). The owner requested this refinement and allowed selected local photographs.

**Decision:** Retain the approved Contemporary Ghanaian Editorial system, add one distinct local gathering photograph and a source-backed four-part focus section, and use GSAP only for a short hero entrance and three selected scroll reveals. Apply the reusable limits and reduced-motion rule in [DESIGN.md](../design/DESIGN.md) to future verified pages.

**Reason:** The owner requested a richer Ghanaian and diaspora feel without over-designing the homepage. The official NCOGA site supports the focus text; the local image visually adds community context without inventing an event or identifying people.

**Consequence:** The homepage has `gsap` and `@gsap/react` dependencies. Its motion is scoped and skips animation when reduced motion is preferred. The second photograph has unknown date, participant identity, and rights provenance, so publication rights still need review before launch. Other routes and copied integrations were not changed.

## Full-height responsive navigation — 2026-10-16

**Status:** Implemented locally at mobile and tablet widths after owner feedback; verified in the [Phase 3 record](PHASE_3_HOMEPAGE_VERIFICATION.md).

**Decision:** Use a full-height right sidebar for the shared NCOGA shell at widths up to 900px. The phone panel fills the viewport; wider responsive widths show a 420px sidebar and dimmed backdrop. CSS handles the entrance, with reduced-motion support. Focus stays within the open sidebar; Escape, the close control, backdrop, and link selection close it.

**Reason:** The owner asked for a full sidebar instead of the earlier dropdown. This keeps a clear navigation surface at small widths while retaining the existing desktop navigation and source-backed destinations.

**Consequence:** The shared header behavior changes on `/` and the noindex `/design-system` preview. No external navigation library or legacy integration was introduced.

## Phase 3 homepage routing and media — 2026-10-16

**Status:** Implemented locally for the homepage only; [verification](PHASE_3_HOMEPAGE_VERIFICATION.md) passed. Production publication remains a separate gate.

**Decision:** Serve `/` from the NCOGA route group. Use homepage section anchors for local navigation and the existing official site for deeper About and YAY reading until those local routes are verified. Use the owner-supplied logo and one existing local photo with neutral alternative text; keep YAY artwork type-led. Retain the former homepage source without a route.

**Reason:** Every other local public route still belongs to the copied staffing site. This avoids sending NCOGA visitors to a mixed-identity experience while meeting the owner’s homepage-only scope. The user explicitly requested the logo and allowed selected `public/images` photographs.

**Consequence:** The shared shell now selects preview or homepage navigation based on the route. The copied routes, integrations, global sitemap and robots behavior remain a launch dependency. Existing official-site links need rechecking when WordPress URLs are migrated. The photograph's date, participant identity and rights provenance remain unverified.

## Phase 2 route isolation — 2026-10-15

**Status:** Implemented locally and closed as the Phase 2 shared foundation. Static, build, responsive, keyboard, and focused accessibility checks pass; see the [verification record](PHASE_2_VERIFICATION.md).

**Decision:** Build the NCOGA shared shell, scoped semantic tokens, and content types in an isolated `(ncoga)` route group with a noindex `/design-system` preview. Keep the existing marketing route group intact during the migration. Move the copied Organization JSON-LD, metadata, and local fonts into the legacy marketing layout so the preview inherits no previous-brand organization identity from the root.

**Reason:** The copied public routes still contain Platinum content and integrations. Applying the new NCOGA shell globally would put the new identity around unfinished legacy pages. The isolated shell makes the components reviewable while Phase 3 replaces routes with verified NCOGA content.

**Alternatives:** Retheme the whole app immediately; move or delete legacy pages before replacement. Both risk mixed identity, broken routes, or loss of useful source before the new routes exist.

**Consequence:** Legacy metadata and fonts remain only in the marketing route group; the old pages, global legacy CSS values, sitemap, and robots rules remain. The preview supplies its own metadata and is omitted from the sitemap. Production migration must replace the old pages and SEO endpoints and verify redirects, content, and integrations before launch. The preview's anchor navigation must become real route navigation as pages ship.

## Self-hosted NCOGA typography — 2026-10-15

**Status:** Implemented and verified in the Phase 2 preview.

**Decision:** Use locally hosted, variable Newsreader and DM Sans WOFF2 subsets for the approved editorial and interface pairing, with Latin and Latin Extended coverage and `font-display: swap`. Keep source URLs and SIL OFL 1.1 license texts beside the font assets.

**Reason:** The fallback preview could not establish final line wrapping or rhythm. Local hosting makes the intended typefaces available without a runtime font-provider dependency. Browser checks confirmed both families and representative extended glyphs load.

**Consequence:** Future NCOGA routes inherit the scoped faces. Page-specific optical tuning remains part of each page review; italic and additional scripts require their own sourced assets if real content needs them.

## Instruction-system structure — 2026-10-15

**Status:** Set up for agent use.

**Decision:** `AGENTS.md` is a concise entry point; `.agents/instructions/` holds stable requirements; `docs/` holds verified findings, approved design and architecture, decisions, and progress. The full [master prompt](../../NCOGA_MASTER_PROMPT.md) remains available as source context. The candidate palette, proposed sitemap, editorial headlines, CMS options, and design direction are **not approved implementation decisions**.

**Reason:** Future agents need task-specific instructions without mistaking proposals for completed research or approval. The copied application and source documents were left unchanged.

**Scope resolution:** The master prompt instructs an implementing agent to begin Phase 0. The current owner-supplied setup brief explicitly limits this task to instruction organization and directs that Phase 0 begin later. The narrower current brief governs this session; no website phase was started.

Future consequential decisions should record status, context, chosen option, alternatives, consequences, and approval where required.

## Subtle cultural background details — 2026-10-15

**Status:** Owner requested subtle Kente and Adinkra designs in the background. Two sourced motif studies are in the Phase 1 showcase and Phase 2 preview; rendered review at the required widths passed during Phase 2 closeout.

**Decision:** Use an original, faint strip/weft rhythm informed by Kente construction behind the YAY section, and a pale three-ring rendition of Adinkrahene in the leadership section. Source and context are recorded in [DESIGN.md](../design/DESIGN.md).

**Reason:** Both details support the approved editorial direction without covering content or making unverified imagery look organizational. Adinkrahene's documented leadership association gives the sign a specific context.

**Alternatives:** A full Kente cloth texture or many mixed Adinkra signs would dominate content and obscure distinct meanings; no motifs would miss the owner's requested cultural detail.

**Consequence:** Keep both decorative, low contrast, and selective. They are not official marks, named cloth reproductions, or a substitute for authentic photography. Review the rendered showcase before carrying them into production pages.

## Phase 0 architecture disposition — 2026-10-15

**Status:** Recommendation from read-only audit, not an approved architectural migration.

**Context:** The copied site uses Next.js 16, React 19, Tailwind 4, Radix/shadcn primitives, static TypeScript content, and Vercel/Sheets/Resend/Blob integrations. The NCOGA source documents mention an external WordPress publishing workflow. See [repository audit](../audits/INITIAL_REPOSITORY_AUDIT.md).

**Recommendation:** Preserve the sound frontend/testing foundation while replacing organization-specific routes, content, assets, metadata, form destinations, and CI identity. Evaluate retaining WordPress before selecting a CMS. Do not connect copied integrations to NCOGA data without an ownership/privacy decision.

**Alternatives:** Rebuild from scratch; carry over the copied site wholesale; install a new CMS immediately. Each either loses useful infrastructure or creates avoidable identity and maintenance risk.

## Phase 1 visual direction — 2026-10-15

**Status:** Direction approved by the owner on 2026-10-15. The foundation tokens and composition rules are recorded in [DESIGN.md](../design/DESIGN.md); their application still needs browser and accessibility validation.

**Recommendation:** Contemporary Ghanaian Editorial with Modern Institutional Heritage discipline and small, controlled Cultural Modernism accents for YAY. See [research](../design/DESIGN_RESEARCH.md) and [visual comparison](../design/NCOGA_DIRECTION_PREVIEW.svg).

**Alternatives:** Cultural Modernism (more expressive, higher decorative/accessibility risk); Modern Institutional Heritage (clearer and lower effort, but more formal and potentially generic for YAY).

**Decision:** Use Direction A, Contemporary Ghanaian Editorial, as the foundation; Direction C provides institutional structure; a measured amount of Direction B brings modular energy and vibrance, particularly to YAY.

**Consequence:** A focused [component showcase](../design/NCOGA_COMPONENT_SHOWCASE.html) demonstrates the blend. It includes type-led imagery fallbacks, shared editorial and interaction patterns, and a distinct YAY arrangement. The cultural motifs and selected fonts have since been validated in the [Phase 2 preview](PHASE_2_VERIFICATION.md). Photography, official marks, and public copy still require source review for public pages.
