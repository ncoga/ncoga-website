import { describe, expect, it } from "vitest";

import { isAnnouncementActive } from "@/content/site-announcement";

describe("site announcement window", () => {
  const zone = "America/New_York";

  it("shows through the end of November 8, 2026 Eastern", () => {
    expect(
      isAnnouncementActive(
        "2026-11-09",
        new Date("2026-11-08T23:30:00-05:00"),
        zone,
      ),
    ).toBe(true);
  });

  it("hides from November 9, 2026 Eastern", () => {
    expect(
      isAnnouncementActive(
        "2026-11-09",
        new Date("2026-11-09T00:05:00-05:00"),
        zone,
      ),
    ).toBe(false);
  });
});
