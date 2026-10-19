import type { Metadata } from "next";
import Link from "next/link";

import { NcogaSuppliedHero } from "@/components/ncoga/ncoga-page-hero";
import { Button } from "@/components/ui/button";
import {
  ambassadorApplicationUrl,
  ambassadorProgram,
  councilPress,
  fishermanPress,
  healthPress,
  infiniteVisionUrl,
  lookingAhead,
  membershipPress,
  pressIntro,
  restoreGhana,
  restoreGhanaUrl,
  townHallPress,
  yayMembershipUrl,
} from "@/content/yay-september";

const title = "Press & Media | NCOGA";
const description = pressIntro.paragraphs[0];

export const metadata: Metadata = {
  metadataBase: new URL("https://ncoga.com"),
  title: { absolute: title },
  description,
  alternates: { canonical: "/press" },
  openGraph: {
    type: "website",
    url: "https://ncoga.com/press",
    siteName: "NCOGA",
    title,
    description,
    images: [
      {
        url: "/images/press-media-banner.png",
        width: 2172,
        height: 724,
        alt: "Press and Media. Stay informed with announcements, event highlights, media coverage, and stories about NCOGA YAY.",
      },
    ],
  },
};

function FishermanParagraph({ text }: { text: string }) {
  const parts = text.split("The Fisherman");
  return (
    <p>
      {parts.map((part, index) => (
        <span key={`${index}-${part.slice(0, 16)}`}>
          {index > 0 ? <em>The Fisherman</em> : null}
          {part}
        </span>
      ))}
    </p>
  );
}

export default function NcogaPressPage() {
  return (
    <>
      <NcogaSuppliedHero
        src="/images/press-media-banner.png"
        alt="Press and Media. Stay informed with announcements, event highlights, media coverage, and stories about NCOGA YAY."
        width={2172}
        height={724}
      />
      <section
        className="ncoga-section ncoga-editorial"
        aria-label="Press and Media"
      >
        <div className="ncoga-container">
          <nav className="ncoga-about-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Press &amp; Media</span>
          </nav>
          <div className="ncoga-editorial-prose">
            {pressIntro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="ncoga-lead">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-editorial is-sand"
        aria-labelledby="press-title"
      >
        <div className="ncoga-container">
          <h1 id="press-title" className="ncoga-heading">
            {pressIntro.title}
          </h1>
          <div className="ncoga-editorial-stack">
            <article>
              <h2>{restoreGhana.title}</h2>
              <p className="ncoga-editorial-kicker">{restoreGhana.announced}</p>
              {restoreGhana.pressParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                <a
                  href={infiniteVisionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  infn8vzn.org
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <span aria-hidden="true"> | </span>
                <a
                  href={restoreGhanaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  restoreghana.ca
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            </article>
            <article>
              <h2>
                <em>The Fisherman</em>: Film, Storytelling &amp; the Diaspora
                Experience
              </h2>
              <p className="ncoga-editorial-kicker">{fishermanPress.when}</p>
              <FishermanParagraph text={fishermanPress.invited} />
              <FishermanParagraph text={fishermanPress.conversation} />
              <p>{fishermanPress.themes}</p>
            </article>
            <article>
              <h2>{healthPress.title}</h2>
              <p className="ncoga-editorial-kicker">{healthPress.when}</p>
              <p>{healthPress.paragraphs[0]}</p>
              <p>{healthPress.paragraphs[1]}</p>
              <p>
                For NCOGA YAY, the conversation also raised an important
                question: {healthPress.question}
              </p>
              <p>{healthPress.paragraphs[2]}</p>
            </article>
            <article>
              <h2>{townHallPress.title}</h2>
              <p className="ncoga-editorial-kicker">{townHallPress.when}</p>
              <p>{townHallPress.body}</p>
            </article>
          </div>
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
          <div className="ncoga-editorial-stack">
            <article>
              <h3>{membershipPress.title}</h3>
              <p className="ncoga-editorial-kicker">{membershipPress.when}</p>
              {membershipPress.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>{membershipPress.free}</p>
              <div className="ncoga-actions">
                <Button asChild>
                  <a
                    href={yayMembershipUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {membershipPress.action}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </Button>
              </div>
            </article>
            <article>
              <h3>{ambassadorProgram.title}</h3>
              <p className="ncoga-editorial-kicker">
                {ambassadorProgram.pressKicker}
              </p>
              {ambassadorProgram.pressParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="ncoga-actions">
                <Button asChild>
                  <a
                    href={ambassadorApplicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ambassadorProgram.applyLabel}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/ncoga-yay/programs#ambassador-program">
                    Ambassador Program
                  </Link>
                </Button>
              </div>
            </article>
            <article>
              <h3>{councilPress.title}</h3>
              <p className="ncoga-editorial-kicker">{councilPress.when}</p>
              <p>{councilPress.body}</p>
              <p className="ncoga-editorial-kicker">{councilPress.year2026}</p>
              <p className="ncoga-editorial-kicker">{councilPress.year2027}</p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-editorial is-heritage"
        aria-labelledby="looking-ahead"
      >
        <div className="ncoga-container">
          <h2 id="looking-ahead" className="ncoga-heading">
            {lookingAhead.title}
          </h2>
          <div className="ncoga-editorial-stack">
            <article>
              <h3>{lookingAhead.horizonTitle}</h3>
              <p className="ncoga-editorial-kicker">
                {lookingAhead.horizonWhen}
              </p>
              {lookingAhead.horizonParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
            <article>
              <h3>{lookingAhead.meetingTitle}</h3>
              <p className="ncoga-editorial-kicker">
                {lookingAhead.meetingWhen}
              </p>
              <p>{lookingAhead.meetingBody}</p>
              <p>
                <Link href="/events">{lookingAhead.meetingDate}</Link>
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
