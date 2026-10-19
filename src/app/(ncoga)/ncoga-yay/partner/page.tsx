import type { Metadata } from "next";
import Link from "next/link";

import { NcogaSuppliedHero } from "@/components/ncoga/ncoga-page-hero";
import { Button } from "@/components/ui/button";
import { yayPillars } from "@/content/yay-pillars";
import {
  becomePartnerUrl,
  partnerIntro,
  partnershipInquiryUrl,
  restoreGhana,
  restoreGhanaUrl,
  infiniteVisionUrl,
  yaySeptemberBySlug,
} from "@/content/yay-september";

const title = "Partner with Us | NCOGA YAY";
const description = partnerIntro.paragraphs[0];

export const metadata: Metadata = {
  metadataBase: new URL("https://ncoga.com"),
  title: { absolute: title },
  description,
  alternates: { canonical: "/ncoga-yay/partner" },
  openGraph: {
    type: "website",
    url: "https://ncoga.com/ncoga-yay/partner",
    siteName: "NCOGA",
    title,
    description,
    images: [
      {
        url: "/images/partner-with-ncoga-yay-banner.png",
        width: 2172,
        height: 724,
        alt: "Partner with NCOGA YAY. Building opportunities, strengthening connections, and expanding access.",
      },
    ],
  },
};

export default function NcogaYayPartnerPage() {
  return (
    <>
      <NcogaSuppliedHero
        src="/images/partner-with-ncoga-yay-banner.png"
        alt="Partner with NCOGA YAY. Building opportunities, strengthening connections, and expanding access."
        width={2172}
        height={724}
      />
      <section
        className="ncoga-section ncoga-editorial"
        aria-labelledby="partner-title"
      >
        <div className="ncoga-container">
          <nav className="ncoga-about-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/ncoga-yay">NCOGA YAY</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Partner with Us</span>
          </nav>
          <h1 id="partner-title" className="ncoga-heading">
            {partnerIntro.title}
          </h1>
          <div className="ncoga-editorial-prose">
            {partnerIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-editorial is-sand"
        aria-labelledby="partnership-areas"
      >
        <div className="ncoga-container">
          <h2 id="partnership-areas" className="ncoga-heading">
            Areas of Partnership
          </h2>
          <p className="ncoga-lead">{partnerIntro.areasIntro}</p>
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
                  <p>{copy.partnership}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-editorial"
        aria-labelledby="partnership-different"
      >
        <div className="ncoga-container ncoga-editorial-prose">
          <h2 id="partnership-different" className="ncoga-heading">
            {partnerIntro.differentTitle}
          </h2>
          {partnerIntro.differentParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h2 className="ncoga-heading">{partnerIntro.exploreTitle}</h2>
          {partnerIntro.exploreParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="ncoga-actions">
            <Button asChild>
              <a
                href={partnershipInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Partnership inquiry form
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-editorial is-heritage"
        aria-labelledby="partnerships-in-action"
      >
        <div className="ncoga-container">
          <h2 id="partnerships-in-action" className="ncoga-heading">
            {partnerIntro.actionTitle}
          </h2>
          <div className="ncoga-editorial-prose">
            <p>{partnerIntro.actionIntro}</p>
            <h3>{restoreGhana.title}</h3>
            <p className="ncoga-editorial-kicker">{restoreGhana.announced}</p>
            {restoreGhana.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{restoreGhana.welcome}</p>
            <p>{restoreGhana.learnMore}</p>
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
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-editorial is-sand"
        aria-labelledby="become-a-partner"
      >
        <div className="ncoga-container ncoga-editorial-prose">
          <h2 id="become-a-partner" className="ncoga-heading">
            {partnerIntro.buildTitle}
          </h2>
          <p>{partnerIntro.buildParagraph}</p>
          <div className="ncoga-actions">
            <Button asChild>
              <a
                href={becomePartnerUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a partner
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Button>
          </div>
          <h2 className="ncoga-heading">Questions?</h2>
          <p>
            {partnerIntro.questions}{" "}
            <a href="mailto:info@ncoga.com">info@ncoga.com</a>
          </p>
          <p>{partnerIntro.signoff}</p>
          <p className="ncoga-editorial-kicker">{partnerIntro.culture}</p>
        </div>
      </section>
    </>
  );
}
