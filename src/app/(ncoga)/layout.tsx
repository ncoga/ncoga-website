import { NcogaChrome } from "@/components/ncoga/ncoga-chrome";

import "@/styles/ncoga-theme.css";

export default function NcogaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NcogaChrome>{children}</NcogaChrome>;
}
