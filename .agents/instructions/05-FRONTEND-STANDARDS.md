# Frontend and architecture standards

## Work from the actual codebase

Inspect the framework and version, package manager, component model, routing, styling, tokens, fonts, asset pipeline, content sources, backend integrations, environment, tests, and deployment before changing architecture. Preserve useful mechanics such as layout primitives, forms, validation, data fetching, accessibility helpers, error and loading states, SEO utilities, and content schemas even if their appearance changes. Never carry over the previous organization's private data, secrets, analytics identifiers, links, branding, or copy into NCOGA publication.

Inventory assets as retain, replace, rebrand, archive, remove, or unknown. Verify references before deletion. Preserve potentially useful material outside active use when needed. Record the actual system in [SYSTEM_OVERVIEW.md](../../docs/architecture/SYSTEM_OVERVIEW.md) after Phase 0.

## Design-system implementation

- Implement approved semantic color, type, spacing, radius, surface, focus, and motion tokens centrally from [DESIGN.md](../../docs/design/DESIGN.md). Candidate values in [design direction](03-DESIGN-DIRECTION.md) are not approved values.
- Build responsive containers and grids with CSS; maintain readable line lengths, deliberate mobile composition, and no horizontal overflow.
- Use semantic HTML and a logical heading hierarchy. Make all controls keyboard operable with visible focus and appropriate touch targets.
- Keep variants intentional: foundational UI (buttons, links, fields, dialog, accordion); editorial UI (story, event, image, article, profile); organization-specific UI (pillar, program, leadership, involvement); controlled YAY variants sharing foundations.
- Define states for loading, empty, error, disabled, validation, and success where they matter. Avoid placeholder cards and fake data as substitutes for missing content.
- Use one consistent icon system. Avoid unnecessary libraries and effects. Follow the [motion policy](06-MOTION-AND-INTERACTIONS.md).

## Content and media integration

Separate verified content from component layout and record source, status, ownership, and publication state as described in [content instructions](07-CONTENT-AND-SOURCES.md). Respect actual source links and existing URL relationships. News and events should use shared models with NCOGA/YAY ownership where suitable, rather than duplicated publishing infrastructure.

Use responsive images, modern formats, dimensions, meaningful alternative text, and permissioned photography. Optimize fonts and avoid unnecessary client JavaScript. A missing authentic image needs a designed editorial fallback. Never imply stock or generated people are real NCOGA participants.

Forms need clear labels, validation, useful errors, accessible status feedback, appropriate security controls, and verified destinations. Protect credentials and private meeting links. Investigate existing WordPress and other content infrastructure before proposing a CMS. Compare editorial usability, cost, maintenance, security, permissions, drafts, scheduling, previews, image handling, hosting, and migration before a change.

## Maintainability

Prefer reuse over one-off page patterns, but do not force visually distinct content into one rigid card. Add variants when a real content need recurs. Keep components small enough to understand; make data ownership and API boundaries explicit. Check backward compatibility, loading and failure behavior, and route transitions. Document consequential decisions and verify with the [quality standards](09-QUALITY-AND-TESTING.md).
