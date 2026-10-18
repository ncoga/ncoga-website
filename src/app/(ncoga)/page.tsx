import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { NcogaHomeMotion } from "@/components/ncoga/ncoga-home-motion";

const title = "National Council of Ghanaian Associations | NCOGA";
const description =
  "NCOGA is a New York City-based umbrella organization for Ghanaian associations in the United States, founded in 1986.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ncoga.com"),
  title: { absolute: title },
  description,
  applicationName: "NCOGA",
  alternates: { canonical: "/" },
  icons: { icon: "/images/ncoga-logo.png", apple: "/images/ncoga-logo.png" },
  openGraph: {
    type: "website",
    url: "https://ncoga.com/",
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
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/images/ncoga-logo.png"],
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "National Council of Ghanaian Associations",
  alternateName: "NCOGA",
  url: "https://ncoga.com/",
  logo: "https://ncoga.com/images/ncoga-logo.png",
  foundingDate: "1986",
  email: "info@ncoga.com",
};

export default function NcogaHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <NcogaHomeMotion>
        <section className="ncoga-home-hero" aria-labelledby="home-title">
          <div className="ncoga-home-hero-stage">
            <figure className="ncoga-home-hero-photo" data-ncoga-hero-photo>
              <Image
                src="/images/ncoga-hero.webp"
                alt="People gathered in Ghanaian attire at a community occasion"
                fill
                priority
                sizes="100vw"
              />
            </figure>
            <div className="ncoga-container ncoga-home-hero-inner">
              <div className="ncoga-home-hero-copy">
                <span className="ncoga-eyebrow" data-ncoga-hero>
                  National Council of Ghanaian Associations
                </span>
                <h1 id="home-title" data-ncoga-hero>
                  A shared home for Ghanaian community.
                </h1>
                <p className="ncoga-lead" data-ncoga-hero>
                  Founded in 1986, NCOGA brings Ghanaian associations together
                  in the United States through culture, community, and
                  coordinated action.
                </p>
                <div className="ncoga-actions" data-ncoga-hero>
                  <Button asChild>
                    <Link href="#about">Discover NCOGA</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="#yay">Explore NCOGA YAY</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="ncoga-home-facts">
            <div className="ncoga-container ncoga-home-facts-grid">
              <p>
                <span>Founded</span>
                <strong>1986</strong>
              </p>
              <p>
                <span>Based in</span>
                <strong>New York City</strong>
              </p>
              <p>
                <span>Serving</span>
                <strong>Ghanaian associations in the United States</strong>
              </p>
            </div>
          </div>
        </section>

        <section
          className="ncoga-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="ncoga-container ncoga-home-about">
            <div>
              <span className="ncoga-eyebrow">What is NCOGA?</span>
              <h2 id="about-title" className="ncoga-heading">
                Many associations. A common purpose.
              </h2>
            </div>
            <div className="ncoga-home-about-copy">
              <p className="ncoga-lead">
                The National Council of Ghanaian Associations is an umbrella
                organization based in New York City, representing Ghanaian
                associations in the United States.
              </p>
              <Link className="ncoga-text-link" href="/about">
                Read more about NCOGA <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section
          className="ncoga-section ncoga-home-focus"
          aria-labelledby="focus-title"
        >
          <div className="ncoga-container ncoga-home-focus-grid">
            <figure className="ncoga-home-focus-photo" data-ncoga-reveal>
              <Image
                src="/images/ncoga-image.webp"
                alt="People gathered indoors wearing colorful Ghanaian attire"
                width={1500}
                height={1001}
                sizes="(max-width: 700px) 100vw, 48vw"
              />
            </figure>
            <div className="ncoga-home-focus-copy">
              <span className="ncoga-eyebrow">Shared work</span>
              <h2 id="focus-title" className="ncoga-heading">
                Culture, connection, and collective work.
              </h2>
              <p className="ncoga-lead">
                NCOGA brings member organizations together around four stated
                areas of focus.
              </p>
              <ol className="ncoga-home-focus-list">
                <li>
                  <span aria-hidden="true">01</span> Unity among associations
                </li>
                <li>
                  <span aria-hidden="true">02</span> Ghanaian culture
                </li>
                <li>
                  <span aria-hidden="true">03</span> Resolving community
                  conflicts
                </li>
                <li>
                  <span aria-hidden="true">04</span> Coordinated activities
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section
          className="ncoga-section ncoga-home-mission"
          id="mission"
          aria-labelledby="mission-title"
        >
          <div className="ncoga-container">
            <span className="ncoga-eyebrow">Our direction</span>
            <h2 id="mission-title" className="ncoga-heading">
              Mission &amp; vision
            </h2>
            <div className="ncoga-home-statement-grid" data-ncoga-reveal>
              <article>
                <span
                  className="ncoga-home-statement-number"
                  aria-hidden="true"
                >
                  01
                </span>
                <h3>Mission</h3>
                <p>
                  To empower and unify Ghanaians and the diaspora, by promoting
                  cultural heritage, fostering community development, and
                  advocating for the interests of Ghanaians both domestically
                  and internationally.
                </p>
              </article>
              <article>
                <span
                  className="ncoga-home-statement-number"
                  aria-hidden="true"
                >
                  02
                </span>
                <h3>Vision</h3>
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
          className="ncoga-section ncoga-yay ncoga-home-yay"
          id="yay"
          aria-labelledby="yay-title"
        >
          <div className="ncoga-container ncoga-home-yay-grid">
            <div>
              <span className="ncoga-eyebrow">The next generation</span>
              <h2 id="yay-title" className="ncoga-heading">
                NCOGA Young Adult &amp; Youth
              </h2>
              <p className="ncoga-lead">
                Established in October 2024, NCOGA YAY is a branch of the
                council focused on young Ghanaians, leadership, cultural pride,
                and global engagement.
              </p>
              <p>
                Its work is organized around five pillars: education; networking
                and career growth; community engagement, health and
                philanthropy; internal and public affairs; and public
                communications.
              </p>
              <Button asChild>
                <Link href="/ncoga-yay">Visit NCOGA YAY</Link>
              </Button>
            </div>
            <div
              className="ncoga-home-yay-art"
              aria-hidden="true"
              data-ncoga-reveal
            >
              <span>NCOGA</span>
              <strong>YAY</strong>
              <span>Young Adult &amp; Youth</span>
            </div>
          </div>
        </section>

        <section
          className="ncoga-section ncoga-home-contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="ncoga-container ncoga-home-contact-inner">
            <div>
              <span className="ncoga-eyebrow">Stay connected</span>
              <h2 id="contact-title" className="ncoga-heading">
                Get in touch with NCOGA.
              </h2>
            </div>
            <div>
              <p>
                For questions about the council and its work, contact NCOGA at
                its published email address.
              </p>
              <a className="ncoga-home-email" href="mailto:info@ncoga.com">
                info@ncoga.com <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </NcogaHomeMotion>
    </>
  );
}
