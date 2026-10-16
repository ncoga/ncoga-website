# Information architecture and page strategy

NCOGA is the parent; YAY is a distinct branch within it. Navigation must make the relationship and return path clear. Prioritize visitor needs over internal org-chart complexity. Validate routes against the current site and content inventory before implementation; the following sitemap is **provisional**, not a commitment to build every route at once.

```text
/
├── /about
│   ├── /history
│   ├── /mission-vision
│   ├── /leadership
│   └── /member-associations
├── /community
│   ├── /initiatives
│   ├── /resources
│   └── /get-involved
├── /news
│   ├── /[slug]
│   └── /category/[slug]
├── /events
│   └── /[slug]
├── /partnerships
├── /ncoga-yay
│   ├── /about
│   ├── /leadership
│   │   └── /[slug]
│   ├── /pillars
│   │   ├── /education
│   │   ├── /networking-career-growth
│   │   ├── /community-health-philanthropy
│   │   ├── /internal-public-affairs
│   │   └── /public-communications
│   ├── /programs
│   │   ├── /mission-50000
│   │   ├── /ambassador-program
│   │   └── /we-dey
│   ├── /events
│   ├── /news
│   ├── /partnerships
│   ├── /membership
│   ├── /explore
│   ├── /resources
│   └── /faq
├── /contact
├── /privacy
├── /terms
└── /accessibility
```

## Navigation and shared systems

Candidate global links: About, Our Community, NCOGA YAY, News, Events, Get Involved, with visible Contact access. Refine through content inventory and usability review; avoid excessive top-level links. YAY needs local Overview, About, Pillars, Programs, Events, News, Partnerships, and Membership access without crowding global navigation. On mobile, provide touch-friendly targets, active state, keyboard and Escape behavior, focus management, accessible submenus, and no accidental scroll trap. Choose a full-height panel only when useful.

Use shared news, event, media, and design infrastructure with explicit NCOGA, YAY, or both ownership. Preserve current URL value with appropriate redirects, metadata, canonical URLs, and internal links. Add future pages when they have a clear audience, verified content, position in the hierarchy, and reusable navigation pattern.

## Parent homepage narrative

Use progressive disclosure rather than an exhaustive directory. The provisional sequence is: editorial hero with authentic imagery and clear paths; what NCOGA is; official mission and vision; verified history (including 1986 founding and 2024 YAY creation only after source check); verified activities; substantial YAY spotlight; current news; genuinely upcoming events or designed empty state; verified impact or qualitative stories; clear involvement routes; and a useful footer with verified contact and social destinations. Vary section composition. Never invent numbers, milestones, events, or testimonials. Candidate editorial headlines are not official slogans.

## YAY experience

The landing page should explain YAY, its mission and audience, five pillars, programs, events, news, partnerships, membership, and involvement. Share the base design system with controlled accents and imagery. Use the five pillar names consistently: Education; Networking & Career Growth; Community Engagement, Health & Philanthropy; Internal & Public Affairs; Public Communications. Record discrepancies in older sources rather than silently mixing names.

Pillar pages can draw from introduction, purpose, activities, leadership, programs, opportunities/resources, events, related news, and involvement. Render only sections with verified content. The Education page must allow a later scholarship integration without guessing its technical form; hide but preserve the 2025 initiative banner. Verify leadership changes before publication and remove public personal emails where directed.

Program pages should support Mission 50,000, the Ambassador Program, and We Dey! when sufficient approved content exists. Partnerships should explain collaboration areas, the verified Infinite Vision relationship, inquiry mechanisms, and contact. Membership should explain free membership and stated age range with a verified registration destination. An Explore page should answer who YAY serves, how pillars and membership work, and how to learn more; add its introduction video when the approved URL is available.

The news hub needs feature, categories, listing, article details, dates, authors where appropriate, related stories, metadata, previews, scheduling, and responsive media; add search and filters only when volume warrants. Events need true timezone-aware upcoming/past behavior, visibility, physical/virtual/hybrid detail, registration state, and no public private links. See [content sources](07-CONTENT-AND-SOURCES.md).
