import type { MetadataRoute } from "next";

import { ncogaOrigin } from "@/lib/ncoga-metadata";
import { yayPillars } from "@/content/yay-pillars";

const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/ncoga-yay",
  "/ncoga-yay/programs",
  "/ncoga-yay/partner",
  "/press",
  "/events",
  ...yayPillars.map((pillar) => `/ncoga-yay/pillars/${pillar.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return publicRoutes.map((route) => ({
    url: route === "/" ? `${ncogaOrigin}/` : `${ncogaOrigin}${route}`,
    lastModified: now,
    changeFrequency:
      route === "/" || route === "/events" ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route === "/about" || route === "/ncoga-yay"
          ? 0.8
          : 0.6,
  }));
}
