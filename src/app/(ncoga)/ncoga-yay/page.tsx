import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const title = "NCOGA Young Adult & Youth | NCOGA YAY";
const description =
  "Meet NCOGA Young Adult & Youth, the council's branch for young Ghanaians, established in October 2024.";

const pillars = [
  "Education",
  "Networking & Career Growth",
  "Community Engagement, Health & Philanthropy",
  "Internal & Public Affairs",
  "Public Communications",
] as const;

export const metadata: Metadata = {
  metadataBase: new URL("https://ncoga.com"),
  title: { absolute: title },
  description,
  alternates: { canonical: "/ncoga-yay" },
  openGraph: {
    type: "website",
    url: "https://ncoga.com/ncoga-yay",
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

export default function NcogaYayPage() {
  return (
    <>
      <section className="ncoga-yay-page-hero" aria-labelledby="yay-page-title">
        <div className="ncoga-container">
          <nav className="ncoga-about-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">NCOGA YAY</span>
          </nav>
          <div className="ncoga-yay-page-hero-grid">
            <div className="ncoga-yay-page-hero-copy">
              <span className="ncoga-eyebrow">A branch of NCOGA</span>
              <h1 id="yay-page-title">
                Young voices.
                <br />
                Shared roots.
              </h1>
              <p className="ncoga-lead">
                NCOGA Young Adult &amp; Youth (YAY) is the council&apos;s branch
                for young Ghanaians. Established in October 2024, it brings
                leadership, culture, education, and community engagement into
                focus for the next generation.
              </p>
              <div className="ncoga-actions">
                <Button asChild>
                  <Link href="#yay-mission">Explore YAY</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/about">About the parent council</Link>
                </Button>
              </div>
            </div>
            <div className="ncoga-yay-page-art" aria-hidden="true">
              <span>NCOGA</span>
              <strong>YAY</strong>
              <span>Young Adult &amp; Youth</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-yay-page-intro"
        aria-labelledby="yay-intro-title"
      >
        <div className="ncoga-container ncoga-yay-page-intro-grid">
          <div>
            <span className="ncoga-eyebrow">Connected generations</span>
            <h2 id="yay-intro-title" className="ncoga-heading">
              Part of a larger Ghanaian community.
            </h2>
          </div>
          <p className="ncoga-lead">
            As a branch of NCOGA, YAY gives young Ghanaians a place to engage
            with their heritage and with one another through cultural,
            educational, and advocacy interests. Its work belongs within the
            council&apos;s wider community of Ghanaian associations.
          </p>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-yay-page-statements"
        id="yay-mission"
        aria-labelledby="yay-statements-title"
      >
        <div className="ncoga-container">
          <span className="ncoga-eyebrow">YAY&apos;s direction</span>
          <h2 id="yay-statements-title" className="ncoga-heading">
            Mission &amp; vision
          </h2>
          <div className="ncoga-yay-page-statements-grid">
            <article>
              <span>01 / Mission</span>
              <h3>Our mission</h3>
              <p>
                To cultivate leadership and foster a sense of unity among young
                Ghanaians by providing educational resources, cultural
                awareness, and advocacy opportunities that empower our young
                adults and youth to enrich our communities.
              </p>
            </article>
            <article>
              <span>02 / Vision</span>
              <h3>Our vision</h3>
              <p>
                To create an inspired, connected, and proactive community of
                young Ghanaian leaders who are equipped to influence and
                innovate across cultures and continents, driving progress and
                representation for Ghanaians worldwide.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-yay-page-pillars"
        aria-labelledby="yay-pillars-title"
      >
        <div className="ncoga-container ncoga-yay-page-pillars-grid">
          <div>
            <span className="ncoga-eyebrow">Areas of focus</span>
            <h2 id="yay-pillars-title" className="ncoga-heading">
              Five pillars.
              <br />
              One connected purpose.
            </h2>
            <p>
              NCOGA&apos;s published YAY page organizes the branch around these
              five areas. Details and participation routes are being verified.
            </p>
          </div>
          <ol className="ncoga-yay-page-pillar-list">
            {pillars.map((pillar, index) => (
              <li key={pillar}>
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{pillar}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-yay-page-next"
        aria-labelledby="yay-next-title"
      >
        <div className="ncoga-container ncoga-yay-page-next-grid">
          <div>
            <span className="ncoga-eyebrow">Stay connected</span>
            <h2 id="yay-next-title" className="ncoga-heading">
              Learn more about the council.
            </h2>
          </div>
          <div>
            <p>
              Explore NCOGA&apos;s history and purpose, or use its published
              general contact address for questions about the council and YAY.
            </p>
            <div className="ncoga-actions">
              <Button asChild>
                <Link href="/about">About NCOGA</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact the council</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
