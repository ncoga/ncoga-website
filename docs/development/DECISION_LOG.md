# Decision log

## Press graphics, story links, and the missing page — 2026-10-25

**Status:** Implemented locally.

**Decision:** Each press index story uses its own link line. Supplied graphics replace the placeholders for The Fisherman, Health Is Wealth, the Presidential Diaspora Town Hall, and the 2027 horizon. Health Is Wealth also shows the three forum photographs inside the article. The Fisherman article includes the film-spotlight card. The town hall date on the index follows the supplied poster, Friday, September 25, 2026. The short town hall and 2027 texts stay as already published. Unknown pages use an NCOGA 404 with the shared header and footer. The footer credits “Made with ❤️ by Nana,” linking to princeagyeituffour.com. The word stays available to screen readers. Unknown pages use the supplied Search Not Found animation, centered on the heritage field with its white plate removed, and the route choices are highlightable buttons.

**Reason:** The owner supplied the graphics and asked for distinct story links, a consistent missing page, and a maker credit.

**Consequence:** The previous staffing 404, including its jobs link, is no longer used.

## Press articles and separate event calendars — 2026-10-24

**Status:** Implemented locally. Production publication and deployment remain pending.

**Decision:** Each section on Press & Media opens an article at `/press/[slug]`. The six supplied manuscripts are published as written, including Michael Ansong-Dwamena in the Fisherman recap and Williams Oppong in the Health Is Wealth recap. Council cards keep their existing spellings. The town hall note and the 2027 horizon use only the sentences already on the press page. Stories without a supplied graphic use a solid-color placeholder. The first general members meeting follows the supplied poster: Saturday, November 7, 2026, 12:00 noon–1:00 PM EST, via Zoom. That replaces the earlier 6:00 PM ET line. The November 6 council meeting stays at 8:00 PM ET. Events in the header opens two pages: NCOGA Events at `/events`, and NCOGA YAY Events at `/ncoga-yay/events`. The NCOGA page lists a placeholder for the Ghana Independence Celebration on March 6, 2027, with no venue or program. The YAY page keeps the supplied events banner and the meetings already published.

**Reason:** The owner asked for an editorial press section with an article for each current story, and for Events to offer the parent council and YAY separately.

**Consequence:** Older links to `/events` now open the parent calendar. YAY meetings, including pillar “coming soon” links, use `/ncoga-yay/events`.

## Public search and link previews — 2026-10-18

**Status:** Implemented on the public NCOGA pages.

**Decision:** Social link previews use one compressed copy of the supplied council photograph. Each public page keeps its own title and description, with a canonical URL on `https://ncoga.com`. The sitemap lists those pages. The copied staffing routes stay out of the sitemap and are marked not to be indexed.

**Reason:** The owner asked for a shared link preview, a Google description, and the other search basics before the next `release/dev` deploy.

**Consequence:** Search engines are asked to treat `https://ncoga.com` as the public site. The original preview file remains in the repository; crawlers receive the smaller JPEG.

## Council portraits use one square crop — 2026-10-18

**Status:** Implemented locally on the council cards and the portrait dialog.

**Decision:** Council photographs sit in equal square frames. The shared crop covers the frame and sits slightly above center (`object-position: center 8%`) so the person stays in view. Anna Agbotse, John Kyeremeh, William Oppong, and Kuukua Abraham use a higher anchor so the empty space above their faces is reduced. Names keep a two-line height so the cards match.

**Reason:** Full photographs made the cards different heights. The owner asked to return to equal cards and shift the crop up so each person stays in focus.

**Consequence:** The earlier choice to show each photograph in full is superseded. Tall portraits lose some of the lower body. Landscape photographs lose the sides.

## First-version navigation, portraits, and pillar leaders — 2026-10-18

**Status:** Implemented locally. Production deployment follows this pass.

**Decision:** Hide Martina Antwi until a photograph is available. Show each council photograph in full. Put Home, Our Programs, and Partner with Us on the main navigation, and leave the YAY menu as About and Pillars. Use the NCOGA mark and the YAY mark together, with a divider and no wordmark, in the header and footer on every public page. Label the homepage place fact Headquarters. On the YAY focus section, place Internal & Public Affairs before Education. Assign the named council leaders to the five pillar pages and fill those pages with work already published elsewhere on the site. On Events, label the five pillar meetings Coming Soon. Keep the partnership inquiry button label white.

**Reason:** The owner asked for these changes before the first Vercel deployment.

**Consequence:** Gaylord Kweku Appiah remains on the council page with a photograph and no biography. Pillar pages repeat sourced program and press sentences. They do not add new dates, statistics, or partnership claims.

## YAY council photographs and biographies — 2026-10-18

**Status:** Implemented locally on `/ncoga-yay`. Production publication and deployment remain pending.

**Decision:** Map each supplied file in `public/images/council-leaders/` to the matching council name. Wendy Asante and Shumuel Ofosu-Koranteng use JPEG copies of the HEIF files so the browser can show them. Publish the biographies supplied with those photographs. Elizabeth Ameke’s milestones URL is a link. Irene Dwamena-Ansong and Gaylord Kweku Appiah have photographs and no biography. Martina Antwi has neither, so that card keeps initials and the unpublished-biography note. Michael Ansong uses `Micheal .jpeg` and stays separate from Derrick Dwamena.

**Reason:** The owner supplied the photographs and the biography text and asked for each image to be checked against the name on the page.

**Consequence:** The earlier choice to leave council photographs and biographies unpublished is superseded for the people who now have them. Spellings stay Getrude, Bennet, Shumuel, and Kuukua.

## YAY September page copy — 2026-10-18

**Status:** Implemented locally on Partner, Programs, Events, Press, and the five pillar routes. Production publication and deployment remain pending.

**Decision:** Use [the September draft](../content/PAGES%20UPDATE%20SEPTEMBER%202026.md) as the copy for those pages. Publish Infinite Vision / Restore Ghana, the inquiry, partner, and ambassador forms, the November 6 and November 7 meetings, the October 2026 pillar meetings, and the statement that membership is free. Membership registration stays the form already on `/ncoga-yay`. Leave announcement, recap, photo, graphic, flyer, and fiscal-calendar placeholders unpublished. Do not add a quiet page, ages, or a price. The draft file lives in `docs/content/` so a deploy cannot serve it from `public/`.

**Reason:** The owner made this draft the source for the next pass and asked for it to leave `public/` before any deploy. An earlier decision had kept the named partnership and September forms off the site.

**Consequence:** That earlier limit is superseded on these routes. The quiet-page form URL stays unused. Sitemap, robots, and deployment stay later work.

## YAY heroes and Our Programs shell — 2026-10-18

**Status:** Heroes and the programs route are local. Full page copy from the September draft is the next pass. Production publication and deployment remain pending.

**Decision:** Every pillar page uses `/images/ncoga-yay.webp` as the hero, with a flat scrim and an ivory wave. Press, Events, Partner, and the new Our Programs page use the supplied banners as the hero image. Our Programs is `/ncoga-yay/programs`, between Pillars and Partner with Us. Body copy stays the short holding text until the next pass.

**Reason:** The owner asked for these heroes and the menu item, and asked for the September draft to be implemented afterward.

**Consequence:** The next content pass follows [YAY_PAGE_BUILD_HANDOFF.md](YAY_PAGE_BUILD_HANDOFF.md) and [the September draft](../content/PAGES%20UPDATE%20SEPTEMBER%202026.md). Sitemap, robots, and deployment stay later work.

## YAY about copy, full-bleed film, and council additions — 2026-10-18

**Status:** Implemented locally on `/ncoga-yay` and `/ncoga-yay/partner`. Production publication and deployment remain pending.

**Decision:** Use the live YAY about copy on `/ncoga-yay`, including the 1986 parent founding, the October 2024 branch establishment, the five-pillar account, and the March 8, 2025 announcement at the Ghana Independence Gala and Fundraising Event. Play the supplied film as the full hero background, with the headline and action on a solid plate. Change the YAY menu to About, Pillars (the five existing routes), and Partner with Us. Add Irene Dwamena-Ansong, Martina Antwi, William Oppong, Gaylord Kweku Appiah, and Kuukua Abraham to the council list. Photographs and biographies stay unpublished. Do not publish draft partner names or forms.

**Reason:** The owner supplied this about copy from the current public YAY page and asked for these five names, a partner page, the nested menu, and a full-bleed film. The 1986 founding is already verified for NCOGA. Partnership programs in the September draft are still unverified.

**Consequence:** The council list now has eighteen names. `/ncoga-yay/partner` invites inquiry at `info@ncoga.com` and does not name partners. The film stays on youtube-nocookie.com. The YAY mark appears in the header on `/ncoga-yay` only, and the footer shows the NCOGA crest. Sitemap, robots, and deployment stay later work.

## YAY page rebuild and shared header — 2026-10-18

**Status:** Implemented locally on `/ncoga-yay`, with `/press` and `/events` holding pages. Production publication and deployment remain pending.

**Decision:** Rebuild `/ncoga-yay` in the editorial system and extend the shared header so NCOGA YAY discloses the branch overview and the five existing pillar routes. Header order is About, NCOGA YAY, Press & Media, Events, and Contact. Mission & vision stays on the homepage and in the footer, and leaves the header. Press and Events are short notes that those sections are being prepared. Publish these council names from the current public YAY page, with spellings unchanged and no titles: Anna Agbotse; Akwasi “Owura” Owusu-Asumeng; Wendy Asante; Tizard Ofori-Twum Carlton; Mabel Adu; John Kyeremeh; Pearl Dodoo; Getrude Eshun; Bennet Brown; Derrick Dwamena; Michael Ansong; Elizabeth Ameke; Shumuel Ofosu-Koranteng. Each card uses initials. The dialog says only that a biography has not been published yet. Do not add names from the meeting notes.

**Reason:** The owner asked for the live-page council names, the muted film at `https://www.youtube.com/watch?v=izmN42dVWBM`, pillar cards that open the existing pillar routes, and the new header destinations. Photographs and biographies are still unpublished. The meeting notes request other roster changes; those names are not on this page.

**Consequence:** `/ncoga-yay` shows the thirteen names, the October 2024 branch sentence, the verbatim YAY mission and vision, and the March 8, 2025 leadership announcement. Pillar logos sit on the card with no plate behind them. The film autoplays muted from youtube-nocookie.com, and reduced motion or a blocked embed keeps a still. Sitemap, robots, and deployment stay later work.

## About page editorial rebuild — 2026-10-18

**Status:** Implemented locally on `/about`. Production publication and deployment remain pending.

**Decision:** Rebuild the existing About page in the homepage editorial system without cloning its sections. Use the official mission and vision verbatim, label historical work as history, and keep one primary action, “Contact NCOGA,” to `mailto:info@ncoga.com`. Place `ncoga-dinner.jpg` once, with neutral alt text and no caption. Omit Dr. Victor Essien’s name, the chairman title, and the retreat quotation. Omit `ncoga-image-2.jpg`, `ncoga-yay.webp`, and a second use of the homepage photographs. Link YAY with “Explore NCOGA YAY” and the action labels already in `src/content/yay-pillars.ts`. Do not reuse the YAY membership form.

**Reason:** The live About page mixes sourced council history with an old charity theme. The local page already had the sourced statements, but it did not yet use the permitted photograph or the homepage’s warmth. Named parent leadership is still pending review in the content inventory. The banquet portrait of four people would read as a leadership picture, and the unused YAY image is an illustration of fictional people.

**Consequence:** `/about` now shows local photographs whose dates, subjects, and rights are still undocumented. The banquet photograph spans the content width. History, the account of change, and the official statements each have a separate crop so the right side of those sections is not empty. AIDS assistance is labeled published history, not a current program. Stated needs are not presented as launched programs. YAY pillars use the supplied marks in a five-part layout. Homepage membership stays on the homepage. Sitemap, robots, and deployment stay later work.

## Homepage focus graphics, YAY pillars, and membership — 2026-10-18

**Status:** Implemented locally on `/`. Production publication and deployment remain pending.

**Decision:** Keep the existing homepage sequence and add original solid-color marks to the four sourced focus areas. Explain the five YAY pillars with the supplied logos on black stages, and place the YAY youth mark on a black stage with a red accent. Use one membership action, “Register to be a member,” pointing to `https://forms.gle/a1cziJ8JJhDGz96j9`. “Join us” uses that same form, so it is not a second section. Pillar cards do not link onward. Do not add ages, fees, donations, campaigns, testimonials, or leadership from the current site.

**Reason:** The owner asked for more homepage graphics, pillar explanations, and this membership form. The logo files are wide PNGs with black canvases, so a black stage keeps them from appearing as stray rectangles. The September draft had recorded a different form URL; the owner-supplied form is the homepage destination.

**Consequence:** This request authorizes these marks on the homepage. It does not approve them for other routes. The draft URL `https://forms.gle/pb7QKrs7X1pDyP9n6` is not used here. Pillar cards link to `/ncoga-yay/pillars/[slug]` and currently show the sourced description only; fuller pillar pages, sitemap cleanup, and deployment stay later work.

## First-wave NCOGA routes and YAY visual fallback — 2026-10-17

**Status:** Implemented and verified locally on `release/dev`; organizational content approval and production publication remain pending. See [About](PHASE_4_ABOUT_VERIFICATION.md), [Contact](PHASE_4_CONTACT_VERIFICATION.md), and [YAY](PHASE_4_YAY_VERIFICATION.md).

**Decision:** Move `/about` and `/contact` from the copied marketing layout to the NCOGA layout and add `/ncoga-yay` as the connected branch landing page. Use sourced statements and the published general email, omit template contact details and copied forms, and keep historical work explicitly historical. Use the approved type-led YAY variant with a solid red field and abstract Kente strip where specific YAY imagery and mark rights are unapproved. The YAY page lists five high-level focus areas; “Internal & Public Affairs” remains a provisional short name pending the organization's decision.

**Reason:** These routes complete the planned first landing-page wave without inventing programs, people, statistics, or active events. The connected navigation no longer sends visitors from a new NCOGA page into the copied staffing site.

**Consequence:** Legacy child routes remain live in the checkout, and copied sitemap/robots output still needs replacement before launch. Copied integrations receive no NCOGA data. The old Contact form smoke assertion was replaced with a check that the NCOGA Contact page exposes no copied form. Current content, mailbox ownership, pillar naming, and publication rights need organizational review.

## Release branch workflow — 2026-10-16

**Status:** Owner directed and implemented. Nine remote Dependabot pull requests were retargeted; Dependabot closed them automatically, and their changes were applied and tested on `release/dev` as recorded in [resolution](DEPENDABOT_RESOLUTION.md).

**Decision:** Implement pages and receive dependency updates on `release/dev`. Promote `release/dev` to `main` through a reviewed pull request. The PR policy allows Dependabot only into `release/dev` and allows `main` pull requests only from `release/dev`.

**Reason:** Keep the published branch distinct from active development and dependency intake.

## Full-image homepage hero — 2026-10-16

**Status:** Implemented locally at the owner's request; verification is recorded in the [Phase 3 record](PHASE_3_HOMEPAGE_VERIFICATION.md).

**Decision:** Use the existing permitted community photograph as an edge-to-edge hero background. Place the headline, supporting text, and actions on a flat, dark green overlay, retaining the fact rail below the image. Preserve the approved palette, typography, and restrained motion system. Record the pattern in [DESIGN.md](../design/DESIGN.md) for later pages where a suitable image exists.

**Reason:** The owner requested a photograph-led first impression. The overlay keeps text contrast stable as the image crop changes between phone and desktop widths.

**Consequence:** The hero image remains semantically described and prioritized for loading. Its participant, date, and rights provenance still require publication review. The NCOGA homepage remains the only migrated public route.

## Homepage editorial motion and second photograph — 2026-10-16

**Status:** Implemented locally on `/` and verified in the [Phase 3 record](PHASE_3_HOMEPAGE_VERIFICATION.md). The owner requested this refinement and allowed selected local photographs.

**Decision:** Retain the approved Contemporary Ghanaian Editorial system, add one distinct local gathering photograph and a source-backed four-part focus section, and use GSAP only for a short hero entrance and three selected scroll reveals. Apply the reusable limits and reduced-motion rule in [DESIGN.md](../design/DESIGN.md) to future verified pages.

**Reason:** The owner requested a richer Ghanaian and diaspora feel without over-designing the homepage. The official NCOGA site supports the focus text; the local image visually adds community context without inventing an event or identifying people.

**Consequence:** The homepage has `gsap` and `@gsap/react` dependencies. Its motion is scoped and skips animation when reduced motion is preferred. The second photograph has unknown date, participant identity, and rights provenance, so publication rights still need review before launch. Other routes and copied integrations were not changed.

## Full-height responsive navigation — 2026-10-16

**Status:** Implemented locally at mobile and tablet widths after owner feedback; verified in the [Phase 3 record](PHASE_3_HOMEPAGE_VERIFICATION.md).

**Decision:** Use a full-height right sidebar for the shared NCOGA shell at widths up to 900px. The phone panel fills the viewport; wider responsive widths show a 420px sidebar and dimmed backdrop. CSS handles the entrance, with reduced-motion support. Focus stays within the open sidebar; Escape, the close control, backdrop, and link selection close it.

**Reason:** The owner asked for a full sidebar instead of the earlier dropdown. This keeps a clear navigation surface at small widths while retaining the existing desktop navigation and source-backed destinations.

**Consequence:** The shared header behavior changes on `/` and the noindex `/design-system` preview. No external navigation library or legacy integration was introduced.

## Phase 3 homepage routing and media — 2026-10-16

**Status:** Implemented locally for the homepage only; [verification](PHASE_3_HOMEPAGE_VERIFICATION.md) passed. Production publication remains a separate gate.

**Decision:** Serve `/` from the NCOGA route group. Use homepage section anchors for local navigation and the existing official site for deeper About and YAY reading until those local routes are verified. Use the owner-supplied logo and one existing local photo with neutral alternative text; keep YAY artwork type-led. Retain the former homepage source without a route.

**Reason:** Every other local public route still belongs to the copied staffing site. This avoids sending NCOGA visitors to a mixed-identity experience while meeting the owner’s homepage-only scope. The user explicitly requested the logo and allowed selected `public/images` photographs.

**Consequence:** The shared shell now selects preview or homepage navigation based on the route. The copied routes, integrations, global sitemap and robots behavior remain a launch dependency. Existing official-site links need rechecking when WordPress URLs are migrated. The photograph's date, participant identity and rights provenance remain unverified.

## Phase 2 route isolation — 2026-10-15

**Status:** Implemented locally and closed as the Phase 2 shared foundation. Static, build, responsive, keyboard, and focused accessibility checks pass; see the [verification record](PHASE_2_VERIFICATION.md).

**Decision:** Build the NCOGA shared shell, scoped semantic tokens, and content types in an isolated `(ncoga)` route group with a noindex `/design-system` preview. Keep the existing marketing route group intact during the migration. Move the copied Organization JSON-LD, metadata, and local fonts into the legacy marketing layout so the preview inherits no previous-brand organization identity from the root.

**Reason:** The copied public routes still contain Platinum content and integrations. Applying the new NCOGA shell globally would put the new identity around unfinished legacy pages. The isolated shell makes the components reviewable while Phase 3 replaces routes with verified NCOGA content.

**Alternatives:** Retheme the whole app immediately; move or delete legacy pages before replacement. Both risk mixed identity, broken routes, or loss of useful source before the new routes exist.

**Consequence:** Legacy metadata and fonts remain only in the marketing route group; the old pages, global legacy CSS values, sitemap, and robots rules remain. The preview supplies its own metadata and is omitted from the sitemap. Production migration must replace the old pages and SEO endpoints and verify redirects, content, and integrations before launch. The preview's anchor navigation must become real route navigation as pages ship.

## Self-hosted NCOGA typography — 2026-10-15

**Status:** Implemented and verified in the Phase 2 preview.

**Decision:** Use locally hosted, variable Newsreader and DM Sans WOFF2 subsets for the approved editorial and interface pairing, with Latin and Latin Extended coverage and `font-display: swap`. Keep source URLs and SIL OFL 1.1 license texts beside the font assets.

**Reason:** The fallback preview could not establish final line wrapping or rhythm. Local hosting makes the intended typefaces available without a runtime font-provider dependency. Browser checks confirmed both families and representative extended glyphs load.

**Consequence:** Future NCOGA routes inherit the scoped faces. Page-specific optical tuning remains part of each page review; italic and additional scripts require their own sourced assets if real content needs them.

## Instruction-system structure — 2026-10-15

**Status:** Set up for agent use.

**Decision:** `AGENTS.md` is a concise entry point; `.agents/instructions/` holds stable requirements; `docs/` holds verified findings, approved design and architecture, decisions, and progress. The full [master prompt](../../NCOGA_MASTER_PROMPT.md) remains available as source context. The candidate palette, proposed sitemap, editorial headlines, CMS options, and design direction are **not approved implementation decisions**.

**Reason:** Future agents need task-specific instructions without mistaking proposals for completed research or approval. The copied application and source documents were left unchanged.

**Scope resolution:** The master prompt instructs an implementing agent to begin Phase 0. The current owner-supplied setup brief explicitly limits this task to instruction organization and directs that Phase 0 begin later. The narrower current brief governs this session; no website phase was started.

Future consequential decisions should record status, context, chosen option, alternatives, consequences, and approval where required.

## Subtle cultural background details — 2026-10-15

**Status:** Owner requested subtle Kente and Adinkra designs in the background. Two sourced motif studies are in the Phase 1 showcase and Phase 2 preview; rendered review at the required widths passed during Phase 2 closeout.

**Decision:** Use an original, faint strip/weft rhythm informed by Kente construction behind the YAY section, and a pale three-ring rendition of Adinkrahene in the leadership section. Source and context are recorded in [DESIGN.md](../design/DESIGN.md).

**Reason:** Both details support the approved editorial direction without covering content or making unverified imagery look organizational. Adinkrahene's documented leadership association gives the sign a specific context.

**Alternatives:** A full Kente cloth texture or many mixed Adinkra signs would dominate content and obscure distinct meanings; no motifs would miss the owner's requested cultural detail.

**Consequence:** Keep both decorative, low contrast, and selective. They are not official marks, named cloth reproductions, or a substitute for authentic photography. Review the rendered showcase before carrying them into production pages.

## Phase 0 architecture disposition — 2026-10-15

**Status:** Recommendation from read-only audit, not an approved architectural migration.

**Context:** The copied site uses Next.js 16, React 19, Tailwind 4, Radix/shadcn primitives, static TypeScript content, and Vercel/Sheets/Resend/Blob integrations. The NCOGA source documents mention an external WordPress publishing workflow. See [repository audit](../audits/INITIAL_REPOSITORY_AUDIT.md).

**Recommendation:** Preserve the sound frontend/testing foundation while replacing organization-specific routes, content, assets, metadata, form destinations, and CI identity. Evaluate retaining WordPress before selecting a CMS. Do not connect copied integrations to NCOGA data without an ownership/privacy decision.

**Alternatives:** Rebuild from scratch; carry over the copied site wholesale; install a new CMS immediately. Each either loses useful infrastructure or creates avoidable identity and maintenance risk.

## Phase 1 visual direction — 2026-10-15

**Status:** Direction approved by the owner on 2026-10-15. The foundation tokens and composition rules are recorded in [DESIGN.md](../design/DESIGN.md); their application still needs browser and accessibility validation.

**Recommendation:** Contemporary Ghanaian Editorial with Modern Institutional Heritage discipline and small, controlled Cultural Modernism accents for YAY. See [research](../design/DESIGN_RESEARCH.md) and [visual comparison](../design/NCOGA_DIRECTION_PREVIEW.svg).

**Alternatives:** Cultural Modernism (more expressive, higher decorative/accessibility risk); Modern Institutional Heritage (clearer and lower effort, but more formal and potentially generic for YAY).

**Decision:** Use Direction A, Contemporary Ghanaian Editorial, as the foundation; Direction C provides institutional structure; a measured amount of Direction B brings modular energy and vibrance, particularly to YAY.

**Consequence:** A focused [component showcase](../design/NCOGA_COMPONENT_SHOWCASE.html) demonstrates the blend. It includes type-led imagery fallbacks, shared editorial and interaction patterns, and a distinct YAY arrangement. The cultural motifs and selected fonts have since been validated in the [Phase 2 preview](PHASE_2_VERIFICATION.md). Photography, official marks, and public copy still require source review for public pages.
