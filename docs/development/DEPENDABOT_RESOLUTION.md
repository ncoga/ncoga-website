# Dependabot intake on `release/dev`

**2026-10-16.** The owner designated `release/dev` for implementation and dependency intake. Dependabot's npm and GitHub Actions targets, the pull request template, and both PR policy jobs now follow that branch. The nine existing PRs were retargeted from `main` to `release/dev`. Dependabot then closed those PRs and removed their head branches without merging them, so their reviewed changes were applied directly to `release/dev`.

| Former PR                                           | Change applied on `release/dev`                                          | Commit    |
| --------------------------------------------------- | ------------------------------------------------------------------------ | --------- |
| [#1](https://github.com/ncoga/ncoga-website/pull/1) | zizmor action 0.6.4                                                      | `1a14e08` |
| [#2](https://github.com/ncoga/ncoga-website/pull/2) | CodeQL init 4.38.3                                                       | `b93d069` |
| [#3](https://github.com/ncoga/ncoga-website/pull/3) | upload-artifact 7.0.2                                                    | `52f41ec` |
| [#4](https://github.com/ncoga/ncoga-website/pull/4) | SBOM action 0.24.3                                                       | `551d5ba` |
| [#5](https://github.com/ncoga/ncoga-website/pull/5) | CodeQL analyze 4.38.3                                                    | `7918b5e` |
| [#6](https://github.com/ncoga/ncoga-website/pull/6) | Seven production minor/patch updates                                     | `a3dd1aa` |
| [#7](https://github.com/ncoga/ncoga-website/pull/7) | Eleven development minor/patch updates; overlapping lockfile regenerated | `42e082c` |
| [#8](https://github.com/ncoga/ncoga-website/pull/8) | Motion 14.1.0; tested separately                                         | `0d7e0fc` |
| [#9](https://github.com/ncoga/ncoga-website/pull/9) | googleapis 185.0.0; tested separately                                    | `efb16af` |

## Verification

- `pnpm verify` passed after both dependency groups, after Motion 14, and after googleapis 185. It covers formatting, lint, typecheck, 21 unit tests, unused dependency analysis, and a webpack production build.
- `pnpm test:smoke` passed all 38 Chromium cases after installing the browser required by Playwright 1.64. The first attempt failed before page load because the new browser executable was absent; the successful rerun covers homepage, design preview, legacy smoke and automated accessibility cases.
- `pnpm security:audit` reported no known vulnerabilities; `pnpm security:secrets` passed.
- The homepage-only Lighthouse command passed three local runs after the dependency updates. Accessibility, best practices, and SEO scored 100 in each; performance scored 78, 91, and 94 (median 91). The configured assertions passed.

## GitHub security prerequisite

The old PR checks failed in GitHub's `actions/dependency-review-action` because Dependency Graph is disabled for the repository. The owner chose to enable Dependency Graph; the dependency-review job remains in the workflow. The local Git credential can edit PRs but does not have repository administration permission, so this setting must be changed by an administrator. After it is enabled, validate the check on the next pull request. No security job was removed.

The copied Google Sheets integration remains disconnected from NCOGA data. The googleapis upgrade passed static and unit checks, but no live Sheets account test was performed.
