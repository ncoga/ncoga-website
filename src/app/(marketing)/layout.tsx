import type { Metadata } from "next";
import localFont from "next/font/local";

import { SiteFooter } from "@/components/navigation/site-footer";
import { SiteHeader } from "@/components/navigation/site-header";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/content/site";

const manrope = localFont({
  src: "../fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  weight: "500 800",
  display: "swap",
});

const libreFranklin = localFont({
  src: "../fonts/libre-franklin-latin.woff2",
  variable: "--font-libre",
  weight: "400 700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Platinum Staffing & Recruitment | Workforce Solutions Partner",
    template: "%s | Platinum Staffing & Recruitment",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-default.png"],
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${manrope.variable} ${libreFranklin.variable} flex flex-1 flex-col`}
    >
      <OrganizationJsonLd />
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
