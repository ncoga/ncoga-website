# Phase 4 `/about` content and action plan

**Prepared:** 2026-10-16. This is a source and implementation plan for local work on `release/dev`, not publication approval. The [content inventory](../content/NCOGA_CONTENT_INVENTORY.md), [asset inventory](../audits/ASSET_INVENTORY.md), [approved design](../design/DESIGN.md), and current [NCOGA home](https://ncoga.com/) and [About page](https://ncoga.com/about-us/) were reviewed. The About source includes unrelated charity theme material, so only identifiable NCOGA facts are eligible.

## Content to carry into the first page slice

| Page element                                                                                         | Source and status                                                                                              | Editorial action                                                                                               |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Full name, umbrella role, 1986 founding, and New York City context                                   | [Official home](https://ncoga.com/) states these facts; verified on 2026-10-16.                                | Use a concise introduction; do not imply a legal status or complete association directory.                     |
| Mission and vision                                                                                   | [Official home](https://ncoga.com/) prints both statements; verified on 2026-10-16.                            | Preserve the official wording and label each statement clearly.                                                |
| Historical Ghana Picnic, scholarships, Independence Day celebrations, workshops, and SAT preparation | [Official About](https://ncoga.com/about-us/) attributes these to NCOGA; older historical claims.              | Summarize as past work only. Do not imply any is currently offered or add dates, scale, or participant images. |
| NCOGA YAY relationship and October 2024 establishment                                                | [Official home](https://ncoga.com/) and [official About](https://ncoga.com/about-us/); verified on 2026-10-16. | Describe YAY as a branch and link to the current official YAY page until the local route is verified.          |
| General contact email                                                                                | [Official home](https://ncoga.com/) and [inventory](../content/NCOGA_CONTENT_INVENTORY.md).                    | Use `mailto:info@ncoga.com`; avoid copied forms and contact details.                                           |

## Exclusions and review gates

- Omit the About page's Good Heart donation and volunteer links, generic charity copy, sample team, testimonials, partner logos, and unrelated images.
- Omit named leaders, member association lists, current programs, campaign metrics, and quoted retreat remarks pending organizational verification and publication approval.
- Use a type-led opening and existing owner-permitted community imagery only where its unknown date and participants are not inferred. Any new image needs rights and factual caption review.
- Keep historical claims explicitly historical. Do not turn the official page's proposed operational center or services into launched initiatives.

## Page actions and implementation

1. Replace the legacy `/about` route under the NCOGA layout. Remove the conflicting copied route file; leave other legacy routes untouched during this slice. Use the shared header, footer, type, color, and responsive spacing system.
2. Make the primary action a direct email to NCOGA and the secondary action a link to the official YAY page until `/ncoga-yay` ships. Link back to `/` in the breadcrumb or page body.
3. Include overview, official mission and vision, a restrained historical section, and the parent/YAY relationship. Avoid cards or animation where the copy does not need them.
4. Give `/about` specific metadata and a canonical URL. Update the NCOGA header's About destination to the local route only after verification; keep legacy navigation disconnected from NCOGA.
5. Check the route at 320, 375, 768, 1024, 1440, and 1920px; inspect keyboard order, focus, sidebar behavior, reduced motion, contrast, automated accessibility, metadata, external links, and the production build. Record results before moving to another route.

**Publication limit:** The new page will be a local source-backed implementation. Organizational approval, legacy route cleanup, sitemap/robots replacement, and image rights review remain launch gates.
