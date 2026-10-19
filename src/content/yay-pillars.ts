export const yayPillars = [
  {
    slug: "education",
    name: "Education",
    detail:
      "Enhancing access to educational resources and opportunities for professional and personal development among young Ghanaians.",
    action: "Find learning opportunities",
    src: "/logos/ncoga-yay-logos/website_Education_logo.png",
  },
  {
    slug: "networking-career-growth",
    name: "Networking & Career Growth",
    detail:
      "Providing platforms for professional networking and career advancement through workshops, mentorships, and networking events.",
    action: "Meet mentors and peers",
    src: "/logos/ncoga-yay-logos/networking_logo.png",
  },
  {
    slug: "community-health-philanthropy",
    name: "Community Engagement, Health & Philanthropy",
    detail:
      "Organizing community service and philanthropic activities, fostering volunteerism, and promoting health awareness, including preventive care and healthy lifestyles.",
    action: "Volunteer with your community",
    src: "/logos/ncoga-yay-logos/community_engagement_logo.png",
  },
  {
    slug: "internal-public-affairs",
    name: "Internal & Public Affairs",
    detail:
      "Providing in-house support, engaging with policymakers on issues affecting Ghanaian youth, and educating members about their civic duties and rights.",
    action: "Take part in civic work",
    src: "/logos/ncoga-yay-logos/internal_affairs_logo.png",
  },
  {
    slug: "public-communications",
    name: "Public Communications",
    detail:
      "Facilitating communication that promotes the activities and achievements of the council and its members.",
    action: "See what we share",
    src: "/logos/ncoga-yay-logos/public_communication.png",
  },
] as const;

export type YayPillar = (typeof yayPillars)[number];

export function getYayPillar(slug: string) {
  return yayPillars.find((pillar) => pillar.slug === slug);
}
