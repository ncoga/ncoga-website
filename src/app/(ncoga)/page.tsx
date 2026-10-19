import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { NcogaHomeMotion } from "@/components/ncoga/ncoga-home-motion";
import { yayPillars } from "@/content/yay-pillars";
import { ncogaPageMetadata } from "@/lib/ncoga-metadata";

const title = "National Council of Ghanaian Associations | NCOGA";
const description =
  "NCOGA is a New York City-based umbrella organization for Ghanaian associations in the United States, founded in 1986.";

export const metadata = ncogaPageMetadata({
  title,
  description,
  path: "/",
});

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "National Council of Ghanaian Associations",
  alternateName: "NCOGA",
  url: "https://ncoga.com/",
  logo: "https://ncoga.com/images/ncoga-logo.png",
  image: "https://ncoga.com/og-metadata.jpg",
  description,
  foundingDate: "1986",
  email: "info@ncoga.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York City",
    addressCountry: "US",
  },
};

const yayMembershipUrl = "https://forms.gle/a1cziJ8JJhDGz96j9";

const focusAreas = [
  {
    icon: "unity",
    number: "01",
    title: "Unity among associations",
    detail: "Fostering unity among member organizations.",
  },
  {
    icon: "culture",
    number: "02",
    title: "Ghanaian culture",
    detail: "Promoting Ghanaian culture.",
  },
  {
    icon: "conflicts",
    number: "03",
    title: "Resolving community conflicts",
    detail: "Resolving conflicts within the community.",
  },
  {
    icon: "activities",
    number: "04",
    title: "Coordinated activities",
    detail:
      "Coordinating joint activities, including celebrations of Ghana's independence.",
  },
] as const;

type FocusIcon = (typeof focusAreas)[number]["icon"];

function FocusMark({ icon }: { icon: FocusIcon }) {
  switch (icon) {
    case "unity":
      return (
        <svg
          className="ncoga-home-focus-mark"
          viewBox="0 0 40 40"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="9"
            width="16"
            height="22"
            fill="var(--ncoga-heritage)"
          />
          <rect
            x="21"
            y="9"
            width="16"
            height="22"
            fill="var(--ncoga-forest)"
          />
          <rect x="15" y="16" width="10" height="8" fill="var(--ncoga-gold)" />
        </svg>
      );
    case "culture":
      return (
        <svg
          className="ncoga-home-focus-mark"
          viewBox="0 0 40 40"
          aria-hidden="true"
        >
          <rect x="5" y="5" width="30" height="5" fill="var(--ncoga-gold)" />
          <rect x="5" y="12" width="9" height="6" fill="var(--ncoga-red)" />
          <rect
            x="15.5"
            y="12"
            width="9"
            height="6"
            fill="var(--ncoga-heritage)"
          />
          <rect x="26" y="12" width="9" height="6" fill="var(--ncoga-forest)" />
          <rect
            x="5"
            y="20"
            width="30"
            height="5"
            fill="var(--ncoga-heritage)"
          />
          <rect x="5" y="27" width="9" height="6" fill="var(--ncoga-forest)" />
          <rect x="15.5" y="27" width="9" height="6" fill="var(--ncoga-gold)" />
          <rect x="26" y="27" width="9" height="6" fill="var(--ncoga-red)" />
        </svg>
      );
    case "conflicts":
      return (
        <svg
          className="ncoga-home-focus-mark"
          viewBox="0 0 40 40"
          aria-hidden="true"
        >
          <polygon points="3,7 18,20 3,33" fill="var(--ncoga-heritage)" />
          <polygon points="37,7 22,20 37,33" fill="var(--ncoga-forest)" />
          <rect x="16" y="15" width="8" height="10" fill="var(--ncoga-gold)" />
        </svg>
      );
    case "activities":
      return (
        <svg
          className="ncoga-home-focus-mark"
          viewBox="0 0 40 40"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="15"
            height="15"
            fill="var(--ncoga-heritage)"
          />
          <rect
            x="22"
            y="3"
            width="15"
            height="15"
            fill="var(--ncoga-forest)"
          />
          <rect
            x="3"
            y="22"
            width="15"
            height="15"
            fill="var(--ncoga-forest)"
          />
          <rect
            x="22"
            y="22"
            width="15"
            height="15"
            fill="var(--ncoga-heritage)"
          />
          <rect x="17" y="3" width="6" height="34" fill="var(--ncoga-gold)" />
          <rect x="3" y="17" width="34" height="6" fill="var(--ncoga-gold)" />
        </svg>
      );
    default: {
      const exhaustive: never = icon;
      return exhaustive;
    }
  }
}

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
                <span>Headquarters</span>
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
                {focusAreas.map((area) => (
                  <li key={area.title}>
                    <div className="ncoga-home-focus-meta" aria-hidden="true">
                      <span>{area.number}</span>
                      <FocusMark icon={area.icon} />
                    </div>
                    <div>
                      <h3>{area.title}</h3>
                      <p>{area.detail}</p>
                    </div>
                  </li>
                ))}
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
          <div className="ncoga-container">
            <div className="ncoga-home-yay-grid">
              <div>
                <span className="ncoga-eyebrow">The next generation</span>
                <h2 id="yay-title" className="ncoga-heading">
                  NCOGA Young Adult &amp; Youth
                </h2>
                <p className="ncoga-lead">
                  Established in October 2024, NCOGA YAY is a branch of the
                  council focused on young Ghanaians, leadership, cultural
                  pride, and global engagement.
                </p>
                <p>Its work is organized around five pillars.</p>
                <Button asChild>
                  <Link href="/ncoga-yay">Visit NCOGA YAY</Link>
                </Button>
              </div>
              <figure className="ncoga-home-yay-mark" data-ncoga-reveal>
                <Image
                  src="/logos/ncoga-yay-logos/ncoga_youth_logo.png"
                  alt=""
                  width={666}
                  height={375}
                  sizes="(max-width: 700px) 100vw, 42vw"
                />
              </figure>
            </div>
            <ol className="ncoga-home-pillars">
              {yayPillars.map((pillar) => (
                <li key={pillar.name} className="ncoga-home-pillar">
                  <div className="ncoga-home-pillar-mark">
                    <Image
                      src={pillar.src}
                      alt=""
                      width={666}
                      height={375}
                      sizes="(max-width: 700px) 80vw, (max-width: 900px) 40vw, 280px"
                    />
                  </div>
                  <div className="ncoga-home-pillar-copy">
                    <h3>{pillar.name}</h3>
                    <p>{pillar.detail}</p>
                  </div>
                  <Button asChild>
                    <Link href={`/ncoga-yay/pillars/${pillar.slug}`}>
                      {pillar.action}
                    </Link>
                  </Button>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="ncoga-section ncoga-home-join"
          aria-labelledby="join-title"
        >
          <div className="ncoga-container ncoga-home-join-inner">
            <div>
              <span className="ncoga-eyebrow">Join NCOGA YAY</span>
              <h2 id="join-title" className="ncoga-heading">
                Register to be a member.
              </h2>
            </div>
            <div>
              <p>
                Join NCOGA Young Adult &amp; Youth through the council&apos;s
                membership form.
              </p>
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
              </div>
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
