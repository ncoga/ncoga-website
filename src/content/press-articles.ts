import {
  ambassadorApplicationUrl,
  generalMembersMeetingWhen,
  infiniteVisionUrl,
  restoreGhanaUrl,
  yayMembershipUrl,
} from "@/content/yay-september";

export const yayEventsPath = "/ncoga-yay/events";

export type PressImage = {
  kind: "image";
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type PressPlaceholder = {
  kind: "placeholder";
  tone: "heritage" | "sand";
  label: string;
};

export type PressFigure = PressImage | PressPlaceholder;

export type PressAction = {
  href: string;
  label: string;
  external: boolean;
  variant: "default" | "outline";
};

export type PressBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "links"; links: readonly { href: string; label: string }[] }
  | { kind: "entries"; items: readonly { title: string; detail: string }[] }
  | {
      kind: "themes";
      items: readonly { year: string; marks: string; body: string }[];
    }
  | { kind: "list"; items: readonly string[] }
  | { kind: "signoff"; lines: readonly string[] }
  | { kind: "actions"; actions: readonly PressAction[] }
  | {
      kind: "figure";
      figure: PressImage;
      placement: "wide" | "left" | "right" | "inset";
    };

export type PressArticle = {
  slug: string;
  title: string;
  kicker: string;
  when: string;
  dek: string;
  linkLabel: string;
  description: string;
  indexFigure: PressFigure;
  heroFigure: PressFigure;
  blocks: readonly PressBlock[];
};

const imageComing = "Image coming";

const restoreBanner: PressImage = {
  kind: "image",
  src: "/images/yay-infinite-vision-partnership-banner.png",
  alt: "Partnership announcement for NCOGA YAY and Infinite Vision, Restore Ghana, August 24, 2026.",
  width: 1774,
  height: 887,
};

const restorePortrait: PressImage = {
  kind: "image",
  src: "/images/ncoga-yay-infinite-vision.png",
  alt: "Partnership announcement for NCOGA YAY and Infinite Vision, Restore Ghana, over a river and forest landscape. August 24, 2026.",
  width: 1086,
  height: 1448,
};

const membershipGraphic: PressImage = {
  kind: "image",
  src: "/images/membership-open.png",
  alt: "Membership announcement. NCOGA YAY membership is now open and free for young Ghanaians ages 18 to 35, at home and across the diaspora.",
  width: 1254,
  height: 1254,
};

const ambassadorGraphic: PressImage = {
  kind: "image",
  src: "/images/ambassador-program-application.png",
  alt: "Program announcement. Applications are now open for the NCOGA YAY Ambassador Program, for young Ghanaians ages 18 to 35.",
  width: 1254,
  height: 1254,
};

const fishermanPoster: PressImage = {
  kind: "image",
  src: "/images/fisherman-title.PNG",
  alt: "Announcement for The Fisherman, a special screening and conversation featuring NCOGA YAY. Michael Ansong-Dwamena, moderator, and Anna Agbotse, panel speaker, in conversation with director Zoey Martinson. September 18, 2026, Quad Cinema, New York City.",
  width: 1122,
  height: 1402,
};

const fishermanSpotlight: PressImage = {
  kind: "image",
  src: "/images/fisherman-2.PNG",
  alt: "Film spotlight for The Fisherman, directed by Zoey Martinson. Quad Cinema, New York, September 18–26.",
  width: 941,
  height: 1672,
};

const fishermanScreening: PressImage = {
  kind: "image",
  src: "/images/fisherman-1.png",
  alt: "A conversation on stage at Quad Cinema, with the Quad screen behind the speakers and the audience seated in front.",
  width: 2400,
  height: 1800,
};

const healthPoster: PressImage = {
  kind: "image",
  src: "/images/health-is-wealth-title.PNG",
  alt: "Visit NCOGA YAY at UNGA 81. NCOGA YAY supports the Dorothy’s Hope Foundation side event, Health Is Wealth, on Thursday, September 24, 2026, in New York City.",
  width: 1122,
  height: 1402,
};

const healthPanel: PressImage = {
  kind: "image",
  src: "/images/health-is-wealth-1.JPG",
  alt: "Panelists seated on stage at the Health Is Wealth forum, in front of a Dorothy’s Hope Foundation banner.",
  width: 1242,
  height: 2208,
};

const healthGroup: PressImage = {
  kind: "image",
  src: "/images/health-is-wealth-2.JPG",
  alt: "Three attendees pose in front of the Health Is Wealth backdrop at the Dorothy’s Hope Foundation forum.",
  width: 1242,
  height: 2208,
};

const healthGuest: PressImage = {
  kind: "image",
  src: "/images/health-is-wealth-3.JPG",
  alt: "An attendee stands in front of the Health Is Wealth backdrop at the Dorothy’s Hope Foundation forum.",
  width: 1242,
  height: 2208,
};

const healthPortrait: PressImage = {
  kind: "image",
  src: "/images/health-is-wealth.PNG",
  alt: "An attendee in a dark suit stands before the Health Is Wealth banner at the Dorothy’s Hope Foundation forum.",
  width: 1824,
  height: 2280,
};

const townHallPoster: PressImage = {
  kind: "image",
  src: "/images/presidential-townhall.png",
  alt: "Presidential Town Hall poster. With the President of the Republic of Ghana and the Ghanaian community in the Tri-State Area. Friday, September 25, 2026, Adler Hall, New York.",
  width: 1059,
  height: 1600,
};

const horizonGraphic: PressImage = {
  kind: "image",
  src: "/images/2027-nextoutlook.png",
  alt: "A Quick Look at 2027 for NCOGA Young Adult and Youth, under the marks Activate, Connect, Execute, and Expand.",
  width: 1536,
  height: 1024,
};

const javitsGraphic: PressImage = {
  kind: "image",
  src: "/images/we-are-javits-frimpong.PNG",
  alt: "NCOGA Young Adult and Youth graphic. We Are All Javits Frimpong. A reflection on immigrant transition, safety, and community support, with the Ghana flag, books, and the New York skyline.",
  width: 1254,
  height: 1254,
};

const meetingPoster: PressImage = {
  kind: "image",
  src: "/images/ncoga-yay-first-general-meeting-poster.png",
  alt: "Poster for the NCOGA YAY first general meeting. Saturday, November 7, 2026, 12:00 noon to 1:00 PM EST, via Zoom.",
  width: 1122,
  height: 1402,
};

function placeholder(tone: PressPlaceholder["tone"]): PressPlaceholder {
  return { kind: "placeholder", tone, label: imageComing };
}

export const pressArticles = [
  {
    slug: "restore-ghana",
    title: "NCOGA YAY × Infinite Vision: Restore Ghana",
    kicker: "Partnership announcement",
    when: "August 24, 2026",
    dek: "NCOGA YAY’s first approved strategic external partnership connects young Ghanaians with Restore Ghana’s work on responsible mining and the protection of land, water, and natural resources.",
    linkLabel: "See the partnership",
    description:
      "NCOGA YAY announces its partnership with Infinite Vision through the Restore Ghana initiative, August 24, 2026.",
    indexFigure: restoreBanner,
    heroFigure: restorePortrait,
    blocks: [
      {
        kind: "paragraph",
        text: "NCOGA YAY is proud to announce its partnership with Infinite Vision through the Restore Ghana initiative, marking NCOGA YAY’s first approved strategic external partnership.",
      },
      {
        kind: "paragraph",
        text: "For many Ghanaians across the diaspora, the desire to contribute to Ghana’s development remains strong, yet opportunities to participate directly in conversations and initiatives surrounding social, economic, and community change are not always accessible or clearly defined.",
      },
      {
        kind: "paragraph",
        text: "NCOGA YAY is working to help bridge that gap.",
      },
      {
        kind: "paragraph",
        text: "Our focus is on creating tangible pathways that allow young Ghanaians across the diaspora to contribute their knowledge, skills, ideas, and service to initiatives that encourage peaceful collaboration, shared responsibility, sustainable progress, and the exchange of best practices between Ghana and its diaspora.",
      },
      {
        kind: "paragraph",
        text: "The Restore Ghana initiative provides one such opportunity. Focused on responsible mining and the protection of Ghana’s land, water bodies, and natural resources, Restore Ghana uses technology and data to better understand mining areas and land degradation while supporting more sustainable practices for Ghana’s future.",
      },
      {
        kind: "paragraph",
        text: "Based in Canada, Infinite Vision operates within a country internationally recognized for its leadership in responsible and sustainable mining practices. This creates an important opportunity for knowledge exchange, allowing established practices, innovative approaches, and lessons from the Canadian context to inform conversations around solutions that are appropriate for Ghana’s own environmental, social, and economic landscape.",
      },
      {
        kind: "paragraph",
        text: "Through this partnership, NCOGA YAY members can learn more about the work, engage with an issue of national importance, and explore opportunities to contribute from wherever they are.",
      },
      {
        kind: "quote",
        text: "Connection that leads to participation, and participation that creates tangible impact.",
      },
      {
        kind: "links",
        links: [
          { href: infiniteVisionUrl, label: "Infinite Vision: infn8vzn.org" },
          { href: restoreGhanaUrl, label: "Restore Ghana: restoreghana.ca" },
        ],
      },
    ],
  },
  {
    slug: "the-fisherman",
    title: "The Fisherman: Storytelling, Culture & the Diaspora Experience",
    kicker: "Event recap",
    when: "September 18, 2026 | Quad Cinema, New York City",
    dek: "NCOGA YAY joined the first New York City screening of The Fisherman and a conversation with director Zoey Martinson.",
    linkLabel: "Read the recap",
    description:
      "Recap of NCOGA YAY at the first New York City screening of The Fisherman, September 18, 2026, at Quad Cinema.",
    indexFigure: fishermanPoster,
    heroFigure: fishermanPoster,
    blocks: [
      {
        kind: "paragraph",
        text: "NCOGA YAY was invited to participate in the first New York City screening of The Fisherman, directed by Zoey Martinson, at Quad Cinema in Manhattan. Following the screening, Michael Ansong-Dwamena, Co-Chair of Public Communications for NCOGA YAY, moderated a special conversation with Zoey Martinson and Anna Agbotse, MPA, Chair of Public Affairs for NCOGA YAY.",
      },
      {
        kind: "paragraph",
        text: "For Anna and Michael, the evening offered more than an opportunity to see a Ghanaian film. It was an opportunity to experience Ghanaian storytelling through the lens of the diaspora and then engage directly in a conversation about what the story represents.",
      },
      {
        kind: "figure",
        figure: fishermanSpotlight,
        placement: "right",
      },
      { kind: "heading", text: "A Story That Felt Like Home" },
      {
        kind: "paragraph",
        text: "For both Anna and Michael, one of the most memorable qualities of The Fisherman was how unmistakably Ghanaian it felt. The humor, atmosphere, community, relationships, and everyday moments portrayed throughout the film created a sense of familiarity. For members of the diaspora, those details can carry particular meaning. A film can become more than entertainment; it can reconnect audiences with places, experiences, and cultural expressions that still feel like home even when home is thousands of miles away.",
      },
      {
        kind: "quote",
        text: "It is authentically Ghanaian from beginning to end. You can feel the waves, the atmosphere, the emotion, the hustle, and the joyful presence of the culture in every part of the film. It brings you a little closer to home and reminds you what home feels like.",
      },
      {
        kind: "figure",
        figure: fishermanScreening,
        placement: "wide",
      },
      { kind: "heading", text: "Carrying Culture Forward" },
      {
        kind: "paragraph",
        text: "The panel conversation went deeper into the themes behind the film. Michael guided the discussion through questions of tradition and change, Ghanaian identity, younger generations, environmental responsibility, and the preservation of community.",
      },
      {
        kind: "paragraph",
        text: "From Anna and Michael’s perspectives as young Ghanaians in the diaspora, one question was particularly relevant: How do younger generations carry culture forward while still allowing it to evolve?",
      },
      {
        kind: "paragraph",
        text: "Their participation reflected two areas of NCOGA YAY’s work. Through public communications, there is an opportunity to amplify Ghanaian stories and the people creating them. Through Public Affairs, there is an opportunity to connect those stories to larger conversations affecting Ghana, its communities, and its diaspora.",
      },
      {
        kind: "paragraph",
        text: "Together, those perspectives reflect something central to NCOGA YAY: connection to Ghana does not have to exist only through geography. It can also happen through storytelling, dialogue, representation, and creating spaces where young people can participate in conversations about culture and community.",
      },
      { kind: "heading", text: "Where to Watch" },
      {
        kind: "paragraph",
        text: "Following its New York theatrical run, The Fisherman continues to reach wider audiences. Executive Producer Yvonne Orji shared on Good Morning America that the film will be available to stream on Apple TV and Prime Video beginning September 30, 2026.",
      },
      {
        kind: "paragraph",
        text: "That expanded access gives more Ghanaians and members of the diaspora an opportunity to experience the film for themselves.",
      },
      {
        kind: "paragraph",
        text: "From Anna and Michael’s perspective, the recommendation is simple:",
      },
      { kind: "heading", text: "Make time to see it." },
    ],
  },
  {
    slug: "health-is-wealth",
    title: "Health Is Wealth: A Conversation Worth Bringing Home",
    kicker: "Event recap",
    when: "September 24, 2026 | UNGA 81 side event, New York City",
    dek: "NCOGA YAY supported Dorothy’s Hope Foundation at the Health Is Wealth forum during the 81st United Nations General Assembly.",
    linkLabel: "Join the conversation",
    description:
      "Recap of NCOGA YAY at the Health Is Wealth forum, a UNGA 81 side event in New York City on September 24, 2026.",
    indexFigure: healthPoster,
    heroFigure: healthPoster,
    blocks: [
      {
        kind: "paragraph",
        text: "There are some conversations we should not wait until later in life to have.",
      },
      {
        kind: "paragraph",
        text: "On September 24, NCOGA YAY joined Dorothy’s Hope Foundation (DHF) in New York City as a supporter of the Health Is Wealth: Global Women’s Health, Leadership and Impact Forum, held alongside the 81st United Nations General Assembly. The gathering brought together healthcare professionals, advocates, leaders and members of the diaspora for a wide-ranging conversation about women’s health and the systems surrounding it.",
      },
      {
        kind: "paragraph",
        text: "Representing NCOGA YAY at the forum were Anna Agbotse, MPA, Chair of Public Affairs, and Williams Oppong. Their participation provided an opportunity to listen to professionals and advocates who have spent years working across cancer care, public health, advocacy, community support and women’s health.",
      },
      {
        kind: "figure",
        figure: healthPanel,
        placement: "right",
      },
      {
        kind: "paragraph",
        text: "Breast cancer was at the heart of much of that conversation.",
      },
      {
        kind: "paragraph",
        text: "The discussions moved beyond general awareness. Speakers and panelists addressed prevention and early detection, treatment therapies, the breast cancer journey and social support, women’s mental health, health infrastructure, and investment. The program also examined how Africa and its diaspora can build stronger health partnerships across borders.",
      },
      {
        kind: "paragraph",
        text: "For Anna and Williams, there was a lot to take in. They heard not only from professionals working across cancer care and public health, but also from people whose lived experiences give the work its urgency.",
      },
      {
        kind: "paragraph",
        text: "Dorothy Amuah, founder of Dorothy’s Hope Foundation, is herself a breast cancer survivor. What began from her personal experience has grown into an organization working on awareness, early detection, patient support, and stronger cancer-care systems in Ghana. Since its founding in 2014, DHF has taken cancer education and screening into communities and has supported improvements to cancer-care infrastructure, including work at Korle Bu Teaching Hospital.",
      },
      {
        kind: "paragraph",
        text: "That history made the conversation feel less theoretical.",
      },
      {
        kind: "figure",
        figure: healthGroup,
        placement: "left",
      },
      {
        kind: "heading",
        text: "What Do Young People Do With This Information?",
      },
      {
        kind: "paragraph",
        text: "For Anna and Williams, that was one of the questions they left thinking about.",
      },
      {
        kind: "paragraph",
        text: "We often think of breast cancer as a conversation for patients, survivors, doctors or perhaps older generations. But awareness starts much earlier than diagnosis.",
      },
      {
        kind: "paragraph",
        text: "Young people are already part of families where these conversations matter. We are daughters and sons, siblings, friends, caregivers, and future parents. We are also entering careers in medicine, technology, communications, research, policy, business, and countless other fields that influence how information and resources reach communities.",
      },
      {
        kind: "paragraph",
        text: "Our role does not have to begin with expertise.",
      },
      {
        kind: "paragraph",
        text: "It can begin by knowing more than we knew yesterday. By sharing accurate information instead of misinformation. By becoming comfortable talking about screening and early detection. By listening to survivors. By supporting the people and organizations that have been doing this work long before we entered the room.",
      },
      {
        kind: "paragraph",
        text: "And eventually, by asking where our own skills may be useful.",
      },
      {
        kind: "figure",
        figure: healthGuest,
        placement: "right",
      },
      { kind: "heading", text: "A Conversation That Continues" },
      {
        kind: "paragraph",
        text: "One part of the forum looked specifically at bridging Africa and the diaspora through health investment across borders. That discussion was particularly relevant for a diaspora organization like NCOGA YAY.",
      },
      {
        kind: "paragraph",
        text: "Anna and Williams did not leave Health Is Wealth believing they had the answers.",
      },
      {
        kind: "paragraph",
        text: "They left with better questions.",
      },
      {
        kind: "paragraph",
        text: "How do we make conversations about breast cancer easier to have in our families? How do we reach young people before health information becomes personally urgent? How can diaspora communities strengthen work already happening in Ghana without assuming we know what communities need? And how do we turn awareness into something people can actually use?",
      },
      {
        kind: "paragraph",
        text: "Those are conversations worth continuing.",
      },
      {
        kind: "figure",
        figure: healthPortrait,
        placement: "inset",
      },
      {
        kind: "quote",
        text: "Health is wealth. But knowledge, early action, and community may be some of the ways we protect it.",
      },
    ],
  },
  {
    slug: "presidential-diaspora-town-hall",
    title: "NCOGA YAY at the Presidential Diaspora Town Hall",
    kicker: "Community and diaspora engagement",
    when: "Friday, September 25, 2026",
    dek: "NCOGA YAY was represented at the Presidential Diaspora Town Hall.",
    linkLabel: "See the town hall",
    description:
      "NCOGA YAY was represented at the Presidential Diaspora Town Hall on September 25, 2026.",
    indexFigure: townHallPoster,
    heroFigure: townHallPoster,
    blocks: [
      {
        kind: "paragraph",
        text: "NCOGA YAY was represented at the Presidential Diaspora Town Hall, continuing our commitment to ensuring young Ghanaian diaspora voices are present in important spaces of dialogue, connection, and engagement.",
      },
    ],
  },
  {
    slug: "membership-2026-2027",
    title: "Membership Opens for 2026–2027",
    kicker: "Membership announcement",
    when: "October 2026",
    dek: "Young Ghanaians ages 18–35 across the United States and Ghana can join NCOGA YAY. Membership is free.",
    linkLabel: "Become a member",
    description:
      "NCOGA YAY membership is open for 2026–2027. Membership is free for young Ghanaians ages 18–35.",
    indexFigure: membershipGraphic,
    heroFigure: membershipGraphic,
    blocks: [
      {
        kind: "paragraph",
        text: "We’re opening our doors. And we hope you’ll find your place here.",
      },
      {
        kind: "paragraph",
        text: "Different stories. One Ghanaian diaspora. A stronger tomorrow.",
      },
      {
        kind: "paragraph",
        text: "Across the United States are young Ghanaians building careers, pursuing education, serving their communities, creating new lives, and finding their own ways to remain connected to Ghana.",
      },
      {
        kind: "paragraph",
        text: "Our stories are different. Some of us were born in Ghana. Some were raised there. For others, Ghana lives through our families, our culture, and the communities that shaped us.",
      },
      {
        kind: "paragraph",
        text: "But there is something powerful about finding one another.",
      },
      { kind: "heading", text: "A Legacy That Continues" },
      {
        kind: "paragraph",
        text: "Since 1986, NCOGA has worked to bring the Ghanaian community together around a shared commitment to culture, community, service, and representation. Forty years later, NCOGA YAY is carrying that legacy forward by creating an intentional space for Ghanaian young adults and youth.",
      },
      {
        kind: "paragraph",
        text: "For the past year and a half, we have focused on building that foundation—creating a space where our different experiences, perspectives, and ideas do not have to make us less united. They can make our representation stronger.",
      },
      {
        kind: "paragraph",
        text: "Now, we are ready to welcome you.",
      },
      { kind: "heading", text: "Membership Is Now Open" },
      {
        kind: "paragraph",
        text: "Young Ghanaians ages 18–35 across the United States and Ghana. Membership is free.",
      },
      { kind: "heading", text: "Find Your Place Through Our Five Pillars" },
      {
        kind: "entries",
        items: [
          {
            title: "Education",
            detail: "Educational resources and opportunities for growth.",
          },
          {
            title: "Networking & Career Growth",
            detail:
              "Professional connections, mentorship and career development.",
          },
          {
            title: "Community Engagement, Health & Philanthropy",
            detail:
              "Service, wellness, philanthropy, and community connection.",
          },
          {
            title: "Internal & Public Affairs",
            detail:
              "Organizational engagement, advocacy, and external relationships.",
          },
          {
            title: "Public Communications",
            detail:
              "Storytelling, visibility, and communication across our community.",
          },
        ],
      },
      {
        kind: "paragraph",
        text: "Through our five pillars, members can connect, discover opportunities, serve their communities, grow professionally, celebrate our culture, and contribute their own ideas to what we build next.",
      },
      {
        kind: "paragraph",
        text: "You do not need a title. You do not need to know exactly where you fit.",
      },
      {
        kind: "paragraph",
        text: "You can simply start by showing up.",
      },
      {
        kind: "paragraph",
        text: "Come find your place. Now, we build together.",
      },
      {
        kind: "signoff",
        lines: [
          "With pride and anticipation for what we will build together,",
          "Your Honorable Council Leaders",
          "NCOGA YAY",
        ],
      },
      {
        kind: "actions",
        actions: [
          {
            href: yayMembershipUrl,
            label: "Become a member",
            external: true,
            variant: "default",
          },
        ],
      },
    ],
  },
  {
    slug: "ambassador-program",
    title: "NCOGA YAY Ambassador Program",
    kicker: "Program announcement",
    when: "October 2026",
    dek: "The inaugural Ambassador cohort is welcoming interest and nominations from young adults ages 18–35.",
    linkLabel: "Express interest",
    description:
      "The NCOGA YAY Ambassador Program is welcoming interest and nominations for its inaugural cohort.",
    indexFigure: ambassadorGraphic,
    heroFigure: ambassadorGraphic,
    blocks: [
      {
        kind: "paragraph",
        text: "Connecting people. Creating opportunity. Building what’s next.",
      },
      {
        kind: "heading",
        text: "A Stronger Diaspora Begins With Opportunity to Lead",
      },
      {
        kind: "paragraph",
        text: "The NCOGA YAY Ambassador Program is an intentional entry point for emerging leaders who want to become more involved with NCOGA YAY and contribute to building community, creating opportunity, and strengthening connections across the Ghanaian diaspora.",
      },
      {
        kind: "paragraph",
        text: "Ambassadors will work alongside NCOGA YAY leadership to support programs, events, outreach, promotions, membership engagement, and major organizational initiatives. They will not simply observe the work from the outside. They will have opportunities to participate in it, learn from it, and help move it forward.",
      },
      {
        kind: "paragraph",
        text: "For NCOGA YAY, the program is also an investment in succession. The people who join today may become tomorrow’s project leads, council leaders, board members, and community builders. We are looking not only for people who already carry leadership titles but also for people with the potential to grow when given access, exposure, responsibility, and support.",
      },
      { kind: "heading", text: "More Than an Ambassador Title" },
      {
        kind: "paragraph",
        text: "The experience is designed to create value for both the organization and the people who serve. Ambassadors can build leadership experience, expand their professional and community networks, gain exposure to NCOGA YAY leaders and partners, contribute ideas, and discover where their strengths can make the greatest impact.",
      },
      {
        kind: "paragraph",
        text: "Depending on interests, strengths, experience, and organizational needs, Ambassadors may support Education, Networking & Career Growth, Community Engagement, Health & Philanthropy, Internal & Public Affairs, or Public Communications.",
      },
      {
        kind: "paragraph",
        text: "Rooted in culture. Built for what’s next. Show up. Share the work. Bring others with you.",
      },
      {
        kind: "paragraph",
        text: "Participation. Connection. Purposeful representation. Leadership development.",
      },
      { kind: "heading", text: "What Ambassadors Will Do" },
      {
        kind: "paragraph",
        text: "Ambassadors may promote approved events and opportunities within their personal, professional, social medias, campus, and community networks; support event planning and preparation; welcome and engage attendees; assist with outreach and membership growth; and contribute to special projects across NCOGA YAY.",
      },
      {
        kind: "paragraph",
        text: "Their networks are part of their impact. A shared flyer, an invitation to a friend, a professional introduction, or a community conversation can help NCOGA YAY reach people who may not otherwise encounter the organization.",
      },
      { kind: "heading", text: "Who We Are Looking For" },
      {
        kind: "paragraph",
        text: "The program is intended for young adults ages 18–35 who are community-minded, reliable, professional, willing to participate, and interested in leadership development. We welcome active leaders as well as people who are still discovering how and where they want to lead.",
      },
      {
        kind: "paragraph",
        text: "Individuals may express interest directly. Board members, council leaders, members, friends, colleagues, community supporters, and others may also nominate someone they believe would be a strong fit.",
      },
      { kind: "heading", text: "A Pathway to What Comes Next" },
      {
        kind: "paragraph",
        text: "NCOGA YAY wants ambassadors to grow with the organization. Through meaningful participation, exposure to leadership, professional connections, mentorship, and increasing responsibility, the program creates a pathway for continued involvement and future leadership.",
      },
      {
        kind: "paragraph",
        text: "The inaugural cohort will help establish the culture, expectations, and standard of a program designed to grow with NCOGA YAY.",
      },
      { kind: "heading", text: "Be Part of What Comes Next" },
      {
        kind: "paragraph",
        text: "The NCOGA YAY Ambassador Program is now welcoming interest for its inaugural cohort. Become an Ambassador yourself or nominate an emerging leader who should be part of this opportunity.",
      },
      {
        kind: "actions",
        actions: [
          {
            href: ambassadorApplicationUrl,
            label: "Express interest or nominate an ambassador",
            external: true,
            variant: "default",
          },
          {
            href: "/ncoga-yay/programs#ambassador-program",
            label: "Ambassador Program",
            external: false,
            variant: "outline",
          },
        ],
      },
    ],
  },
  {
    slug: "council-leadership-2026-2027",
    title: "Council Leadership: Aligning for 2026–2027",
    kicker: "Leadership update",
    when: "October 2026",
    dek: "Council Leadership has defined a clearer model for organization-wide programs and pillar-based experiences.",
    linkLabel: "Read the direction",
    description:
      "NCOGA YAY Council Leadership describes how members, pillars, and organization-wide programs will work in 2026–2027.",
    indexFigure: placeholder("heritage"),
    heroFigure: placeholder("heritage"),
    blocks: [
      {
        kind: "paragraph",
        text: "A clearer model for how members participate, how pillars build experiences, and how organization-wide programs bring the wider NCOGA YAY community together.",
      },
      {
        kind: "paragraph",
        text: "Over the past several months, NCOGA YAY Council Leadership has been doing more than planning for another year. We have been defining how the organization should actually work as membership grows, opportunities expand, and more young Ghanaians find their place within NCOGA YAY.",
      },
      {
        kind: "paragraph",
        text: "The result is a clearer model for 2026–2027.",
      },
      {
        kind: "heading",
        text: "One Organization. Different Ways to Participate.",
      },
      {
        kind: "paragraph",
        text: "Not every NCOGA YAY experience will come from a single pillar. Some initiatives will be organization-wide programs, bringing members, leaders, pillars, and partners together around opportunities that advance the broader mission of NCOGA YAY.",
      },
      {
        kind: "paragraph",
        text: "One of the first major examples being developed is Mission 50,000.",
      },
      {
        kind: "paragraph",
        text: "Led collaboratively by the Education and Internal & Public Affairs pillars, Mission 50,000 is being developed as an organization-wide initiative designed to strengthen how NCOGA YAY identifies, reaches, and connects with young Ghanaians across the United States.",
      },
      {
        kind: "paragraph",
        text: "And that is only a small preview of what is being built.",
      },
      {
        kind: "heading",
        text: "Organization-Wide Programs and Pillar-Based Experiences",
      },
      {
        kind: "paragraph",
        text: "Alongside organization-wide programs, members will also have access to pillar-based experiences connected more directly to their interests.",
      },
      {
        kind: "entries",
        items: [
          {
            title: "Education",
            detail: "Learning and educational opportunities.",
          },
          {
            title: "Networking & Career Growth",
            detail: "Professional connection and career development.",
          },
          {
            title: "Community Engagement, Health & Philanthropy",
            detail: "Service, wellness, and community experiences.",
          },
          {
            title: "Internal & Public Affairs",
            detail:
              "Organizational engagement, advocacy, and external relationships.",
          },
          {
            title: "Public Communications",
            detail: "Storytelling, visibility, and member engagement.",
          },
        ],
      },
      {
        kind: "paragraph",
        text: "The pillars give members a home base. The organization gives them a wider community.",
      },
      { kind: "heading", text: "What We Have Been Building" },
      {
        kind: "paragraph",
        text: "This structure has already begun taking shape.",
      },
      {
        kind: "paragraph",
        text: "Throughout 2026, Council Leadership has worked to clarify pillar responsibilities, strengthen collaboration between chairs and co-chairs, create more consistent communication systems, establish clearer pathways for member participation, develop the Ambassador Program, evaluate strategic external opportunities, and build programs that can involve more than one area of the organization.",
      },
      {
        kind: "paragraph",
        text: "We have also become more intentional about opportunity itself.",
      },
      {
        kind: "paragraph",
        text: "NCOGA YAY does not need to create every experience from scratch. Sometimes our role is to build the program. Other times, it is to create the connection, establish the partnership, open the door, or make an existing opportunity more accessible to our members.",
      },
      {
        kind: "entries",
        items: [
          { title: "Restore Ghana", detail: "Strategic partnership" },
          { title: "The Fisherman", detail: "Culture and storytelling" },
          { title: "Health Is Wealth", detail: "Health and diaspora dialogue" },
        ],
      },
      {
        kind: "paragraph",
        text: "Different experiences. Different entry points. One growing network.",
      },
      { kind: "heading", text: "The Leadership Behind It" },
      {
        kind: "paragraph",
        text: "For Council Leadership, this next phase also requires a different way of leading.",
      },
      {
        kind: "paragraph",
        text: "Chairs and co-chairs are not simply responsible for producing events. They are responsible for building their pillar communities: connecting with members, understanding their interests, developing experiences with purpose, collaborating across the Council, and helping members move from simply joining NCOGA YAY to actually participating in it.",
      },
      {
        kind: "paragraph",
        text: "That distinction matters.",
      },
      {
        kind: "paragraph",
        text: "We want members to know who their leaders are. We want leaders to know who their members are. And we want the ideas, experiences, and talents within each pillar to help shape what comes next.",
      },
      { kind: "heading", text: "From Building to Doing" },
      {
        kind: "paragraph",
        text: "Our two organizational themes are intentionally connected:",
      },
      {
        kind: "themes",
        items: [
          {
            year: "2026",
            marks: "Refocus • Align • Build • Prepare",
            body: "Strengthen the structure, clarify responsibilities, establish relationships, and prepare for greater activity.",
          },
          {
            year: "2027",
            marks: "Activate • Connect • Execute • Expand",
            body: "More member experiences, cross-pillar collaboration, organization-wide initiatives, partnerships, and opportunities.",
          },
        ],
      },
      {
        kind: "paragraph",
        text: "We are still building, and we expect the organization to continue evolving as our members become a greater part of it. But the direction is becoming clearer.",
      },
      {
        kind: "quote",
        text: "The foundation was never meant to be the finished product. It was built so that our members would have something strong enough to build upon.",
      },
    ],
  },
  {
    slug: "2027-horizon",
    title: "A Quick Look at the 2027 Horizon",
    kicker: "Organizational update",
    when: "October 2026",
    dek: "2027 will mark an important year of activation for NCOGA YAY.",
    linkLabel: "See the horizon",
    description:
      "NCOGA YAY looks toward 2027 as a year of activation, from new initiatives to expanded member opportunities.",
    indexFigure: horizonGraphic,
    heroFigure: horizonGraphic,
    blocks: [
      {
        kind: "paragraph",
        text: "2027 will mark an important year of activation for NCOGA YAY.",
      },
      {
        kind: "paragraph",
        text: "From new initiatives and partnerships to expanded member opportunities and community engagement, we’re preparing to move from building the foundation to putting that foundation into action.",
      },
    ],
  },
  {
    slug: "first-general-members-meeting",
    title: "Our First General Members Meeting",
    kicker: "Member update",
    when: generalMembersMeetingWhen,
    dek: "Council Leadership and NCOGA YAY members meet via Zoom on Saturday, November 7, 2026, from 12:00 noon to 1:00 PM EST.",
    linkLabel: "Save the date",
    description:
      "NCOGA YAY’s first general members meeting is Saturday, November 7, 2026, from 12:00 noon to 1:00 PM EST, via Zoom.",
    indexFigure: meetingPoster,
    heroFigure: meetingPoster,
    blocks: [
      {
        kind: "paragraph",
        text: "NCOGA YAY members will gather for our First General Members Meeting to hear organizational updates, connect with leadership, learn what’s happening across our pillars, and get a closer look at what’s ahead.",
      },
      {
        kind: "paragraph",
        text: "Join Council Leadership and fellow NCOGA YAY members as we officially come together as one community.",
      },
      { kind: "heading", text: "What to Expect" },
      {
        kind: "list",
        items: [
          "Meet Council Leadership",
          "Connect with the NCOGA YAY community",
          "Learn about our five pillars",
          "Hear organizational updates",
          "Explore partnerships and member opportunities",
          "Preview our 2027 direction",
        ],
      },
      {
        kind: "quote",
        text: "Your membership is where the connection begins. Your participation is what builds the community.",
      },
      {
        kind: "paragraph",
        text: "The meeting is for NCOGA YAY members. It is virtual via Zoom. A meeting link is not published on this page.",
      },
      {
        kind: "actions",
        actions: [
          {
            href: yayEventsPath,
            label: generalMembersMeetingWhen,
            external: false,
            variant: "outline",
          },
        ],
      },
    ],
  },
  {
    slug: "we-are-all-javits-frimpong",
    title:
      "We Are All Javits Frimpong: Remembering His Life, Rethinking How We Welcome Our Own.",
    kicker: "In remembrance",
    when: "October 30, 2026",
    dek: "Remembering a young Ghanaian life and reflecting on the immigrant experience, the sacrifices of our families, and our responsibility to the next generation.",
    linkLabel: "Read the reflection",
    description:
      "Remembering a young Ghanaian life and reflecting on the immigrant experience, the sacrifices of our families, and our responsibility to the next generation.",
    indexFigure: javitsGraphic,
    heroFigure: javitsGraphic,
    blocks: [
      {
        kind: "paragraph",
        text: "On October 29, 2026, 15-year-old Javits Frimpong, a young Ghanaian who had moved to the United States just a year earlier, was tragically shot and killed in the Bronx, New York, while reportedly making his way to school.",
      },
      {
        kind: "paragraph",
        text: "Javits had come to America to join his father, Thomas Frimpong, with the hope of building a better future. Instead, a journey that began with sacrifice, separation, and the promise of opportunity ended in unimaginable tragedy.",
      },
      {
        kind: "paragraph",
        text: "According to reports from News 12 Bronx and other media outlets, Javits attended DreamYard Preparatory School and had reportedly experienced repeated bullying. His father revealed that the school principal had recently contacted him about an incident involving two students who were subsequently suspended.",
      },
      {
        kind: "paragraph",
        text: "Speaking to reporters about the loss of his son, Mr. Frimpong said:",
      },
      {
        kind: "quote",
        text: "He’s my everything.",
      },
      {
        kind: "paragraph",
        text: "In those few words, we are reminded that this was not simply another tragic headline. This was someone’s son. Someone’s entire world. A young Ghanaian whose future was still being written.",
      },
      { kind: "heading", text: "We Were All Once Javits Frimpong" },
      {
        kind: "paragraph",
        text: "For many of us who arrived in the United States as children, Javits’ story cuts deeper than words can explain.",
      },
      {
        kind: "paragraph",
        text: "We remember what it meant to arrive in a country where almost everything was unfamiliar.",
      },
      {
        kind: "paragraph",
        text: "We had to learn a new educational system, adjust our vocabulary, understand cultural differences, navigate unfamiliar expectations, and somehow find our place in a society we were still trying to understand.",
      },
      {
        kind: "paragraph",
        text: "And we were children.",
      },
      {
        kind: "paragraph",
        text: "At an age when we should have been concerned with friendships, schoolwork, and discovering ourselves, many of us were quietly doing the difficult work of learning how to belong.",
      },
      {
        kind: "paragraph",
        text: "We wanted to fit in, but not necessarily to be noticed. Because sometimes, being noticed brought attention we did not know how to handle. And that attention was not always praise or encouragement. Sometimes, it came with ridicule, rejection, or even danger.",
      },
      {
        kind: "paragraph",
        text: "For many of us, silence became a form of protection.",
      },
      {
        kind: "paragraph",
        text: "One of our NCOGA YAY leaders recalls spending nearly two years of her early experience in the United States hiding in the school library during lunch. Not because she was being bullied in that space, but because the environment was so unfamiliar that even navigating the cafeteria felt overwhelming.",
      },
      {
        kind: "paragraph",
        text: "The library became a place where she could exist without having to explain herself.",
      },
      {
        kind: "paragraph",
        text: "She also experienced bullying during her transition, and her teachers intervened. Her experience was not identical to Javits’, but it reflects the quiet struggles many immigrant children face while learning to navigate a new society.",
      },
      {
        kind: "paragraph",
        text: "In Javits’ case, his father reported that school leadership was aware of a bullying incident and had taken disciplinary action. Yet the tragedy that followed raises difficult questions about how we support young people, respond to their concerns, and ensure they feel safe.",
      },
      {
        kind: "paragraph",
        text: "Because learning to belong should never mean learning to survive alone.",
      },
      {
        kind: "heading",
        text: "Behind Every Immigrant Child Is a Family That Sacrificed",
      },
      {
        kind: "paragraph",
        text: "There is another part of Javits’ story that deserves our attention: his father.",
      },
      {
        kind: "paragraph",
        text: "For many Ghanaian immigrant families, reunification is not a simple journey.",
      },
      {
        kind: "paragraph",
        text: "We remember the years spent apart from our parents. The phone calls. The financial sacrifices. The paperwork. The uncertainty of when we would see each other again.",
      },
      {
        kind: "paragraph",
        text: "Our parents did not simply bring us to America. Many spent years working toward the possibility of holding us again, raising us under the same roof, and giving us opportunities they hoped would change our futures.",
      },
      {
        kind: "paragraph",
        text: "That sacrifice came at a cost.",
      },
      {
        kind: "paragraph",
        text: "It meant long working hours, missed milestones, emotional distance, and decisions that many of us would not fully understand until adulthood.",
      },
      {
        kind: "paragraph",
        text: "Like many immigrant parents, Mr. Frimpong worked to create a better future for his child. According to media reports, he worked as a taxi driver and had reunited with Javits in the United States just one year earlier.",
      },
      {
        kind: "paragraph",
        text: "One of our organization’s leaders recalls her mother leaving early for work, sometimes leaving her to navigate an unfamiliar environment independently. Her mother’s frequent reminder was simple:",
      },
      {
        kind: "quote",
        text: "Don’t go outside. It’s not safe.",
      },
      {
        kind: "paragraph",
        text: "There was love in that warning. There was fear. There was the understanding that a parent could not always be physically present to protect their child.",
      },
      {
        kind: "paragraph",
        text: "Now imagine doing everything you can to protect your child, only to lose that child on an ordinary morning when he was simply trying to get to school.",
      },
      {
        kind: "paragraph",
        text: "What happens to those years of sacrifice? What happens to the dreams that brought a family across an ocean? What happens to the future a parent worked so hard to make possible?",
      },
      {
        kind: "paragraph",
        text: "For the Frimpong family, those questions now carry a weight that no parent should ever have to endure.",
      },
      {
        kind: "heading",
        text: "What Does It Truly Mean to Welcome an Immigrant Child?",
      },
      {
        kind: "paragraph",
        text: "Javits’ death raises painful questions about bullying, school safety, gun violence, and the responsibility of institutions to protect young people.",
      },
      {
        kind: "paragraph",
        text: "But for our Ghanaian diaspora community, it must also raise a broader question:",
      },
      {
        kind: "paragraph",
        text: "What resources exist to support a child who arrives in this country and must learn an entirely new way of life?",
      },
      {
        kind: "paragraph",
        text: "We often celebrate the opportunities immigration creates. We speak about education, economic mobility, professional growth, and the promise of a better future.",
      },
      {
        kind: "paragraph",
        text: "But how often do we discuss the work it takes for a child to access those opportunities?",
      },
      {
        kind: "paragraph",
        text: "Who helps them understand the school system? Who helps them navigate unfamiliar social environments? Who recognizes when their silence is not comfort, but confusion? Who ensures that parents working long hours know where to turn for support?",
      },
      {
        kind: "paragraph",
        text: "And when a child reports feeling unsafe, how do we ensure those concerns are heard and appropriately addressed?",
      },
      {
        kind: "paragraph",
        text: "These questions remind us that access to opportunity is not the same as having the support necessary to succeed within it.",
      },
      {
        kind: "paragraph",
        text: "We need accessible resources, meaningful parent engagement, trusted community connections, and safe spaces where young immigrants can ask questions, share their experiences, and find guidance.",
      },
      {
        kind: "paragraph",
        text: "A child should not have to figure everything out alone simply because their family made the courageous decision to pursue a better future.",
      },
      {
        kind: "heading",
        text: "We Cannot Allow This to Become Another Forgotten Story",
      },
      {
        kind: "paragraph",
        text: "The death of Javits Frimpong has left a painful mark on the Ghanaian diaspora community.",
      },
      {
        kind: "paragraph",
        text: "For many of us, the grief feels personal, even though we never met him.",
      },
      {
        kind: "paragraph",
        text: "Because we recognize something of ourselves in his story.",
      },
      {
        kind: "paragraph",
        text: "We remember being the new child. The quiet student. The one learning how to pronounce words differently. The one trying to understand the cafeteria, the classroom, the friendships, and the unspoken rules of a society we had only recently entered.",
      },
      {
        kind: "paragraph",
        text: "We remember the parents who worked long hours and sacrificed so much for us to be here.",
      },
      {
        kind: "paragraph",
        text: "And we recognize how differently our own stories might have unfolded.",
      },
      {
        kind: "paragraph",
        text: "We were all once Javits Frimpong. The difference is that we are still here to tell our stories.",
      },
      {
        kind: "paragraph",
        text: "That realization must move us beyond mourning.",
      },
      {
        kind: "paragraph",
        text: "We must continue to demand justice for Javits and accountability for those responsible for his death. We must also support a thorough investigation into the circumstances surrounding the shooting, including the bullying concerns raised by his father, without assuming a connection that has not yet been established.",
      },
      {
        kind: "paragraph",
        text: "But justice must also inspire us to consider how we can better protect the children who are still here.",
      },
      {
        kind: "paragraph",
        text: "As young Ghanaians who have navigated similar experiences, we have a responsibility to help shape a better pathway for those who come after us.",
      },
      {
        kind: "paragraph",
        text: "A pathway where newly arrived Ghanaian children and their families can find information, support, community, and opportunities without having to navigate every challenge in isolation.",
      },
      {
        kind: "paragraph",
        text: "A pathway where young people can grow, contribute, and build meaningful lives in the United States while remaining connected to their heritage and the future of Ghana.",
      },
      {
        kind: "paragraph",
        text: "A pathway where the next generation does not have to choose between fitting in and feeling safe.",
      },
      { kind: "heading", text: "To Javits and the Frimpong Family" },
      {
        kind: "paragraph",
        text: "To Mr. Thomas Frimpong and the entire Frimpong family, we extend our deepest condolences.",
      },
      {
        kind: "paragraph",
        text: "No words can restore the life of your son or ease the pain of a future that has been taken from you.",
      },
      {
        kind: "paragraph",
        text: "Javits was more than the circumstances of his death. He was a child with a family, a history, dreams, and a future that deserved the opportunity to unfold.",
      },
      {
        kind: "paragraph",
        text: "His life mattered long before his name became a headline.",
      },
      {
        kind: "paragraph",
        text: "As a community, we mourn with you. We stand with you in the call for justice, and we recognize the responsibility this moment places before us.",
      },
      {
        kind: "paragraph",
        text: "We cannot change what happened to Javits. But we can work toward changing what the next young immigrant experiences when they arrive.",
      },
      {
        kind: "paragraph",
        text: "Because every child who comes to this country deserves more than the promise of opportunity.",
      },
      {
        kind: "paragraph",
        text: "They deserve the safety, support, and freedom to live long enough to realize it.",
      },
      {
        kind: "paragraph",
        text: "We are all Javits Frimpong. The only difference is that we are still alive.",
      },
      {
        kind: "paragraph",
        text: "May Javits Frimpong rest in peace.",
      },
      { kind: "heading", text: "Sources and Reporting" },
      {
        kind: "links",
        links: [
          {
            href: "https://bronx.news12.com/2026/10/30/teen-dies-after-shooting-in-claremont-section-of-the-bronx-police-looking-for-3-people/MMEY8UNWKfjtw0nIMvzw3",
            label: "News 12 Bronx",
          },
          {
            href: "https://www.fox5ny.com/video/fmc-cqmchjuwqfnm01ds",
            label: "FOX 5 New York",
          },
          {
            href: "https://www.graphic.com.gh/international/international-news/video-hes-my-everything-father-mourns-ghanaian-son-killed-in-bronx-shooting.html",
            label: "Graphic Online",
          },
          {
            href: "https://www.instagram.com/p/DfHtX99Dudc/",
            label: "NCOGA YAY on Instagram",
          },
        ],
      },
    ],
  },
] as const satisfies readonly PressArticle[];

export type PressArticleRecord = (typeof pressArticles)[number];

export function getPressArticle(slug: string) {
  return pressArticles.find((article) => article.slug === slug);
}

export function pressArticle(slug: PressArticleRecord["slug"]) {
  const article = pressArticles.find((item) => item.slug === slug);
  if (!article) {
    throw new Error(`Missing press article: ${slug}`);
  }
  return article;
}

export function relatedPressArticles(slug: string, count = 3) {
  const start = pressArticles.findIndex((article) => article.slug === slug);
  if (start < 0) return [];
  const related: PressArticleRecord[] = [];
  for (let step = 1; related.length < count; step += 1) {
    const article = pressArticles[(start + step) % pressArticles.length];
    if (!article || article.slug === slug) break;
    related.push(article);
  }
  return related;
}
