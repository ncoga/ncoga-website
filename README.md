# NCOGA website

This repository is being transformed into the digital home of the National Council of Ghanaian Associations. The NCOGA homepage at `/` and the noindex design preview are implemented. Other public routes still contain the copied site's content and integrations and are not ready for an NCOGA launch.

## Local development

Use Node 24 and pnpm 11.17.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

The NCOGA source and design rules are in `AGENTS.md`, `docs/design/DESIGN.md`, and `docs/development/IMPLEMENTATION_PLAN.md`.

## Checks

```sh
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:unit
pnpm deps:check
pnpm build
pnpm exec playwright install chromium
pnpm test:smoke
pnpm security:secrets
pnpm security:audit
```

`pnpm verify` runs formatting, lint, typecheck, unit coverage, dependency checks, and a build. `pnpm test:smoke` runs the Chromium end-to-end suite. The security audit needs registry access. Git hooks run staged formatting, lint, and secret checks before commits.

## Publication boundary

No remote, production deployment, or NCOGA data connection is configured by this local Git setup. The copied routes and deployment settings need migration before launch. Review the two local homepage photographs' publication rights and the [current verification record](docs/development/PHASE_3_HOMEPAGE_VERIFICATION.md) before release.
