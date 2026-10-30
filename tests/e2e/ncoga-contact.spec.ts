import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "./fixtures";

const widths = [320, 375, 430, 768, 1024, 1280, 1440, 1920];

test("Contact shows the verified general address without copied contact details", async ({
  page,
}) => {
  await page.goto("/contact");

  await expect(page).toHaveTitle(
    "Contact NCOGA | National Council of Ghanaian Associations",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://ncoga.com/contact",
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "A direct line to the council.",
  );
  await expect(
    page.getByRole("link", { name: /info@ncoga.com/ }),
  ).toHaveAttribute("href", "mailto:info@ncoga.com");
  await expect(
    page
      .locator(".ncoga-contact-paths")
      .getByRole("link", { name: /About NCOGA/ }),
  ).toHaveAttribute("href", "/about");
  await expect(
    page
      .locator(".ncoga-contact-paths")
      .getByRole("link", { name: /Young Adult & Youth/ }),
  ).toHaveAttribute("href", "/ncoga-yay");
  await expect(page.getByText("Platinum Staffing")).toHaveCount(0);
  await expect(page.getByText("New Mexico")).toHaveCount(0);
  await expect(page.locator("form")).toHaveCount(0);
  await expect(
    page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Contact" }),
  ).toHaveAttribute("href", "/contact");
});

test("Contact fits required widths and keeps mobile navigation keyboard accessible", async ({
  page,
}) => {
  await page.goto("/contact");
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
      .getByRole("link", { name: "Home", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
});

for (const width of [375, 1440]) {
  test(`Contact has no detectable WCAG A/AA violations at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/contact");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}
