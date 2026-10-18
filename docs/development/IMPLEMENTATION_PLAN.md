# Implementation plan — after Phase 0

**Status 2026-10-17:** Phases 0–2 and the Phase 3 homepage are documented. The first Phase 4 landing-page wave—`/about`, `/contact`, and `/ncoga-yay`—is implemented locally on `release/dev` with source plans and browser verification. The owner pushed `main` and designated `release/dev` for implementation; promote it into `main` through a reviewed pull request after launch gates are addressed. Dependabot targets `release/dev`. See the [homepage verification](PHASE_3_HOMEPAGE_VERIFICATION.md), [About](PHASE_4_ABOUT_VERIFICATION.md), [Contact](PHASE_4_CONTACT_VERIFICATION.md), [YAY](PHASE_4_YAY_VERIFICATION.md), and [workflow phases](../../.agents/instructions/02-AGENT-WORKFLOW.md).

## Immediate next steps

1. Resolve the remaining public legacy surface: replace global legacy identity, SEO defaults, sitemap, robots, and copied route navigation, then plan old WordPress URL redirects. Keep copied form/storage integrations disconnected from NCOGA data until ownership and privacy decisions are verified.
2. Review the first-wave content with NCOGA, especially YAY pillar naming, mailbox ownership, current programs and leaders, photo rights, and publication destinations. Keep pages local until those decisions are made.
3. Implement further pages only from verified content and action plans. Prioritize real news/events and YAY detail routes after source completeness and publishing ownership are established.

## Dependencies and gates

| Workstream   | Current evidence                                                                                                                                                             | Gate before public use                                                                              |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Content      | [Parent inventory](../content/NCOGA_CONTENT_INVENTORY.md), [YAY inventory](../content/NCOGA_YAY_CONTENT.md)                                                                  | Approved copy, people, dates, destinations, image rights                                            |
| Routing      | [Initial route map](../architecture/ROUTING.md)                                                                                                                              | WordPress URL/export review and redirect mapping                                                    |
| Publishing   | Existing NCOGA WordPress workflow described in meeting notes; copied app has no CMS                                                                                          | Ownership, editorial needs, costs, security, and migration decision                                 |
| Forms        | Copied Google Sheets/Resend/Blob boundaries                                                                                                                                  | NCOGA account ownership, privacy and consent, field design, anti-spam/rate limits                   |
| Deployment   | Vercel/CI files still target Platinum                                                                                                                                        | New environment, repository identity, secret audit, approval                                        |
| Verification | Frozen dependency install, formatting, lint, typecheck, 21 unit tests, production build, five focused browser checks, eight-width visual review, and local font loading pass | Repeat relevant content, accessibility, responsive, SEO, and integration checks on each public page |

The first page wave is locally implemented: `/`, `/about`, `/ncoga-yay`, and `/contact`. This is not publication approval. News/events and YAY detail routes should follow source completeness, not a fixed demand to fill the whole sitemap. Phase 2 application changes remain confined to shared infrastructure and the isolated preview.
