# Information architecture and first-wave route status

This began as a content-led route hypothesis, **not a blanket approval to implement every route**. NCOGA remains the parent; YAY is a subsection. Reconcile actual WordPress URLs and redirects after a fuller export/crawl. Do not launch empty routes to satisfy a sitemap.

**Phase 2 implementation note (2026-10-15):** `/design-system` is an isolated, noindex foundation preview with section-anchor navigation. It is not part of the proposed public sitemap. The copied marketing routes still serve legacy content; no WordPress redirects or public NCOGA routes have been activated.

**Phase 4 implementation note (2026-10-17):** `/`, `/about`, `/contact`, and `/ncoga-yay` now use the shared NCOGA layout and link to one another. Their content plans and browser checks are recorded in [progress](../development/PROGRESS.md). The public site has not been deployed. Other copied routes, the sitemap, robots rules, and WordPress redirects still require migration; this table remains a plan for those later pages.

## First content waves

| Wave               | Routes                                                                                | Reason and dependency                                                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Foundation         | `/`, `/about`, `/ncoga-yay`, `/contact`                                               | Parent identity, official mission/vision, relationship, and one verified contact path. Needs approved design and authentic imagery or designed fallback. |
| Verified expansion | `/about/history`, `/ncoga-yay/pillars`, `/ncoga-yay/explore`, `/ncoga-yay/membership` | Source material exists; requires history detail checks, pillar terminology decision, membership eligibility/form verification.                           |
| Publishing         | `/news`, `/news/[slug]`, `/events`, `/events/[slug]`                                  | Needs editorial backend decision, approved items, timezone-aware event records, original dates, and archive behavior.                                    |
| YAY detail         | Five pillar pages, programs, partnerships, leadership, FAQ                            | Requires approved biographies, programs and partner claims, resource destinations, photos, and forms.                                                    |
| Parent detail      | Leadership, member associations, community, resources, partnerships                   | Current source data is incomplete; publish only when confirmed.                                                                                          |

## Navigation proposal

Global: **About · Our Community · NCOGA YAY · News · Events · Get Involved**, with visible Contact. YAY local navigation: **Overview · About · Pillars · Programs · Events · News · Partnerships · Membership**. Keep the mobile menu shallow and clearly label return to NCOGA. Use shared article and event models with `ncoga`, `yay`, or `both` ownership rather than duplicate silos. See the fuller provisional tree in [permanent instructions](../../.agents/instructions/08-INFORMATION-ARCHITECTURE.md).

## Known current URLs requiring mapping

| Current WordPress URL                                                                     | Provisional destination                      | Note                                               |
| ----------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------- |
| [`/`](https://ncoga.com/)                                                                 | `/`                                          | Parent homepage                                    |
| [`/about-us/`](https://ncoga.com/about-us/)                                               | `/about` and `/about/history`                | Split content carefully; exclude template sections |
| [`/ncoga-youth/`](https://ncoga.com/ncoga-youth/)                                         | `/ncoga-yay`                                 | Keep old URL redirect after migration              |
| [`/ncoga-faqs/`](https://ncoga.com/ncoga-faqs/)                                           | `/ncoga-yay/faq`                             | Verify ownership and content                       |
| [`/pillar-education/`](https://ncoga.com/pillar-education/)                               | `/ncoga-yay/pillars/education`               | Exclude animal-care template copy                  |
| [`/internal-affairs/`](https://ncoga.com/internal-affairs/)                               | `/ncoga-yay/pillars/internal-public-affairs` | Confirm final pillar naming                        |
| [`/about-ncoga-yay-council-leaders/`](https://ncoga.com/about-ncoga-yay-council-leaders/) | `/ncoga-yay/leadership`                      | Current biographies conflict with update notes     |
| [`/contact-us/`](https://ncoga.com/contact-us/)                                           | `/contact`                                   | Exclude unverified address/phone                   |
| [`/press-media/`](https://ncoga.com/press-media/)                                         | `/news` or YAY view                          | Live page timed out in this pass                   |
| [`/events-meetings/`](https://ncoga.com/events-meetings/)                                 | `/events` or YAY view                        | Live page could not be fetched in this pass        |

Additional pillar, article, event, and legacy campaign URLs need a WordPress export or crawl before any redirect list is final. The existing fiscal calendar's embed URL and publication rights are still unknown.
