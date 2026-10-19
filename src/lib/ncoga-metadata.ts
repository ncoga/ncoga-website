import type { Metadata } from "next";

export const ncogaOrigin = "https://ncoga.com";

const previewImage = {
  url: "/og-metadata.jpg",
  width: 1200,
  height: 675,
  alt: "National Council of Ghanaian Associations",
  type: "image/jpeg",
} as const;

export function ncogaPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? `${ncogaOrigin}/` : `${ncogaOrigin}${path}`;

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
      images: [previewImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [previewImage.url],
    },
  };
}
