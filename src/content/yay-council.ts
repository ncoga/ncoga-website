import type { YayPillar } from "@/content/yay-pillars";

export type YayCouncilLeader = {
  name: string;
  image?: string;
  width?: number;
  height?: number;
  /** Square-crop anchor. Omitted portraits use the shared position. */
  photoPosition?: string;
  bio?: readonly string[];
  link?: {
    lead: string;
    href: string;
    label: string;
  };
};

/** Council names stay in the live-page order. Photos are the supplied files. */
export const yayCouncilLeaders: readonly YayCouncilLeader[] = [
  {
    name: "Anna Agbotse",
    image: "/images/council-leaders/Anna-agbotse.jpg",
    width: 1053,
    height: 1872,
    photoPosition: "center 32%",
    bio: [
      "Anna Agbotse is a Human Resource D&I focused professional at a healthcare system. She has a bachelor's in public administration and public Affairs with a Minor in International Affairs.",
      "She also received her master's in public administration and Nonprofit Affairs. Awards include Congressional and Senatorial recognition and the Rutgers Class of 1962 Presidential Public Service Award.",
    ],
  },
  {
    name: "Akwasi “Owura” Owusu-Asumeng",
    image: "/images/council-leaders/Akwasi.jpeg",
    width: 2694,
    height: 1948,
    bio: [
      "Akwasi “Owura” Owusu-Asumeng is an Environmental Engineer with a Master’s degree in Environmental Engineering.",
    ],
  },
  {
    name: "Wendy Asante",
    image: "/images/council-leaders/wendy.jpg",
    width: 648,
    height: 648,
    bio: [
      "Wendy Asante is a recruiter at a global wealth management firm. She holds a Bachelor’s degree in Public Administration.",
    ],
  },
  {
    name: "Tizard Ofori-Twum Carlton",
    image: "/images/council-leaders/Tizard.jpg",
    width: 849,
    height: 1080,
    bio: [
      "Tizard Ofori-Twum Carlton is a Flt Lt and an Avionics Engineer and holds multiple roles, including MTO, and Safety and Technical Compliance Officer. He currently serves as the AD engineering at the Air Force Headquarters.",
    ],
  },
  {
    name: "Mabel Adu",
    image: "/images/council-leaders/Mabel_Adu.JPG",
    width: 2400,
    height: 2400,
    bio: [
      "Mabel Adu is a people strategy and DE&I professional with experience spanning culture, analytics, employee engagement, investor diligence, business diversity, and investment analysis. She currently serves as an Associate at Vista Equity Partners, where she supports initiatives that connect people, data, and business priorities to drive meaningful organizational impact.",
      "Her background includes work across private equity, public-sector operations, community engagement, and investment management, giving her a multidisciplinary perspective on how organizations serve employees, investors, and broader communities. Mabel is especially passionate about using data, thoughtful strategy, and relationship-building to create stronger, more inclusive organizations.",
      "A summa cum laude graduate of Rutgers University–Newark, she earned her degree in Public and Nonprofit Administration and was recognized for academic excellence and leadership. Throughout her career and community involvement, she has remained committed to mentorship, service, and creating opportunities for others to thrive.",
    ],
  },
  {
    name: "John Kyeremeh",
    image: "/images/council-leaders/John.jpeg",
    width: 1536,
    height: 2304,
    photoPosition: "center 70%",
    bio: [
      "John Kyeremeh is an Administrative Lead at The Ohio State University with a Master’s degree in Health Administration.",
    ],
  },
  {
    name: "Pearl Dodoo",
    image: "/images/council-leaders/Pearl.jpg",
    width: 673,
    height: 723,
    bio: [
      "Pearl works in the Department of Social Welfare in Justice Administration. She is the Founder of The SheCares Foundation LBG, a non-profit organization, and the CEO of Petals and Syrup.",
      "Pearl holds a Bachelor’s degree in Information Studies and Theatre Management, as well as a Bachelor of Science in Graphics and Web Design.",
    ],
  },
  {
    name: "Getrude Eshun",
    image: "/images/council-leaders/Getrude.jpeg",
    width: 3024,
    height: 4032,
    bio: [
      "Getrude Eshun is a Registered Nurse with a Bachelor of Science in Nursing.",
    ],
  },
  {
    name: "Bennet Brown",
    image: "/images/council-leaders/Bennet Brown.JPG",
    width: 4608,
    height: 3072,
    bio: [
      "Bennet Brown is a Software Engineer with a Bachelor of Science in Computer Science from Columbia University.",
    ],
  },
  {
    name: "Derrick Dwamena",
    image: "/images/council-leaders/derrick.png",
    width: 914,
    height: 1036,
    bio: [
      "Derrick Dwamena is a PhD student at Temple University. He completed his Master’s degree at Duke University and is a MasterCard Scholar and recipient of a PhD Fellowship Award.",
    ],
  },
  {
    name: "Michael Ansong",
    image: "/images/council-leaders/Micheal .jpeg",
    width: 4032,
    height: 3024,
    bio: [
      "Michael Ansong is an Audit and Assurance Associate at a global consulting firm. He holds a Bachelor of Science in Accounting and Finance.",
    ],
  },
  {
    name: "Elizabeth Ameke",
    image: "/images/council-leaders/elizabeth.jpg",
    width: 1080,
    height: 1350,
    bio: [
      "Elizabeth Ameke is an Aerospace Engineer currently pursuing her Doctorate in Aeronautical Engineering at Rensselaer Polytechnic Institute. Her achievements are highlighted on her website, including numerous awards and recognition for her contributions to the aerospace field.",
    ],
    link: {
      lead: "For a detailed list of milestones, visit",
      href: "https://www.elizabethameke.com/milestones",
      label: "https://www.elizabethameke.com/milestones",
    },
  },
  {
    name: "Shumuel Ofosu-Koranteng",
    image: "/images/council-leaders/shumuel.jpg",
    width: 772,
    height: 1000,
    bio: [
      "Shumuel Ofosu-Koranteng is a Physician Assistant with a Master’s degree from the University of Maryland-Baltimore. He currently serves as the Director of Diversity for the American Academy of Physician Assistants for the 2023-2024 term.",
    ],
  },
  {
    name: "Irene Dwamena-Ansong",
    image: "/images/council-leaders/Irene.png",
    width: 1165,
    height: 1350,
  },
  {
    name: "Martina Antwi",
  },
  {
    name: "William Oppong",
    image: "/images/council-leaders/william.jpg",
    width: 1242,
    height: 2208,
    photoPosition: "center 58%",
    bio: [
      "William Oppong is a healthcare administration professional and Public Communications Executive with NCOGA YAY. He is currently pursuing a Bachelor’s degree in Management Information Systems at Rutgers University–Newark, with interests at the intersection of healthcare, technology, communication, and community engagement.",
    ],
  },
  {
    name: "Gaylord Kweku Appiah",
    image: "/images/council-leaders/Gaylord (Kweku).jpg",
    width: 2723,
    height: 2043,
  },
  {
    name: "Kuukua Abraham",
    image: "/images/council-leaders/kukua.JPG",
    width: 1242,
    height: 2208,
    photoPosition: "center 36%",
    bio: [
      "Kuukua Abraham holds a Bachelor of Science in Actuarial Science and a Master of Science in Applied Science from Minnesota State University, Mankato. She was awarded the Graduate Assistantship at Minnesota State University.",
    ],
  },
];

/** Owner assignment of council leaders to each pillar. Martina Antwi stays off the public roster until a photograph is available. */
export const pillarCouncilLeaders = {
  "internal-public-affairs": [
    "Anna Agbotse",
    "Kuukua Abraham",
    "Irene Dwamena-Ansong",
  ],
  education: ["Derrick Dwamena", "Bennet Brown"],
  "public-communications": [
    "Tizard Ofori-Twum Carlton",
    "Getrude Eshun",
    "Michael Ansong",
    "William Oppong",
  ],
  "community-health-philanthropy": [
    "Mabel Adu",
    "Pearl Dodoo",
    "Akwasi “Owura” Owusu-Asumeng",
    "Shumuel Ofosu-Koranteng",
  ],
  "networking-career-growth": [
    "Wendy Asante",
    "John Kyeremeh",
    "Elizabeth Ameke",
  ],
} as const satisfies Record<YayPillar["slug"], readonly string[]>;

export const unpublishedCouncilBiography =
  "A biography for this council member has not been published yet.";

export function visibleYayCouncilLeaders(names?: readonly string[]) {
  if (!names) {
    return yayCouncilLeaders.filter(
      (leader) => leader.name !== "Martina Antwi",
    );
  }
  return names.flatMap((name) => {
    const leader = yayCouncilLeaders.find((item) => item.name === name);
    return leader ? [leader] : [];
  });
}

export function yayCouncilInitials(name: string) {
  const withoutNickname = name.replace(/[“"][^”"]+[”"]/g, " ");
  const parts = withoutNickname.trim().split(/\s+/).filter(Boolean);
  const first = parts[0] ?? "";
  const last = parts[parts.length - 1] ?? first;
  return `${first.slice(0, 1)}${last.slice(0, 1)}`.toLocaleUpperCase("en");
}
