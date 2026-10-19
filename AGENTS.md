# NCOGA agent entry point

This repository is a copied functional codebase being transformed into the digital home of the **National Council of Ghanaian Associations (NCOGA)**, whose official site is [ncoga.com](https://ncoga.com/). **NCOGA Young Adult & Youth (YAY) is a branch of NCOGA**, with a distinct but connected experience. Reuse suitable existing infrastructure after inspection; replace prior-organization identity and verify all NCOGA content.

## Non-negotiable rules

- Establish and follow the reviewed design system before broad page implementation. No gradients anywhere in the website design; no generic AI-generated website aesthetics, excessive decoration, or needless animation libraries.
- Never fabricate organizational facts, leaders, initiatives, history, testimonials, or impact statistics. Do not carry forward irrelevant prior-organization branding, private data, credentials, or analytics identifiers.
- Design accessibly and responsively from the start. Research cultural motifs and use them meaningfully. NCOGA remains the parent, with YAY recognizable within the shared system.
- Investigate before implementing; preserve useful mechanics; make ordinary decisions autonomously; document consequential choices and test implemented work.
- Get explicit approval for destructive operations, production deployment, publishing unapproved organizational content, and high-impact changes requiring organizational authority. A foundational unapproved creative direction also needs focused approval before extensive page implementation.

## Read instructions by task

| Task                             | Required instructions                                                                                                                                                                                                                                                            |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project orientation and planning | [Vision](.agents/instructions/01-PROJECT-VISION.md), [Workflow](.agents/instructions/02-AGENT-WORKFLOW.md)                                                                                                                                                                       |
| Repository audit or architecture | [Workflow](.agents/instructions/02-AGENT-WORKFLOW.md), [Frontend standards](.agents/instructions/05-FRONTEND-STANDARDS.md), [Quality](.agents/instructions/09-QUALITY-AND-TESTING.md)                                                                                            |
| Design research and foundation   | [Vision](.agents/instructions/01-PROJECT-VISION.md), [Design direction](.agents/instructions/03-DESIGN-DIRECTION.md), [References](.agents/instructions/04-DESIGN-REFERENCES.md)                                                                                                 |
| Homepage                         | [Design direction](.agents/instructions/03-DESIGN-DIRECTION.md), [Frontend standards](.agents/instructions/05-FRONTEND-STANDARDS.md), [Content](.agents/instructions/07-CONTENT-AND-SOURCES.md), [Information architecture](.agents/instructions/08-INFORMATION-ARCHITECTURE.md) |
| YAY page or content migration    | [Design direction](.agents/instructions/03-DESIGN-DIRECTION.md), [Frontend standards](.agents/instructions/05-FRONTEND-STANDARDS.md), [Content](.agents/instructions/07-CONTENT-AND-SOURCES.md), [Information architecture](.agents/instructions/08-INFORMATION-ARCHITECTURE.md) |
| Motion or interaction            | [Design direction](.agents/instructions/03-DESIGN-DIRECTION.md), [Motion](.agents/instructions/06-MOTION-AND-INTERACTIONS.md)                                                                                                                                                    |
| QA, optimization, or release     | [Frontend standards](.agents/instructions/05-FRONTEND-STANDARDS.md), [Motion](.agents/instructions/06-MOTION-AND-INTERACTIONS.md), [Quality](.agents/instructions/09-QUALITY-AND-TESTING.md)                                                                                     |

Read current [progress](docs/development/PROGRESS.md) and [decision log](docs/development/DECISION_LOG.md) before substantial work. Consult [DESIGN.md](docs/design/DESIGN.md) for **approved** visual decisions, [system overview](docs/architecture/SYSTEM_OVERVIEW.md) for verified architecture, [implementation plan](docs/development/IMPLEMENTATION_PLAN.md) for the current phase, and [content inventories](docs/content/NCOGA_CONTENT_INVENTORY.md) for sourced facts. Empty or pending documents do not imply a decision has been made.

## Authority and code discovery

Resolve conflicts in this order: current owner instructions; approved documented decisions; permanent project instructions; existing implementation conventions; agent recommendations. Investigate genuine conflicts and escalate only where owner judgment is needed. Never let older documentation silently override a newer approved choice.

For code discovery, prefer the codebase-memory-mcp graph: `search_graph`, `trace_call_path`, `get_code_snippet`, `query_graph`, then `get_architecture`. Use direct text/file search for literals, configuration, non-code files, or insufficient graph results. The [master prompt](NCOGA_MASTER_PROMPT.md) is retained as the full source for this instruction system; task-specific instructions above are the working entry points.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
