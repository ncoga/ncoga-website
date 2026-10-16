# Phase 1 design research and recommendation — 2026-10-15

**Status: historical Phase 1 comparison.** This document records the proposal before the owner approved the A/C/B blend on 2026-10-15. The owner subsequently requested subtle Kente and Adinkra backgrounds; the researched motif studies and their limits are documented in [DESIGN.md](DESIGN.md). This research translates the [project brief](../../.agents/instructions/03-DESIGN-DIRECTION.md) into three directions; the [comparison preview](NCOGA_DIRECTION_PREVIEW.svg) is illustrative, with no fictional organizational photography.

## Evidence and design implications

| Reference                                                                                                                                          | What works for NCOGA                                                                                            | Limit / reinterpretation                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Refero editorial examples](https://styles.refero.design/design-styles/editorial-websites)                                                         | Reading rhythm through type, spacing, imagery, and varied density; useful for history, news, and programs       | Do not turn functional event and membership tasks into magazine spreads.                                                                                      |
| [Navbar Gallery](https://www.navbar.gallery/)                                                                                                      | Compares simple bars, flyouts, mega menus, and secondary navigation                                             | NCOGA needs a compact global menu plus clear YAY local navigation, not a novelty mega menu. Keyboard behavior must be designed, not copied from a screenshot. |
| [Footer Design](https://www.footer.design/)                                                                                                        | Footer composition as a useful destination map                                                                  | Preserve clear hierarchy and verified links; avoid huge decorative footers.                                                                                   |
| [Motion](https://motion.dev/) and [Lenis](https://lenis.dev/)                                                                                      | Libraries are available if a specific transition or scroll problem warrants them                                | Existing `motion` dependency does not justify blanket reveals. Smooth scrolling is optional, with reduced-motion and anchor behavior protected.               |
| [Metropolitan Museum of Art: Kente](https://www.metmuseum.org/art/collection/search/320677)                                                        | Kente is a constructed, named, culturally specific strip-weaving tradition with deliberate compositional rhythm | Do not paste a generic “African pattern” or imply all Ghanaian communities share one textile symbol. Do not copy museum artwork.                              |
| [Smithsonian National Museum of African Art: Adinkra](https://africa.si.edu/exhibitions/inscribing-meaning-writing-and-graphic-systems-africa-art) | Symbols carry proverb-linked meanings and context                                                               | No Adinkra symbol is proposed for immediate use. Select and document one only after research and organizational review.                                       |
| [W3C WCAG 2.2 contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)                                                | Normal text needs at least 4.5:1 contrast; large text at least 3:1                                              | Candidate gold on white measures about 2.30:1 and cannot serve as ordinary text.                                                                              |

The existing [NCOGA site](https://ncoga.com/) supplies organizational context, but its template sections are not design/content authority. The supplied [September draft](../../references/PAGES%20UPDATE%20SEPTEMBER%202026.md) suggests a publishing and programs platform, so the visual system must support long articles, event utility, leadership, and YAY campaigns—not only one hero.

## Direction A — Contemporary Ghanaian Editorial **(recommended)**

**Concept:** “A living council record.” Warm ivory and deep heritage green create a calm institutional base; documentary photography and large, readable editorial type give people and programs presence. A fine gold rule or small red accent can mark select editorial moments. YAY uses a more energetic crop, modest green/red accent change, and varied section pacing while keeping shared components.

**Type:** Test Newsreader for large editorial headings with DM Sans or Source Sans 3 for navigation, forms, and body. Font selection and licensing/loading need confirmation. **Layout:** readable columns, asymmetric image/text compositions, quiet dividers, functional event lists, and publication-style story hierarchy. **Motif:** first release can use no traditional symbol; explore narrow strip rhythm as an abstract layout principle, clearly distinguished from authentic Kente. **Motion:** CSS state changes; optional focused menu/dialog transitions; no site-wide scroll effects.

**Strengths:** Distinctive without spectacle, well suited to institutional history and continuous publishing, approachable to younger and older audiences. **Weakness:** Needs strong authentic photography or carefully designed type-led fallbacks; a weak content pipeline will make editorial layouts feel empty. **Complexity:** Moderate, largely achievable with existing CSS/layout infrastructure.

## Direction B — Cultural Modernism

**Concept:** Stronger modular grids and color blocks draw from contemporary Ghanaian graphic composition, using red/gold/green more visibly. Bolder sans headings, larger geometric editorial accents, and expressive YAY sections.

**Type:** Compare Fraunces or a characterful display face with a disciplined sans; validate legibility. **Layout:** offset blocks, strong labels, modular program panels, sharp section changes. **Photography:** tightly cropped authentic community scenes. **Motif:** any cultural reference must be researched and documented; no decorative imitation Kente. **Motion:** restrained transitions, potentially one purposeful SVG sequence.

**Strengths:** High energy and immediate cultural recognition, useful for youth programs and campaigns. **Weakness:** Easier to overdecorate, weaken parent institutional credibility, or exhaust the reader; more demanding to keep accessible at small sizes. **Complexity:** Moderate to high.

## Direction C — Modern Institutional Heritage

**Concept:** Archival confidence. Deep green/charcoal, white/ivory, formal type hierarchy, structured grids, explicit dates and source attribution, and minimal ornament. YAY has a separate accent within shared rules.

**Type:** Test a restrained editorial serif with a highly legible interface sans. **Layout:** regular columns, strong masthead, chronological history, orderly programs and events. **Photography:** archival and documentary material with captions. **Motif:** none until meaning and rights are established. **Motion:** minimal CSS feedback.

**Strengths:** Trust, clarity, maintainability, and low implementation risk. **Weakness:** Can feel too formal or anonymous, especially for YAY, without confident imagery and editorial pacing. **Complexity:** Low to moderate.

## Comparative decision

| Criterion                  | A Editorial          | B Modernism             | C Heritage               |
| -------------------------- | -------------------- | ----------------------- | ------------------------ |
| Institutional credibility  | High                 | Medium                  | Very high                |
| YAY adaptability           | High                 | Very high               | Medium                   |
| Content/publishing fit     | Very high            | Medium                  | High                     |
| Accessibility effort       | Manageable           | Higher                  | Manageable               |
| Need for authentic imagery | High                 | High                    | Medium                   |
| Risk of generic template   | Low with strong type | Low but decorative risk | Medium if too restrained |

**Recommendation:** Use Direction A as the foundation, with Direction C's disciplined navigation, captions, and source clarity. Reserve a small amount of Direction B's modular energy for YAY programs. This is a design recommendation, not an approved system.

## Candidate visual system for review

- **Colors:** Test master-prompt candidates `#123F32` deep green, `#197047` secondary green, `#D9A227` gold, `#B3262E` red, `#171C19` ink, `#FAF8F2` ivory, `#F0EBDF` sand, `#DCD8CC` border, and white. No gradients.
- **Calculated contrast:** green/ivory 11.09:1; forest/ivory 5.73:1; ink/ivory 16.25:1; red/ivory 6.12:1; gold/green 5.13:1; gold/white 2.30:1. Ratios are calculations, not a substitute for checking every final adjacent pair and state.
- **Type:** one display serif and one interface sans; avoid lettering that resembles either generic SaaS or a tourism poster. Test names/diacritics, long headings, body readability, and mobile wrapping.
- **Structure:** masthead with NCOGA parent identity, clear global destinations, local YAY wayfinding; 720px reading width; strong article and event patterns; explicit empty states.
- **Images:** official community photography first. The preview uses solid placeholders because rights and images are not yet approved. Do not imply stock or generated people attended NCOGA events.
- **Motif:** do not commit an Adinkra symbol or Kente imitation at this stage. Research use with NCOGA representatives when the system is reviewed.

## Review questions and next proof

The consequential choice for owner review is whether Direction A, with C's institutional discipline and a controlled YAY accent, is the right foundation. Confirm which of the available NCOGA/YAY logos and photographs are official before the Phase 1 component showcase. Once the direction is approved, test selected fonts, color states, responsive navigation, article/event cards, form controls, and a type-led hero at the required viewports, then record final tokens in [DESIGN.md](DESIGN.md).
