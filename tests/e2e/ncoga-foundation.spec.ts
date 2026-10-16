import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const widths = [320, 375, 430, 768, 1024, 1280, 1440, 1920];

test("Newsreader and DM Sans load from the local NCOGA font assets", async ({
  page,
}) => {
  await page.goto("/design-system");
  const { loadedFamilies, fontPaths } = await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([
      document.fonts.load('400 18px "DM Sans"', "ƐƆŋ"),
      document.fonts.load("400 18px Newsreader", "ƐƆŋ"),
    ]);
    return {
      loadedFamilies: [...document.fonts]
        .filter((face) => face.status === "loaded")
        .map((face) => face.family),
      fontPaths: performance
        .getEntriesByType("resource")
        .map((entry) => new URL(entry.name).pathname)
        .filter((path) => path.endsWith(".woff2")),
    };
  });

  expect(
    loadedFamilies.filter((family) => family === "Newsreader"),
  ).toHaveLength(2);
  expect(loadedFamilies.filter((family) => family === "DM Sans")).toHaveLength(
    2,
  );
  expect(fontPaths).toHaveLength(4);
  expect(fontPaths.every((path) => path.startsWith("/fonts/ncoga/"))).toBe(
    true,
  );
});

test("NCOGA foundation preview fits the required viewports", async ({
  page,
}) => {
  await page.goto("/design-system");

  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    const scrollWidth = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    expect(
      scrollWidth,
      `horizontal overflow at ${width}px`,
    ).toBeLessThanOrEqual(width);
  }
});

test("mobile navigation opens, focuses its first link, and closes with Escape", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/design-system");

  const menu = page.locator(".ncoga-menu-button");
  await expect(menu).toHaveAccessibleName("Menu");
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(menu).toHaveAccessibleName("Close");
  await expect(
    page.getByRole("link", { name: "Purpose" }).first(),
  ).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
});

for (const width of [375, 1440]) {
  test(`NCOGA foundation preview has no detectable WCAG A/AA violations at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/design-system", { waitUntil: "networkidle" });

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
}
