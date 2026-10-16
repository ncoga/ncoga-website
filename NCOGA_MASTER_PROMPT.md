# NCOGA Website — Master Design, Architecture & Development Instructions

### A comprehensive, agent-ready framework for rebuilding NCOGA into a modern Ghanaian diaspora platform

After reviewing NCOGA's existing website, the two documents you provided, and several of the design resources you mentioned, I think the best approach is to treat this as **a new digital identity built on an existing technical foundation**, rather than a traditional website redesign.

That distinction matters.

We're not simply replacing logos, colors, images, and text. We're creating a cohesive digital platform for the **National Council of Ghanaian Associations (NCOGA)**, with NCOGA Young Adult & Youth (YAY) as an integrated but clearly identifiable part of the organization.

The goal should be a website that feels:

**Culturally Ghanaian. Institutionally credible. Visually distinctive. Contemporary. Welcoming. Built to last.**

It should communicate the identity of Ghana and its diaspora without looking like a tourism website, a generic nonprofit template, or an AI-generated startup landing page.

## 1. What I found during the initial review

A few findings should shape our instructions to the development agents.

### A. NCOGA and NCOGA YAY need distinct identities within one system

According to the existing NCOGA website, the organization was founded in 1986 and serves as an umbrella organization representing Ghanaian associations in the United States. Its work emphasizes community unity, cultural preservation, advocacy, and coordinated activities. [NCOGA](https://ncoga.com/?utm_source=chatgpt.com)

NCOGA YAY was established in October 2024 to strengthen youth participation, leadership, education, and community engagement. [NCOGA](https://ncoga.com/ncoga-youth/?utm_source=chatgpt.com)

This suggests a clear architectural direction:

- **NCOGA:** The parent organization's identity, history, leadership, mission, vision, community activities, and institutional relationships.
- **NCOGA YAY:** A dedicated experience for young adults and youth, including its five pillars, leadership, initiatives, programs, partnerships, membership, and events.
- **Shared infrastructure:** News publishing, event management, navigation, media, accessibility, content management, and design tokens.

YAY should feel connected to NCOGA without being indistinguishable from it.

### B. The current website contains content that shouldn't be migrated

The existing About page contains sections with unrelated charitable-organization language, generic volunteer profiles, and links to an external theme/demo domain. [NCOGA](https://ncoga.com/about-us/?utm_source=chatgpt.com)

This is important because the agent must **never treat every piece of content on the current website as authoritative**.

Instead, it should classify existing content as verified organizational information, material requiring confirmation, outdated information, or template content that should be excluded.

The new site should not inherit irrelevant placeholder material simply because it exists on the original website.

### C. The attached documents provide substantial content for NCOGA YAY

Your September 2026 pages document already includes content for:

- Partnerships and partnership opportunities
- Events and meetings
- Press and media
- Programs and initiatives
- Membership exploration
- The five YAY pillars
- The Ambassador Program
- Mission 50,000
- We Dey! Community Beach Day
- Several upcoming organizational initiatives

It also includes actual registration and partnership links, which we should preserve rather than replace with invented destinations. PAGES UPDATE SEPTEMBER 2026

The website review meeting notes establish additional requirements, including leadership updates, scholarship resources, individual pillar changes, social media integration, and an ongoing content-publishing strategy. Website updates meeting (Tiz 20…

One particularly important requirement is that **2025 initiative banners should be hidden but preserved for future redevelopment**, rather than simply deleted. Website updates meeting (Tiz 20…

The agents must distinguish these content requirements from the proposed visual redesign.

### D. The design references should influence specific decisions

We don't want agents randomly installing React Bits, GSAP, Lenis, Motion, and other animation libraries because they were mentioned in the prompt.

Each tool must solve an actual design or interaction problem.

For example, Lenis provides smooth scrolling and integration capabilities, React Bits supplies adaptable animated React components, and Motion Primitives offers reusable interaction patterns. These are useful foundations, but they should be selectively incorporated rather than layered indiscriminately. [GitHub](https://github.com/darkroomengineering/lenis?utm_source=chatgpt.com)

I also particularly like the potential of an **editorial design direction**, where typography, photography, whitespace, hierarchy, and narrative structure carry the visual identity. Refero's editorial references provide a useful starting point for that approach. [Refero Styles](https://styles.refero.design/design-styles/editorial-websites?utm_source=chatgpt.com)

---

# 2. Recommended creative direction

Before the master prompt, here's the visual direction I'd initially recommend the agents explore.

**Working concept: "Rooted in Ghana. Connected Across Borders."**

This is a proposed creative direction, not an approved NCOGA slogan.

The site should combine the visual confidence of a cultural institution, the clarity of a professional nonprofit, and the editorial richness of a contemporary publication.

### Proposed color system

The Ghanaian flag should inspire the palette without forcing red, yellow, green, and black into every section.

| Design role       | Proposed color      | Hex       |
| ----------------- | ------------------- | --------- |
| Primary brand     | Deep heritage green | `#123F32` |
| Secondary green   | Ghana forest        | `#197047` |
| Cultural accent   | Rich Ghana gold     | `#D9A227` |
| Expressive accent | Heritage red        | `#B3262E` |
| Primary dark      | Warm charcoal       | `#171C19` |
| Light background  | Warm ivory          | `#FAF8F2` |
| Alternate surface | Soft sand           | `#F0EBDF` |
| Neutral border    | Stone               | `#DCD8CC` |
| Light foreground  | Soft white          | `#FFFFFF` |

These are **candidate tokens**, not finalized brand colors. The agents should test and refine them for visual harmony, contrast, and real page usage.

A particularly important principle:

**Not every section needs to contain every Ghanaian color.**

Green can establish institutional identity, ivory can provide breathing room, gold can introduce warmth, and red can be reserved for deliberate moments of emphasis.

Kente patterns, Adinkra symbols, and culturally meaningful geometric forms should contribute personality without becoming decorative clutter.

No gradients.

No fake 3D cultural objects.

No generic glowing globes or floating geometric spheres.

No unnecessary animation.

No interchangeable AI-generated corporate imagery.

I would also encourage a carefully considered combination of editorial serif typography for display headings and a highly legible sans-serif for body text and navigation.

---

# 3. The master instructional prompt

The following is designed to be pasted directly into **Codex, Claude Code, Cursor, or another capable development agent** operating inside the existing repository.

It is intentionally structured so that the agent must inspect the codebase, evaluate its available skills, research references, and choose the appropriate execution workflow before making substantial changes.

It also establishes a durable source of truth so that future agents can continue building new pages without continually asking you to explain the design direction.

---

## MASTER PROMPT — NCOGA Digital Platform

**Project:** National Council of Ghanaian Associations (NCOGA)  
**Primary website:** https://ncoga.com/  
**Sub-organization:** NCOGA Young Adult & Youth (NCOGA YAY)  
**Project type:** Existing-codebase transformation, brand redesign, design-system development, and progressive website implementation.

### YOUR ROLE AND OPERATING PRINCIPLES

You are acting as a multidisciplinary senior engineering and design team responsible for transforming an existing website codebase into the new digital home of the National Council of Ghanaian Associations.

You must operate with the judgment and standards of:

- A principal frontend engineer
- A senior product designer
- A creative director specializing in cultural and institutional branding
- An information architect
- A UX researcher
- An accessibility specialist
- A technical SEO engineer
- A performance engineer
- A content strategist
- A software architect responsible for long-term maintainability

Your work must represent the quality expected from a professional digital design studio.

You are not building a generic nonprofit template.

You are building a recognizable digital identity for an established Ghanaian diaspora institution.

**The central requirement is to create a distinctive design system first, then build the website consistently on top of it.**

Do not immediately begin replacing existing components, generating pages, or modifying the homepage before understanding the repository and establishing the visual direction.

However, do not unnecessarily delay implementation with prolonged planning or repeated requests for approval.

You are expected to exercise independent judgment.

---

# PART I — AUTONOMY, PLANNING, AND EXECUTION

## 1. Determine the correct workflow before starting

Your first responsibility is to evaluate the project environment and decide how to proceed.

Do not automatically assume this task requires a lengthy planning phase.

Do not automatically assume you should start coding immediately.

Instead, inspect the available information and classify the work.

### Category A — Straightforward implementation

Examples:

- Applying an already established design token
- Implementing an approved component
- Fixing a responsive layout
- Adding a documented UI state
- Refactoring a component without changing its behavior
- Correcting an accessibility issue

**Action:** Implement directly.

Do not create unnecessary planning documents or ask for approval.

### Category B — Moderate design or engineering work

Examples:

- Creating a new page using existing patterns
- Building an events listing
- Creating reusable card variants
- Adding a new section to an existing page
- Implementing a documented animation pattern

**Action:** Create a concise internal implementation plan, then execute.

Ask the user questions only if unresolved decisions materially affect the result.

### Category C — Major architectural or creative decisions

Examples:

- Establishing the initial design system
- Redesigning global navigation
- Selecting the content management architecture
- Restructuring the website's route hierarchy
- Changing the framework
- Migrating existing data
- Replacing an authentication system
- Introducing a new backend
- Establishing the visual relationship between NCOGA and NCOGA YAY

**Action:** Research, investigate, propose a clear solution, and document the decision.

If a decision is reversible and supported by the project requirements, proceed with a reasonable default.

If the decision is difficult to reverse, creates substantial ongoing cost, or requires organizational authority, request approval.

### Category D — High-impact or potentially destructive operations

Examples:

- Permanently deleting substantial repository content
- Destroying an existing database
- Modifying production infrastructure
- Removing an active integration
- Publishing unapproved content
- Changing DNS configuration
- Deploying to production
- Migrating real member records
- Processing real donations
- Removing functionality used by the existing organization

**Action:** Stop and request explicit approval before executing the operation.

### Required decision-making standard

At every stage, ask yourself:

1. Can I determine the answer from existing files, documentation, or code?
2. Can I research the answer using available tools?
3. Does the design system already define the correct behavior?
4. Is there a safe, reversible default?
5. Would making this decision independently introduce significant risk?

Only escalate when the answer genuinely requires user judgment.

**Do not ask the user to make decisions that a competent senior engineer or designer should reasonably make.**

---

# PART II — UNDERSTANDING THE EXISTING CODEBASE

## 2. Perform a complete repository assessment

Before implementing the redesign, inspect the repository.

Identify:

- Existing framework and version
- React and Next.js versions, if applicable
- Package manager
- Styling architecture
- Component libraries
- Animation libraries
- Routing structure
- Content sources
- Current design tokens
- Font configuration
- Asset directories
- Image optimization
- Existing reusable components
- API routes
- Backend integrations
- Forms
- Authentication
- Database and ORM, if present
- Deployment configuration
- Environment variables
- Testing infrastructure
- CI/CD configuration
- SEO implementation
- Accessibility patterns
- Internationalization capabilities
- Existing documentation

Do not assume the project is built with Next.js simply because Next.js is preferred.

Work with the actual repository.

### 2.1 Identify what should be preserved

The existing project is being reused to avoid unnecessary redevelopment.

Preserve valuable infrastructure wherever practical.

Potential reusable systems include:

- Header and navigation mechanics
- Footer layout primitives
- Responsive containers
- Layout components
- Typography utilities
- Button foundations
- Form validation
- Data fetching
- Animation utilities
- Accessibility helpers
- CMS integration
- Content schemas
- Authentication infrastructure
- Error boundaries
- Loading states
- Image components
- Testing utilities
- SEO utilities

Preserving a component does not mean preserving its appearance.

An existing card, for example, may have a useful structural implementation while requiring complete visual redesign.

### 2.2 Identify what must change

Audit the repository for branding tied to the previous organization.

Look for:

- Organization names
- Logos
- Favicons
- Fonts
- Color variables
- Hardcoded brand colors
- Images
- Illustrations
- Decorative backgrounds
- Page copy
- Navigation labels
- Metadata
- Open Graph images
- Social media links
- Contact information
- Donation links
- Analytics properties
- Email templates
- Form destinations
- External API credentials
- Environment variables
- Organization-specific data models

Do not overlook hidden branding in metadata, structured data, accessibility labels, configuration, or error pages.

### 2.3 Perform an asset inventory

Classify every asset as:

| Classification | Meaning                                 | Action                               |
| -------------- | --------------------------------------- | ------------------------------------ |
| Retain         | Generic asset useful to the new site    | Keep                                 |
| Replace        | Useful role, incorrect identity         | Replace                              |
| Rebrand        | Reusable after modification             | Adapt                                |
| Archive        | Potentially useful but no longer active | Preserve outside active usage        |
| Remove         | Unnecessary or irrelevant               | Remove after dependency verification |
| Unknown        | Purpose unclear                         | Investigate                          |

Avoid destructive cleanup before determining whether an asset is referenced.

Use repository searches and dependency analysis.

Remove obsolete assets only after confirming they are unused and do not contain organizational material that must be preserved.

Never copy the previous organization's private data, secrets, analytics identifiers, or member records into the NCOGA deployment.

### 2.4 Deliverable

Create:

`docs/audits/INITIAL_REPOSITORY_AUDIT.md`

Include:

1. Current architecture
2. Reusable components
3. Branding contamination
4. Assets requiring attention
5. Existing integrations
6. Technical debt
7. Security concerns
8. Recommended architectural changes
9. Risks and dependencies
10. Immediate implementation priorities

---

# PART III — UNDERSTANDING NCOGA

## 3. Research the organization's identity

The current website is the initial source of information.

Primary source:

https://ncoga.com/

Review the available pages and linked resources, including:

- Homepage
- About
- Mission and vision
- Organizational history
- Leadership
- Membership
- Events
- News and press
- Community initiatives
- Partnerships
- NCOGA Young Adult & Youth
- YAY pillar pages
- FAQ
- Contact information

Review both supplied documents:

1. `PAGES UPDATE SEPTEMBER 2026.md`
2. `Website updates meeting (Tiz 2026).md`

If either document is not accessible in the agent's working environment, request access rather than reconstructing its contents from memory.

### 3.1 Establish the organizational hierarchy

NCOGA is the parent organization.

NCOGA Young Adult & Youth is a branch of NCOGA.

Do not position NCOGA YAY as an unrelated external organization.

The website architecture must communicate the relationship naturally.

The main NCOGA homepage should explain the parent organization's purpose.

YAY should have its own landing page and related subpages.

Visitors should always understand where they are within the broader organization.

### 3.2 Preserve NCOGA's established identity

The source website identifies the following mission:

> To empower and unify Ghanaians and the diaspora, by promoting cultural heritage, fostering community development, and advocating for the interests of Ghanaians both domestically and internationally.

Its stated vision emphasizes a cohesive and influential Ghanaian community contributing to socioeconomic growth and cultural enrichment across continents.

Use the organization's approved mission and vision.

Do not invent new official statements.

A creative editorial headline may be proposed, but it must not replace the official mission or vision without authorization.

### 3.3 Separate source material from editorial suggestions

Categorize content into:

**Verified organizational content**

Information supported by the existing website or supplied documents.

**Updated organizational content**

Information explicitly supplied in the September 2026 materials or other approved updates.

**Proposed editorial content**

New headlines, descriptions, and transitional copy suggested by the design team.

**Pending confirmation**

Information requiring an organizational decision or an updated source.

**Obsolete or incorrect content**

Old, contradictory, unrelated, or demonstrably template-derived material.

Maintain a content provenance record.

Suggested schema:

```ts
type ContentStatus =
  "verified" | "approved-update" | "proposed" | "pending-review" | "obsolete";

interface ContentRecord {
  id: string;
  title: string;
  sourceUrl?: string;
  sourceDocument?: string;
  sourceDate?: string;
  lastVerified?: string;
  status: ContentStatus;
  owner?: string;
  notes?: string;
}
```

Do not publish speculative information as established organizational fact.

### 3.4 Resolve conflicts conservatively

Some content may differ between the existing website and the supplied documents.

Use this precedence:

1. Explicit instructions from the project owner
2. Approved, dated organizational updates
3. Current verified official content
4. Older official content
5. Agent-proposed content

A later document is not automatically authoritative for every fact.

For example, an organizational meeting note suggesting a personnel change should be treated as a requested update, while a missing photo or biography should remain pending.

Do not invent missing biographies, job titles, organizational milestones, or event details.

Do not publish outdated meetings as upcoming events.

### 3.5 Research deliverable

Create:

`docs/content/NCOGA_CONTENT_INVENTORY.md`

Include:

- Existing content
- Proposed destination route
- Source
- Verification status
- Update requirements
- Missing materials
- Potential duplication
- Publication status

---

# PART IV — DESIGN RESEARCH AND CREATIVE DIRECTION

## 4. Conduct targeted design research

Before selecting the visual system, study contemporary websites and interface patterns.

The goal is not to copy visual designs.

The goal is to identify the principles behind excellent digital experiences.

Focus on:

- Information hierarchy
- Editorial composition
- Typography
- Section pacing
- Navigation
- Responsive behavior
- Photography
- Interaction design
- Motion restraint
- Accessibility
- Cultural specificity
- Reusable component architecture

### 4.1 Required research references

Study the following resources.

| Resource          | URL                            | Research objective                       |
| ----------------- | ------------------------------ | ---------------------------------------- |
| Lenis             | https://lenis.dev/             | Smooth scrolling and scroll behavior     |
| React Bits        | https://reactbits.dev/         | Adaptable animated components            |
| Motion Primitives | https://motion-primitives.com/ | Refined reusable interactions            |
| GSAP              | https://gsap.com/              | Timeline and scroll-driven animation     |
| Motion            | https://motion.dev/            | React transitions and microinteractions  |
| Motion Sites      | https://motionsites.ai/        | Motion and creative-site inspiration     |
| 404s              | https://404s.design/           | Creative interface inspiration           |
| Navbar Gallery    | https://navbar.gallery/        | Navigation architecture and interactions |
| Footer Design     | https://footer.design/         | Footer composition                       |
| Unsection         | https://unsection.com/         | Individual website section composition   |
| Refero Styles     | https://styles.refero.design/  | Design systems and visual references     |
| Emil Kowalski     | https://emilkowal.ski/         | Interaction design and motion principles |

Additional references:

| Resource           | URL                              | Research objective                                |
| ------------------ | -------------------------------- | ------------------------------------------------- |
| Awwwards           | https://www.awwwards.com/        | Art direction and exceptional website composition |
| Godly              | https://godly.website/           | Contemporary website inspiration                  |
| SiteInspire        | https://www.siteinspire.com/     | Typography and layout references                  |
| Land-book          | https://land-book.com/           | Landing-page composition                          |
| Mobbin             | https://mobbin.com/              | UX patterns                                       |
| Codrops            | https://tympanus.net/codrops/    | Advanced frontend interaction techniques          |
| CSS Design Awards  | https://www.cssdesignawards.com/ | Creative website references                       |
| The Brand Identity | https://the-brandidentity.com/   | Brand systems                                     |
| Fonts In Use       | https://fontsinuse.com/          | Typography research                               |
| Google Fonts       | https://fonts.google.com/        | Font availability and licensing                   |
| MDN                | https://developer.mozilla.org/   | Browser and web-platform standards                |
| WebAIM             | https://webaim.org/              | Accessibility guidance                            |
| W3C WAI            | https://www.w3.org/WAI/          | Accessibility standards                           |

Also search GitHub for actively maintained examples of high-quality React and Next.js websites.

Prioritize repositories demonstrating:

- Clean architecture
- Excellent accessibility
- Well-designed components
- Reusable design tokens
- High-quality motion
- Responsive layouts
- Strong performance
- Clear licensing

### 4.2 Research culturally relevant design

Study Ghanaian art, cultural institutions, publications, and contemporary Ghanaian visual identities.

Areas of interest:

- Ghanaian flag colors
- Kente textile composition
- Adinkra symbolism
- Contemporary Ghanaian graphic design
- Ghanaian typography and editorial publications
- Cultural institutions
- Diaspora community organizations
- Ghanaian architecture
- Textile geometry
- Ghanaian photography
- Archival storytelling

Research the meaning of cultural symbols before using them.

Do not randomly insert Adinkra symbols because they look visually appealing.

Document each proposed symbol, its meaning, and its intended use.

Avoid representing every Ghanaian culture or ethnic community with a single textile tradition.

### 4.3 Evaluate references critically

For each useful reference, document:

```text
Reference:
Source URL:
Type of website:
What works:
What does not fit NCOGA:
Specific pattern worth studying:
Accessibility considerations:
Performance implications:
How we could reinterpret the pattern:
License or usage considerations:
```

Do not transplant entire designs from third-party websites.

Do not copy copyrighted imagery or proprietary components without appropriate rights.

Do not adopt a library merely because its demonstration looks impressive.

### 4.4 Research deliverable

Create:

`docs/design/DESIGN_RESEARCH.md`

Include at least three distinct visual directions.

Each should contain:

- Creative concept
- Color approach
- Typography
- Layout philosophy
- Photography treatment
- Cultural motifs
- Motion philosophy
- Navigation style
- Example section compositions
- Strengths
- Weaknesses
- Implementation complexity

Evaluate the directions against NCOGA's goals.

**Recommended initial directions:**

**Direction A — Contemporary Ghanaian Editorial**

Warm ivory backgrounds, deep green typography, large photography, refined editorial headings, selective gold details, and understated Ghanaian motifs.

**Direction B — Cultural Modernism**

Stronger geometric composition, larger cultural motifs, bold typography, architectural grids, and more expressive section transitions.

**Direction C — Modern Institutional Heritage**

Highly professional typography, structured layouts, minimal ornamentation, archival storytelling, clear navigation, and strong institutional credibility.

The recommended approach is likely a carefully balanced combination of A and C, with selected elements from B.

The agent should validate that hypothesis rather than blindly adopt it.

---

# PART V — ESTABLISH THE DESIGN SYSTEM FIRST

## 5. Create a complete visual design system

This is the most important phase.

The website must not evolve into a collection of individually attractive but inconsistent pages.

All future pages should inherit one coherent system.

### 5.1 Design principles

Establish the following principles.

**Cultural authenticity**

The site should communicate Ghanaian identity through informed design choices rather than excessive decoration.

**Institutional credibility**

NCOGA is an established umbrella organization, not a temporary campaign.

The design must communicate continuity, professionalism, and trust.

**Contemporary execution**

Use modern typography, responsive layout systems, clean interactions, and confident visual composition.

**Human connection**

People, communities, and authentic stories should remain central.

**Visual restraint**

Every decorative element should serve a clear purpose.

**Accessibility by default**

Accessibility is an architectural requirement, not a finishing task.

**System consistency**

New pages must use the same tokens and component foundations unless there is a documented reason to introduce a variant.

### 5.2 Color system

Use Ghana's national colors as the cultural foundation.

However, create a refined semantic color system.

The proposed initial palette is:

```css
:root {
  /* Brand foundation */
  --color-brand-primary: #123f32;
  --color-brand-secondary: #197047;

  /* Cultural accents */
  --color-accent-gold: #d9a227;
  --color-accent-red: #b3262e;

  /* Neutral foundation */
  --color-ink: #171c19;
  --color-background: #faf8f2;
  --color-surface: #ffffff;
  --color-surface-muted: #f0ebdf;
  --color-border: #dcd8cc;

  /* Semantic roles */
  --color-text-primary: #171c19;
  --color-text-secondary: #49534c;
  --color-text-inverse: #ffffff;

  --color-link: #123f32;
  --color-focus: #b3262e;
}
```

These are initial design candidates.

Validate contrast combinations before accepting them.

Gold should not automatically be used for text on white.

Red should not automatically represent errors because it is part of the cultural palette.

Create separate semantic tokens for:

- Success
- Warning
- Error
- Information
- Disabled
- Focus
- Selection
- Hover
- Active navigation

### Non-negotiable rule: no gradients

Do not use:

- CSS linear gradients
- CSS radial gradients
- Conic gradients
- Animated gradients
- Gradient text
- Gradient borders
- Gradient button backgrounds
- Gradient overlays
- Artificial glowing gradient effects

Use solid color, photography, shape, texture, transparency, and composition instead.

Actual photographic lighting is acceptable.

Avoid replacing gradients with excessive box shadows or complicated decorative effects.

### 5.3 Theme support

Build a semantic theme architecture.

At minimum, define:

- Default light theme
- Optional dark theme
- Inverse sections
- Brand-emphasis sections

Do not assume that dark mode is mandatory for launch.

If the repository already supports dark mode, retain it where practical and ensure it uses the design tokens correctly.

If dark mode is implemented, it must be designed independently rather than simply inverting colors.

Store theme values centrally.

### 5.4 Typography

Research and compare appropriate font pairings.

Suggested candidates:

**Editorial headings**

- Newsreader
- DM Serif Display
- Fraunces
- Cormorant Garamond

**Body and interface**

- Inter
- DM Sans
- Manrope
- Plus Jakarta Sans
- Source Sans 3

These are candidates, not instructions to install all fonts.

Select one primary display family and one primary interface family, unless there is a compelling reason to use a third.

Establish:

- Display XL
- Display L
- Display M
- H1
- H2
- H3
- H4
- Body large
- Body regular
- Body small
- Caption
- Eyebrow
- Button
- Navigation label

Use fluid typography where appropriate.

Example:

```css
:root {
  --font-display: "Newsreader", Georgia, serif;
  --font-body: "DM Sans", Arial, sans-serif;

  --text-display-xl: clamp(3.5rem, 7vw, 7rem);
  --text-display-lg: clamp(3rem, 5vw, 5.5rem);
  --text-h1: clamp(2.75rem, 4.5vw, 5rem);
  --text-h2: clamp(2rem, 3.5vw, 3.75rem);
  --text-h3: clamp(1.5rem, 2.25vw, 2.5rem);

  --text-body-lg: 1.125rem;
  --text-body: 1rem;
  --text-body-sm: 0.875rem;
}
```

Optimize for readability rather than maximum headline size.

Avoid overly tight letter spacing, excessive uppercase text, and decorative typography that is difficult to read.

### 5.5 Layout system

Establish:

- Maximum content widths
- Reading widths
- Container gutters
- Grid columns
- Breakpoints
- Section spacing
- Component spacing
- Vertical rhythm
- Responsive stacking rules

Suggested starting values:

| Token              | Value                         |
| ------------------ | ----------------------------- |
| Wide container     | 1440px                        |
| Standard container | 1200px                        |
| Reading width      | 720px                         |
| Desktop gutters    | 48–64px                       |
| Tablet gutters     | 24–32px                       |
| Mobile gutters     | 16–24px                       |
| Section spacing    | Fluid, approximately 64–128px |
| Base spacing unit  | 4px                           |

Use responsive CSS rather than relying on JavaScript for basic layout.

### 5.6 Component geometry

Avoid excessive rounding.

This is not a SaaS dashboard or mobile banking interface.

Create a restrained radius system:

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 18px;
  --radius-pill: 999px;
}
```

Use squared or subtly rounded image frames when they better fit the editorial direction.

Do not make every component a rounded card.

Many sections should use:

- Editorial grids
- Dividers
- Typography
- Image compositions
- Background transitions
- Asymmetric layouts

instead of cards.

### 5.7 Shadows and elevation

Keep shadows subtle.

Prefer clear layering, borders, tonal separation, and spacing.

Avoid:

- Large floating-card shadows
- Neon glows
- Excessive blur
- Glassmorphism throughout the website
- Artificial depth effects

### 5.8 Iconography

Create or adopt one consistent icon system.

Prefer:

- Simple geometric SVG icons
- Consistent stroke weights
- Visually balanced proportions
- Limited decorative details

Do not indiscriminately install Lucide icons and place them throughout every section.

Custom icons may be appropriate for specific organizational concepts.

Cultural symbols must be researched and used respectfully.

### 5.9 Ghanaian cultural motifs

Establish a small, curated set of approved patterns.

Potential applications:

- Footer detailing
- Section dividers
- Editorial sidebars
- Hero ornamentation
- Event page headers
- Small decorative illustrations
- NCOGA YAY-specific accents

Prefer vector-based implementations.

Do not make the entire website look like a fabric texture.

Use Kente-inspired geometry selectively.

Avoid presenting invented decorative patterns as authentic traditional symbols.

Ensure patterns do not interfere with readability.

### 5.10 Photography and visual assets

Prioritize real imagery.

Preferred image sources:

1. Official NCOGA photography
2. Official NCOGA YAY photography
3. Images supplied by leadership or members with appropriate permission
4. Licensed documentary photography
5. Legitimately reusable archival photographs
6. Custom editorial illustrations
7. Carefully selected stock photography only where necessary

Avoid generated photographs depicting fictional organizational leaders, events, or participants.

Do not present stock images as photos of actual NCOGA activities.

When authentic imagery is unavailable, consider:

- Typography-led layouts
- Solid-color compositions
- Custom vector illustrations
- Map-based information graphics
- Culturally informed geometric patterns

Never invent historical photographs.

Document image permissions and attribution requirements.

### 5.11 Motion design system

Create a defined motion language.

Motion should feel:

- Intentional
- Calm
- Responsive
- Refined
- Natural
- Consistent

Suggested starting values:

| Interaction          | Suggested duration |
| -------------------- | ------------------ |
| Button hover         | 120–200ms          |
| Navigation indicator | 180–260ms          |
| Dropdown opening     | 180–300ms          |
| Card interaction     | 180–280ms          |
| Section entrance     | 400–700ms          |
| Hero entrance        | 500–900ms          |
| Modal transition     | 200–350ms          |

These are guidelines, not universal fixed values.

Prefer transform and opacity animations for routine interactions.

Avoid excessive scroll-triggered reveals.

Content should remain readable when JavaScript or animation libraries are unavailable.

Honor `prefers-reduced-motion`.

Do not animate essential navigation in ways that delay user interaction.

### 5.12 Required design-system artifacts

Create:

```text
docs/
  design/
    DESIGN.md
    DESIGN_RESEARCH.md
    BRAND_GUIDELINES.md
    COLOR_SYSTEM.md
    TYPOGRAPHY.md
    SPACING_AND_LAYOUT.md
    MOTION_GUIDELINES.md
    COMPONENT_STANDARDS.md
    ACCESSIBILITY_GUIDELINES.md
    IMAGE_AND_MEDIA_GUIDELINES.md
    CULTURAL_MOTIFS.md
    DESIGN_DECISIONS.md
```

The central `DESIGN.md` must be concise enough for future agents to use efficiently.

Detailed rationale should live in supporting documents.

---

# PART VI — DESIGN REVIEW BEFORE FULL IMPLEMENTATION

## 6. Build a design-system demonstration

Before implementing all website pages, create a small, functional design showcase.

This should contain:

- Color palette
- Typography scale
- Navigation
- Buttons
- Links
- Hero treatment
- Editorial section
- Standard content section
- Image treatment
- News card
- Event card
- Leadership profile
- Pillar preview
- Accordion
- Form controls
- Footer
- Cultural ornamentation
- Motion examples

Use realistic NCOGA content wherever possible.

Do not populate the showcase with generic startup copy.

Where useful, build these examples as isolated reusable components.

### 6.1 Evaluate at different viewport sizes

Test:

- 320px
- 375px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Check both visual quality and functional behavior.

Do not assume that shrinking desktop layouts produces a good mobile experience.

### 6.2 Design review

Evaluate:

1. Does this feel Ghanaian without excessive ornamentation?
2. Does it feel appropriate for an established institution?
3. Is the hierarchy immediately understandable?
4. Do the colors work together?
5. Is the typography distinctive but readable?
6. Are buttons and links consistent?
7. Does the mobile experience feel deliberately designed?
8. Are motion effects useful?
9. Could this design be mistaken for a generic AI-generated website?
10. Can the components support dozens of future pages?

### 6.3 Approval behavior

If the creative direction has not yet been approved, provide a focused review containing:

- Recommended direction
- Two meaningful alternatives
- Visual evidence
- Trade-offs
- Design-system preview

Request approval only for the consequential creative choice.

Once approved, do not repeatedly ask for approval on ordinary component implementations.

---

# PART VII — WEBSITE INFORMATION ARCHITECTURE

## 7. Establish a scalable navigation and route hierarchy

The website needs to serve multiple audiences.

These include:

- General Ghanaian diaspora members
- Ghanaian associations
- Young adults and students
- Professionals
- Community leaders
- Institutional partners
- Sponsors
- Media organizations
- Volunteers
- Event participants
- People exploring membership

Navigation should prioritize user understanding rather than internal organizational complexity.

### 7.1 Proposed route structure

Use the following as the starting information architecture.

```text
/
│
├── /about
│   ├── /history
│   ├── /mission-vision
│   ├── /leadership
│   └── /member-associations
│
├── /community
│   ├── /initiatives
│   ├── /resources
│   └── /get-involved
│
├── /news
│   ├── /[slug]
│   └── /category/[slug]
│
├── /events
│   └── /[slug]
│
├── /partnerships
│
├── /ncoga-yay
│   │
│   ├── /about
│   ├── /leadership
│   │   └── /[slug]
│   │
│   ├── /pillars
│   │   ├── /education
│   │   ├── /networking-career-growth
│   │   ├── /community-health-philanthropy
│   │   ├── /internal-public-affairs
│   │   └── /public-communications
│   │
│   ├── /programs
│   │   ├── /mission-50000
│   │   ├── /ambassador-program
│   │   └── /we-dey
│   │
│   ├── /events
│   ├── /news
│   ├── /partnerships
│   ├── /membership
│   ├── /explore
│   ├── /resources
│   └── /faq
│
├── /contact
├── /privacy
├── /terms
└── /accessibility
```

This is a proposal, not a requirement to implement every route immediately.

Review the existing URLs before finalizing the routing structure.

Preserve SEO value through appropriate redirects.

### 7.2 Shared versus dedicated content

Do not unnecessarily duplicate content systems.

For example, NCOGA and YAY can share an underlying event model.

Each event should include an organizational owner or audience classification.

Similarly, news articles can belong to:

- NCOGA
- NCOGA YAY
- Both

This allows a single publishing system to power multiple areas of the website.

### 7.3 Navigation behavior

Recommended top-level navigation:

```text
NCOGA

About
Our Community
NCOGA YAY
News
Events
Get Involved
```

Provide a visible Contact destination.

The final navigation should be refined through content inventory and usability evaluation.

Do not create an excessive number of top-level navigation links.

### 7.4 NCOGA YAY navigation

When inside the YAY section, provide clear local navigation.

Potential items:

```text
Overview
About
Our Pillars
Programs
Events
News
Partnerships
Membership
```

Do not overload the global navigation with every YAY destination.

Use appropriate dropdowns or secondary navigation.

Users should be able to return to NCOGA easily.

### 7.5 Mobile navigation

Build a genuinely useful mobile navigation experience.

Requirements:

- Clear menu control
- Appropriate focus management
- Keyboard accessibility
- Escape-to-close behavior
- Visible active page
- Accessible submenu interaction
- No accidental scroll trapping
- No oversized animations
- Clear separation of parent and YAY routes
- Touch-friendly targets

Consider a full-height navigation panel only if it improves usability.

Do not introduce a complex animated menu solely for visual impact.

---

# PART VIII — HOMEPAGE DESIGN AND IMPLEMENTATION

## 8. Create a narrative-driven homepage

The homepage should introduce NCOGA as an established organization and explain its purpose clearly.

It should not become an exhaustive directory of every feature.

Use progressive disclosure.

Give visitors enough information to understand the organization and direct them toward relevant pages.

### Section 1 — Hero

Create a distinctive, editorial hero.

Potential elements:

- Real Ghanaian diaspora photography
- A powerful organizational headline
- Supporting description
- Primary CTA
- Secondary CTA
- Restrained Ghanaian visual detailing

Potential headline direction:

**Rooted in Ghana. United Across Borders.**

This is proposed editorial copy, not an official slogan.

Other directions may be explored.

Possible CTAs:

- Discover NCOGA
- Explore Our Community

The hero should visually communicate people, heritage, and connection.

Avoid generic corporate hero compositions.

Do not use glowing globes, abstract technology backgrounds, or stock business handshakes.

### Section 2 — What Is NCOGA?

Briefly explain:

- What NCOGA is
- Who it represents
- Its origins
- Its role in the diaspora
- Why it matters today

Include a route to the full About page.

Consider an editorial split layout with:

- Strong heading
- Concise body copy
- Documentary photography
- Small historical detail

### Section 3 — Our Purpose

Present NCOGA's mission and vision.

Avoid two identical cards placed side by side merely because the content has two headings.

Explore:

- Asymmetric editorial composition
- Typographic emphasis
- Clear section divisions
- Subtle ornamentation
- Contextual photography

Use the official organizational statements.

### Section 4 — Our Story

Highlight NCOGA's history.

A simple timeline may include verified milestones such as:

- Founding in 1986
- Historical community activities
- Organizational evolution
- Establishment of NCOGA YAY in 2024

Do not invent intermediate milestones.

Consider a restrained timeline or horizontally structured narrative.

Avoid scroll-jacking or unnecessarily complex timelines.

### Section 5 — What We Do

Explain the organization's principal areas of activity.

Use verified information to organize the section.

Potential areas include:

- Cultural preservation
- Community connection
- Advocacy
- Educational opportunities
- Youth engagement
- Institutional collaboration

Do not misrepresent YAY's five internal pillars as the entire parent organization's official structure.

### Section 6 — NCOGA YAY Spotlight

Introduce NCOGA Young Adult & Youth.

This should be a substantial and recognizable homepage section.

Explain:

- What YAY is
- Its relationship to NCOGA
- Who it serves
- Its emphasis on youth leadership and opportunities
- Its five pillars

Provide a prominent CTA:

**Explore NCOGA YAY**

Use a distinctive but compatible visual treatment.

YAY may have a more energetic visual personality while retaining the same foundational design system.

### Section 7 — News and Stories

Show current organizational news.

Suggested implementation:

- One featured story
- Two or three secondary stories
- Publication dates
- Categories
- Descriptive imagery
- Clear article destinations

Avoid displaying outdated announcements as current news.

### Section 8 — Events and Community Gatherings

Show upcoming events.

Include:

- Date
- Event name
- Location or virtual format
- Brief description
- Registration status
- CTA

Automatically distinguish upcoming from past events.

If no events are available, display an intentional empty state.

Do not invent upcoming events.

### Section 9 — Community Impact

Only display metrics that can be verified.

Examples might eventually include:

- Member associations
- Programs delivered
- Events hosted
- Scholarships awarded
- Community participation

Do not create impressive-looking fictional statistics.

If reliable metrics are unavailable, use qualitative storytelling instead.

### Section 10 — Get Involved

Provide clear participation pathways.

Potential options:

- Join or connect with NCOGA
- Explore NCOGA YAY
- Attend an event
- Partner with the organization

The content must reflect actual available participation pathways.

### Section 11 — Footer

Create a substantial, refined footer.

Potential structure:

**Organization**

- About
- History
- Leadership
- Contact

**Community**

- NCOGA YAY
- Events
- News
- Programs

**Get Involved**

- Membership
- Partnerships
- Resources

**Connect**

- Verified social media profiles
- Contact information

The footer may use a deep green background with restrained geometric cultural detailing.

Do not automatically use a multicolor Kente background.

---

# PART IX — NCOGA YAY EXPERIENCE

## 9. Build YAY as a coherent sub-brand

NCOGA YAY must feel part of NCOGA while reflecting its younger audience.

Use shared:

- Typography foundations
- Spacing
- Containers
- Buttons
- Accessibility patterns
- Motion principles
- Content components
- Navigation infrastructure

Allow controlled differences in:

- Accent colors
- Photography
- Editorial layout
- Section compositions
- Cultural illustrations
- Campaign-specific imagery

Do not build a completely separate incompatible design system.

### 9.1 NCOGA YAY landing page

Suggested sections:

1. YAY introduction
2. Mission and vision
3. Who YAY serves
4. The five pillars
5. Programs and initiatives
6. Upcoming events
7. Latest news
8. Partnerships
9. Membership
10. Get involved

Use the current official YAY mission and vision unless superseded by approved content.

### 9.2 The five pillars

The source documents identify five pillars:

**Education**

Educational access, scholarships, student resources, and academic development.

**Networking & Career Growth**

Professional development, mentorship, employment opportunities, entrepreneurship, and networking.

**Community Engagement, Health & Philanthropy**

Community outreach, health awareness, wellness, service, and philanthropy.

**Internal & Public Affairs**

Diaspora engagement, civic education, institutional relationships, and public affairs.

**Public Communications**

Media, storytelling, communications, digital engagement, and community visibility.

Use consistent pillar names across navigation, URLs, headings, and content.

Where older source materials use slightly different titles, document the discrepancy and prefer the most recently approved terminology.

### 9.3 Pillar-page template

Each pillar should use a consistent structural foundation.

Recommended template:

```text
Pillar Introduction
       ↓
Mission / Purpose
       ↓
What We Do
       ↓
Leadership
       ↓
Programs and Initiatives
       ↓
Opportunities and Resources
       ↓
Events
       ↓
Related News
       ↓
Get Involved
```

Not every pillar must contain every section.

Render sections conditionally based on available content.

Avoid empty cards, placeholder paragraphs, and invented initiatives.

### 9.4 Leadership updates

Apply the supplied meeting-note instructions.

The notes identify the removal of Emmanuela and Kuukua and the addition of Irene, Martina, William, and Gaylord Appiah.

They also call for updates to biographies and leadership placement.

However, complete approved biographies, photographs, titles, and exact placements must be verified before publication.

Do not fabricate missing information.

Do not expose personal leadership email addresses if the update instructions require their removal.

Provide a suitable organizational contact route instead.

### 9.5 Education pillar requirements

The Education Pillar has an additional scholarship resource planned.

The integration method remains undecided.

The possible approaches are:

- Embed the resource
- Link to an external tool
- Host the resource directly

Do not invent technical requirements for the scholarship platform.

Build the pillar page so the integration can be added cleanly after the resource's details are provided.

The existing 2025 initiative banner should be hidden but preserved for later redevelopment into a 2027 initiative.

### 9.6 Partnerships page

Use the supplied partnership content.

The page should communicate:

- Why NCOGA YAY partners with organizations
- Areas of collaboration
- Partnership examples
- How to propose a partnership
- Contact information

Include the established partnership with Infinite Vision's Restore Ghana initiative.

Preserve approved external links.

Provide the existing partnership inquiry mechanism.

Do not invent additional partner organizations.

### 9.7 Programs

Create a reusable program-page structure.

Programs identified in the September document include:

**Mission 50,000**

An initiative focused on expanding connections and opportunities among young Ghanaians at home and throughout the diaspora.

Status in the supplied document: launching in 2027.

**NCOGA YAY Ambassador Program**

An initiative enabling participants to represent YAY, strengthen connections, and expand community reach.

The document contains an application/nomination link.

**We Dey! Community Beach Day**

A distributed community initiative planned for July 1, 2027, Ghana Republic Day.

The event is not tied to one physical location.

Its purpose includes connection, reflection, and community participation.

Create dedicated program pages where sufficient content exists.

Use consistent page templates while allowing appropriate visual variation.

### 9.8 Membership

The supplied content states that NCOGA YAY membership is free and primarily serves young Ghanaians ages 18–35.

Communicate eligibility clearly.

Avoid framing exploration as a commitment.

Support visitors who want to learn more before joining.

Include the approved registration destination.

Do not introduce a new membership payment system.

### 9.9 Explore page

Implement an introductory page for visitors who are uncertain whether YAY is right for them.

This should be a quieter, more explanatory page.

Suggested sections:

- What is NCOGA YAY?
- Who is it for?
- How do the pillars work?
- What does membership involve?
- What if I am outside the primary age range?
- Where can I learn more?
- How do I join?

Include the introduction video once its approved URL is available.

---

# PART X — NEWS, EVENTS, AND CONTENT MANAGEMENT

## 10. Build for continuous publishing

The September meeting notes explicitly call for the website to become a living platform rather than a static collection of pages.

This should influence the technical architecture.

### 10.1 Content management decision

Investigate the existing repository before selecting a CMS.

Determine whether it already has:

- A CMS
- Markdown/MDX content
- A database
- Admin interfaces
- Content APIs

Do not introduce a CMS without evaluating the current infrastructure.

Candidate approaches may include:

- Existing WordPress as a headless CMS
- Sanity
- Payload
- Strapi
- Structured MDX
- Another suitable existing system

Evaluate:

- Cost
- Editorial usability
- Authentication
- Hosting
- Maintenance
- Image management
- Drafts
- Scheduling
- Role permissions
- Migration complexity
- Preview support
- Security
- Long-term ownership

**Important:** The meeting notes mention an existing WordPress publishing workflow. Investigate whether WordPress should be preserved as the editorial backend before proposing a replacement.

### 10.2 News content model

Suggested starting schema:

```ts
interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;

  organization: "ncoga" | "yay" | "both";

  category: string;
  tags: string[];

  author?: string;

  featuredImage?: MediaAsset;

  status: "draft" | "review" | "scheduled" | "published" | "archived";

  publishedAt?: string;
  scheduledAt?: string;

  seoTitle?: string;
  seoDescription?: string;
}
```

Adapt to the selected CMS rather than blindly implementing this exact interface.

### 10.3 News hub requirements

Support:

- Featured stories
- Categories
- Article listing
- Pagination
- Article detail pages
- Author information where appropriate
- Related articles
- Publication dates
- Social sharing
- SEO metadata
- Draft previews
- Scheduled publishing
- Responsive images

Search and filters may be added when content volume justifies them.

Avoid adding elaborate filtering interfaces to a site with only a handful of articles.

### 10.4 Events content model

Events should support:

- Title
- Slug
- Description
- Organizer
- Owning organization
- Start datetime
- End datetime
- Timezone
- Physical or virtual location
- Registration URL
- Registration status
- Event image
- Category
- Visibility
- Publication status
- Related content

Store actual timezone-aware timestamps.

Do not hardcode displayed event dates inside components.

### 10.5 Events behavior

Upcoming events must be determined using actual event start and end times.

Past events should move to an archive.

Support events that are:

- Public
- Members only
- Leadership only
- Virtual
- In person
- Hybrid

Do not publicly expose private meeting links.

The supplied document includes November 2026 meetings. Verify their current status before publication.

### 10.6 Existing fiscal calendar

The September document requests preservation of an existing fiscal calendar embed.

Investigate the current implementation.

Determine whether it is still active and appropriate.

Preserve its functionality if approved and viable.

Do not remove it merely because a redesigned events interface is being introduced.

### 10.7 Migration requirements

Create a mapping between existing content and the new system.

Preserve:

- Original publication dates
- Source attribution
- Existing URL relationships
- Approved images
- Organizational ownership
- Event history

Do not assign artificial publication dates to make the news feed appear active.

Do not automatically publish every item in the September draft.

Some entries represent planned announcements or future programs and may require approval.

---

# PART XI — INTERACTION AND ANIMATION ENGINEERING

## 11. Use animation libraries deliberately

The objective is refined motion, not maximum animation.

Use the simplest tool that solves each problem.

### 11.1 CSS transitions

Default choice for:

- Button hover
- Link underline
- Border changes
- Focus feedback
- Simple opacity transitions
- Small transforms

### 11.2 Motion

Consider for:

- React component transitions
- Navigation menus
- Shared-layout animations
- Expandable content
- Modals
- Small entrance sequences

### 11.3 GSAP

Consider for:

- Carefully choreographed hero entrances
- Editorial timelines
- Complex section transitions
- Scroll-linked storytelling
- Coordinated decorative SVG animations

Do not use GSAP for every hover effect.

### 11.4 Lenis

Evaluate whether smooth scrolling improves the experience.

If implemented:

- Preserve normal navigation behavior
- Support anchor links
- Respect reduced-motion preferences
- Verify browser compatibility
- Avoid interfering with forms and modals
- Check touch-device behavior
- Coordinate correctly with ScrollTrigger if used

Do not implement competing smooth-scroll systems.

### 11.5 React Bits and Motion Primitives

Use as sources of adaptable interaction patterns.

When adopting a component:

1. Inspect its source
2. Check compatibility
3. Review dependencies
4. Verify licensing
5. Remove unnecessary effects
6. Apply NCOGA design tokens
7. Confirm accessibility
8. Optimize performance
9. Test mobile behavior

Do not copy visual defaults unchanged.

### 11.6 Three.js and WebGL

Do not introduce Three.js simply because examples look impressive.

Use WebGL only when there is a compelling communication benefit that cannot be achieved more efficiently through CSS, SVG, or standard React rendering.

For this organization, authentic photography and editorial design should take priority over elaborate 3D.

### 11.7 Animation restrictions

Avoid:

- Continuous marquee animations without a purpose
- Excessive text splitting
- Every heading flying into view
- Scroll-triggered opacity on all paragraphs
- Constantly moving backgrounds
- Autoplay motion that distracts from reading
- Cursor-following elements
- Hover effects that prevent touch interaction
- Large layout shifts
- Animations that delay navigation
- Unnecessary parallax on mobile

### 11.8 Motion quality assurance

Check:

- Reduced motion
- Low-powered devices
- Touchscreens
- Keyboard navigation
- Focus states
- Route transitions
- Browser history behavior
- Scroll restoration
- Animation cleanup
- Memory usage

Every animation must degrade gracefully.

---

# PART XII — SKILL ORCHESTRATION

## 12. Use the installed skills intentionally

The development environment may contain several specialized skills.

Known examples include:

- `impeccable`
- `taste`
- `ui-ux-pro-max`
- `emil-kowalski-eng`
- GSAP-related skills
- Other design and frontend skills

Before using a skill, inspect its actual instructions.

Do not assume a skill's commands or capabilities based on its name.

Do not claim to have run a skill unless it was available and actually executed.

### Recommended workflow

| Stage              | Preferred skill focus                      | Purpose                                                   |
| ------------------ | ------------------------------------------ | --------------------------------------------------------- |
| Research           | UI/UX research tools, `ui-ux-pro-max`      | Explore patterns and identify visual direction            |
| Visual foundation  | `taste`, design-system skills              | Establish typography, color, hierarchy, and composition   |
| Component design   | UI/UX and frontend skills                  | Build consistent reusable components                      |
| Interaction design | `emil-kowalski-eng`                        | Refine timing, easing, responsiveness, and motion quality |
| Advanced animation | GSAP skills                                | Implement justified complex motion                        |
| Visual refinement  | `impeccable`                               | Critique and polish the complete experience               |
| Final audit        | Accessibility, performance, testing skills | Verify production readiness                               |

This is a recommended sequence, not a rigid command chain.

Some skills may overlap.

Select the best skill for the problem rather than executing every available skill.

### 12.1 UI/UX Pro Max

Use for:

- Pattern discovery
- Layout analysis
- Typography exploration
- Design-system research
- Responsive interface decisions
- Accessibility considerations

### 12.2 Taste

Use during visual exploration and major layout decisions.

Focus on:

- Visual hierarchy
- Composition
- Typography
- Restraint
- Whitespace
- Distinctive design
- Avoiding generic AI-generated patterns

Do not substitute subjective taste for accessibility or usability.

### 12.3 Emil Kowalski engineering skills

Use for motion quality and interaction refinement.

Review:

- Timing
- Easing
- Interruptibility
- Perceived responsiveness
- Microinteractions
- Exit behavior
- Motion hierarchy
- Reduced-motion handling

### 12.4 GSAP skills

Use only when the selected interaction warrants GSAP.

Require proper lifecycle cleanup.

Avoid memory leaks and duplicated animations on route transitions.

### 12.5 Impeccable

Use after the first complete implementation of a page or major section.

Treat it as a critical design-review pass.

Evaluate:

- Awkward spacing
- Weak visual hierarchy
- Inconsistent typography
- Poor color balance
- Generic components
- Weak mobile composition
- Excessive decoration
- Misaligned elements
- Overcomplicated motion
- Insufficient contrast
- Unnecessary visual noise

Make targeted improvements.

Do not repeatedly redesign approved components without a substantive reason.

---

# PART XIII — PREVENTING GENERIC AI-GENERATED DESIGN

## 13. Anti-patterns to avoid

The site must not look like an interchangeable AI-generated landing page.

Avoid common patterns such as:

**Generic hero design**

A giant headline, vague subtitle, two pill buttons, and a floating dashboard screenshot.

**Random feature cards**

Three identical rounded rectangles describing abstract benefits.

**Excessive gradients**

Especially glowing radial backgrounds and multicolor text.

**Overused icon libraries**

Every section should not begin with a generic line icon.

**Fake metrics**

No invented numbers.

**Artificial testimonials**

No fabricated statements attributed to members or community leaders.

**Meaningless visual effects**

No animations that exist solely to make the page feel technically complicated.

**Overly predictable sections**

Avoid repeating the same centered-heading-and-three-cards structure.

**Generic startup language**

Do not use phrases such as:

- Unlock your potential
- Revolutionizing community engagement
- Empowering tomorrow through innovation
- Seamless experiences for everyone
- Transforming possibilities into impact

unless the organization explicitly approves them.

Write clear, specific, human content.

**Random cultural decoration**

Do not scatter Kente patterns, national flags, and Adinkra symbols throughout the interface without purpose.

**Unnecessary AI imagery**

Do not generate fictional groups of people and imply they represent real organizational members.

### 13.1 What to prioritize instead

- Authentic photography
- Editorial composition
- Meaningful storytelling
- Strong typography
- Natural whitespace
- Consistent color usage
- Clear information hierarchy
- Genuine community stories
- Understated interaction design
- Thoughtful responsive layouts
- Cultural details with documented meaning

### 13.2 Require visual differentiation

Each major homepage section should contribute a distinct compositional rhythm.

For example:

- Hero: photography-led composition
- About: editorial split layout
- Mission: typographic composition
- History: chronological narrative
- Activities: structured editorial grid
- YAY: expressive feature section
- News: publication-style layout
- Events: functional listing
- Get involved: clear action-oriented composition

Avoid making every section visually identical.

---

# PART XIV — ACCESSIBILITY, PERFORMANCE, AND SEO

## 14. Accessibility requirements

Target WCAG 2.2 AA.

Implement:

- Semantic HTML
- Logical heading structure
- Keyboard navigation
- Visible focus indicators
- Accessible forms
- Appropriate ARIA usage
- Screen-reader-friendly navigation
- Color contrast compliance
- Reduced-motion support
- Correct image alternatives
- Adequate touch targets
- Accessible dropdowns
- Clear validation errors
- Proper dialog focus management
- Skip navigation links

Do not rely on automated accessibility testing alone.

Test actual keyboard workflows.

### 14.1 Performance

Prioritize:

- Server rendering where appropriate
- Static generation for suitable pages
- Image optimization
- Responsive images
- Modern image formats
- Font optimization
- Minimal JavaScript
- Dynamic imports
- Deferred nonessential scripts
- Efficient CSS
- Avoidance of layout shifts
- Proper caching
- Cleanup of animation listeners

Suggested production targets at the 75th percentile:

| Metric                    | Target        |
| ------------------------- | ------------- |
| Largest Contentful Paint  | ≤ 2.5 seconds |
| Interaction to Next Paint | ≤ 200ms       |
| Cumulative Layout Shift   | ≤ 0.1         |

Aim for strong Lighthouse results without treating a synthetic score as a substitute for real-world performance.

### 14.2 SEO

Implement:

- Descriptive metadata
- Canonical URLs
- Semantic heading hierarchy
- XML sitemap
- Robots directives
- Open Graph metadata
- Social preview images
- Appropriate structured data
- Breadcrumbs where useful
- Permanent redirects from migrated URLs
- Meaningful internal linking

Use organization, article, and event structured data only where appropriate.

Do not fabricate ratings, reviews, or organizational facts.

### 14.3 Security and privacy

Protect:

- Admin routes
- API credentials
- Forms
- CMS access
- Member information
- Private meeting links
- Personally identifiable information
- Uploads
- Third-party integrations

Apply appropriate authorization, validation, and rate limiting.

Do not expose environment secrets in client bundles.

Do not collect unnecessary personal information.

---

# PART XV — TESTING AND QUALITY CONTROL

## 15. Required testing strategy

Establish automated and manual checks appropriate to the repository.

### 15.1 Static checks

Run:

- Type checking
- Linting
- Formatting verification
- Production build
- Dependency validation

### 15.2 Component tests

Cover:

- Navigation
- Dropdown menus
- Buttons
- Forms
- Event cards
- Article cards
- Accordions
- Dialogs
- Responsive variants

### 15.3 Integration tests

Verify:

- Internal navigation
- Content rendering
- Form destinations
- CMS data loading
- Event categorization
- Article routing
- Metadata generation

### 15.4 End-to-end tests

Use Playwright or an equivalent tool where practical.

Test important user journeys:

1. Visitor learns about NCOGA.
2. Visitor explores NCOGA YAY.
3. Visitor navigates to a pillar.
4. Visitor finds an upcoming event.
5. Visitor reads an article.
6. Visitor explores partnership opportunities.
7. Visitor accesses the membership form.
8. Visitor navigates the website using only a keyboard.

### 15.5 Visual regression tests

Capture major pages at desktop, tablet, and mobile widths.

Evaluate:

- Typography wrapping
- Container alignment
- Image cropping
- Navigation behavior
- Section spacing
- Footer layout
- Overflow
- Color consistency
- Layout shifts

### 15.6 Required final review

Before marking a page complete, confirm:

- No gradients
- No irrelevant previous branding
- No placeholder copy
- No invented organizational facts
- No broken navigation
- No missing imagery without a designed fallback
- No unnecessary animation
- No mobile overflow
- No major accessibility failures
- No unverified statistics
- No exposed secrets
- No unexpected production integrations

---

# PART XVI — IMPLEMENTATION PHASES

## 16. Execute in controlled phases

Do not attempt to build every planned page simultaneously.

Use the following development sequence.

### Phase 0 — Discovery

Tasks:

- Audit repository
- Inspect current website
- Read supplied documents
- Identify reusable code
- Inventory assets
- Review available skills
- Research design references
- Identify technical risks

Deliverables:

- Repository audit
- Content inventory
- Initial sitemap
- Design research
- Architecture recommendations

### Phase 1 — Brand and design system

Tasks:

- Establish visual direction
- Define palette
- Select typography
- Create design tokens
- Define responsive layout
- Define motion system
- Create cultural motif guidance
- Build component showcase

Deliverables:

- `DESIGN.md`
- Supporting design documentation
- Reusable token system
- Visual component demonstration

**Exit condition:** A coherent, reviewed design foundation exists.

Do not proceed into widespread page implementation before this condition is met.

### Phase 2 — Technical foundation

Tasks:

- Refactor shared layout
- Implement design tokens
- Establish routing
- Build global navigation
- Build footer
- Establish content structure
- Remove obsolete active branding
- Introduce essential reusable components

Deliverables:

- Functional shared layout
- Design-system components
- Responsive navigation
- Reusable page primitives

### Phase 3 — NCOGA homepage

Tasks:

- Create hero
- Add organizational introduction
- Add mission and vision
- Add history
- Add organizational activities
- Add YAY spotlight
- Add news preview
- Add events preview
- Add get-involved section

Deliverables:

- Complete responsive homepage
- Accessible interactions
- Optimized assets
- Working navigation

### Phase 4 — Parent NCOGA pages

Tasks:

- About
- History
- Leadership
- Community
- News
- Events
- Contact

Prioritize routes with complete verified content.

Do not publish incomplete organizational information simply to finish the sitemap.

### Phase 5 — NCOGA YAY foundation

Tasks:

- YAY landing page
- YAY navigation
- YAY-specific visual treatments
- Pillar overview
- Membership exploration
- Leadership framework

Deliverables:

- Coherent YAY subsection
- Shared infrastructure
- YAY content models
- Reusable pillar templates

### Phase 6 — YAY content expansion

Tasks:

- Five pillar pages
- Programs
- Partnerships
- Press and media
- Events and meetings
- Membership
- FAQ
- Leadership biographies

Use supplied content wherever verified.

Respect outstanding approvals and missing assets.

### Phase 7 — Publishing systems

Tasks:

- Finalize CMS integration
- Article management
- Event management
- Publishing workflows
- Media handling
- Draft previews
- Scheduling
- Editorial permissions

Do not force all CMS work into this phase if foundational content integration is required earlier.

### Phase 8 — Refinement

Tasks:

- Run design critiques
- Refine typography
- Improve spacing
- Polish animation
- Audit accessibility
- Optimize performance
- Review SEO
- Check responsive layouts
- Run regression tests

### Phase 9 — Production readiness

Tasks:

- Verify content
- Validate external links
- Confirm forms
- Validate redirects
- Review metadata
- Remove obsolete assets
- Check environment configuration
- Document deployment procedures
- Prepare release checklist

Production deployment requires authorization.

---

# PART XVII — DOCUMENTATION AND AGENT CONTINUITY

## 17. Build a persistent project knowledge base

Future agents must be able to continue work without needing the project owner to explain the entire vision repeatedly.

Create the following structure, adapting it to existing repository conventions:

```text
docs/
│
├── README.md
│
├── architecture/
│   ├── SYSTEM_OVERVIEW.md
│   ├── ROUTING.md
│   ├── CONTENT_ARCHITECTURE.md
│   ├── COMPONENT_ARCHITECTURE.md
│   └── ARCHITECTURE_DECISIONS.md
│
├── audits/
│   ├── INITIAL_REPOSITORY_AUDIT.md
│   ├── ASSET_INVENTORY.md
│   └── CONTENT_MIGRATION_AUDIT.md
│
├── design/
│   ├── DESIGN.md
│   ├── DESIGN_RESEARCH.md
│   ├── BRAND_GUIDELINES.md
│   ├── COLOR_SYSTEM.md
│   ├── TYPOGRAPHY.md
│   ├── SPACING_AND_LAYOUT.md
│   ├── MOTION_GUIDELINES.md
│   ├── COMPONENT_STANDARDS.md
│   ├── ACCESSIBILITY_GUIDELINES.md
│   ├── IMAGE_AND_MEDIA_GUIDELINES.md
│   ├── CULTURAL_MOTIFS.md
│   └── DESIGN_DECISIONS.md
│
├── content/
│   ├── NCOGA_CONTENT_INVENTORY.md
│   ├── NCOGA_YAY_CONTENT.md
│   ├── CONTENT_SOURCES.md
│   ├── CONTENT_GOVERNANCE.md
│   └── PENDING_CONTENT.md
│
├── development/
│   ├── IMPLEMENTATION_PLAN.md
│   ├── PROGRESS.md
│   ├── BACKLOG.md
│   ├── TESTING.md
│   └── RELEASE_CHECKLIST.md
│
└── decisions/
    └── DECISION_LOG.md
```

Do not generate dozens of empty documents.

Create each document when it contains useful information.

### 17.1 Agent instructions file

Create or update the repository's relevant agent instruction file, such as:

`AGENTS.md`

or an equivalent file used by the development environment.

It should establish:

- What NCOGA is
- Organizational hierarchy
- Approved design direction
- Non-negotiable design rules
- Content sources
- Architecture conventions
- Skills usage guidance
- Testing requirements
- Documentation locations
- Autonomous decision rules
- Approval requirements

Do not duplicate the entire master prompt.

Keep instructions actionable.

### 17.2 DESIGN.md as the single visual reference

Every future agent should consult `DESIGN.md` before creating a new visual component or page.

If a proposed page conflicts with the existing design system, the agent must determine whether:

1. The page needs adaptation.
2. A new reusable variant is justified.
3. The design system genuinely needs revision.

Do not introduce one-off styles without examining established patterns.

### 17.3 Decision log

Record significant decisions.

Example:

```md
## Decision: Shared NCOGA and YAY Design Tokens

Status: Accepted

Context:
NCOGA YAY requires a distinct identity while remaining
visually connected to the parent organization.

Decision:
Use shared typography, layout, spacing, and component
foundations, with controlled YAY-specific accents.

Alternatives considered:

- Completely separate design systems
- Identical branding throughout the website

Consequences:
Shared components remain reusable while YAY retains
a recognizable visual personality.
```

### 17.4 Progress tracking

At the end of each substantial work session, update:

`docs/development/PROGRESS.md`

Include:

```text
Completed:
In progress:
Next recommended tasks:
Outstanding questions:
Known issues:
Files changed:
Tests performed:
Design decisions:
Content awaiting approval:
```

This file should allow another agent to resume work efficiently.

---

# PART XVIII — MULTI-AGENT COLLABORATION

## 18. Delegate where useful

If the environment supports subagents or parallel work, use them selectively.

Potential agent roles:

### Research and Content Agent

Responsibilities:

- Analyze NCOGA sources
- Review supplied documents
- Create content inventory
- Identify missing information
- Propose sitemap
- Review migration requirements

### Design Systems Agent

Responsibilities:

- Research visual references
- Define typography
- Define palette
- Establish layout system
- Define reusable component specifications
- Document cultural motif usage

### Architecture Agent

Responsibilities:

- Audit existing implementation
- Plan reusable component architecture
- Evaluate CMS choices
- Define routing
- Identify integration dependencies

### Frontend Implementation Agent

Responsibilities:

- Implement approved components
- Build page layouts
- Integrate content
- Ensure responsive behavior
- Implement interactions

### Motion and Interaction Agent

Responsibilities:

- Refine microinteractions
- Implement justified GSAP sequences
- Optimize scroll behavior
- Review reduced-motion support
- Eliminate unnecessary animation

### QA and Design Review Agent

Responsibilities:

- Run tests
- Review accessibility
- Test responsive layouts
- Identify visual inconsistencies
- Evaluate performance
- Audit adherence to design standards

### Coordination requirements

Parallel agents must not independently establish conflicting design tokens or component patterns.

The design system is shared infrastructure.

Assign clear file ownership where agents work simultaneously.

Avoid concurrent edits to the same files unless coordinated.

Use a lead agent to reconcile changes.

Do not create multiple agents merely to increase apparent activity.

---

# PART XIX — DEFINITION OF DONE

## 19. A task is complete only when the result is usable

A component is not complete because it renders.

A page is not complete because its screenshot looks attractive.

A feature is not complete because the happy path works.

### A completed component must:

- Match the design system
- Work on supported viewports
- Be keyboard accessible
- Use semantic HTML
- Handle relevant states
- Avoid unnecessary dependencies
- Be reusable where appropriate
- Have suitable tests

### A completed page must:

- Use verified or clearly approved content
- Have a clear purpose
- Have appropriate navigation
- Be responsive
- Be accessible
- Use correct metadata
- Display images appropriately
- Have no broken primary interactions
- Pass production build checks
- Follow the approved motion system
- Contain no previous-organization branding

### A completed phase must:

- Meet its defined exit conditions
- Have updated documentation
- Record outstanding limitations
- Provide a clear next step

Do not mark tasks complete while silently leaving significant unresolved issues.

---

# PART XX — FINAL EXECUTION INSTRUCTIONS

## 20. Begin the project

You are now authorized to begin the discovery and design-foundation work.

Proceed as follows.

**Step 1:** Inspect the repository and available skills.

**Step 2:** Research NCOGA's existing website and read the supplied documents.

**Step 3:** Identify reusable infrastructure and obsolete branding.

**Step 4:** Review contemporary design references and evaluate the proposed creative direction.

**Step 5:** Develop a practical information architecture.

**Step 6:** Create a design-system proposal with a recommended direction and meaningful alternatives.

**Step 7:** Implement a focused design-system demonstration if doing so will materially improve the review.

**Step 8:** Request approval for the foundational visual direction before committing to extensive page implementation, unless that direction has already been approved.

**Step 9:** Establish the approved design system in the codebase.

**Step 10:** Begin progressive implementation, starting with shared infrastructure and the NCOGA homepage.

### Working rules

- Do not overplan trivial tasks.
- Do not ask unnecessary questions.
- Do not invent organizational information.
- Do not treat outdated website content as automatically authoritative.
- Do not create gradients.
- Do not use generic AI-generated website patterns.
- Do not introduce unnecessary dependencies.
- Do not overengineer animations.
- Do not discard useful existing infrastructure.
- Do not perform destructive actions without approval.
- Do not publish or deploy without authorization.
- Do not silently change approved design decisions.
- Do not create an entire website before validating the design foundation.

You are expected to take ownership of the engineering and design process.

Make decisions independently when safe.

Document significant choices.

Escalate genuine ambiguities.

Prioritize maintainability, authenticity, accessibility, performance, and visual quality.

**The final objective is not merely to launch a website. It is to establish a sustainable digital foundation for NCOGA and its expanding organizational ecosystem.**

---
