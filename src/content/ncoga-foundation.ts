import { yayPillars } from "@/content/yay-pillars";

export const ncogaIdentity = {
  name: "National Council of Ghanaian Associations",
  shortName: "NCOGA",
  yayName: "NCOGA Young Adult & Youth",
} as const;

export const ncogaSocial = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ncogayay",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ncoga-yay",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@NCOGAYAY",
  },
] as const;

export type NcogaNavItem = {
  label: string;
  href: string;
  children?: readonly NcogaNavItem[];
};

/** Anchors for the isolated Phase 2 preview. Production routes are tracked in docs/architecture/ROUTING.md. */
export const foundationNavigation = [
  { label: "Purpose", href: "#purpose" },
  { label: "System", href: "#system" },
  { label: "YAY", href: "#yay" },
  { label: "Leadership", href: "#leadership" },
  { label: "Participation", href: "#participation" },
] as const;

export const foundationFooterGroups = [
  {
    title: "Explore the foundation",
    links: [
      { label: "Editorial approach", href: "#purpose" },
      { label: "Colors and type", href: "#system" },
    ],
  },
  {
    title: "Next generation",
    links: [
      { label: "YAY variation", href: "#yay" },
      { label: "Leadership pattern", href: "#leadership" },
      { label: "Participation patterns", href: "#participation" },
    ],
  },
] as const;

/** Header destinations for the public NCOGA shell. Mission stays on the homepage. */
export const homepageNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "NCOGA YAY",
    href: "/ncoga-yay",
    children: [
      { label: "About", href: "/ncoga-yay" },
      {
        label: "Pillars",
        href: "/ncoga-yay#yay-pillars",
        children: yayPillars.map((pillar) => ({
          label: pillar.name,
          href: `/ncoga-yay/pillars/${pillar.slug}`,
        })),
      },
    ],
  },
  { label: "Our Programs", href: "/ncoga-yay/programs" },
  { label: "Partner with Us", href: "/ncoga-yay/partner" },
  { label: "Press & Media", href: "/press" },
  {
    label: "Events & Meetings",
    href: "/events",
    children: [
      { label: "NCOGA Events", href: "/events" },
      { label: "NCOGA YAY Events", href: "/ncoga-yay/events" },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const satisfies readonly NcogaNavItem[];

export const homepageFooterGroups = [
  {
    title: "Explore NCOGA",
    links: [
      { label: "About NCOGA", href: "/about" },
      { label: "Mission & vision", href: "/#mission" },
      { label: "NCOGA YAY", href: "/ncoga-yay" },
    ],
  },
  {
    title: "Official resources",
    links: [
      { label: "NCOGA website", href: "https://ncoga.com/" },
      { label: "Contact NCOGA", href: "/contact" },
    ],
  },
] as const;
