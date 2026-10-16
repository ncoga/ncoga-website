# Design direction: requirements and candidates

## Creative intent

Build a recognizable Ghanaian diaspora institution through editorial composition, clear typography, documentary imagery, careful whitespace, and meaningful cultural details. NCOGA's foundation should feel credible and enduring. YAY may use more expressive photography, accents, and section rhythm while sharing typography, spacing, accessibility, components, and motion principles. The design system must be established before extensive page work. Final decisions belong in [DESIGN.md](../../docs/design/DESIGN.md) after research and review.

Explore three directions in [design research](../../docs/design/DESIGN_RESEARCH.md): Contemporary Ghanaian Editorial; Cultural Modernism; and Modern Institutional Heritage. The master prompt recommends testing a balance of the first and third with selected geometric elements from the second, not assuming it is approved. The phrase “Rooted in Ghana. Connected Across Borders.” is a working concept, not an official slogan.

## Candidate colors, not approved tokens

| Role                | Candidate |
| ------------------- | --------- |
| Deep heritage green | `#123F32` |
| Ghana forest        | `#197047` |
| Rich Ghana gold     | `#D9A227` |
| Heritage red        | `#B3262E` |
| Warm charcoal       | `#171C19` |
| Warm ivory          | `#FAF8F2` |
| Soft sand           | `#F0EBDF` |
| Stone border        | `#DCD8CC` |
| White               | `#FFFFFF` |

Test real combinations for contrast and harmony. Use semantic roles for text, surface, border, focus, selection, hover, active navigation, success, warning, error, information, and disabled states. Gold is not automatically legible as text on white; cultural red is not automatically the error color. Support light, inverse, and brand-emphasis contexts; retain an existing dark theme if practical, but do not assume a launch dark mode is required. Design any dark theme deliberately.

**No gradients anywhere in the website's visual design:** no linear, radial, conic, animated, text, border, button, overlay, or glowing gradients. Use solid color, authentic photography, shape, texture, and composition. Avoid replacing gradients with excessive shadows or effects.

## Typography and layout

Compare one display serif such as Newsreader, DM Serif Display, Fraunces, or Cormorant Garamond with one legible interface sans such as Inter, DM Sans, Manrope, Plus Jakarta Sans, or Source Sans 3. These are candidates, not an instruction to install all fonts. Define display XL/L/M; H1–H4; body large/regular/small; caption; eyebrow; button; and navigation styles. Fluid type should remain readable, without extreme headline size, tight tracking, or excessive uppercase.

Establish wide, standard, and reading containers; gutters; grid; breakpoints; section and component spacing; vertical rhythm; and stacking rules. Starting candidates: 1440px wide, 1200px standard, 720px reading width, 48–64px desktop gutters, 24–32px tablet, 16–24px mobile, fluid 64–128px sections, and a 4px base spacing unit. Use CSS for responsive layout.

Keep component geometry restrained. Candidate radii are 4, 8, 12, and 18px, with pill shapes only when warranted. Editorial grids, dividers, typography, image compositions, and asymmetry should often replace generic cards. Prefer borders, tonal separation, and space to large shadows, glassmorphism, neon glows, and fake depth.

## Imagery, motifs, icons, and restraint

Prefer official NCOGA/YAY imagery, then permissioned member or leadership imagery, licensed documentary and archival photographs, custom editorial illustration, and carefully identified stock only where necessary. Record permissions and attribution. Never depict generated fictional people as actual leaders, members, or events; never invent historical photos. When imagery is missing, design with type, solid color, vector illustration, or carefully researched geometry.

Research the meaning and context of Kente and Adinkra before using them. Avoid treating one tradition as representative of every Ghanaian community. Curate a small set of purposeful vector motifs for details such as dividers, footer, editorial sidebars, or YAY accents; do not turn the site into a fabric texture. Do not present invented geometry as an authentic symbol. Keep text legible. Use a consistent, limited SVG icon language instead of placing generic icons in every section.

## Composition and anti-patterns

Give major sections distinct rhythms: photography-led hero, editorial introduction, typographic mission, restrained history narrative, structured activities, recognizable YAY feature, publication-style news, functional events, and clear involvement paths. Avoid generic hero plus two pills, repetitive three-card grids, rounded SaaS panels, fake metrics, fictional testimonials, abstract glowing globes, floating 3D objects, stock handshakes, random cultural ornament, gratuitous glassmorphism, and interchangeable generated photography. Avoid vague startup slogans such as “Unlock your potential.” Every effect and section needs a communication purpose.

Use calm, useful motion as defined in [motion instructions](06-MOTION-AND-INTERACTIONS.md). Critique the showcase and completed pages for cultural authenticity, institutional fit, hierarchy, contrast, typography, mobile composition, consistency, accessibility, and ability to support future routes. Document the accepted system in [DESIGN.md](../../docs/design/DESIGN.md); do not silently change an approved direction.
