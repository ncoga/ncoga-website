import type { Metadata } from "next";
import Link from "next/link";

import { NcogaSuppliedHero } from "@/components/ncoga/ncoga-page-hero";
import { Button } from "@/components/ui/button";
import { yayPillars } from "@/content/yay-pillars";
import {
  ambassadorApplicationUrl,
  ambassadorProgram,
  mission50000,
  partnerIntro,
  programsIntro,
  weDey,
  yaySeptemberBySlug,
} from "@/content/yay-september";

const title = "Our Programs | NCOGA YAY";
const description = programsIntro.paragraphs[0];

export const metadata: Metadata = {
  metadataBase: new URL("https://ncoga.com"),
  title: { absolute: title },
  description,
  alternates: { canonical: "/ncoga-yay/programs" },
  openGraph: {
    type: "website",
    url: "https://ncoga.com/ncoga-yay/programs",
    siteName: "NCOGA",
    title,
    description,
    images: [
      {
        url: "/images/program.png",
        width: 2172,
        height: 724,
        alt: "Programs. Creating opportunities, building community, and expanding access.",
      },
    ],
  },
};

export default function NcogaYayProgramsPage() {
  return (
    <>
      <NcogaSuppliedHero
        src="/images/program.png"
        alt="Programs. Creating opportunities, building community, and expanding access."
        width={2172}
        height={724}
      />
      <section
        className="ncoga-section ncoga-editorial"
        aria-labelledby="programs-title"
      >
        <div className="ncoga-container">
          <nav className="ncoga-about-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/ncoga-yay">NCOGA YAY</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Our Programs</span>
          </nav>
          <h1 id="programs-title" className="ncoga-heading">
            {programsIntro.title}
          </h1>
          <div className="ncoga-editorial-prose">
            {programsIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="ncoga-editorial-stack">
            <article>
              <h2>{mission50000.title}</h2>
              <h3>{mission50000.line}</h3>
              {mission50000.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="ncoga-editorial-kicker">{mission50000.when}</p>
            </article>
            <article id="ambassador-program">
              <h2>{ambassadorProgram.title}</h2>
              <h3>{ambassadorProgram.line}</h3>
              {ambassadorProgram.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="ncoga-editorial-kicker">Applications Now Open</p>
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
              </div>
            </article>
            <article>
              <h2>{weDey.title}</h2>
              <h3>{weDey.line}</h3>
              {weDey.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="ncoga-editorial-kicker">{weDey.when}</p>
              <p className="ncoga-editorial-kicker">{weDey.marks}</p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-editorial is-sand"
        aria-labelledby="programs-pillars"
      >
        <div className="ncoga-container">
          <h2 id="programs-pillars" className="ncoga-heading">
            {programsIntro.acrossTitle}
          </h2>
          <p className="ncoga-lead">{programsIntro.acrossIntro}</p>
          <ul className="ncoga-editorial-stack">
            {yayPillars.map((pillar) => {
              const copy = yaySeptemberBySlug[pillar.slug];
              return (
                <li key={pillar.slug}>
                  <h3>
                    <Link href={`/ncoga-yay/pillars/${pillar.slug}`}>
                      {pillar.name}
                    </Link>
                  </h3>
                  <p>{copy.programs}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-editorial is-heritage"
        aria-labelledby="programs-interested"
      >
        <div className="ncoga-container ncoga-editorial-prose">
          <h2 id="programs-interested" className="ncoga-heading">
            {programsIntro.interestedTitle}
          </h2>
          {programsIntro.interestedParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h3>Questions?</h3>
          <p>
            <a href="mailto:info@ncoga.com">info@ncoga.com</a>
          </p>
          <p className="ncoga-editorial-kicker">{partnerIntro.culture}</p>
        </div>
      </section>
    </>
  );
}
