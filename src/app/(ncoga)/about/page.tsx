import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

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

export default function NcogaAboutPage() {
  return (
    <>
      <section className="ncoga-about-hero" aria-labelledby="about-title">
        <div className="ncoga-container">
          <nav className="ncoga-about-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About NCOGA</span>
          </nav>
          <div className="ncoga-about-hero-grid">
            <div className="ncoga-about-hero-copy">
              <span className="ncoga-eyebrow">The parent council</span>
              <h1 id="about-title">Ghanaian associations, connected.</h1>
              <p className="ncoga-lead">
                The National Council of Ghanaian Associations (NCOGA) is an
                umbrella organization based in New York City. Since 1986, it has
                brought Ghanaian associations in the United States together
                around culture, community, and coordinated action.
              </p>
              <div className="ncoga-actions">
                <Button asChild>
                  <a href="mailto:info@ncoga.com">Contact NCOGA</a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#mission">Read our mission</Link>
                </Button>
              </div>
            </div>
            <div className="ncoga-about-year" aria-label="Founded in 1986">
              <span>Founded</span>
              <strong aria-hidden="true">1986</strong>
              <p>New York City · Ghanaian associations in the United States</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-about-purpose"
        aria-labelledby="purpose-title"
      >
        <div className="ncoga-container ncoga-about-purpose-grid">
          <div>
            <span className="ncoga-eyebrow">What the council does</span>
            <h2 id="purpose-title" className="ncoga-heading">
              A place for collective work.
            </h2>
          </div>
          <div className="ncoga-about-purpose-copy">
            <p className="ncoga-lead">
              NCOGA represents Ghanaian associations in the United States. Its
              stated areas of focus are unity among member organizations,
              Ghanaian culture, resolving conflicts within the community, and
              coordinating shared activities.
            </p>
            <p>
              The council&apos;s official account includes Ghana&apos;s
              independence celebrations as one example of that shared work.
            </p>
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-about-statements"
        id="mission"
        aria-labelledby="direction-title"
      >
        <div className="ncoga-container">
          <span className="ncoga-eyebrow">Official statements</span>
          <h2 id="direction-title" className="ncoga-heading">
            Mission &amp; vision
          </h2>
          <div className="ncoga-about-statements-grid">
            <article>
              <span aria-hidden="true">01 / Mission</span>
              <h3>Our mission</h3>
              <p>
                To empower and unify Ghanaians and the diaspora, by promoting
                cultural heritage, fostering community development, and
                advocating for the interests of Ghanaians both domestically and
                internationally.
              </p>
            </article>
            <article>
              <span aria-hidden="true">02 / Vision</span>
              <h3>Our vision</h3>
              <p>
                A cohesive and influential Ghanaian community that actively
                contributes to socio-economic growth and cultural enrichment
                across continents.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-about-history"
        aria-labelledby="history-title"
      >
        <div className="ncoga-container">
          <div className="ncoga-about-history-intro">
            <div>
              <span className="ncoga-eyebrow">From NCOGA&apos;s history</span>
              <h2 id="history-title" className="ncoga-heading">
                Gathering, learning, and celebrating.
              </h2>
            </div>
            <p>
              NCOGA&apos;s published history recalls work across community
              gatherings, education, and cultural celebrations. These are
              historical examples; their current availability is not stated.
            </p>
          </div>
          <ul className="ncoga-about-history-list">
            <li>
              <span aria-hidden="true">01</span>
              <div>
                <h3>Community gathering</h3>
                <p>
                  The Ghana Picnic and other occasions for the diaspora to come
                  together.
                </p>
              </div>
            </li>
            <li>
              <span aria-hidden="true">02</span>
              <div>
                <h3>Educational support</h3>
                <p>
                  Scholarships, donated materials to Ghana, and SAT preparation
                  for Ghanaian youth.
                </p>
              </div>
            </li>
            <li>
              <span aria-hidden="true">03</span>
              <div>
                <h3>Cultural and civic life</h3>
                <p>
                  Ghana Independence Day celebrations and community workshops.
                </p>
              </div>
            </li>
          </ul>
          <a className="ncoga-text-link" href="https://ncoga.com/about-us/">
            Read NCOGA&apos;s published history{" "}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-about-yay"
        aria-labelledby="yay-title"
      >
        <div className="ncoga-container ncoga-about-yay-grid">
          <div>
            <span className="ncoga-eyebrow">A connected branch</span>
            <h2 id="yay-title" className="ncoga-heading">
              NCOGA Young Adult &amp; Youth
            </h2>
          </div>
          <div>
            <p className="ncoga-lead">
              Established in October 2024, NCOGA YAY is a branch of the council
              focused on young Ghanaians through leadership, cultural pride, and
              global engagement.
            </p>
            <Button asChild>
              <a href="https://ncoga.com/ncoga-youth/">
                Explore NCOGA YAY <span aria-hidden="true">↗</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-about-contact"
        aria-labelledby="about-contact-title"
      >
        <div className="ncoga-container ncoga-about-contact-grid">
          <div>
            <span className="ncoga-eyebrow">Stay connected</span>
            <h2 id="about-contact-title" className="ncoga-heading">
              Reach the council.
            </h2>
          </div>
          <div>
            <p>
              For questions about NCOGA and its work, use its published email
              address.
            </p>
            <a className="ncoga-home-email" href="mailto:info@ncoga.com">
              info@ncoga.com <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
