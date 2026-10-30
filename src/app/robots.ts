import type { MetadataRoute } from "next";

import { ncogaOrigin } from "@/lib/ncoga-metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/design-system"],
    },
    sitemap: `${ncogaOrigin}/sitemap.xml`,
  };
}
