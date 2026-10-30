"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  useCookieConsent,
  useIsClient,
} from "@/components/ncoga/use-cookie-consent";
import { writeConsentChoice } from "@/lib/cookie-consent";

export function CookieConsentBar() {
  const isClient = useIsClient();
  const consent = useCookieConsent();

  if (!isClient || consent) return null;

  return (
    <section className="ncoga-cookie-bar" aria-label="Cookie choices">
      <div className="ncoga-container ncoga-cookie-bar-inner">
        <p>
          This site stores one preference cookie so it can remember this choice.
          Accept to load the NCOGA YAY film from YouTube. Reject to leave that
          film off. There are no advertising or analytics cookies.{" "}
          <Link href="/privacy">Read the privacy policy</Link>.
        </p>
        <div className="ncoga-cookie-actions">
          <Button
            type="button"
            variant="outline"
            onClick={() => writeConsentChoice("rejected")}
          >
            Reject
          </Button>
          <Button type="button" onClick={() => writeConsentChoice("accepted")}>
            Accept
          </Button>
        </div>
      </div>
    </section>
  );
}
