export const CONSENT_COOKIE = "ncoga_cookie_consent";
export const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 183;

export type ConsentChoice = "accepted" | "rejected";

const consentPattern = new RegExp(
  `(?:^|; )${CONSENT_COOKIE}=(accepted|rejected)(?:;|$)`,
);

export function readConsentChoice(): ConsentChoice | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(consentPattern);
  if (match?.[1] === "accepted" || match?.[1] === "rejected") return match[1];
  return null;
}

export function writeConsentChoice(choice: ConsentChoice) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${choice}; Path=/; Max-Age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
  window.dispatchEvent(new Event("ncoga-consent-change"));
}

export function subscribeToConsent(onChange: () => void) {
  window.addEventListener("ncoga-consent-change", onChange);
  return () => window.removeEventListener("ncoga-consent-change", onChange);
}
