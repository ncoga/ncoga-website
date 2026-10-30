import { yayMembershipUrl } from "@/content/yay-september";

export const siteAnnouncement = {
  id: "yay-first-general-meeting-2026-11-07",
  hideOnOrAfter: "2026-11-09",
  timeZone: "America/New_York",
  title: "NCOGA YAY First General Membership Meeting",
  when: "Saturday, November 7, 2026 · 12:00 noon–1:00 PM EST",
  place: "Via Zoom",
  membershipNote:
    "You must be a registered NCOGA YAY member to receive the meeting link by email.",
  image: {
    src: "/images/ncoga-yay-first-general-meeting-poster.png",
    alt: "NCOGA YAY First General Meeting flyer. Saturday, November 7, 2026, 12:00 noon to 1:00 PM EST, via Zoom.",
    width: 1122,
    height: 1402,
  },
  registerHref: yayMembershipUrl,
  registerLabel: "Register to Become a Member",
  whatsappHref: "https://whatsapp.com/channel/0029Vb7Cfm8GufIvRDsD3f2p",
  whatsappLabel: "Follow the NCOGA YAY WhatsApp Channel",
  whatsappNote:
    "Follow the WhatsApp channel to get update messages from the council leaders.",
} as const;

export function isAnnouncementActive(
  hideOnOrAfter: string,
  now = new Date(),
  timeZone = siteAnnouncement.timeZone,
) {
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
  return today < hideOnOrAfter;
}
