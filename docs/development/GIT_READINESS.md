# Local Git and quality readiness — 2026-10-16

**Status:** The repository is initialized locally on `main`. No `origin` remote, push, production deployment, or NCOGA data integration was added.

## Repository contents

- Source, approved design documentation, content/source inventories, supplied reference notes, required legacy route assets, and selected visual verification captures are tracked. The old routes remain in the copied application for later migration; tracking their assets preserves the current build.
- `.gitignore` excludes dependencies, Next output, coverage, Playwright reports, temporary browser files, local environment files, and the prior organization's deployment verification workflow and branch rulesets. Those legacy GitHub files remain in this checkout for reference but must not control the NCOGA remote.
- The GitHub `CODEOWNERS` file no longer names the prior organization. The package is named `ncoga`. The local build script explicitly uses the verified webpack path.

## Checks completed

| Gate                                                                                       | Local result                                                               |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| Format, lint, typecheck, unit coverage, dependency usage, production build (`pnpm verify`) | Pass; 21 unit tests, `/` statically prerendered                            |
| Chromium E2E, keyboard, responsive, and automated accessibility (`pnpm test:smoke`)        | Pass; 38 tests                                                             |
| Secret scan (`pnpm security:secrets`)                                                      | Pass                                                                       |
| Production dependency audit (`pnpm security:audit`)                                        | Pass; no known vulnerabilities after patched dependency updates            |
| Hero visual review                                                                         | 375, 768, 1440, and 1920px captures inspected; 320–1920px geometry checked |

The Chromium suite covers the migrated `/` and `/design-system` routes, plus retained legacy form validation and accessibility checks. The copied legacy pages still include old identity and request logo files absent from this checkout, so broad legacy-route console smoke checks are not a NCOGA launch gate. Those routes, global sitemap/robots output, and deployment configuration still need migration before any NCOGA release. Automated accessibility checks are bounded to their viewports and rules.

## Next Git step

The owner will add `origin` and push `main` upstream. The copied pre-push branch block was removed so this initial push can proceed; typecheck, unit tests, and build remain as local pre-push hooks. The tracked CI, security, and Dependabot workflows target `main`. Before making the remote public, review the supplied reference notes and the two homepage photographs' publication rights. No deployment is authorized by these commits.
