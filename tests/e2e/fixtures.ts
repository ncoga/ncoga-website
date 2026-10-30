/* Playwright's fixture callback is named use. It is not a React hook. */
/* eslint-disable react-hooks/rules-of-hooks */
import { test as base, expect } from "@playwright/test";

const announcementKey =
  "ncoga-announcement:yay-first-general-meeting-2026-11-07";

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.addInitScript((key) => {
      if (document.cookie.includes("e2e-show-announcement=1")) return;
      sessionStorage.setItem(key, "shown");
    }, announcementKey);
    await use(page);
  },
});

export { expect };
