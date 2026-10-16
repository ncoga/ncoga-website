# Implementation plan — after Phase 0

**Status 2026-10-15:** Phase 0 is documented, the owner approved the Phase 1 direction, and the [Phase 2 shared foundation is closed](PHASE_2_VERIFICATION.md). The [noindex app preview](<../../src/app/(ncoga)/design-system/page.tsx>) renders the intended locally hosted fonts and subtle motifs. Static checks, unit tests, production build, responsive review, keyboard navigation, and focused accessibility checks pass. Phase 3 is next: build and verify one NCOGA homepage slice using sourced content. See [workflow phases](../../.agents/instructions/02-AGENT-WORKFLOW.md).

## Immediate next steps

1. Prepare a homepage content sheet from the [parent inventory](../content/NCOGA_CONTENT_INVENTORY.md): verify each public claim, navigation label, primary action, destination, and image or editorial fallback.
2. Confirm whether the local parent logo and any organizational photography are current, approved, and permissioned. Keep the documented type-led treatment until an asset is cleared.
3. Build the homepage as one Phase 3 slice on the approved design system. Verify its content, metadata, navigation, keyboard flow, responsive layout, and primary actions before expanding to other routes.
4. Replace the global legacy identity, SEO defaults, sitemap, and route navigation as verified NCOGA pages ship. Keep copied form/storage integrations disconnected from NCOGA data until ownership and privacy decisions are verified.

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
