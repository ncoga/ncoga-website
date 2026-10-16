export const ncogaIdentity = {
  name: "National Council of Ghanaian Associations",
  shortName: "NCOGA",
  yayName: "NCOGA Young Adult & Youth",
} as const;

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

/** Verified against ncoga.com on 2026-10-15; see PHASE_3_HOMEPAGE_PLAN.md. */
export const homepageNavigation = [
  { label: "About", href: "/about" },
  { label: "Mission & vision", href: "/#mission" },
  { label: "NCOGA YAY", href: "/#yay" },
  { label: "Contact", href: "/contact" },
] as const;

export const homepageFooterGroups = [
  {
    title: "Explore NCOGA",
    links: [
      { label: "About NCOGA", href: "/about" },
      { label: "Mission & vision", href: "/#mission" },
      { label: "NCOGA YAY", href: "/#yay" },
    ],
  },
  {
    title: "Official resources",
    links: [
      { label: "NCOGA website", href: "https://ncoga.com/" },
      { label: "NCOGA YAY", href: "https://ncoga.com/ncoga-youth/" },
      { label: "Contact NCOGA", href: "/contact" },
    ],
  },
] as const;
