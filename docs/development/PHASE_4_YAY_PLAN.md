# Phase 4 `/ncoga-yay` content and action plan

**Prepared:** 2026-10-16 for local implementation on `release/dev`. Sources: [YAY inventory](../content/NCOGA_YAY_CONTENT.md), [parent inventory](../content/NCOGA_CONTENT_INVENTORY.md), [asset inventory](../audits/ASSET_INVENTORY.md), [approved design](../design/DESIGN.md), [information architecture](../../.agents/instructions/08-INFORMATION-ARCHITECTURE.md), and NCOGA's [published YAY page](https://ncoga.com/ncoga-youth/), checked 2026-10-16.

## Safe first-slice content

| Element                                            | Source                                                                                                                                                                | Editorial action                                                                                                                                                                                                                                           |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| YAY is a branch of NCOGA, established October 2024 | Published NCOGA home and YAY pages.                                                                                                                                   | Put the parent relationship first and retain a clear return path to parent About.                                                                                                                                                                          |
| YAY audience and purpose                           | Published YAY overview describes young Ghanaians engaging in cultural, educational, and advocacy work.                                                                | Summarize without claiming a specific active program or eligibility rule.                                                                                                                                                                                  |
| YAY mission and vision                             | Published YAY page has distinct official statements.                                                                                                                  | Preserve their wording; do not blend them with the parent mission and vision.                                                                                                                                                                              |
| Five areas of focus                                | Published YAY page lists five pillars; the September draft and [YAY inventory](../content/NCOGA_YAY_CONTENT.md) record a naming conflict for Internal/Public Affairs. | Present the stable five topic areas at landing-page level. Use the information architecture's normalized short name “Internal & Public Affairs” provisionally; obtain owner approval before publication. Do not imply any linked detail route is complete. |
| Contact pathway                                    | Parent site publishes `info@ncoga.com`; no verified YAY-specific mailbox or approved form destination.                                                                | Link to local `/contact` as a general council inquiry path, accurately labeled.                                                                                                                                                                            |

## Exclusions

- Exclude the published page's Good Heart charity copy, donation links, placeholder metrics, testimonials, and unrelated relief content.
- Exclude current leader names and photos because the website review notes request changes. Do not infer titles or publish individual email addresses.
- Exclude the September draft's proposed programs, partnerships, events, age eligibility, membership forms, and social accounts until current status and publication approval are verified.
- Do not use the six unapproved local YAY logos or unverified people photos. Use a type-led composition and the approved abstract Kente strip study as a subtle cultural detail.

## Implementation and validation

1. Add `/ncoga-yay` within the NCOGA layout, with a controlled red accent and clear parent identity. Include overview, YAY mission and vision, five topic areas, and honest routes to parent About and general Contact.
2. Add page-specific metadata and `https://ncoga.com/ncoga-yay` canonical. Change NCOGA navigation and relevant About/Contact/homepage links to this route only after browser verification.
3. Check 320–1920px layout, menu keyboard behavior, reduced-motion behavior, metadata, links, automated WCAG A/AA, homepage/About/Contact regressions, and production build. Review phone and desktop captures.

**Publication limit:** This is a local content draft. The pillar naming conflict, rights, organizational approval, and legacy sitemap/robots and route cleanup remain launch gates.
