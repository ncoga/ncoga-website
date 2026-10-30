import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "./fixtures";

const widths = [320, 375, 430, 768, 1024, 1280, 1440, 1920];

test("About presents sourced NCOGA content and working actions", async ({
  page,
}) => {
  await page.goto("/about");

  await expect(page).toHaveTitle(
    "About NCOGA | National Council of Ghanaian Associations",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://ncoga.com/about",
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "An umbrella for Ghanaian associations.",
  );
  await expect(page.getByText("Founded", { exact: true })).toBeVisible();
  await expect(page.getByText("1986", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Mission", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Vision", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("img", {
      name: "People seated together at banquet tables, some wearing Ghanaian cloth.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Explore NCOGA YAY" }),
  ).toHaveAttribute("href", "/ncoga-yay");
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
    page
      .locator(".ncoga-about-hero")
      .getByRole("link", { name: "Contact NCOGA" }),
  ).toHaveAttribute("href", "mailto:info@ncoga.com");
  await expect(
    page.getByRole("link", { name: /info@ncoga.com/ }),
  ).toHaveAttribute("href", "mailto:info@ncoga.com");
  await expect(page.getByText("Platinum Staffing")).toHaveCount(0);
  await expect(page.getByText("Victor Essien")).toHaveCount(0);
  await expect(page.getByText("Wade Warren")).toHaveCount(0);
  await expect(page.locator('a[href*="forms.gle"]')).toHaveCount(0);
  await expect(page.locator('a[href*="about-us"]')).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "About", exact: true }).first(),
  ).toHaveAttribute("href", "/about");

  await page.getByRole("link", { name: "Read the official mission" }).click();
  await expect(page).toHaveURL(/#mission$/);
  await expect(
    page.getByRole("heading", { name: "Mission and vision" }),
  ).toBeInViewport();
});

test("About fits required widths and keeps mobile navigation keyboard accessible", async ({
  page,
}) => {
  await page.goto("/about");
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
  await expect(
    page.getByRole("dialog", { name: "Navigation menu" }),
  ).toBeVisible();
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
  await expect(page.locator("#ncoga-mobile-nav")).toHaveAttribute("inert", "");
});

test("About keeps the opening visible when reduced motion is preferred", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/about");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator("#about-title")).toHaveCSS("opacity", "1");
  await expect(page.locator(".ncoga-about-photo img")).toHaveCSS(
    "opacity",
    "1",
  );
  const contact = page
    .locator(".ncoga-about-hero")
    .getByRole("link", { name: "Contact NCOGA" });
  await contact.focus();
  await expect(contact).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Read the official mission" }),
  ).toBeFocused();
});

for (const width of [375, 1440]) {
  test(`About has no detectable WCAG A/AA violations at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/about");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}
