# NCOGA design system

**Status:** Foundational direction approved by the project owner on 2026-10-15. Use Contemporary Ghanaian Editorial (Direction A), Modern Institutional Heritage's structure (Direction C), and a measured amount of Cultural Modernism's modular energy and vibrance (Direction B), especially for YAY. The palette and font pairing below have been validated in the rendered Phase 2 preview at the required widths. The [research](DESIGN_RESEARCH.md), [showcase](NCOGA_COMPONENT_SHOWCASE.html), and [verification record](../development/PHASE_2_VERIFICATION.md) document the choice and its implementation.

Phase 2 applies these tokens in [scoped application CSS](../../src/styles/ncoga-theme.css) and a [noindex preview route](<../../src/app/(ncoga)/design-system/page.tsx>). Newsreader and DM Sans are self-hosted as variable WOFF2 Latin and Latin Extended subsets with system fallbacks; browser loading and representative extended glyphs have been checked.

## Design principles

1. **People and purpose first.** Clear hierarchy, authentic imagery, sourced stories, and useful participation routes carry the site.
2. **Institutional clarity.** Navigation, dates, captions, headings, and content provenance must be easy to understand.
3. **Editorial warmth.** Use type, whitespace, image placement, and varied section rhythm rather than repeated cards.
4. **Connected YAY identity.** Share foundation and components; give YAY a controlled red/gold accent and livelier modular arrangements.
5. **Restraint.** No gradients, fake impact numbers, fictional member photographs, decorative 3D, glassmorphism, or motion for its own sake.

## Color tokens

These are the working **foundation colors**. Test every final foreground/background pair and state during implementation; the listed ratios are calculated for proposed common pairs. Gold is a fill or rule on light surfaces, never ordinary text on white.

| Token              | Value     | Use                                                                |
| ------------------ | --------- | ------------------------------------------------------------------ |
| `--color-heritage` | `#123F32` | Primary brand, dark surfaces, links, primary buttons               |
| `--color-forest`   | `#197047` | Secondary green, select interactive and YAY accents                |
| `--color-gold`     | `#D9A227` | Small cultural warmth, dividers, labels on dark green              |
| `--color-red`      | `#B3262E` | Deliberate emphasis, YAY accent, focus treatment where appropriate |
| `--color-ink`      | `#171C19` | Main text                                                          |
| `--color-ivory`    | `#FAF8F2` | Default background                                                 |
| `--color-sand`     | `#F0EBDF` | Alternate editorial surface                                        |
| `--color-stone`    | `#DCD8CC` | Subtle border                                                      |
| `--color-white`    | `#FFFFFF` | Inverse text and cards where needed                                |

Semantic aliases: background → ivory; foreground → ink; muted text → `#49534C`; link → heritage; inverse background → heritage; inverse foreground → white; focus → red; border → stone. Success/warning/error/information colors are **not yet finalized**; give them dedicated semantic tokens during form/component implementation rather than assuming brand red equals error. Ratios: heritage/ivory 11.09:1, forest/ivory 5.73:1, ink/ivory 16.25:1, red/ivory 6.12:1, gold/heritage 5.13:1, gold/white 2.30:1. Follow [WCAG 2.2 contrast requirements](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

## Typography

**Selected pairing:** Newsreader for display/editorial headings; DM Sans for body, navigation, forms, and controls. The scoped preview self-hosts normal variable weights 400–700 with `font-display: swap`; Georgia and Arial remain fallbacks. The [font asset record](../../public/fonts/ncoga/README.md) retains source URLs and SIL OFL 1.1 licenses. Latin and Latin Extended faces loaded in Chromium, including a check with `ƐƆŋ`. Do not load multiple competing display families. Suggested fluid scale: display `clamp(3.25rem, 6vw, 6rem)`; H1 `clamp(2.75rem, 4.5vw, 4.8rem)`; H2 `clamp(2rem, 3.4vw, 3.5rem)`; H3 `clamp(1.5rem, 2vw, 2.25rem)`; body 1rem/1.6; lead 1.125rem/1.55; caption .875rem. Tune final optical sizes against each public page's real content.

Use sentence case and clear hierarchy. Keep body measure near 65–75 characters. Let long names and diaspora-specific terminology wrap naturally. Avoid excessive uppercase, tight tracking, or thin type on photography.

## Layout and composition

Standard content max width 1200px; wide composition max width 1440px; reading measure 720px. Responsive gutters: 16–24px mobile, 24–32px tablet, 48–64px desktop. Section space should vary with content, generally 64–112px, rather than repeating one template block. Use a 4px spacing unit and a restrained 4/8/12px radius family. Prefer borders and tonal separation to large shadows.

For NCOGA, alternate a type-led opening, documentary image placements, measured historical details, purpose statements, publication grids, functional event lists, and direct actions. Direction C informs the masthead, navigation, article metadata, archival dates, and footer. For YAY, use asymmetric modules and stronger accent blocks on selected sections; preserve the shared typographic and interaction system. Avoid placing red, gold, and green in every section.

## Imagery, logos, and cultural detail

Official NCOGA/YAY photography is the first choice. Until rights and captions are confirmed, use intentional type-led or solid-color fallback compositions. Never make generated or stock people appear to be actual members or leaders. The local [parent mark and six YAY PNGs](../audits/ASSET_INVENTORY.md) are **not approved for production use** until provenance/current status is confirmed. Preserve correct aspect ratio and clear space when approved.

The owner requested subtle Kente and Adinkra details on 2026-10-15. The [showcase](NCOGA_COMPONENT_SHOWCASE.html) now uses two original, low contrast SVG studies:

- [Kente strip rhythm](../../public/motifs/kente-strip-rhythm.svg): narrow vertical bands and crosswise blocks in the YAY background. The [Met's Ewe Kente record](https://www.metmuseum.org/art/collection/search/320677) describes narrow woven strips and warp/weft blocks. This is an abstract reference to construction, **not** a reproduction or a named Kente design.
- [Adinkrahene rings](../../public/motifs/adinkrahene-rings.svg): three pale concentric rings in the leadership section. A [British Museum object record](https://www.britishmuseum.org/collection/object/E_Af2006-15-178) identifies the concentric-circle Adinkrahene sign and its association with greatness and leadership. This is a background detail, **not** an NCOGA mark or claim that one Akan sign represents every Ghanaian community.

Keep both behind or beside content, never under controls where they affect legibility. Use them selectively, preserve text contrast, and retain source/meaning documentation. [Smithsonian National Museum of African Art](https://africa.si.edu/exhibitions/inscribing-meaning-writing-and-graphic-systems-africa-art) explains why Adinkra signs need context. No additional traditional signs or named textile patterns are part of the system.

## Motion and accessibility

CSS transitions are the default: about 160ms for controls and 220–280ms for menus. Larger reveals, if justified, should be rare, never gate content, and respect `prefers-reduced-motion`. Avoid scroll-jacking and site-wide smooth scroll by default. Provide semantic landmarks, visible focus, keyboard-operable navigation, 44px-class touch targets, readable contrast, and explicit empty/loading/error states. See [component standards](COMPONENT_STANDARDS.md) and [quality instructions](../../.agents/instructions/09-QUALITY-AND-TESTING.md).

### Editorial photography and motion extension — 2026-10-16

The owner asked for more visual richness and a restrained GSAP treatment, starting with the NCOGA homepage. Carry these rules into later verified pages where the content supports them:

- Compose with one clear type-led opening, a documentary image, and a small factual rail or caption. A second image may anchor a distinct story section; avoid repeated photo cards or a stock-photo collage. Use the existing heritage green, ivory, sand, gold, and red roles without gradients.
- Prefer owner-supplied or verified organizational images. A photo with unknown date or subjects gets neutral alternative text and no event, leader, or membership claim. Stock imagery, if later used, must depict a general place or context and be identified as illustrative; it must not imply the people pictured belong to NCOGA.
- Use the existing Kente strip study only in selective YAY contexts. Use Adinkrahene only where the leadership meaning is relevant. These are cultural references with documented meaning, not blanket Ghanaian decoration.
- GSAP is available for a short opening sequence and a few purposeful scroll entrances. Use `@gsap/react` with a scoped ref and automatic cleanup. Register only the plugins actually used; the first page uses ScrollTrigger. Use `gsap.matchMedia()` to skip animation for reduced motion, animate transforms and opacity, and keep content visible before and without JavaScript.
- Limit an entrance to roughly 20–28px of travel and 0.45–0.7s. Trigger only selected editorial elements once as they enter view. Keep navigation, links, forms, and reading content immediately usable. Do not add pinning, smooth scrolling, parallax, text splitting, looping motion, or animation to every section without a specific content need.
- Future pages may reuse the motion wrapper and data attributes, but should choose their own two or three meaningful reveal targets after visual review. Document and test any new motion pattern at mobile and desktop widths, with the reduced-motion preference on and off.

### Full-bleed photographic hero — 2026-10-16

The owner selected a full-image background for the NCOGA homepage hero. Keep the image edge to edge and put the headline, supporting copy, and actions within one flat, dark heritage-green overlay. The overlay must provide contrast independent of the photograph's lightest crop; use ivory text and clearly distinct button states. Do not use a gradient or place type directly on an uncontrolled part of the image. On narrow screens, let the copy settle below a visible band of photography while remaining within the image stage. Keep meaningful image alternative text, a solid-color fallback, responsive `cover` cropping, and the factual rail below the stage. Later pages may use this pattern only when their imagery and copy support it; test the crop and contrast at the required viewport widths.

## Pending implementation decisions

The approved **direction and request for subtle motifs** do not approve specific copy, leaders, logos, photos, social destinations, or program status. The two documented motif studies have passed rendered review in the Phase 2 preview; their placement and contrast must be checked again wherever future pages use them. Final optical tuning with real page content, form-state colors, and production image treatment still need validation. Do not silently introduce one-off styling that conflicts with this system; record a reusable variant or a design decision when needed.
