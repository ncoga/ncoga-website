import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { NcogaYayCouncil } from "@/components/ncoga/ncoga-yay-council";
import { NcogaYayHeroFilm } from "@/components/ncoga/ncoga-yay-hero-film";
import { NcogaYayMotion } from "@/components/ncoga/ncoga-yay-motion";
import { Button } from "@/components/ui/button";
import { getYayPillar, type YayPillar } from "@/content/yay-pillars";

const yayFocusSlugs = [
  "internal-public-affairs",
  "networking-career-growth",
  "community-health-philanthropy",
  "education",
  "public-communications",
] as const satisfies readonly YayPillar["slug"][];

const yayFocusPillars = yayFocusSlugs.map((slug) => {
  const pillar = getYayPillar(slug);
  if (!pillar) {
    throw new Error(`Missing YAY pillar ${slug}`);
  }
  return pillar;
});

const title = "NCOGA Young Adult & Youth | NCOGA YAY";
const description =
  "Meet NCOGA Young Adult & Youth, the council's branch for young Ghanaians, established in October 2024.";
const membershipUrl = "https://forms.gle/a1cziJ8JJhDGz96j9";

const mission =
  "To cultivate leadership and foster a sense of unity among young Ghanaians by providing educational resources, cultural awareness, and advocacy opportunities that empower our young adults and youth to enrich our communities.";
const vision =
  "To create an inspired, connected, and proactive community of young Ghanaian leaders who are equipped to influence and innovate across cultures and continents, driving progress and representation for Ghanaians worldwide.";

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

function AccountMark() {
  return (
    <svg
      className="ncoga-yay-account-mark"
      viewBox="0 0 72 72"
      aria-hidden="true"
    >
      <rect width="72" height="72" fill="var(--ncoga-heritage)" />
      <rect x="8" y="8" width="14" height="56" fill="var(--ncoga-gold)" />
      <rect x="26" y="8" width="14" height="34" fill="var(--ncoga-forest)" />
      <rect x="44" y="8" width="20" height="18" fill="var(--ncoga-red)" />
      <rect x="26" y="48" width="38" height="16" fill="var(--ncoga-ivory)" />
    </svg>
  );
}

export default function NcogaYayPage() {
  return (
    <NcogaYayMotion>
      <section className="ncoga-yay-hero" aria-labelledby="yay-page-title">
        <NcogaYayHeroFilm />
        <div className="ncoga-container ncoga-yay-hero-inner">
          <div className="ncoga-yay-hero-copy">
            <nav className="ncoga-about-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">NCOGA YAY</span>
            </nav>
            <span className="ncoga-eyebrow" data-ncoga-hero>
              A branch of NCOGA
            </span>
            <h1 id="yay-page-title" data-ncoga-hero>
              Young Adult &amp; Youth.
            </h1>
            <p className="ncoga-lead" data-ncoga-hero>
              Through our efforts, we strive to empower young voices and foster
              leadership skills that will &lsquo;shape the future of the
              Ghanaian diaspora&rsquo;
            </p>
            <div className="ncoga-about-hero-actions" data-ncoga-hero>
              <Button asChild>
                <a href="#yay-pillars">Meet the five pillars</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-yay-overview"
        aria-labelledby="yay-overview-title"
      >
        <div className="ncoga-container">
          <span className="ncoga-eyebrow">About</span>
          <h2 id="yay-overview-title" className="ncoga-heading">
            About NCOGA Young Adult and Youth.
          </h2>
          <div className="ncoga-yay-about">
            <AccountMark />
            <div className="ncoga-prose">
              <p className="ncoga-lead">
                The Young Adult and Youth Council of the National Council of
                Ghanaian Associations (NCOGA YAY) serves as a dynamic platform
                for young Ghanaians worldwide to engage in cultural,
                educational, and advocacy initiatives.
              </p>
              <p>
                This council aims to harness the energy and ideas of young
                adults and youth to promote community development and a deeper
                appreciation of Ghanaian heritage.
              </p>
              <p>
                Since its founding in 1986, the National Council of Ghanaian
                Associations (NCOGA) has been a pillar of community engagement
                and cultural preservation. In October 2024, the NCOGA Young
                Adult and Youth (YAY) was established as a dynamic branch of the
                organization, dedicated to empowering the next generation of
                Ghanaian leaders.
              </p>
              <p>
                Recognizing the need for intentional growth and impact, the
                leaders of the newly formed council came together to create five
                core pillars that drive the mission and vision of NCOGA YAY.
                These pillars serve as the foundation for our initiatives,
                ensuring that young Ghanaians have access to opportunities while
                also embracing their cultural heritage and making meaningful
                contributions on a global scale.
              </p>
              <p>
                At NCOGA YAY, we believe in bringing Ghanaians to the forefront
                of opportunities while setting the standard for what it means to
                honor our roots and thrive as global citizens. Through our
                initiatives, members have the chance to engage, lead, and
                support efforts that align with our vision for collective
                success.
              </p>
              <p>
                On March 8, 2025, during the Ghana Independence Gala and
                Fundraising Event, the inaugural leadership team was officially
                announced—marking the beginning of a new era of impact and
                purpose. As we move forward, we remain committed to building
                this legacy with a renewed mandate and a focused desire to be
                leaders in various fields across the world. Join us as we shape
                the future—rooted in culture, driven by purpose, and committed
                to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-yay-statements"
        aria-labelledby="yay-statements-title"
      >
        <div className="ncoga-container">
          <span className="ncoga-eyebrow">YAY&apos;s direction</span>
          <h2 id="yay-statements-title" className="ncoga-heading">
            Mission and vision
          </h2>
          <div className="ncoga-yay-statements-grid" data-ncoga-reveal>
            <article>
              <p className="ncoga-yay-official">Official statement</p>
              <h3>Mission</h3>
              <p>{mission}</p>
            </article>
            <article>
              <p className="ncoga-yay-official">Official statement</p>
              <h3>Vision</h3>
              <p>{vision}</p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-yay-pillars"
        id="yay-pillars"
        aria-labelledby="yay-pillars-title"
      >
        <div className="ncoga-container">
          <span className="ncoga-eyebrow">Areas of focus</span>
          <h2 id="yay-pillars-title" className="ncoga-heading">
            Five pillars.
          </h2>
          <p>Each pillar opens the branch page for that area.</p>
          <ul className="ncoga-yay-pillar-grid" data-ncoga-reveal>
            {yayFocusPillars.map((pillar) => (
              <li key={pillar.slug}>
                <article className="ncoga-yay-pillar">
                  <Image
                    src={pillar.src}
                    alt=""
                    width={666}
                    height={375}
                    sizes="(max-width: 800px) 100vw, 320px"
                  />
                  <h3>{pillar.name}</h3>
                  <p>{pillar.detail}</p>
                  <Link href={`/ncoga-yay/pillars/${pillar.slug}`}>
                    {pillar.action}
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-yay-council"
        aria-labelledby="yay-council-title"
      >
        <div className="ncoga-container">
          <span className="ncoga-eyebrow">Council leaders</span>
          <h2 id="yay-council-title" className="ncoga-heading">
            NCOGA YAY council leaders
          </h2>
          <p>A biography is included where one has been published.</p>
          <div data-ncoga-reveal>
            <NcogaYayCouncil />
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-yay-join"
        aria-labelledby="yay-join-title"
      >
        <div className="ncoga-container">
          <span className="ncoga-eyebrow">Membership</span>
          <h2 id="yay-join-title" className="ncoga-heading">
            Register to be a member.
          </h2>
          <p>
            Join NCOGA Young Adult &amp; Youth through the council&apos;s
            membership form.
          </p>
          <div className="ncoga-actions">
            <Button asChild>
              <a href={membershipUrl} target="_blank" rel="noopener noreferrer">
                Register to be a member
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Button>
          </div>
          <p>
            <a className="ncoga-text-link" href="mailto:info@ncoga.com">
              info@ncoga.com
            </a>
          </p>
          <p>
            <Link className="ncoga-text-link" href="/ncoga-yay/partner">
              Partner with Us
            </Link>
          </p>
        </div>
      </section>
    </NcogaYayMotion>
  );
}
