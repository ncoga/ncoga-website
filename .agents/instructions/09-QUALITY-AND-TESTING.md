# Quality, testing, and release standards

## Accessibility and responsive behavior

Target WCAG 2.2 AA from the start. Use semantic HTML, logical headings, a skip link, keyboard navigation, visible focus, accessible forms and errors, appropriate ARIA, correct alternatives, adequate targets, accessible menus and dialogs with focus management, sufficient contrast, and reduced-motion support. Test real keyboard workflows; automated checks alone are insufficient.

Check content and interaction at 320, 375, 430, 768, 1024, 1280, 1440, and 1920px during foundational design review. Verify typography wrapping, gutters, image crop, navigation, section rhythm, footer, overflow, and layout shifts. Mobile composition must be deliberate.

## Performance, SEO, and security

Prefer server rendering or static generation where appropriate, optimized responsive images and modern formats, efficient fonts and CSS, minimal client JavaScript, deferred nonessential scripts, dynamic imports when useful, caching, and cleanup of listeners. Suggested real-user 75th-percentile targets: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1. Evaluate Lighthouse as a diagnostic, not as a substitute for real-world behavior.

Use descriptive metadata, canonical URLs, semantic headings, XML sitemap, robots directives, Open Graph previews, breadcrumbs where useful, appropriate Organization/Article/Event structured data, permanent redirects for migrated URLs, and meaningful internal links. Never fabricate schema facts, reviews, or ratings.

Protect admin and CMS routes, credentials, uploads, forms, member data, private meeting links, and third-party integrations. Apply authorization, validation, and rate limiting where appropriate. Do not expose secrets to client bundles or collect unnecessary personal data.

## Verification by scope

- Static checks: formatting, lint, typecheck, production build, dependency validation, and secret checks as applicable to the repository.
- Component checks: navigation, dropdowns, buttons, fields and forms, cards, accordions, dialogs, and responsive variants; write tests where they verify meaningful behavior.
- Integration checks: internal navigation, content rendering, actual form destinations, CMS loading, event categorization, article routes, and metadata.
- End-to-end checks with Playwright or equivalent where practical: learning about NCOGA, exploring YAY and a pillar, finding an event, reading an article, partnership and membership pathways, and keyboard-only navigation.
- Visual review: desktop, tablet, and mobile screenshots for major pages; inspect wrapping, crop, spacing, color, overflow, and shifts.
- Content/asset checks: source accuracy, dates, external links, image rights and attribution, previous-brand removal, no placeholder copy, and no unverified metrics.

Do not claim a test passed unless it ran. Broaden testing to resolve a concrete risk rather than generating redundant tests. A component is complete when its relevant states, semantics, keyboard behavior, responsive layout, design-system fit, and needed tests work. A page additionally needs verified content, purpose, navigation, metadata, imagery or fallback, primary interactions, and a passing production build. A phase needs its exit conditions, documentation, known limitations, and next step recorded.

## Final review and production boundary

Confirm no gradients, irrelevant branding, speculative organizational facts, fabricated testimonials or statistics, broken primary paths, missing imagery without fallback, unnecessary animation, mobile overflow, significant accessibility failures, exposed secrets, or unexpected integrations. Verify content, forms, external links, redirects, environment, and rollback/release procedure before release. Production deployment requires explicit authorization. See [workflow](02-AGENT-WORKFLOW.md).
