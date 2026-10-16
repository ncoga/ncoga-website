# Phase 4 `/contact` content and action plan

**Prepared:** 2026-10-16 for local implementation on `release/dev`. Sources: [parent content inventory](../content/NCOGA_CONTENT_INVENTORY.md), [asset inventory](../audits/ASSET_INVENTORY.md), [approved design](../design/DESIGN.md), and NCOGA's [published contact page](https://ncoga.com/contact-us/), checked 2026-10-16.

## Source decisions

| Item                                    | Evidence                                                                                                                                                                                | Action                                                                                                                                                            |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| General council email                   | `info@ncoga.com` appears on NCOGA's published contact page and home page.                                                                                                               | Use as the primary `mailto:` action. Describe it only as the published general contact address.                                                                   |
| Parent identity and YAY relationship    | Verified in the parent inventory and on the official NCOGA home page.                                                                                                                   | Keep the parent name in the heading and provide a clear route back to `/about`; keep YAY linked to its current official page until a local YAY route is verified. |
| Office address, phone, and second email | The published contact page displays a New Mexico address, `(219) 555-0114`, and `la-studioweb.com`, inconsistent with the council's New York City context and likely template remnants. | Exclude completely pending owner verification.                                                                                                                    |
| Join Us form                            | A Google Forms link appears on the published contact page. Its ownership, privacy handling, and intended audience are not established.                                                  | Do not embed or link it from this page yet.                                                                                                                       |

## Page shape and checks

1. Replace the legacy `/contact` landing page under the shared NCOGA layout. Use a strong type-led contact opening and one unmistakable email action. Do not add a form, office location, response-time promise, invented department, or stock people image.
2. Include a small orientation area with links to local `/about` and the current official YAY page. Keep the copied contact child routes and actions isolated; they are not NCOGA destinations.
3. Add NCOGA metadata and canonical `https://ncoga.com/contact`. Point verified NCOGA header/footer Contact links to this route after tests.
4. Verify content, links, keyboard access, responsive layout at 320–1920px, automated WCAG A/AA at phone and desktop, and the production build. Preserve homepage and About regression coverage.

**Publication limit:** Owner approval of content and mailbox ownership is still needed before launch. Legacy sitemap/robots and remaining copied routes are separate migration gates.
