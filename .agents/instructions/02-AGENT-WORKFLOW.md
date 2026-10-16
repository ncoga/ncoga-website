# Agent workflow and approval boundaries

## Choose the smallest suitable workflow

1. **Straightforward, established change:** implement directly. Examples: apply a token, fix responsive behavior, correct accessibility, or refactor without behavior change.
2. **Moderate change:** make a concise internal plan, then implement. Examples: a page using known patterns, listing, card variant, or documented animation.
3. **Foundational creative or architectural decision:** investigate, compare viable choices, document trade-offs, and proceed with a safe reversible default when supported. Seek owner approval for an unapproved visual foundation, a difficult-to-reverse architecture change, substantial ongoing cost, or a decision requiring organizational authority.
4. **High-impact or destructive action:** request explicit approval before deleting substantial content or data, changing production infrastructure or DNS, removing an active integration, publishing unapproved content, deploying to production, migrating real member records, or processing donations.

Do not ask the owner to decide ordinary implementation details that a competent engineer or designer can resolve from evidence. Once a foundational direction is approved, continue routine component and page work without repeated approval requests. Before escalating, check files, source documents, current decisions, research, and safe reversible defaults.

## Investigation before implementation

- Read [AGENTS.md](../../AGENTS.md), then the task-specific instructions it routes to. Review current [progress](../../docs/development/PROGRESS.md), [decisions](../../docs/development/DECISION_LOG.md), and relevant living docs.
- Inspect the actual framework, versions, package manager, styling, routes, assets, fonts, content sources, integrations, forms, auth, database, environment configuration, deployment, tests, CI, SEO, accessibility, and documentation. Do not assume Next.js or any CMS.
- Use the repository's codebase knowledge graph for code discovery when available, then inspect specific source. Search files directly for literals, configuration, non-code files, or gaps in the graph.
- Identify reusable mechanics and previous-brand contamination, including metadata, structured data, accessibility labels, analytics, external links, and hidden configuration. Inventory assets before removal. Keep secrets, member data, and prior organizational identifiers out of any future NCOGA deployment.
- Record actual audit findings in [system overview](../../docs/architecture/SYSTEM_OVERVIEW.md) and a repository audit artifact when Phase 0 occurs; do not present assumptions as completed findings.

## Git context

This project is a copy of another working codebase whose earlier `.git` directory was removed. Before initializing a fresh repository, inspect the copy for secrets, excluded environment files, previous remotes, obsolete organization-specific material, and a suitable `.gitignore`. Do not create a remote or push without authorization. Documentation setup does not initialize Git.

## Skills and parallel work

Inspect the instructions of a relevant installed skill before using it. Apply skills selectively: research and visual direction for design exploration; frontend and component guidance for implementation; interaction guidance for motion; GSAP guidance only for justified complex motion; design critique after a substantial page; accessibility and testing guidance for verification. Do not claim to have used an unavailable skill or install a library simply because it appears in a reference list.

When explicitly authorized to use parallel agents, give each agent a bounded role and clear file ownership. Share one design-system source of truth and reconcile overlapping work. Do not create agents just to signal activity.

## Phases and exit conditions

| Phase | Focus                                                                            | Exit condition                                                                                                                |
| ----- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 0     | Repository and content discovery, asset inventory, source and reference research | Evidence-backed audit, content inventory, initial sitemap, risks, and architecture recommendations                            |
| 1     | Brand research and design system                                                 | Three evaluated directions, recommended visual foundation, responsive component showcase, and consequential creative approval |
| 2     | Shared technical foundation                                                      | Token implementation, layout, navigation, footer, content structure, and essential components work together                   |
| 3     | NCOGA homepage                                                                   | Verified content, responsive and accessible page, working navigation and primary actions                                      |
| 4     | Parent NCOGA pages                                                               | Prioritized routes with complete verified content and appropriate metadata                                                    |
| 5     | YAY foundation                                                                   | Connected but distinct landing experience, local navigation, pillars, and membership framework                                |
| 6     | YAY expansion                                                                    | Verified pillar, program, partnership, event, news, and resource content without placeholders                                 |
| 7     | Publishing systems                                                               | Chosen editorial workflow supports news, events, drafts, permissions, and media as required                                   |
| 8     | Refinement                                                                       | Design, accessibility, responsive, performance, SEO, and regression review                                                    |
| 9     | Production readiness                                                             | Content, links, forms, redirects, assets, environment, and release process verified; deployment separately authorized         |

Do not build every route at once. Prioritize routes with complete source material. A small functional design showcase precedes extensive page implementation; review it at 320, 375, 430, 768, 1024, 1280, 1440, and 1920px. Present the recommended direction and two meaningful alternatives with visual evidence when creative approval remains outstanding.

The showcase should demonstrate color and type, navigation, buttons and links, hero and editorial layouts, image treatment, news and event cards, leadership and pillar previews, accordion, form controls, footer, a researched cultural detail, and representative motion. Use realistic, sourced NCOGA content rather than generic startup filler. Review institutional fit, cultural specificity, hierarchy, contrast, mobile composition, usefulness of motion, and reuse across future pages.

## Documentation and completion

Keep permanent requirements here in `.agents/instructions/`; put verified findings, selected tokens, implementation decisions, and progress in `docs/`. Update the [decision log](../../docs/development/DECISION_LOG.md) for consequential choices and [progress](../../docs/development/PROGRESS.md) after substantial sessions. A task is done only when its behavior, content, responsiveness, accessibility, metadata where relevant, tests, and documentation meet its actual scope. Report limitations honestly. Consult [quality standards](09-QUALITY-AND-TESTING.md).
