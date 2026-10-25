import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const widths = [320, 375, 430, 768, 1024, 1280, 1440, 1920];
const membershipUrl = "https://forms.gle/a1cziJ8JJhDGz96j9";

test("YAY presents its sourced branch identity, statements, and routes", async ({
  page,
}) => {
  await page.goto("/ncoga-yay");

  await expect(page).toHaveTitle("NCOGA Young Adult & Youth | NCOGA YAY");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://ncoga.com/ncoga-yay",
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Young Adult & Youth.",
  );
  await expect(
    page.getByText(
      "In October 2024, the NCOGA Young Adult and Youth (YAY) was established as a dynamic branch of the organization, dedicated to empowering the next generation of Ghanaian leaders.",
    ),
  ).toBeVisible();
  await expect(page.getByText("Official statement")).toHaveCount(2);
  await expect(
    page.getByRole("heading", { name: "Mission", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Vision", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText(
      /On March 8, 2025, during the Ghana Independence Gala and Fundraising Event, the inaugural leadership team was officially announced/,
    ),
  ).toBeVisible();
  await expect(page.locator(".ncoga-yay-pillar")).toHaveCount(5);
  await expect(
    page.getByRole("link", { name: "Find learning opportunities" }),
  ).toHaveAttribute("href", "/ncoga-yay/pillars/education");
  await expect(
    page.getByRole("link", { name: "Meet mentors and peers" }),
  ).toHaveAttribute("href", "/ncoga-yay/pillars/networking-career-growth");
  await expect(
    page.getByRole("link", { name: "Volunteer with your community" }),
  ).toHaveAttribute("href", "/ncoga-yay/pillars/community-health-philanthropy");
  await expect(
    page.getByRole("link", { name: "Take part in civic work" }),
  ).toHaveAttribute("href", "/ncoga-yay/pillars/internal-public-affairs");
  await expect(
    page.getByRole("link", { name: "See what we share" }),
  ).toHaveAttribute("href", "/ncoga-yay/pillars/public-communications");
  await expect(
    page.getByRole("heading", { name: "Internal & Public Affairs" }),
  ).toBeVisible();
  await expect(page.getByText("Getrude Eshun")).toBeVisible();
  await expect(page.getByText("Shumuel Ofosu-Koranteng")).toBeVisible();
  await expect(page.getByText("Irene Dwamena-Ansong")).toBeVisible();
  await expect(page.getByText("Kuukua Abraham")).toBeVisible();
  await expect(
    page.locator(".ncoga-yay-join").getByRole("link", {
      name: /Register to be a member/,
    }),
  ).toHaveAttribute("href", membershipUrl);
  await expect(
    page.locator(".ncoga-yay-join").getByRole("link", {
      name: "info@ncoga.com",
    }),
  ).toHaveAttribute("href", "mailto:info@ncoga.com");
  await expect(page.getByText("Platinum Staffing")).toHaveCount(0);
  await expect(page.getByText("Good Heart")).toHaveCount(0);
  await expect(page.getByText("Learn more")).toHaveCount(0);
  await expect(page.getByText("Wade Warren")).toHaveCount(0);
  await expect(page.getByText("17000")).toHaveCount(0);
  await expect(page.locator("form")).toHaveCount(0);

  const main = page.getByRole("navigation", { name: "Main navigation" });
  await expect(
    main.getByRole("link", { name: "Mission & vision" }),
  ).toHaveCount(0);
  await expect(main.getByRole("link", { name: "Home" })).toHaveAttribute(
    "href",
    "/",
  );
  await expect(main.getByRole("link", { name: "About" })).toHaveAttribute(
    "href",
    "/about",
  );
  await expect(
    main.getByRole("link", { name: "Our Programs" }),
  ).toHaveAttribute("href", "/ncoga-yay/programs");
  await expect(
    main.getByRole("link", { name: "Partner with Us" }),
  ).toHaveAttribute("href", "/ncoga-yay/partner");
  await expect(
    main.getByRole("link", { name: "Press & Media" }),
  ).toHaveAttribute("href", "/press");
  const events = main.getByRole("button", { name: "Events" });
  await expect(events).toHaveAttribute("aria-expanded", "false");
  await events.click();
  await expect(events).toHaveAttribute("aria-expanded", "true");
  await expect(
    main.getByRole("link", { name: "NCOGA Events" }),
  ).toHaveAttribute("href", "/events");
  await expect(
    main.getByRole("link", { name: "NCOGA YAY Events" }),
  ).toHaveAttribute("href", "/ncoga-yay/events");
  await page.keyboard.press("Escape");
  await expect(events).toBeFocused();
  await expect(events).toHaveAttribute("aria-expanded", "false");
  await expect(main.getByRole("link", { name: "Contact" })).toHaveAttribute(
    "href",
    "/contact",
  );
  const yay = main.getByRole("button", { name: "NCOGA YAY" });
  await expect(yay).toHaveAttribute("aria-expanded", "false");
  await yay.click();
  await expect(yay).toHaveAttribute("aria-expanded", "true");
  const yayMenu = main.locator(".ncoga-nav-menu");
  await expect(
    yayMenu.getByRole("link", { name: "About", exact: true }),
  ).toHaveAttribute("href", "/ncoga-yay");
  await expect(yayMenu.getByRole("link", { name: "Our Programs" })).toHaveCount(
    0,
  );
  await expect(
    yayMenu.getByRole("link", { name: "Partner with Us" }),
  ).toHaveCount(0);
  const pillars = yayMenu.getByRole("button", { name: "Pillars" });
  await pillars.click();
  await expect(pillars).toHaveAttribute("aria-expanded", "true");
  await expect(
    yayMenu.getByRole("link", { name: "Education" }),
  ).toHaveAttribute("href", "/ncoga-yay/pillars/education");
  await expect(
    yayMenu.getByRole("link", { name: "Public Communications" }),
  ).toHaveAttribute("href", "/ncoga-yay/pillars/public-communications");
  await page.keyboard.press("Escape");
  await expect(yay).toBeFocused();
  await expect(yay).toHaveAttribute("aria-expanded", "false");

  for (const width of [1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const bar = await page.locator(".ncoga-header").boundingBox();
    expect(bar?.height ?? 0).toBeLessThanOrEqual(80);
  }

  await page.getByRole("link", { name: "Meet the five pillars" }).click();
  await expect(page).toHaveURL(/#yay-pillars$/);
  await expect(
    page.getByRole("heading", { name: "Five pillars." }),
  ).toBeInViewport();
});

test("YAY film stays muted and pauses back to a still", async ({ page }) => {
  await page.goto("/ncoga-yay");
  const frame = page.locator(".ncoga-yay-film iframe");
  await expect(frame).toBeVisible();
  const src = await frame.getAttribute("src");
  expect(src).toContain("https://www.youtube-nocookie.com/embed/izmN42dVWBM");
  expect(src).toContain("autoplay=1");
  expect(src).toContain("mute=1");
  expect(src).toContain("playsinline=1");
  await page.getByRole("button", { name: "Pause" }).click();
  await expect(frame).toHaveCount(0);
  await expect(page.locator(".ncoga-yay-film-still")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("YAY keeps the film paused when reduced motion is preferred", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/ncoga-yay");
  await expect(page.locator(".ncoga-yay-film iframe")).toHaveCount(0);
  await expect(page.locator(".ncoga-yay-film-still")).toBeVisible();
  await expect(page.getByRole("button", { name: "Play" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator("#yay-page-title")).toHaveCSS("opacity", "1");
});

test("a council card opens and closes without inventing a biography", async ({
  page,
}) => {
  await page.goto("/ncoga-yay");
  const card = page.getByRole("button", { name: "Anna Agbotse" });
  await expect(card.locator("img")).toHaveAttribute("src", /Anna-agbotse/);
  await card.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("heading", { name: "Anna Agbotse" }),
  ).toBeVisible();
  await expect(dialog.locator("img")).toHaveAttribute("src", /Anna-agbotse/);
  await expect(
    dialog.getByText(/Human Resource D&I focused professional/),
  ).toBeVisible();
  await expect(
    dialog.getByText(
      "A biography for this council member has not been published yet.",
    ),
  ).toHaveCount(0);
  await dialog.getByRole("button", { name: "Close" }).click();
  await expect(dialog).toBeHidden();
  await expect(card).toBeFocused();

  await card.click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
  await expect(card).toBeFocused();

  await card.click();
  await page.locator("[data-slot='dialog-overlay']").click({
    position: { x: 8, y: 8 },
  });
  await expect(page.getByRole("dialog")).toBeHidden();
  await expect(card).toBeFocused();

  await expect(
    page.getByRole("button", { name: "Michael Ansong" }).locator("img"),
  ).toHaveAttribute("src", /Micheal/);
  await expect(
    page.getByRole("button", { name: "Derrick Dwamena" }).locator("img"),
  ).toHaveAttribute("src", /derrick/);
  await expect(
    page
      .getByRole("button", { name: "Shumuel Ofosu-Koranteng" })
      .locator("img"),
  ).toHaveAttribute("src", /shumuel/);
  await expect(
    page.getByRole("button", { name: "Kuukua Abraham" }).locator("img"),
  ).toHaveAttribute("src", /kukua/);
  await expect(
    page.getByRole("button", { name: "Getrude Eshun" }).locator("img"),
  ).toHaveAttribute("src", /Getrude/);
  await expect(
    page.getByRole("button", { name: "Bennet Brown" }).locator("img"),
  ).toHaveAttribute("src", /Bennet/);

  await expect(page.getByRole("button", { name: "Martina Antwi" })).toHaveCount(
    0,
  );

  await page.getByRole("button", { name: "Gaylord Kweku Appiah" }).click();
  await expect(
    page
      .getByRole("dialog")
      .getByText(
        "A biography for this council member has not been published yet.",
      ),
  ).toBeVisible();
  await page.getByRole("dialog").getByRole("button", { name: "Close" }).click();

  await page.getByRole("button", { name: "Elizabeth Ameke" }).click();
  const milestones = page.getByRole("dialog").getByRole("link", {
    name: /elizabethameke\.com\/milestones/,
  });
  await expect(milestones).toHaveAttribute(
    "href",
    "https://www.elizabethameke.com/milestones",
  );
  await expect(milestones).toHaveAttribute("target", "_blank");
  await expect(milestones).toHaveAttribute("rel", "noopener noreferrer");
  await page.getByRole("dialog").getByRole("button", { name: "Close" }).click();
});

test("YAY fits required widths and mobile navigation remains keyboard accessible", async ({
  page,
}) => {
  await page.goto("/ncoga-yay");
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
      `overflow at ${width}px`,
    ).toBeLessThanOrEqual(width);
  }

  await page.setViewportSize({ width: 375, height: 812 });
  const menu = page.locator(".ncoga-menu-button");
  await menu.click();
  const sidebar = page.getByRole("dialog", { name: "Navigation menu" });
  await expect(sidebar).toBeVisible();
  const mobile = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(
    mobile.getByRole("link", { name: "Home", exact: true }),
  ).toBeFocused();
  const events = mobile.getByRole("button", { name: "Events" });
  await events.click();
  const ncogaEvents = mobile.getByRole("link", { name: "NCOGA Events" });
  await expect(ncogaEvents).toHaveAttribute("href", "/events");
  await expect(
    mobile.getByRole("link", { name: "NCOGA YAY Events" }),
  ).toHaveAttribute("href", "/ncoga-yay/events");
  expect(
    await ncogaEvents.evaluate((link) => link.getBoundingClientRect().height),
  ).toBeGreaterThanOrEqual(44);
  await events.click();

  const yay = mobile.getByRole("button", { name: "NCOGA YAY" });
  await yay.click();
  await expect(yay).toHaveAttribute("aria-expanded", "true");
  const branch = mobile
    .locator(".ncoga-mobile-subnav")
    .getByRole("link", { name: "About", exact: true });
  await expect(branch).toBeVisible();
  const pillars = mobile.getByRole("button", { name: "Pillars" });
  await pillars.click();
  await expect(mobile.getByRole("link", { name: "Education" })).toHaveAttribute(
    "href",
    "/ncoga-yay/pillars/education",
  );
  expect(
    await branch.evaluate((link) => link.getBoundingClientRect().height),
  ).toBeGreaterThanOrEqual(44);
  await branch.click();
  await expect(page).toHaveURL(/\/ncoga-yay$/);
  await expect(page.locator("#ncoga-mobile-nav")).toHaveAttribute("inert", "");

  await menu.click();
  await expect(
    page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", {
        name: "Home",
        exact: true,
      }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
});

test("Press, Events, Partner, Programs, and pillars use the September draft", async ({
  page,
}) => {
  await page.goto("/press");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Latest News & Announcements",
  );
  await expect(page.getByText("This section is being prepared.")).toHaveCount(
    0,
  );
  await expect(page.getByText(/\$|fee|dues/i)).toHaveCount(0);
  await expect(page.locator('a[href*="zoom.us"]')).toHaveCount(0);
  await expect(page.getByText(/fiscal calendar/i)).toHaveCount(0);
  await expect(page.locator(".ncoga-hero-wave")).toHaveCount(0);
  await expect(page.locator(".ncoga-supplied-hero img")).toBeVisible();
  await expect(page.locator(".ncoga-press-placeholder").first()).toBeVisible();
  const fisherman = page.getByRole("link", {
    name: /The Fisherman: Storytelling/,
  });
  await expect(fisherman).toHaveAttribute("href", "/press/the-fisherman");
  await expect(
    page.getByRole("link", { name: /Restore Ghana/ }),
  ).toHaveAttribute("href", "/press/restore-ghana");

  await page.goto("/press/the-fisherman");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "The Fisherman",
  );
  await expect(page.getByText("Michael Ansong-Dwamena")).toBeVisible();
  await expect(page.getByText("Anna Agbotse")).toBeVisible();
  await expect(page.getByText("Zoey Martinson").first()).toBeVisible();
  await expect(page.getByText("Quad Cinema").first()).toBeVisible();
  await expect(
    page.getByText("authentically Ghanaian from beginning to end"),
  ).toBeVisible();

  await page.goto("/press/health-is-wealth");
  await expect(page.getByText("Williams Oppong")).toBeVisible();
  await expect(
    page.getByText(/Dorothy.s Hope Foundation/).first(),
  ).toBeVisible();

  await page.goto("/press/restore-ghana");
  const vision = page.getByRole("link", { name: /infn8vzn\.org/ });
  await expect(vision).toHaveAttribute("href", "http://infn8vzn.org");
  await expect(vision).toHaveAttribute("target", "_blank");
  await expect(vision).toHaveAttribute("rel", "noopener noreferrer");
  await expect(
    page.getByRole("link", { name: /restoreghana\.ca/ }),
  ).toHaveAttribute("href", "http://restoreghana.ca");
  await expect(
    page.getByText("first approved strategic external partnership"),
  ).toBeVisible();

  await page.goto("/press/membership-2026-2027");
  await expect(page.getByText("Membership is free.")).toBeVisible();
  await expect(page.getByText(/\$|fee|dues/i)).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: /Become a member/ }),
  ).toHaveAttribute("href", membershipUrl);

  await page.goto("/press/ambassador-program");
  await expect(
    page.getByRole("link", {
      name: /Express interest or nominate an ambassador/,
    }),
  ).toHaveAttribute("href", "https://forms.gle/U1bRPMErkXgAQqmW8");

  await page.goto("/press/first-general-members-meeting");
  await expect(
    page.getByRole("link", {
      name: "Saturday, November 7, 2026 | 12:00 noon–1:00 PM EST",
    }),
  ).toHaveAttribute("href", "/ncoga-yay/events");
  await expect(page.locator('a[href*="zoom.us"]')).toHaveCount(0);

  await page.goto("/events");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "NCOGA Events",
  );
  await expect(
    page.getByRole("heading", { name: "Ghana Independence Celebration" }),
  ).toBeVisible();
  await expect(page.getByText("March 6, 2027")).toBeVisible();
  await expect(page.getByText("Details to be announced.")).toBeVisible();
  await expect(page.locator(".ncoga-supplied-hero")).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "NCOGA YAY Events" }),
  ).toHaveAttribute("href", "/ncoga-yay/events");

  await page.goto("/ncoga-yay/events");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "NCOGA YAY Events",
  );
  await expect(
    page.getByRole("heading", { name: "Council Leaders Meeting" }),
  ).toBeVisible();
  await expect(
    page.getByText("Friday, November 6, 2026 | 8:00 PM ET"),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "NCOGA YAY First General Members Meeting",
    }),
  ).toBeVisible();
  await expect(
    page.getByText("Saturday, November 7, 2026 | 12:00 noon–1:00 PM EST"),
  ).toBeVisible();
  await expect(page.getByText("Virtual via Zoom")).toHaveCount(2);
  await expect(page.getByText("Meeting details coming soon.")).toHaveCount(5);
  await expect(page.getByText("Coming Soon", { exact: true })).toHaveCount(5);
  await expect(page.getByText("October 2026")).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "Visit Education Pillar" }),
  ).toHaveAttribute("href", "/ncoga-yay/pillars/education");
  await expect(page.getByText("This section is being prepared.")).toHaveCount(
    0,
  );
  await expect(page.locator('a[href*="zoom.us"]')).toHaveCount(0);
  await expect(page.getByText(/fiscal calendar/i)).toHaveCount(0);
  await expect(page.getByText("READ EVENT RECAP")).toHaveCount(0);
  const eventHeadings = await page.getByRole("heading").allTextContents();
  expect(eventHeadings.every((heading) => heading.trim().length > 0)).toBe(
    true,
  );

  await page.goto("/ncoga-yay/partner");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Building Opportunities. Strengthening Connections. Expanding Access.",
  );
  await expect(page.getByText(/not published here yet/)).toHaveCount(0);
  await expect(page.getByText("READ THE PARTNERSHIP ANNOUNCEMENT")).toHaveCount(
    0,
  );
  const inquiry = page.getByRole("link", { name: /Partnership inquiry form/ });
  await expect(inquiry).toHaveAttribute(
    "href",
    "https://forms.gle/CWjmYktQ8yTi89YHA",
  );
  await expect(inquiry).toHaveAttribute("target", "_blank");
  await expect(
    page.getByRole("link", { name: /Become a partner/ }),
  ).toHaveAttribute("href", "https://forms.gle/JWrXNdEqeB2nuf84A");
  await expect(page.getByRole("link", { name: "Education" })).toHaveAttribute(
    "href",
    "/ncoga-yay/pillars/education",
  );
  await expect(
    page.getByRole("link", { name: "info@ncoga.com" }),
  ).toHaveAttribute("href", "mailto:info@ncoga.com");
  await expect(page.getByText("August 24, 2026")).toBeVisible();

  await page.goto("/ncoga-yay/programs");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Creating Opportunities. Building Community. Expanding Access.",
  );
  await expect(page.getByText("Launching in 2027")).toBeVisible();
  await expect(
    page.getByRole("link", { name: /learn about mission/i }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: /Click here to apply\/nominate/ }),
  ).toHaveAttribute("href", "https://forms.gle/U1bRPMErkXgAQqmW8");
  await expect(
    page.getByText("July 1, 2027 | Ghana Republic Day"),
  ).toBeVisible();
  await expect(page.getByText("#WeDey")).toBeVisible();
  await expect(
    page.getByText("no single location you have to travel to participate"),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Internal & Public Affairs" }),
  ).toHaveAttribute("href", "/ncoga-yay/pillars/internal-public-affairs");

  await page.goto("/ncoga-yay/pillars/community-health-philanthropy");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Community Engagement, Health & Philanthropy",
  );
  await expect(page.locator(".ncoga-pillar-hero-photo")).toHaveAttribute(
    "alt",
    "",
  );
  await expect(page.locator(".ncoga-hero-wave")).toHaveCount(1);
  await expect(page.locator(".ncoga-supplied-hero")).toHaveCount(0);
  await expect(
    page.getByRole("link", {
      name: "Community Engagement, Health & Philanthropy Pillar Meeting",
    }),
  ).toHaveAttribute("href", "/ncoga-yay/events");
  await expect(page.getByText("Meeting details coming soon.")).toBeVisible();
  await expect(page.getByRole("button", { name: "Mabel Adu" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Martina Antwi" })).toHaveCount(
    0,
  );
  await expect(page.getByText("ages 18")).toHaveCount(0);
});

for (const width of [375, 1440]) {
  test(`YAY has no detectable WCAG A/AA violations at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/ncoga-yay");
    const results = await new AxeBuilder({ page })
      .exclude(".ncoga-yay-film")
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}
