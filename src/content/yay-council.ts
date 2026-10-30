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
    name: "Anna Agbotse, MPA",
    image: "/images/council-leaders/Anna-agbotse.jpg",
    width: 1053,
    height: 1872,
    photoPosition: "center 32%",
    bio: [
      "Anna Agbotse is a public administration professional and community leader passionate about diaspora engagement, social equity, and institutional development. She serves as Chair of Public Affairs and Co-Chair of Internal Affairs for NCOGA YAY, where she advances strategic partnerships, organizational development, and initiatives connecting young Ghanaians across the diaspora, including engagement with Ghana’s diplomatic missions in the U.S. and at the United Nations.",
      "Professionally, Anna works in Human Resources within the Office of Inclusion at one of the nation’s largest healthcare systems and serves on a Community Advisory Board for an NIH-supported mental health initiative focused on immigrant communities. She holds a Master of Public Administration from Rutgers University and received the Class of 1962 Presidential Public Service Award as its first undergraduate recipient in the history of Rutgers University. She has also received a special recognition award from the United States Senate and Congress.",
      "Anna brings experience in public policy, institutional collaboration, and strategic leadership to NCOGA YAY, with a focus on strengthening organizational structures, expanding partnerships, and creating meaningful opportunities for the next generation of Ghanaian diaspora leaders.",
    ],
  },
  {
    name: "Akwasi “Owura” Owusu-Asumeng",
    image: "/images/council-leaders/Akwasi.jpeg",
    width: 2694,
    height: 1948,
    bio: [
      "Akwasi “Owura” Owusu-Asumeng serves as Co-Chair of Community Engagement, Health & Philanthropy for NCOGA YAY, supporting initiatives that promote community service, health awareness, environmental sustainability, and philanthropic engagement. His role focuses on creating meaningful opportunities for young Ghanaians across the diaspora to contribute to the well-being and development of their communities.",
      "Professionally, Akwasi is an Environmental Engineer, currently serving as an Assistant Engineer II. He holds a Master’s degree in Environmental Engineering from Drexel University. His technical background brings a valuable perspective to community development, sustainability, and initiatives that encourage lasting social and environmental impact.",
    ],
  },
  {
    name: "Wendy Asante",
    image: "/images/council-leaders/wendy.jpg",
    width: 648,
    height: 648,
    bio: [
      "Wendy Asante serves as Co-Chair of Networking & Career Growth for NCOGA YAY, where she supports initiatives focused on professional development, mentorship, career advancement, and expanding networking opportunities for young Ghanaians across the diaspora.",
      "Professionally, Wendy is a recruiter at a global consulting firm, bringing experience in talent acquisition and connecting individuals with career opportunities. She holds a Bachelor’s degree in Public Administration from Rutgers University–Newark. Her professional background provides valuable insight into workforce development, career readiness, and building meaningful professional connections.",
    ],
  },
  {
    name: "Tizard Ofori Twum Carlton",
    image: "/images/council-leaders/Tizard.jpg",
    width: 849,
    height: 1080,
    bio: [
      "Tizard Ofori Twum Carlton serves as Co-Chair of Public Communications for NCOGA YAY, supporting strategic communications, diaspora engagement, and initiatives that strengthen connections between Ghanaians abroad and their homeland. He brings a background in engineering, public service, and organizational leadership, currently holding a senior avionics engineering position within the Ghana Air Force, specializing in Airbus aircraft systems.",
      "A trained computer engineer, Tizard holds a certificate in Peace Support Operations and is pursuing a Master’s degree in International Business Management at the University of East London. He also serves as Chief Technical Officer of Enviral GH, an NGO focused on electronic waste awareness in West Africa, and is the founder of Hyperspace Recording, a Ghana-based record label and talent management company. His work reflects a commitment to innovation, effective communication, and strengthening opportunities for Ghanaian communities worldwide.",
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
      "John Kyeremeh serves as Co-Chair of Networking & Career Growth for NCOGA YAY, where he supports initiatives focused on professional development, mentorship, career advancement, and creating meaningful networking opportunities for young Ghanaians across the diaspora.",
      "Professionally, John is an Administrative Lead at The Ohio State University and holds a Master’s degree in Health Administration from Franklin University. His background in healthcare administration and organizational operations brings valuable insight into leadership, professional growth, and building pathways for career development.",
    ],
  },
  {
    name: "Pearl Dodoo",
    image: "/images/council-leaders/Pearl.jpg",
    width: 673,
    height: 723,
    bio: [
      "Pearl serves as Co-Chair of Community Engagement, Health & Philanthropy for NCOGA YAY, where she supports initiatives focused on community development, health awareness, charitable outreach, and creating opportunities for meaningful engagement among Ghanaians across the diaspora.",
      "Professionally, Pearl works in Justice Administration within Ghana’s Department of Social Welfare. She is also the founder of The SheCares Foundation LBG, a nonprofit organization, and CEO of Petals and Syrup. She holds a Bachelor’s degree in Information Studies and Theatre Management, as well as a Bachelor of Science in Graphics and Web Design. Her diverse background in social welfare, entrepreneurship, and creative development brings a valuable perspective to advancing community-centered initiatives and philanthropy.",
    ],
  },
  {
    name: "Getrude Eshun",
    image: "/images/council-leaders/Getrude.jpeg",
    width: 3024,
    height: 4032,
    bio: [
      "Getrude Eshun serves as Co-Chair of Public Communications for NCOGA YAY, where she supports creative storytelling, cultural engagement, and initiatives that strengthen the organization’s visibility and connection with the Ghanaian diaspora. With a background in entertainment, modeling, and dance, she brings creativity and an appreciation for Ghanaian culture, using music, movement, and artistic expression to celebrate heritage and bring communities together.",
      "Professionally, Getrude is a Registered Nurse and holds a Bachelor of Science in Nursing from Rutgers University–Newark. Her unique combination of healthcare experience and creative talent brings a vibrant perspective to NCOGA YAY, where she is known for bringing Ghanaian culture to life through rhythm, energy, and expression.",
    ],
  },
  {
    name: "Bennet Brown",
    image: "/images/council-leaders/Bennet Brown.JPG",
    width: 4608,
    height: 3072,
    bio: [
      "Bennet Brown serves as Co-Chair of the Education Pillar for NCOGA YAY, where he supports initiatives focused on educational advancement, mentorship, skill development, and expanding access to learning opportunities for young Ghanaians across the diaspora.",
      "Professionally, Bennet is a Senior Software Engineer at a global technology firm and holds a Bachelor of Science in Computer Science from Columbia University in New York. His background in software engineering and technology brings valuable expertise to NCOGA YAY, particularly in advancing digital learning, promoting technical skills, and creating pathways for academic and professional growth.",
    ],
  },
  {
    name: "Derrick Dwamena",
    image: "/images/council-leaders/derrick.png",
    width: 914,
    height: 1036,
    bio: [
      "Derrick Dwamena serves as Co-Chair of the Education Pillar for NCOGA YAY, where he supports initiatives focused on educational access, academic mentorship, scholarship opportunities, and professional development for young Ghanaians across the diaspora.",
      "Derrick is currently a PhD student at Temple University and holds a Master’s degree from Duke University. He is a Mastercard Foundation Scholar and recipient of a PhD Fellowship Award, reflecting his academic achievements and commitment to higher education. His academic background and experience bring valuable insight to NCOGA YAY, particularly in connecting students with educational resources, mentorship, and pathways to academic success.",
    ],
  },
  {
    name: "Michael Ansong",
    image: "/images/council-leaders/Micheal .jpeg",
    width: 4032,
    height: 3024,
    bio: [
      "Michael Ansong serves as Co-Chair of Public Communications for NCOGA YAY, where he supports strategic messaging, organizational outreach, and initiatives that strengthen engagement among young Ghanaians across the diaspora. His role focuses on promoting the organization’s mission, increasing visibility, and ensuring effective communication with members and the broader community.",
      "Professionally, Michael is an Audit and Assurance professional and holds a Bachelor of Science in Accounting and Finance from Rutgers University–Camden. His background in financial analysis, accountability, and business operations brings a structured and analytical perspective to NCOGA YAY’s communications strategy and organizational development.",
    ],
  },
  {
    name: "Dr. Elizabeth Ameke",
    image: "/images/council-leaders/elizabeth.jpg",
    width: 1080,
    height: 1350,
    bio: [
      "Dr. Elizabeth Ameke serves as Co-Chair of Networking & Career Growth for NCOGA YAY, where she supports initiatives focused on professional development, mentorship, career advancement, and connecting young Ghanaians across the diaspora with meaningful opportunities.",
      "Professionally, Dr. Ameke is an Aerospace Engineer with a Doctorate in Aeronautical Engineering from Rensselaer Polytechnic Institute. Her achievements in aerospace engineering have earned her numerous awards and recognitions. She brings expertise in research, innovation, and technical leadership to NCOGA YAY, offering valuable perspectives on career development, professional networking, and creating pathways for the next generation of Ghanaian professionals.",
    ],
    link: {
      lead: "Learn more about her achievements:",
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
      "Shumuel Ofosu-Koranteng serves as Co-Chair of Community Engagement, Health & Philanthropy for NCOGA YAY, where he supports initiatives focused on health equity, community outreach, mentorship, and strengthening connections among Ghanaians across the diaspora.",
      "Born in Ghana and raised in New Jersey, Shumuel is a Physician Associate serving diverse, underserved patient populations in the Baltimore–Washington, D.C. metropolitan area. He completed his undergraduate studies at Rutgers University–Newark and earned his graduate degree from the University of Maryland, Baltimore. His background includes leadership and outreach initiatives through the American Academy of Physician Associates (AAPA). Shumuel brings experience in patient advocacy, healthcare delivery, and community service to NCOGA YAY, with a commitment to expanding access, celebrating Ghanaian heritage, and empowering communities locally and internationally.",
    ],
  },
  {
    name: "Irene Dwamena-Ansong",
    image: "/images/council-leaders/Irene.png",
    width: 1165,
    height: 1350,
    bio: [
      "Irene Dwamena-Ansong serves as Co-Chair of Internal Affairs for NCOGA YAY, where she focuses on strengthening internal operations, organizational structure, and coordination among council leaders and members. Her role supports efficient processes, effective communication, and the smooth implementation of the organization’s initiatives.",
      "Professionally, Irene is an Emergency Room Registered Nurse and holds a Bachelor of Science in Nursing (BSN) from Rutgers University. Her healthcare background brings valuable experience in organization, problem-solving, and teamwork to her leadership role within NCOGA YAY.",
    ],
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
      "William Oppong is a healthcare administration professional who serves on the Public Communications team at NCOGA YAY, supporting the organization’s digital presence, communications, and outreach initiatives. His work focuses on increasing visibility, sharing opportunities, and keeping members informed and engaged across the Ghanaian diaspora.",
      "He is currently pursuing a Bachelor’s degree in Management Information Systems at Rutgers University–Newark, with professional interests spanning healthcare, technology, digital communication, and community engagement. Through his role, William brings a technology-focused perspective to strengthening NCOGA YAY’s communications and organizational growth.",
    ],
  },
  {
    name: "Gaylord Jehu Appiah",
    image: "/images/council-leaders/Gaylord (Kweku).jpg",
    width: 2723,
    height: 2043,
    bio: [
      "Gaylord Jehu Appiah serves as Co-Chair of the NCOGA YAY Ambassador Program under the Public Affairs Pillar, supporting leadership development, member engagement, and initiatives that strengthen connections among young Ghanaians across the diaspora. He is passionate about creating opportunities for emerging leaders to connect, contribute, and grow within the organization.",
      "Professionally, Gaylord works in Health Informatics and Information Management at University Hospital and is also a photographer. He holds a Master of Computer Applications from Seton Hill University and a Bachelor’s degree in Marketing from Kumasi Technical University. Combining his background in technology, healthcare, and creative communications, he brings a multidisciplinary perspective to his work in community engagement and diaspora leadership.",
    ],
  },
  {
    name: "Kuukua Abraham",
    image: "/images/council-leaders/kukua.JPG",
    width: 1242,
    height: 2208,
    photoPosition: "center 36%",
    bio: [
      "Kuukua Abraham serves as Co-Chair of Internal Affairs for NCOGA YAY, where she supports internal operations, organizational planning, and coordination among council leaders and members. Her role focuses on strengthening administrative processes, improving operational efficiency, and supporting the effective implementation of the organization’s initiatives.",
      "Kuukua holds a Bachelor of Science in Actuarial Science and a Master of Science in Applied Science from Minnesota State University, Mankato, where she was awarded a Graduate Assistantship. Her analytical background and academic experience bring valuable skills in strategic planning, problem-solving, and organizational management to NCOGA YAY.",
    ],
  },
];

/** Owner assignment of council leaders to each pillar. Martina Antwi stays off the public roster until a photograph is available. */
export const pillarCouncilLeaders = {
  "internal-public-affairs": [
    "Anna Agbotse, MPA",
    "Kuukua Abraham",
    "Irene Dwamena-Ansong",
  ],
  education: ["Derrick Dwamena", "Bennet Brown"],
  "public-communications": [
    "Tizard Ofori Twum Carlton",
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
    "Dr. Elizabeth Ameke",
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
