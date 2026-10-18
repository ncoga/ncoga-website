import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

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
    "Ghanaian associations, connected.",
  );
  await expect(page.getByText("Founded", { exact: true })).toBeVisible();
  await expect(page.getByText("1986", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Our mission" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Our vision" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Explore NCOGA YAY" }),
  ).toHaveAttribute("href", "/ncoga-yay");
  await expect(
    page
      .locator(".ncoga-about-hero")
      .getByRole("link", { name: "Contact NCOGA" }),
  ).toHaveAttribute("href", "mailto:info@ncoga.com");
  await expect(page.getByText("Platinum Staffing")).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "About", exact: true }).first(),
  ).toHaveAttribute("href", "/about");

  await page.getByRole("link", { name: "Read our mission" }).click();
  await expect(page).toHaveURL(/#mission$/);
  await expect(
    page.getByRole("heading", { name: "Mission & vision" }),
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
        name: "About",
        exact: true,
      }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(page.locator("#ncoga-mobile-nav")).toHaveAttribute("inert", "");
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
