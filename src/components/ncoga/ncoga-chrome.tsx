"use client";

import { usePathname } from "next/navigation";

import { NcogaFooter } from "@/components/ncoga/ncoga-footer";
import { NcogaHeader } from "@/components/ncoga/ncoga-header";
import {
  foundationFooterGroups,
  foundationNavigation,
  homepageFooterGroups,
  homepageNavigation,
} from "@/content/ncoga-foundation";

export function NcogaChrome({ children }: { children: React.ReactNode }) {
  const preview = usePathname() === "/design-system";

  return (
    <div className="ncoga-theme">
      <NcogaHeader
        items={preview ? foundationNavigation : homepageNavigation}
        homeHref={preview ? "/design-system" : "/"}
        showLogo={!preview}
      />
      <main id="main" className="ncoga-main">
        {children}
      </main>
      <NcogaFooter
        groups={preview ? foundationFooterGroups : homepageFooterGroups}
        preview={preview}
      />
    </div>
  );
}
