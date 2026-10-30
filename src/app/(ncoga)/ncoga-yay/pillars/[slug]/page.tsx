import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { NcogaHeroWave } from "@/components/ncoga/ncoga-page-hero";
import { NcogaYayCouncil } from "@/components/ncoga/ncoga-yay-council";
import { Button } from "@/components/ui/button";
import { pillarCouncilLeaders } from "@/content/yay-council";
import {
  getPillarStories,
  getYaySeptemberPillar,
  meetingDetailsComingSoon,
  membershipPress,
  pillarMeetingWhen,
  programsIntro,
  yayMembershipUrl,
} from "@/content/yay-september";
import {
  getYayPillar,
  type YayPillar,
  yayPillars,
} from "@/content/yay-pillars";
import { ncogaPageMetadata } from "@/lib/ncoga-metadata";

const pillarSurfaces: Record<
  YayPillar["slug"],
  { intro: string; leaders: string; story: string }
> = {
  education: { intro: "", leaders: "is-sand", story: "" },
  "networking-career-growth": {
    intro: "is-sand",
    leaders: "",
    story: "is-sand",
  },
  "community-health-philanthropy": {
    intro: "",
    leaders: "is-sand",
    story: "",
  },
  "internal-public-affairs": {
    intro: "is-sand",
    leaders: "",
    story: "is-sand",
  },
  "public-communications": { intro: "", leaders: "is-sand", story: "" },
};

type PillarPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return yayPillars.map((pillar) => ({ slug: pillar.slug }));
}

export async function generateMetadata({
  params,
}: PillarPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getYayPillar(slug);
  if (!pillar) return {};

  return ncogaPageMetadata({
    title: `${pillar.name} | NCOGA YAY`,
    description: pillar.detail,
    path: `/ncoga-yay/pillars/${pillar.slug}`,
    image: null,
  });
}

export default async function YayPillarPage({ params }: PillarPageProps) {
  const { slug } = await params;
  const pillar = getYayPillar(slug);
  const copy = getYaySeptemberPillar(slug);
  const stories = getPillarStories(slug);
  if (!pillar || !copy || !stories) notFound();
  const surfaces = pillarSurfaces[pillar.slug];

  return (
    <>
      <section className="ncoga-pillar-hero" aria-labelledby="pillar-title">
        <Image
          className="ncoga-pillar-hero-photo"
          src="/images/ncoga-yay.webp"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="ncoga-pillar-hero-scrim" aria-hidden="true" />
        <div className="ncoga-container ncoga-pillar-hero-inner">
          <nav className="ncoga-about-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/ncoga-yay">NCOGA YAY</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{pillar.name}</span>
          </nav>
          <span className="ncoga-eyebrow">NCOGA YAY pillar</span>
          <h1 id="pillar-title">{pillar.name}</h1>
        </div>
        <NcogaHeroWave />
      </section>
      <section
        className={`ncoga-section ncoga-editorial ncoga-pillar-follow ${surfaces.intro}`}
      >
        <div className="ncoga-container ncoga-pillar-story">
          <figure className="ncoga-home-pillar-page-mark">
            <Image
              src={pillar.src}
              alt=""
              width={666}
              height={375}
              sizes="(max-width: 900px) 100vw, 420px"
            />
          </figure>
          <div className="ncoga-editorial-stack">
            <article>
              <h2>This pillar</h2>
              <p>{pillar.detail}</p>
            </article>
            <article>
              <h2>Areas of Partnership</h2>
              <p>{copy.partnership}</p>
            </article>
            <article>
              <h2>Programs</h2>
              <p>{copy.programs}</p>
            </article>
            <article>
              <h2>How NCOGA YAY Works</h2>
              <p>{copy.how}</p>
            </article>
          </div>
        </div>
      </section>

      <section
        className={`ncoga-section ncoga-editorial ${surfaces.leaders}`}
        aria-labelledby="pillar-leaders"
      >
        <div className="ncoga-container">
          <span className="ncoga-eyebrow">Council leaders</span>
          <h2 id="pillar-leaders" className="ncoga-heading">
            The people leading this work
          </h2>
          <p>A biography is included where one has been published.</p>
          <NcogaYayCouncil names={pillarCouncilLeaders[pillar.slug]} />
        </div>
      </section>

      <section
        className={`ncoga-section ncoga-editorial ${surfaces.story}`}
        aria-labelledby="pillar-story"
      >
        <div className="ncoga-container ncoga-editorial-prose">
          <h2 id="pillar-story" className="ncoga-heading">
            Connected work
          </h2>
          {stories.map((story) => (
            <article key={story.title}>
              <h3>{story.title}</h3>
              {"when" in story && story.when ? (
                <p className="ncoga-editorial-kicker">{story.when}</p>
              ) : null}
              {story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
          <p>
            <Link href="/press">Press &amp; Media</Link>
            <span aria-hidden="true"> · </span>
            <Link href="/ncoga-yay/programs">Our Programs</Link>
          </p>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-editorial is-heritage"
        aria-labelledby="pillar-join"
      >
        <div className="ncoga-container ncoga-editorial-prose">
          <h2 id="pillar-join" className="ncoga-heading">
            Take part
          </h2>
          <p>{programsIntro.interestedParagraphs[1]}</p>
          <p>{membershipPress.free}</p>
          <div className="ncoga-actions">
            <Button asChild>
              <a
                href={yayMembershipUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register to be a member
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/ncoga-yay/partner">Partner with Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="ncoga-section ncoga-editorial">
        <div className="ncoga-container ncoga-editorial-prose">
          <h2>
            <Link href="/ncoga-yay/events">{copy.meetingTitle}</Link>
          </h2>
          <p className="ncoga-editorial-kicker">{pillarMeetingWhen}</p>
          <p>{copy.meetingBody}</p>
          <p>{meetingDetailsComingSoon}</p>
          <div className="ncoga-actions">
            <Button asChild variant="outline">
              <Link href="/ncoga-yay">Back to NCOGA YAY</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/ncoga-yay#yay-pillars">All pillars</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
