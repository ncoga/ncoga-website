# Implementation plan — after Phase 0

**Status 2026-10-16:** Phases 0–2 are documented and the Phase 3 homepage is implemented and verified locally. The owner pushed `main` and created `release/dev`. Continue page implementation on `release/dev`; promote that branch into `main` through a pull request after review. Dependabot should target `release/dev`. See the [homepage verification](PHASE_3_HOMEPAGE_VERIFICATION.md) and [workflow phases](../../.agents/instructions/02-AGENT-WORKFLOW.md).

## Immediate next steps

1. Retarget existing Dependabot pull requests from `main` to `release/dev`, review their changes and checks, and merge compatible updates there. Keep major updates separate for explicit compatibility testing.
2. Prepare a source-backed content and action plan for the next parent route, starting with `/about`, and confirm photo rights before using new imagery.
3. Implement and verify each NCOGA page on `release/dev`, then replace global legacy identity, SEO defaults, sitemap, and route navigation as verified pages ship. Keep copied form/storage integrations disconnected from NCOGA data until ownership and privacy decisions are verified.

## Dependencies and gates

| Workstream   | Current evidence                                                                                                                                                             | Gate before public use                                                                              |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Content      | [Parent inventory](../content/NCOGA_CONTENT_INVENTORY.md), [YAY inventory](../content/NCOGA_YAY_CONTENT.md)                                                                  | Approved copy, people, dates, destinations, image rights                                            |
| Routing      | [Initial route map](../architecture/ROUTING.md)                                                                                                                              | WordPress URL/export review and redirect mapping                                                    |
| Publishing   | Existing NCOGA WordPress workflow described in meeting notes; copied app has no CMS                                                                                          | Ownership, editorial needs, costs, security, and migration decision                                 |
| Forms        | Copied Google Sheets/Resend/Blob boundaries                                                                                                                                  | NCOGA account ownership, privacy and consent, field design, anti-spam/rate limits                   |
| Deployment   | Vercel/CI files still target Platinum                                                                                                                                        | New environment, repository identity, secret audit, approval                                        |
| Verification | Frozen dependency install, formatting, lint, typecheck, 21 unit tests, production build, five focused browser checks, eight-width visual review, and local font loading pass | Repeat relevant content, accessibility, responsive, SEO, and integration checks on each public page |

The first page wave should be `/`, `/about`, `/ncoga-yay`, and `/contact` once content and design are ready. News/events and YAY detail routes should follow source completeness, not a fixed demand to fill the whole sitemap. Phase 2 application changes remain confined to shared infrastructure and the isolated preview.
