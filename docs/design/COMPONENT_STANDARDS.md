# Component standards — Phase 1 foundation

The owner-approved visual direction is specified in [DESIGN.md](DESIGN.md). The standalone [showcase](NCOGA_COMPONENT_SHOWCASE.html) is a design proof. Phase 2 has introduced a scoped Next.js shell, reusable header, footer, and empty state, and a noindex app preview; continue adapting these standards to production routes as verified content arrives.

| Component            | Anatomy and behavior                                                                                              | Responsive/accessibility requirement                                                                         |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Global header        | Parent NCOGA identity, 5–6 clear destinations, visible YAY entry, contact/involvement path                        | Keyboard and touch menu, visible current page, Escape close, focus management, no hidden parent relationship |
| YAY local navigation | Overview, pillars, programs, events/news, membership paths using shared shell                                     | Local context and return to parent are always clear; do not crowd global nav                                 |
| Editorial hero       | Eyebrow or context, one strong H1, useful deck, one primary action; authentic image or designed type-led fallback | No text over low-contrast photography; mobile order stays intentional                                        |
| Buttons/links        | Solid heritage primary, quiet/text secondary, distinct focus and disabled state                                   | Minimum 44px target where practical; never communicate state by color alone                                  |
| Story preview        | Category, title, excerpt, true publication date, image/caption when permissioned                                  | Article ownership and link purpose clear; no draft presented as published                                    |
| Event listing        | Date/time/timezone, title, venue/virtual, registration state, destination                                         | Past/upcoming computed from timestamps; meaningful empty state; no private link leak                         |
| Pillar module        | Pillar name, purpose, one route/action, controlled YAY accent                                                     | Asymmetric composition may vary, but reading order stays logical                                             |
| Form fields          | Label, hint, validation, success/error, privacy context                                                           | Programmatic labels, clear error text, no misleading live submission in preview                              |
| Accordion/dialog     | Semantic trigger, state and content, keyboard support                                                             | Native details or vetted Radix behavior; no custom motion that hides focus                                   |
| Footer               | Parent/YAY route groups, verified contacts/socials, legal/accessibility paths                                     | Readable columns, no speculative addresses or links                                                          |

Use semantic spacing and type tokens; keep card radii small and let dividers/layout do more work. Avoid identical three-card sections, decorative icon repetition, generic stock photography, and unverified metrics. For a new variant, document why existing anatomy cannot express the content before adding it.

The [two motif studies](DESIGN.md#imagery-logos-and-cultural-detail) are decorative background details with documented sources and meanings. Do not use either as a logo, place one behind body text at high contrast, or repeat both across every section.
