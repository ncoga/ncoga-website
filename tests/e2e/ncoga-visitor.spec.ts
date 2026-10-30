import { expect, test } from "@playwright/test";

const membershipUrl = "https://forms.gle/H79ctbo7RD1oLnad8";
const announcementKey =
  "ncoga-announcement:yay-first-general-meeting-2026-11-07";

test("the meeting announcement opens once per tab, including a deep link", async ({
  page,
}) => {
  await page.clock.install();
  await page.goto("/press/the-fisherman");
  const dialog = page.getByRole("dialog");
  await expect(dialog).toHaveCount(0);
  await page.clock.fastForward(4_000);
  await expect(dialog).toHaveCount(0);
  await page.clock.fastForward(2_000);
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByText(
      "You must be a registered NCOGA YAY member to receive the meeting link by email.",
    ),
  ).toBeVisible();
  await expect(
    dialog.getByRole("link", { name: "Register to Become a Member" }),
  ).toHaveAttribute("href", membershipUrl);
  await expect(
    dialog.getByText(
      "Follow the WhatsApp channel to get update messages from the council leaders.",
    ),
  ).toBeVisible();
  await expect(
    dialog.getByRole("link", {
      name: "Follow the NCOGA YAY WhatsApp Channel",
    }),
  ).toHaveAttribute(
    "href",
    "https://whatsapp.com/channel/0029Vb7Cfm8GufIvRDsD3f2p",
  );
  await expect(dialog.locator("img")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await page.waitForFunction(
    (key) => sessionStorage.getItem(key) === "shown",
    announcementKey,
  );
  await page.goto("/about");
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("interaction opens the meeting announcement after a short pause", async ({
  page,
}) => {
  await page.clock.install();
  await page.goto("/about");
  const dialog = page.getByRole("dialog");
  await page.keyboard.press("Tab");
  await page.clock.fastForward(2_000);
  await expect(dialog).toHaveCount(0);
  await page.clock.fastForward(2_000);
  await expect(dialog).toBeVisible();
});

test("the announcement stays off the design system", async ({ page }) => {
  await page.goto("/design-system");
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("rejecting cookies keeps the YAY film on its still", async ({ page }) => {
  await page.goto("/ncoga-yay");
  await page.getByRole("button", { name: "Close" }).click();
  await expect(page.locator(".ncoga-yay-film iframe")).toHaveCount(0);
  await page.getByRole("button", { name: "Reject" }).click();
  await expect(page.locator(".ncoga-yay-film iframe")).toHaveCount(0);
  await expect(page.locator(".ncoga-yay-film-still")).toBeVisible();
  await expect(page.getByRole("button", { name: "Accept" })).toHaveCount(0);
});

test("accepting cookies loads the YAY film from YouTube", async ({ page }) => {
  await page.goto("/ncoga-yay");
  await page.getByRole("button", { name: "Close" }).click();
  await page.getByRole("button", { name: "Accept" }).click();
  const frame = page.locator(".ncoga-yay-film iframe");
  await expect(frame).toBeVisible();
  await expect(frame).toHaveAttribute(
    "src",
    /youtube-nocookie\.com\/embed\/izmN42dVWBM/,
  );
});
