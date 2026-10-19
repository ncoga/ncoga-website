# Next-agent handoff: YAY pages content pass

Written 2026-10-18 after the hero and navigation shell. Do not deploy. Do not edit sitemap or robots unless the owner asks. Do not commit unless the owner asks.

## What this session already did

The pages below have heroes. Their body copy is still the short holding text, except each pillar page, which still shows the one published sentence from `src/content/yay-pillars.ts`.

| Page            | Route                       | Hero                                                             |
| --------------- | --------------------------- | ---------------------------------------------------------------- |
| Each pillar     | `/ncoga-yay/pillars/[slug]` | `/images/ncoga-yay.webp`, flat ink scrim, ivory type, ivory wave |
| Press & Media   | `/press`                    | `/images/press-media-banner.png`                                 |
| Our Programs    | `/ncoga-yay/programs`       | `/images/program.png`                                            |
| Events          | `/events`                   | `/images/event-meeting-banner.png`                               |
| Partner with Us | `/ncoga-yay/partner`        | `/images/partner-with-ncoga-yay-banner.png`                      |

Shared pieces:

- `src/components/ncoga/ncoga-page-hero.tsx` exports `NcogaHeroWave` and `NcogaSuppliedHero`.
- Wave markup is an inline SVG, fill `#faf8f2`, class `ncoga-hero-wave`. Use it only on the pillar photo. The four banners already end in their own wave.
- Pillar CSS is `.ncoga-pillar-hero`, `.ncoga-pillar-hero-photo`, `.ncoga-pillar-hero-scrim`, `.ncoga-pillar-hero-inner`, `.ncoga-pillar-follow`.
- Banner CSS is `.ncoga-supplied-hero`. The image is a real `next/image`, full width, height auto. It is not a CSS background, so the baked-in title stays sharp.
- The pillar photo uses `fill` and `alt=""`. It is decorative. The visible `h1` is the pillar name. Do not describe the illustrated people as real members or leaders.
- Scrim is a flat `rgb(23 28 25 / 0.34)`. Do not add a gradient. The design system forbids gradients in CSS. The supplied banner files already contain their own shading; leave that inside the image.
- Hero type on pillars is ivory. The gold mark is only the short eyebrow rule (`.ncoga-eyebrow::before`). Breadcrumb links are ivory and underlined because gold text fails on the mixed photo.
- Pillar hero height is fixed: `clamp(520px, 68vh, 720px)`. The long title “Community Engagement, Health & Philanthropy” must stay inside that height. Do not let the heading grow the hero and crop the flags away.
- Below the wave, the pillar page still shows the published one-sentence detail, the pillar logo on a white card with a red top border (`.ncoga-home-pillar-page-mark`), and links back to `/ncoga-yay` and `/ncoga-yay#yay-pillars`.

Navigation, in `src/content/ncoga-foundation.ts`:

About, NCOGA YAY (About `/ncoga-yay`, Pillars with the five routes, Our Programs `/ncoga-yay/programs`, Partner with Us `/ncoga-yay/partner`), Press & Media `/press`, Events `/events`, Contact `/contact`.

The YAY mark in the header appears only when the pathname is exactly `/ncoga-yay`. A vertical stone rule separates it from the NCOGA brand. Do not put a black plate behind that mark or behind the footer crest. Both files are transparent.

## The job

Build the real Partner, Programs, Events, Press & Media, and five pillar pages from the owner’s September draft:

[docs/content/PAGES UPDATE SEPTEMBER 2026.md](../content/PAGES%20UPDATE%20SEPTEMBER%202026.md)

The owner called this file `references/PAGES UPDATE SEPTEMBER 2026.md`. It was moved out of `public/` so a deployed site cannot serve the raw draft. Do not move it back into `public/`.

Use that draft as the copy source. Do not invent programs, dates, quotes, partners, recap articles, photos, or Zoom links that the draft does not contain. Where the draft says `[READ THE PARTNERSHIP ANNOUNCEMENT]`, `[DISPLAY EVENT PHOTO]`, `[READ EVENT RECAP]`, `[EVENT IMAGE]`, `[LEARN MORE]`, or `[KEEP EXISTING FISCAL CALENDAR EMBEDDED HERE]`, the asset is missing. Say that the item is not published yet, or omit the dead control. Do not fake a photo or a URL.

An earlier decision kept Infinite Vision, Restore Ghana, and the September forms off the site. The owner has now pointed at this draft as the source for the next pass. Publish the named partnership, the forms, and the dated events that are written in the file. Do not go beyond the file.

## Design rules already in force

- Newsreader for headings, DM Sans for interface text. Tokens: heritage `#123f32`, forest `#197047`, gold `#d9a227`, red `#b3262e`, ink `#171c19`, ivory `#faf8f2`, sand `#f0ebdf`, stone `#dcd8cc`. Radius 4px.
- Gold text only on a solid heritage or similarly dark field. Gold on ivory fails. Ivory on forest is acceptable. Ivory on the pillar scrim is the pattern to copy.
- No CSS gradients, glass, or a new motion library. GSAP is already used on `/ncoga-yay` only, in `src/components/ncoga/ncoga-yay-motion.tsx`. New pages can stay still.
- Header bar is 80px including the border, one line, sticky. Tests assert that at 1024 and 1440. Do not add another logo to the bar.
- Vary section backgrounds with the existing tokens. On `/ncoga-yay` the rhythm is white, heritage, sand, white, heritage. Repeat that idea. Do not make a whole section gold or red behind body text.
- Pillar logos are transparent PNGs with dark wordmarks. They sit on ivory or white. No plate behind them except the existing white card on the pillar page.
- External links use `target="_blank"`, `rel="noopener noreferrer"`, and a visually hidden “(opens in a new tab)”.
- Leader dialogs portal to `document.body`, outside `.ncoga-theme`. Theme variables do not apply there. If you restyle them, use literal colors.
- Preserve these spellings: Getrude, Bennet, Shumuel, Kuukua, Internal & Public Affairs. The draft also says “Michael Dwamena-Ansong” at the Fisherman screening and “Anna Agbotse of the Public Affairs Pillar.” Keep the draft’s wording. Do not merge that name with Michael Ansong or Derrick Dwamena.
- The illustrated group in `ncoga-yay.webp` is artwork. Do not caption those figures as council members.

## How to shape each page

Keep each supplied banner as the hero. Do not paint a second giant title on top of it. The banner already says Press & Media, Programs, Events & Meetings, or Partner With NCOGA YAY. Put the page `h1` in the content under the banner if a visible heading is still needed, or keep one `h1` that matches the banner and do not repeat it in display type. The current tests expect the Press and Events `h1` to read “This section is being prepared.” Update `tests/e2e/ncoga-yay.spec.ts` when that sentence is replaced.

Give the five pillar pages the same hero shell and different bodies. Do not ship five copies of one layout with only the name swapped.

### Partner — `/ncoga-yay/partner`

Replace the sentence that says named partnerships are not published.

Use, in this order: the banner; “Building Opportunities. Strengthening Connections. Expanding Access.”; the welcome paragraphs; Areas of Partnership for the five pillars, each linking to its pillar route; “Have Something Different in Mind?”; the inquiry close.

Forms in the draft:

- Partnership inquiry: `https://forms.gle/CWjmYktQ8yTi89YHA`
- Become a partner: `https://forms.gle/JWrXNdEqeB2nuf84A`

Partnerships in Action has one named item: NCOGA YAY × Infinite Vision, Restore Ghana. The “read the announcement” control has no URL in the draft. Press copy later gives `http://infn8vzn.org` and `http://restoreghana.ca` and the date August 24, 2026. Use those links only as written. Questions go to `mailto:info@ncoga.com`.

### Programs — `/ncoga-yay/programs`

Replace “Program details are not published here yet.”

Use the banner, then the intro under Programs, then the three named programs:

- Mission 50,000. Launching in 2027. The “learn about” control has no URL.
- NCOGA YAY Ambassador Program. Applications use `https://forms.gle/U1bRPMErkXgAQqmW8`.
- We Dey Community Beach Day. July 1, 2027, Ghana Republic Day. No single location. Hashtag `#WeDey`. The “learn more” control has no URL.

Then “Programs Across Our Five Pillars,” with each blurb linking to that pillar. Close with “Interested in Our Programs?” using only the contact and links the draft actually gives.

### Events — `/events`

The banner says Events & Meetings. Replace “Events are not listed here yet.”

Upcoming, only what is written:

- Council Leaders Meeting. Friday, November 6, 2026, 8:00 PM ET. Virtual via Zoom. Council leaders only. No Zoom URL is in the draft. Do not invent one.
- NCOGA YAY First General Members Meeting. Saturday, November 7, 2026, 6:00 PM ET. Virtual via Zoom. All members. No URL.
- Five pillar meetings dated only “October 2026,” each “Meeting details coming soon,” each linking to its pillar. Today in this project is October 18, 2026. Keep the draft’s October 2026 wording. Do not add a day or a time.

The draft has several empty headings between the two November meetings. Those are blank. Do not turn them into events.

Past engagements that have copy:

- The Fisherman. September 2026, New York City. Photo and recap are placeholders.
- Health Is Wealth Forum. September 2026, New York City. Photo and recap are placeholders.

Fiscal calendar: the draft says keep the existing embed. This repo does not have that embed. Do not invent a calendar. Leave a short note that the fiscal calendar is not published here yet, or ask the owner for the embed.

### Press & Media — `/press`

Replace the holding heading. The banner is the hero.

Intro, then Latest News only as written:

- Infinite Vision / Restore Ghana. Partnership announcement, August 24, 2026. Links `http://infn8vzn.org` and `http://restoreghana.ca`. Announcement URL missing.
- The Fisherman. Event recap, September 2026, Quad Cinema, New York City. Name Zoey Martinson, Anna Agbotse, and Michael Dwamena-Ansong exactly as written. Full recap and event image are missing.
- Health Is Wealth. Read the rest of that section in the draft before writing the card. Do not add statistics.
- NCOGA YAY at the Presidential Diaspora Town Hall. Use only the draft’s sentences.

From NCOGA YAY:

- Membership opens for 2026–2027. The live membership form already on `/ncoga-yay` is `https://forms.gle/a1cziJ8JJhDGz96j9`.
- Ambassador Program. Same form as Programs.
- Council Leadership: Aligning for 2026–2027.
- Looking Ahead / 2027 horizon, and the first general members meeting, which should agree with the Events page.

### Pillar pages

Keep the shared photo, scrim, wave, and pillar logo. Replace the thin follow section with the draft’s material for that pillar:

- The partnership-area sentence from Partner.
- The programs-across-pillars sentence from Programs.
- The “How NCOGA YAY Works” paragraph for that pillar, from the later “quiet page” section of the same file. That section is membership guidance, not a sixth public page, unless the owner asks for one.
- The October 2026 pillar meeting line, with “details coming soon,” linking back to `/events`.

Do not add officers, emails, ages, or fees. The draft’s close says membership is free and points at registration. If you repeat that, use the existing membership form and do not add a price.

## Tests and review

Playwright must see the real browsers:

`PLAYWRIGHT_BROWSERS_PATH="$HOME/Library/Caches/ms-playwright" pnpm exec playwright test tests/e2e/ncoga-yay.spec.ts tests/e2e/ncoga-homepage.spec.ts tests/e2e/ncoga-about.spec.ts tests/e2e/ncoga-contact.spec.ts --project=chromium`

Kill anything on port 3000 first. The config reuses a running server. Open the app at `http://localhost:3000`. `127.0.0.1` blocks Next dev assets and the page will not hydrate.

Update the Press and Events holding assertions when those headings change. The desktop YAY menu test expects Our Programs at `/ncoga-yay/programs` and Partner with Us at `/ncoga-yay/partner`.

Review phone and desktop in the browser: pillar wave, long pillar title, each banner, the new menu item, and no horizontal overflow. Header height stays at most 80px.
