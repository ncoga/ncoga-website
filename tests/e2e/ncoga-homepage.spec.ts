import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const widths = [320, 375, 430, 768, 1024, 1280, 1440, 1920];

test("homepage presents sourced content, metadata, and working actions", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page).toHaveTitle(
    "National Council of Ghanaian Associations | NCOGA",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://ncoga.com",
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "A shared home for Ghanaian community.",
  );
  await expect(
    page.getByRole("heading", { name: "Mission & vision" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "NCOGA home" })).toHaveAttribute(
    "href",
    "/",
  );
  await expect(
    page.getByRole("link", { name: "Visit NCOGA YAY" }),
  ).toHaveAttribute("href", "https://ncoga.com/ncoga-youth/");
  await expect(page.locator(".ncoga-home-email")).toHaveAttribute(
    "href",
    "mailto:info@ncoga.com",
  );
  await expect(page.locator(".ncoga-home-hero-photo img")).toHaveJSProperty(
    "complete",
    true,
  );
  expect(
    await page
      .locator(".ncoga-home-hero-photo img")
      .evaluate((image: HTMLImageElement) => image.naturalWidth),
  ).toBeGreaterThan(0);
  expect(
    await page
      .locator(".ncoga-home-focus-photo img")
      .evaluate((image: HTMLImageElement) => image.naturalWidth),
  ).toBeGreaterThan(0);
  await expect(page.locator(".ncoga-home-focus-list li")).toHaveCount(4);

  await page.getByRole("link", { name: "Discover NCOGA" }).click();
  await expect(page).toHaveURL(/#about$/);
  await expect(
    page.getByRole("heading", { name: "Many associations. A common purpose." }),
  ).toBeInViewport();
});

test("homepage fits required widths and mobile keyboard navigation works", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".ncoga-home-hero-photo")).toHaveCSS(
    "transform",
    "none",
  );
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
      `overflow at ${width}px`,
    ).toBeLessThanOrEqual(width);
    const hero = await page.locator(".ncoga-home-hero-stage").boundingBox();
    const photo = await page.locator(".ncoga-home-hero-photo").boundingBox();
    const copy = await page.locator(".ncoga-home-hero-copy").boundingBox();
    expect(photo?.width).toBeCloseTo(hero?.width ?? 0, 1);
    expect(photo?.height).toBeCloseTo(hero?.height ?? 0, 1);
    expect(copy?.x).toBeGreaterThanOrEqual(hero?.x ?? 0);
    expect((copy?.x ?? 0) + (copy?.width ?? 0)).toBeLessThanOrEqual(
      (hero?.x ?? 0) + (hero?.width ?? 0) + 1,
    );
  }

  await page.setViewportSize({ width: 375, height: 812 });
  const menu = page.locator(".ncoga-menu-button");
  await expect(menu).toHaveAccessibleName("Menu");
  const mobileNav = page.locator("#ncoga-mobile-nav");
  await expect(menu.locator(".ncoga-menu-icon span")).toHaveCount(3);
  await expect(mobileNav).toHaveAttribute("inert", "");
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(mobileNav).toHaveAttribute("data-state", "open");
  const sidebar = page.locator(".ncoga-mobile-sidebar");
  await expect(sidebar).toHaveAttribute("role", "dialog");
  await expect(sidebar).toHaveAttribute("aria-modal", "true");
  const phoneBounds = await sidebar.boundingBox();
  expect(phoneBounds?.width).toBeCloseTo(375, 2);
  expect(phoneBounds?.height).toBeCloseTo(812, 2);
  expect(await page.evaluate(() => document.body.style.overflow)).toBe(
    "hidden",
  );
  expect(
    await mobileNav
      .locator("a")
      .first()
      .evaluate((link) => getComputedStyle(link).animationName),
  ).toBe("ncoga-menu-link-in");
  await expect(
    page.getByRole("link", { name: "About", exact: true }).first(),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(page.locator(".ncoga-sidebar-close")).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(mobileNav.locator(".ncoga-mobile-nav a").last()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAccessibleName("Menu");
  await expect(mobileNav).toHaveAttribute("inert", "");
  await expect(menu).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");

  await page.setViewportSize({ width: 768, height: 812 });
  await menu.click();
  await expect(sidebar).toHaveCSS("transform", "matrix(1, 0, 0, 1, 0, 0)");
  const tabletBounds = await sidebar.boundingBox();
  expect(tabletBounds?.width).toBeCloseTo(420, 2);
  expect(tabletBounds?.x).toBeCloseTo(348, 2);
  await page
    .locator(".ncoga-mobile-backdrop")
    .click({ position: { x: 10, y: 200 } });
  await expect(mobileNav).toHaveAttribute("data-state", "closed");
});

test("mobile menu honors reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: "Menu" }).click();
  const duration = await page
    .locator("#ncoga-mobile-nav a")
    .first()
    .evaluate((link) => getComputedStyle(link).animationDuration);
  expect(Number.parseFloat(duration)).toBeLessThan(0.001);
});

test("homepage editorial content remains visible with reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const heading = page.getByRole("heading", { level: 1 });
  await expect(heading).toHaveCSS("opacity", "1");
  await expect(heading).toHaveCSS("transform", "none");
  await page.locator(".ncoga-home-focus-photo").scrollIntoViewIfNeeded();
  await expect(page.locator(".ncoga-home-focus-photo")).toHaveCSS(
    "opacity",
    "1",
  );
});

test("open mobile sidebar has no detectable WCAG A/AA violations", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Menu" }).click();
  await expect(
    page.getByRole("dialog", { name: "Navigation menu" }),
  ).toBeVisible();
  await expect(page.locator(".ncoga-mobile-sidebar")).toHaveCSS(
    "transform",
    "matrix(1, 0, 0, 1, 0, 0)",
  );
  await expect(page.locator(".ncoga-mobile-nav a").last()).toHaveCSS(
    "opacity",
    "1",
  );
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});

for (const width of [375, 1440]) {
  test(`homepage has no detectable WCAG A/AA violations at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}
