# Phase 3 homepage content and action plan — 2026-10-15

**Scope:** Replace only `/`. The Phase 2 preview stays noindex. Other copied routes and integrations remain isolated and are not promoted as NCOGA pages.

## Source sheet

| Homepage content or action                                                                                            | Source and status                                                                                                                           | Treatment                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Full organization name; founded in 1986; New York City base; umbrella for Ghanaian associations in the United States  | [Official homepage](https://ncoga.com/), checked 2026-10-15; also recorded in [parent inventory](../content/NCOGA_CONTENT_INVENTORY.md)     | Brief factual introduction. No invented counts or claims of current reach.                                                                              |
| Mission and vision                                                                                                    | [Official homepage](https://ncoga.com/), checked 2026-10-15                                                                                 | Reproduce official wording, with punctuation only normalized. Label them as mission and vision.                                                         |
| Unity, Ghanaian culture, conflict resolution, and coordinated activities including Ghanaian independence celebrations | [Official homepage](https://ncoga.com/), checked 2026-10-15                                                                                 | Short summary of the council's stated focus. Do not imply a current event is scheduled.                                                                 |
| NCOGA YAY is a branch, established October 2024                                                                       | [Official homepage](https://ncoga.com/) and [YAY page](https://ncoga.com/ncoga-youth/), checked 2026-10-15                                  | Homepage spotlight linking to the existing official YAY page until a verified local route is built.                                                     |
| `info@ncoga.com`                                                                                                      | [Official homepage](https://ncoga.com/), checked 2026-10-15                                                                                 | Direct email action. No copied form or mailing list integration.                                                                                        |
| Parent logo at repository root                                                                                        | Owner supplied and explicitly directed for homepage in this task; earlier [asset inventory](../audits/ASSET_INVENTORY.md) marked it pending | Use this exact image in the homepage masthead and hero. This task authorizes homepage use; no inferred approval for other routes or derivative marks.   |
| `public/images/ncoga-hero.webp`                                                                                       | Existing local image; owner permits use of selected `public/images` photos in this task. Event date, people and rights are undocumented.    | Use as an illustrative community photograph with neutral alt text and no event/person caption. Keep other image placements type-led pending provenance. |

Exclude the official site's theme/demo donation buttons, volunteer profiles, testimonials, counters, outdated events, and unverified leadership. Do not use the generated-looking YAY illustration as a depiction of members. No Unsplash image is needed for this slice.

## Navigation and actions

- Header links target real sections on `/`: About, Mission & vision, YAY, Contact. The logo returns to `/`.
- Primary action: learn about NCOGA within the homepage; secondary action: read the current [official About page](https://ncoga.com/about-us/) for more history. Its template sections are not migrated.
- YAY action opens the current [official YAY page](https://ncoga.com/ncoga-youth/) until Phase 5 supplies an approved local route.
- Contact action uses `mailto:info@ncoga.com`. No copied forms, storage, analytics or email services touch NCOGA data.
- Preserve the noindex `/design-system` preview's own anchor navigation. Do not link to unconverted local routes.

## Implementation and verification

1. Put the provided logo in `public/` without altering its art. Replace the legacy `/` page with the Phase 2 shell and approved typography, palette and restrained cultural detail.
2. Give `/` its own NCOGA metadata, canonical URL, icon and source-backed Organization structured data. Keep the legacy layout on untouched routes.
3. Verify source wording, all actions, logo/photo loading, keyboard and mobile menu flow, eight responsive widths, automated accessibility checks, and the production build. Record limitations and Phase 3 status in progress and decisions.

This is local implementation for review, not production deployment or a claim of organization-wide content approval.

## Editorial enhancement — 2026-10-16

The owner authorized a restrained design and GSAP pass, plus additional imagery and sourced information. The [official homepage](https://ncoga.com/) still supports the four focus areas already summarized here: unity among member organizations, Ghanaian culture, community conflict resolution, and coordinated activities. These may be presented as an editorial focus list without adding new program or impact claims. `public/images/ncoga-image.webp` is an additional owner-permitted local photograph, 1500×1001, showing a gathering in Ghanaian attire. Its date, participants, and event remain undocumented, so use neutral alt text and no identifying caption. No external stock image is necessary for this pass. The [design system](../design/DESIGN.md) records reusable image and motion rules.
