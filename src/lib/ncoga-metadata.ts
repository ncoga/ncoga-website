import type { Metadata } from "next";

export const ncogaOrigin = "https://ncoga.com";

const sitePreview = {
  url: "/og-metadata.jpg",
  width: 1200,
  height: 675,
  alt: "National Council of Ghanaian Associations",
} as const;

export type NcogaShareImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

function imageType(url: string) {
  const lower = url.toLowerCase();
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".webp")) return "image/webp";
  if (lower.endsWith(".gif")) return "image/gif";
  return "image/jpeg";
}

export function ncogaPageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  /** Omit to keep the homepage card. Pass null when this route has an opengraph-image file. */
  image?: NcogaShareImage | null;
}): Metadata {
  const url = path === "/" ? `${ncogaOrigin}/` : `${ncogaOrigin}${path}`;
  const shareImage = image === undefined ? sitePreview : image;
  const images = shareImage
    ? [
        {
          url: shareImage.url,
          width: shareImage.width,
          height: shareImage.height,
          alt: shareImage.alt,
          type: imageType(shareImage.url),
        },
      ]
    : undefined;

  return {
    metadataBase: new URL(ncogaOrigin),
    title: { absolute: title },
    description,
    applicationName: "NCOGA",
    alternates: { canonical: path },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: "NCOGA",
      title,
      description,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(shareImage ? { images: [shareImage.url] } : {}),
    },
  };
}
