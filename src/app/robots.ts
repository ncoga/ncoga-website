import type { MetadataRoute } from "next";

import { ncogaOrigin } from "@/lib/ncoga-metadata";

const legacyPaths = [
  "/design-system",
  "/employers",
  "/industries",
  "/job-seekers",
  "/jobs",
  "/resources",
  "/about/careers",
  "/about/leadership",
  "/about/mission-vision-values",
  "/about/our-story",
  "/about/why-platinum",
  "/contact/schedule-consultation",
  "/contact/office-information",
  "/accessibility",
  "/privacy",
  "/terms",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: legacyPaths,
    },
    sitemap: `${ncogaOrigin}/sitemap.xml`,
  };
}
