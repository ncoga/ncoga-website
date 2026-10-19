import type { Metadata } from "next";

import { NcogaChrome } from "@/components/ncoga/ncoga-chrome";
import { ncogaOrigin } from "@/lib/ncoga-metadata";

import "@/styles/ncoga-theme.css";

export const metadata: Metadata = {
  metadataBase: new URL(ncogaOrigin),
  icons: { icon: "/images/ncoga-logo.png", apple: "/images/ncoga-logo.png" },
};

export default function NcogaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NcogaChrome>{children}</NcogaChrome>;
}
