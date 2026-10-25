import Link from "next/link";

import { NcogaSuppliedHero } from "@/components/ncoga/ncoga-page-hero";
import { PressStory } from "@/components/ncoga/press-story";
import { pressArticle } from "@/content/press-articles";
import { pressIntro } from "@/content/yay-september";
import { ncogaPageMetadata } from "@/lib/ncoga-metadata";

const description = pressIntro.paragraphs[0];

export const metadata = ncogaPageMetadata({
  title: "Press & Media | NCOGA",
  description,
  path: "/press",
});

const leadSizes = "(min-width: 900px) 62vw, 100vw";
const pairSizes = "(min-width: 900px) 36vw, 100vw";
const rowSizes = "(min-width: 900px) 320px, 100vw";

export default function NcogaPressPage() {
  const restore = pressArticle("restore-ghana");
  const fisherman = pressArticle("the-fisherman");
  const health = pressArticle("health-is-wealth");
  const townHall = pressArticle("presidential-diaspora-town-hall");
  const membership = pressArticle("membership-2026-2027");
  const ambassador = pressArticle("ambassador-program");
  const council = pressArticle("council-leadership-2026-2027");
  const horizon = pressArticle("2027-horizon");
  const meeting = pressArticle("first-general-members-meeting");

  return (
    <>
      <NcogaSuppliedHero
        src="/images/press-media-banner.png"
        alt="Press and Media. Stay informed with announcements, event highlights, media coverage, and stories about NCOGA YAY."
        width={2172}
        height={724}
      />
      <section className="ncoga-section ncoga-editorial ncoga-press-intro">
        <div className="ncoga-container">
          <nav className="ncoga-about-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Press &amp; Media</span>
          </nav>
          <h1 className="ncoga-heading">{pressIntro.title}</h1>
          <div className="ncoga-editorial-prose">
            {pressIntro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="ncoga-lead">
                {paragraph}
              </p>
            ))}
          </div>
          <PressStory
            article={restore}
            className="ncoga-press-lead"
            heading="h2"
            priority
            sizes={leadSizes}
          />
        </div>
      </section>

      <section className="ncoga-section ncoga-editorial is-sand">
        <div className="ncoga-container">
          <div className="ncoga-press-pair">
            <PressStory
              article={fisherman}
              className="ncoga-press-feature"
              heading="h2"
              sizes={pairSizes}
            />
            <PressStory
              article={health}
              className="ncoga-press-feature is-copy-first"
              heading="h2"
              sizes={pairSizes}
            />
          </div>
          <PressStory
            article={townHall}
            className="ncoga-press-row"
            heading="h2"
            sizes={rowSizes}
          />
        </div>
      </section>

      <section
        className="ncoga-section ncoga-editorial"
        aria-labelledby="from-yay"
      >
        <div className="ncoga-container">
          <h2 id="from-yay" className="ncoga-heading">
            From NCOGA YAY
          </h2>
          <div className="ncoga-press-rows">
            <PressStory
              article={membership}
              className="ncoga-press-row"
              heading="h3"
              sizes={rowSizes}
            />
            <PressStory
              article={ambassador}
              className="ncoga-press-row is-reverse"
              heading="h3"
              sizes={rowSizes}
            />
            <PressStory
              article={council}
              className="ncoga-press-row"
              heading="h3"
              sizes={rowSizes}
            />
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-editorial is-heritage"
        aria-labelledby="looking-ahead"
      >
        <div className="ncoga-container">
          <h2 id="looking-ahead" className="ncoga-heading">
            Looking Ahead
          </h2>
          <div className="ncoga-press-rows">
            <PressStory
              article={horizon}
              className="ncoga-press-row"
              heading="h3"
              sizes={rowSizes}
            />
            <PressStory
              article={meeting}
              className="ncoga-press-row is-reverse"
              heading="h3"
              sizes={rowSizes}
            />
          </div>
        </div>
      </section>
    </>
  );
}
