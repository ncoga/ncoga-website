import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const widths = [320, 375, 430, 768, 1024, 1280, 1440, 1920];

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
    "Young voices.Shared roots.",
  );
  await expect(page.getByText(/Established in October 2024/)).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Our mission" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Our vision" })).toBeVisible();
  await expect(page.locator(".ncoga-yay-page-pillar-list li")).toHaveCount(5);
  await expect(
    page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "NCOGA YAY" }),
  ).toHaveAttribute("href", "/ncoga-yay");
  await expect(
    page.getByRole("link", { name: "About the parent council" }),
  ).toHaveAttribute("href", "/about");
  await expect(
    page.getByRole("link", { name: "Contact the council" }),
  ).toHaveAttribute("href", "/contact");
  await expect(page.getByText("Platinum Staffing")).toHaveCount(0);
  await expect(page.getByText("Good Heart")).toHaveCount(0);
  await expect(page.locator("form")).toHaveCount(0);

  await page.getByRole("link", { name: "Explore YAY" }).click();
  await expect(page).toHaveURL(/#yay-mission$/);
  await expect(
    page.getByRole("heading", { name: "Mission & vision" }),
  ).toBeInViewport();
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
  await expect(
    page.getByRole("dialog", { name: "Navigation menu" }),
  ).toBeVisible();
  await expect(
    page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "About", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
});

for (const width of [375, 1440]) {
  test(`YAY has no detectable WCAG A/AA violations at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/ncoga-yay");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}
