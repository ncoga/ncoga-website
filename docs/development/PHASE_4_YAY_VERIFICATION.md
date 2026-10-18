# Phase 4 YAY landing-page verification

**Checked:** 2026-10-17 on `release/dev`.

The local `/ncoga-yay` page follows the [source and action plan](PHASE_4_YAY_PLAN.md). It identifies YAY as NCOGA's branch, uses the published October 2024 establishment date and distinct YAY mission and vision, and shows five topic areas without claiming specific current programs. It uses a type-led visual fallback and the approved abstract Kente study; no unverified YAY mark, leader image, form, impact metric, or charity-template copy appears.

## Results

| Check                   | Result                                                                                                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm verify`           | Passed: Prettier, ESLint, TypeScript, 21 unit tests, Knip, and webpack production build. `/ncoga-yay` is prerendered.                                                                                               |
| Browser suites          | 24 focused checks passed across homepage, design foundation, About, Contact, and YAY. The complete Chromium smoke suite then passed 53/53, including copied-route validation tests.                                 |
| Navigation and metadata | YAY title, description, Open Graph, and `https://ncoga.com/ncoga-yay` canonical passed. Parent About and general Contact links are local. Shared NCOGA navigation and related page actions now target `/ncoga-yay`. |
| Keyboard and responsive | No horizontal overflow at 320, 375, 430, 768, 1024, 1280, 1440, and 1920px. Mobile sidebar focus and Escape behavior passed; homepage regression covers reduced motion.                                             |
| Accessibility           | Automated WCAG A/AA checks found no violations at 375 and 1440px. All YAY content is visible without animation.                                                                                                     |
| Visual review           | [375px](../../artifacts/phase4-yay-375.png) and [1440px](../../artifacts/phase4-yay-1440.png) full-page captures were inspected. Type, spacing, and the motif are legible and restrained.                           |

## Publication limits

The “Internal & Public Affairs” short name is provisional against a conflicting older published label; the owner should approve the final pillar name. The mission, vision, program status, leadership, forms, and imagery still require organizational content review before publication. The legacy sitemap/robots and remaining copied routes are separate launch gates. No NCOGA data is sent to copied integrations.

The Contact commit's first remote CI browser run failed because an old smoke test still expected the removed Platinum contact form at `/contact`. The smoke test now verifies that `/contact` has no copied submission form and uses the published email; the complete local suite passes. The corrected remote run must pass after this commit is pushed. Copied routes still log missing Platinum logo images during the local suite, a launch cleanup item.
