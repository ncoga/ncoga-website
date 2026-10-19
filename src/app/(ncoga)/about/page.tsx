import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { NcogaAboutMotion } from "@/components/ncoga/ncoga-about-motion";
import { Button } from "@/components/ui/button";
import { yayPillars } from "@/content/yay-pillars";

const title = "About NCOGA | National Council of Ghanaian Associations";
const description =
  "Learn about NCOGA, the New York City-based umbrella council for Ghanaian associations in the United States, founded in 1986.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ncoga.com"),
  title: { absolute: title },
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "https://ncoga.com/about",
    siteName: "NCOGA",
    title,
    description,
    images: [
      {
        url: "/images/ncoga-logo.png",
        width: 500,
        height: 500,
        alt: "NCOGA logo",
      },
    ],
  },
};

const historyNotes = [
  {
    icon: "gathering",
    title: "Gathering",
    detail:
      "The Ghana Picnic, as the published account describes that annual gathering.",
  },
  {
    icon: "learning",
    title: "Learning",
    detail:
      "Scholarships, materials donated to Ghana, and SAT preparation for Ghanaian youth.",
  },
  {
    icon: "publicLife",
    title: "Public life",
    detail:
      "Ghana Independence Day celebrations, community workshops, and a past role hosting Ghana’s presidents.",
  },
] as const;

const statedNeeds = [
  "A permanent operational center",
  "Clearer core offerings",
  "Youth engagement",
  "Immigration support",
  "Workforce development",
] as const;

type HistoryIcon = (typeof historyNotes)[number]["icon"];

function HistoryMark({ icon }: { icon: HistoryIcon }) {
  switch (icon) {
    case "gathering":
      return (
        <svg
          className="ncoga-about-history-mark"
          viewBox="0 0 40 40"
          aria-hidden="true"
        >
          <rect
            x="4"
            y="24"
            width="32"
            height="8"
            fill="var(--ncoga-heritage)"
          />
          <rect x="6" y="10" width="8" height="14" fill="var(--ncoga-forest)" />
          <rect x="16" y="6" width="8" height="18" fill="var(--ncoga-gold)" />
          <rect
            x="26"
            y="10"
            width="8"
            height="14"
            fill="var(--ncoga-heritage)"
          />
        </svg>
      );
    case "learning":
      return (
        <svg
          className="ncoga-about-history-mark"
          viewBox="0 0 40 40"
          aria-hidden="true"
        >
          <rect
            x="8"
            y="6"
            width="22"
            height="28"
            fill="var(--ncoga-heritage)"
          />
          <rect x="14" y="11" width="16" height="4" fill="var(--ncoga-gold)" />
          <rect
            x="14"
            y="18"
            width="16"
            height="4"
            fill="var(--ncoga-forest)"
          />
          <rect x="14" y="25" width="11" height="4" fill="var(--ncoga-gold)" />
        </svg>
      );
    case "publicLife":
      return (
        <svg
          className="ncoga-about-history-mark"
          viewBox="0 0 40 40"
          aria-hidden="true"
        >
          <rect x="6" y="4" width="6" height="32" fill="var(--ncoga-gold)" />
          <rect
            x="16"
            y="4"
            width="18"
            height="14"
            fill="var(--ncoga-heritage)"
          />
          <rect
            x="16"
            y="22"
            width="18"
            height="14"
            fill="var(--ncoga-forest)"
          />
        </svg>
      );
    default: {
      const exhaustive: never = icon;
      return exhaustive;
    }
  }
}

export default function NcogaAboutPage() {
  return (
    <NcogaAboutMotion>
      <section className="ncoga-about-hero" aria-labelledby="about-title">
        <div className="ncoga-container">
          <nav className="ncoga-about-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About NCOGA</span>
          </nav>
          <div className="ncoga-about-hero-grid">
            <div className="ncoga-about-hero-copy">
              <span className="ncoga-eyebrow" data-ncoga-hero>
                The parent council
              </span>
              <h1 id="about-title" data-ncoga-hero>
                An umbrella for Ghanaian associations.
              </h1>
              <p className="ncoga-lead" data-ncoga-hero>
                Founded in 1986, the National Council of Ghanaian Associations
                (NCOGA) quickly became a cornerstone of the Ghanaian community
                in the New York metropolitan area.
              </p>
              <p data-ncoga-hero>
                It serves as an umbrella for Ghanaian associations in the United
                States.
              </p>
              <div className="ncoga-about-hero-actions" data-ncoga-hero>
                <Button asChild>
                  <a href="mailto:info@ncoga.com">Contact NCOGA</a>
                </Button>
                <Link className="ncoga-text-link" href="#mission">
                  Read the official mission
                </Link>
              </div>
            </div>
            <div className="ncoga-about-year">
              <span>Founded</span>
              <strong>1986</strong>
              <p>New York</p>
            </div>
          </div>
        </div>
      </section>

      <div className="ncoga-about-photo-band">
        <div className="ncoga-container">
          <figure className="ncoga-about-photo" data-ncoga-reveal>
            <Image
              src="/images/ncoga-dinner.jpg"
              alt="People seated together at banquet tables, some wearing Ghanaian cloth."
              width={1024}
              height={679}
              sizes="(max-width: 1248px) 100vw, 1200px"
            />
          </figure>
        </div>
      </div>

      <section
        className="ncoga-section ncoga-about-history"
        aria-labelledby="history-title"
      >
        <div className="ncoga-container ncoga-about-split">
          <div>
            <span className="ncoga-eyebrow">Published history</span>
            <h2 id="history-title" className="ncoga-heading">
              What the published record remembers.
            </h2>
            <p className="ncoga-about-history-intro">
              These are historical examples. The public account does not say
              they are current offerings.
            </p>
            <ul className="ncoga-about-history-list">
              {historyNotes.map((note) => (
                <li key={note.title}>
                  <HistoryMark icon={note.icon} />
                  <div>
                    <h3>{note.title}</h3>
                    <p>{note.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="ncoga-about-history-note">
              <span className="ncoga-about-history-label">
                Published history
              </span>
              The published account also includes AIDS assistance. This page
              does not describe it as a current health program.
            </p>
          </div>
          <figure className="ncoga-about-side-photo">
            <Image
              src="/images/ncoga-image.webp"
              alt="People standing together indoors in colorful Ghanaian cloth."
              width={1500}
              height={1001}
              sizes="(max-width: 700px) 100vw, 42vw"
            />
          </figure>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-about-change"
        aria-labelledby="change-title"
      >
        <div className="ncoga-container ncoga-about-split">
          <div className="ncoga-about-change-copy">
            <span className="ncoga-eyebrow">A changing community</span>
            <h2 id="change-title" className="ncoga-heading">
              A role still being defined.
            </h2>
            <p>
              Community life shifted from traditional associations toward
              faith-based organizations. Leaders saw a need to redefine NCOGA’s
              role. The umbrella role is still described as needed.
            </p>
            <p className="ncoga-about-needs-label">Stated needs</p>
            <ul className="ncoga-about-needs">
              {statedNeeds.map((need) => (
                <li key={need}>{need}</li>
              ))}
            </ul>
            <p>
              With nearly 40 years of service, NCOGA is undergoing a strategic
              transformation to reassert its relevance and impact. The next step
              is for the board and interested members to develop specific
              activities and initiatives that align with this new direction.
            </p>
          </div>
          <figure className="ncoga-about-side-photo ncoga-about-side-photo-cloth">
            <Image
              src="/images/ncoga-hero.webp"
              alt="People standing together in Ghanaian cloth at a community gathering."
              width={1600}
              height={1066}
              sizes="(max-width: 700px) 100vw, 42vw"
            />
          </figure>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-about-statements"
        id="mission"
        aria-labelledby="direction-title"
      >
        <div className="ncoga-container ncoga-about-split">
          <div className="ncoga-about-statements-column" data-ncoga-reveal>
            <span className="ncoga-eyebrow">Official statements</span>
            <h2 id="direction-title" className="ncoga-heading">
              Mission and vision
            </h2>
            <article>
              <p className="ncoga-about-statement-label">Official statement</p>
              <h3>Mission</h3>
              <p>
                To empower and unify Ghanaians and the diaspora, by promoting
                cultural heritage, fostering community development, and
                advocating for the interests of Ghanaians both domestically and
                internationally.
              </p>
            </article>
            <article>
              <p className="ncoga-about-statement-label">Official statement</p>
              <h3>Vision</h3>
              <p>
                A cohesive and influential Ghanaian community that actively
                contributes to socio-economic growth and cultural enrichment
                across continents.
              </p>
            </article>
          </div>
          <figure className="ncoga-about-side-photo ncoga-about-side-photo-table">
            <Image
              src="/images/ncoga-image-2.jpg"
              alt="People gathered around a banquet table in formal and traditional dress."
              width={1024}
              height={679}
              sizes="(max-width: 700px) 100vw, 42vw"
            />
          </figure>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-yay ncoga-about-yay"
        aria-labelledby="yay-title"
      >
        <div className="ncoga-container">
          <div className="ncoga-about-yay-copy">
            <span className="ncoga-eyebrow">A connected branch</span>
            <h2 id="yay-title" className="ncoga-heading">
              A branch for young Ghanaians.
            </h2>
            <p className="ncoga-lead">
              Established in October 2024, NCOGA Young Adult &amp; Youth is a
              branch of the council. Five pillars are its foundation.
            </p>
            <p>
              Inaugural leadership was announced on March 8, 2025, at the Ghana
              Independence Gala and Fundraising Event.
            </p>
            <Button asChild>
              <Link href="/ncoga-yay">Explore NCOGA YAY</Link>
            </Button>
          </div>
          <ol className="ncoga-about-pillars">
            {yayPillars.map((pillar, index) => (
              <li
                key={pillar.slug}
                className={
                  index === 0
                    ? "ncoga-about-pillar ncoga-about-pillar-lead"
                    : "ncoga-about-pillar"
                }
              >
                <div className="ncoga-about-pillar-mark">
                  <Image
                    src={pillar.src}
                    alt=""
                    width={666}
                    height={375}
                    sizes={
                      index === 0
                        ? "(max-width: 700px) 80vw, 280px"
                        : "(max-width: 700px) 80vw, 240px"
                    }
                  />
                </div>
                <div className="ncoga-about-pillar-copy">
                  <h3>{pillar.name}</h3>
                  <p>{pillar.detail}</p>
                  <Link href={`/ncoga-yay/pillars/${pillar.slug}`}>
                    {pillar.action}
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-about-contact"
        aria-labelledby="about-contact-title"
      >
        <div className="ncoga-container ncoga-about-contact-grid">
          <div>
            <h2 id="about-contact-title" className="ncoga-heading">
              Write to the council.
            </h2>
            <p>
              For questions about NCOGA and its work, use its published email
              address.
            </p>
          </div>
          <a className="ncoga-home-email" href="mailto:info@ncoga.com">
            info@ncoga.com <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </NcogaAboutMotion>
  );
}
