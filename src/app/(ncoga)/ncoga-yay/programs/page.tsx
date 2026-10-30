import Image from "next/image";
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
import { ncogaPageMetadata } from "@/lib/ncoga-metadata";

const description = programsIntro.paragraphs[0];

export const metadata = ncogaPageMetadata({
  title: "Our Programs | NCOGA YAY",
  description,
  path: "/ncoga-yay/programs",
});

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
          <div className="ncoga-program-list">
            <article className="ncoga-program">
              <div>
                <h2>{mission50000.title}</h2>
                <p className="ncoga-lead">{mission50000.line}</p>
                <p className="ncoga-editorial-kicker">{mission50000.when}</p>
                {mission50000.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
            <article
              className="ncoga-program has-figure"
              id="ambassador-program"
            >
              <figure className="ncoga-program-figure">
                <Image
                  src="/images/ambassador-program-application.png"
                  alt="NCOGA YAY Ambassador Program flyer. Applications are now open for young Ghanaians ages 18 to 35, at home and across the diaspora."
                  width={1254}
                  height={1254}
                  sizes="(max-width: 800px) 100vw, 42vw"
                />
              </figure>
              <div>
                <h2>{ambassadorProgram.title}</h2>
                <p className="ncoga-lead">{ambassadorProgram.line}</p>
                <p className="ncoga-editorial-kicker">Applications Now Open</p>
                {ambassadorProgram.paragraphs.map((paragraph) => (
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
                </div>
              </div>
            </article>
            <article className="ncoga-program">
              <div>
                <h2>{weDey.title}</h2>
                <p className="ncoga-lead">{weDey.line}</p>
                <p className="ncoga-editorial-kicker">{weDey.when}</p>
                {weDey.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="ncoga-editorial-kicker">{weDey.marks}</p>
              </div>
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
