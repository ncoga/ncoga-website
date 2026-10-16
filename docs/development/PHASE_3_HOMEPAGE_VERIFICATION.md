# Phase 3 homepage verification — 2026-10-16

**Status:** The local `/` homepage slice and its editorial/motion refinement are implemented and verified. This is not a production release approval. Other routes still expose the copied site's content and integrations.

## Implemented

- Replaced the legacy `/` route with the NCOGA homepage in the `(ncoga)` route group. The former page source is retained as `legacy-homepage.tsx` without a route.
- Used the owner-provided `logo.png` without altering the artwork; copied it to `public/images/ncoga-logo.png` for web delivery. Used the existing `ncoga-hero.webp` with a neutral description. Other image areas remain type-led.
- Published only the organization identity, 1986 founding, umbrella role, stated focus, official mission and vision, October 2024 YAY relationship, five pillar themes, and public contact email documented in the [source sheet](PHASE_3_HOMEPAGE_PLAN.md).
- Header navigation reaches sections on `/`; the About and YAY deeper reading actions use the current official NCOGA site; contact is a direct email link. No NCOGA data enters the copied Sheets, Resend, Blob, or job application integrations.
- Added homepage-specific title, description, canonical, icon, Open Graph, Twitter and Organization structured data. The noindex `/design-system` preview keeps its own navigation and metadata.

## Verification evidence

| Check                                                                  | Result                                                                                                                                       |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Prettier on changed source, ESLint, TypeScript, 21 unit tests          | Pass                                                                                                                                         |
| Next 16 production build (`next build --webpack`)                      | Pass; `/` and `/design-system` prerender statically                                                                                          |
| Homepage content, canonical, logo link, hero image and primary actions | Pass in Chromium                                                                                                                             |
| Horizontal overflow at 320, 375, 430, 768, 1024, 1280, 1440, 1920px    | None detected                                                                                                                                |
| Mobile menu focus, Escape close, focus return                          | Pass                                                                                                                                         |
| Automated WCAG A/AA scan at 375px and 1440px                           | No detectable violations                                                                                                                     |
| Phase 2 preview regression checks (five focused Chromium cases)        | Pass                                                                                                                                         |
| Visual review                                                          | Desktop hero and [375px full page](../../artifacts/phase3-home-mobile.png) inspected; hierarchy, wrapping, image crop and footer are legible |

The focused test suite is [`ncoga-homepage.spec.ts`](../../tests/e2e/ncoga-homepage.spec.ts). Automated accessibility results are bounded to the scanned viewports and rules. The default Turbopack build stalled at compilation in this local environment; the webpack production build completed successfully.

**2026-10-16 mobile navigation refinement:** Replaced the visible “Menu” label with an accessible hamburger icon that becomes a close mark. The panel and links move in from the right; reduced-motion settings shorten the animation to near zero. A fresh webpack production build, lint, typecheck, five homepage Chromium checks, and five Phase 2 preview regression checks passed. The 320px overflow found in the first animation pass was corrected. The [open menu capture](../../artifacts/phase3-mobile-menu-open.png) was visually inspected.

**2026-10-16 full sidebar revision:** The owner rejected the dropdown treatment. Mobile and tablet navigation now opens a full-height right sidebar with a backdrop, close button, body scroll lock, focus containment, Escape and backdrop closing, and reduced-motion support. At 375px it fills the viewport; at 768px it is 420px wide. The [phone capture](../../artifacts/phase3-sidebar-375.png) and [tablet capture](../../artifacts/phase3-sidebar-768.png) were visually inspected. Lint, typecheck, and a fresh webpack production build passed. All six focused homepage Chromium checks and five Phase 2 preview regression checks passed, including eight-width overflow, keyboard behavior, open-state WCAG A/AA scan, and closed-state scans at 375px and 1440px. The open-state scan is taken after the entrance animation settles, when text is fully opaque.

**2026-10-16 editorial and GSAP refinement:** Added a source-backed four-part focus section, a compact 1986/New York City/US associations rail, and `ncoga-image.webp` as a second, neutrally described gathering photograph. A scoped `@gsap/react` wrapper animates the hero once and three selected scroll entrances with ScrollTrigger; reduced-motion users see all content without animation. The [375px capture](../../artifacts/phase3-gsap-375.png) and [1440px capture](../../artifacts/phase3-gsap-1440.png) were inspected for hierarchy, image crop, legibility, and section rhythm. Prettier, lint, typecheck, and a fresh webpack production build passed; `/` remained statically prerendered. Twelve focused Chromium checks passed: seven homepage cases and five Phase 2 preview regressions. They include image loading, actions/metadata, eight-width overflow, sidebar keyboard behavior, reduced motion, and automated WCAG A/AA scans for closed 375/1440px and settled open 375px states. These scans do not replace human accessibility review.

**2026-10-16 full-image hero:** The owner requested an edge-to-edge background image with copy and actions on the photograph. The copy sits on a flat dark-green overlay with ivory type; the image remains an optimized, semantically described `<Image>` and crops with `cover`. The [375px](../../artifacts/phase3-hero-background-375.png), [768px](../../artifacts/phase3-hero-background-768.png), [1440px](../../artifacts/phase3-hero-background-1440.png), and [1920px](../../artifacts/phase3-hero-background-1920.png) captures were visually inspected. The hero and copy remain inside the viewport at 320–1920px. Final browser, static, and security checks are in the [Git readiness note](GIT_READINESS.md).

## Remaining publication dependencies

- The legacy local routes, global sitemap/robots endpoints and copied metadata/assets on those routes still need phased NCOGA migration before deployment. The homepage does not link visitors into those local routes.
- The current official About and YAY URLs are temporary deeper reading destinations during local development. Recheck them when those routes migrate and before replacing the live `ncoga.com` site.
- The two supplied photos have no recorded event dates, participant identities, or rights provenance. The owner permitted use of selected `public/images` assets for this homepage; keep neutral descriptions and review publication rights before launch.
- No current news/events, leader profiles, testimonials, impact figures, forms, or membership claims were added. Production publishing and deployment still require separate authorization.
