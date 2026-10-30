import Link from "next/link";

import { ncogaPageMetadata } from "@/lib/ncoga-metadata";

const title = "Contact NCOGA | National Council of Ghanaian Associations";
const description =
  "Contact the National Council of Ghanaian Associations at its published general email address, info@ncoga.com.";

export const metadata = ncogaPageMetadata({
  title,
  description,
  path: "/contact",
  image: null,
});

export default function NcogaContactPage() {
  return (
    <>
      <section className="ncoga-contact-hero" aria-labelledby="contact-title">
        <div className="ncoga-container">
          <nav className="ncoga-about-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact NCOGA</span>
          </nav>
          <div className="ncoga-contact-hero-grid">
            <div>
              <span className="ncoga-eyebrow">Get in touch</span>
              <h1 id="contact-title">A direct line to the council.</h1>
            </div>
            <div className="ncoga-contact-intro">
              <p className="ncoga-lead">
                For questions about the National Council of Ghanaian
                Associations and its work, write to the council at its published
                general address.
              </p>
              <span className="ncoga-contact-mail-label">General contact</span>
              <a href="mailto:info@ncoga.com" className="ncoga-contact-mail">
                info@ncoga.com <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-contact-explore"
        aria-labelledby="contact-explore-title"
      >
        <div className="ncoga-container ncoga-contact-explore-grid">
          <div>
            <span className="ncoga-eyebrow">Explore NCOGA</span>
            <h2 id="contact-explore-title" className="ncoga-heading">
              Get to know the council.
            </h2>
          </div>
          <div className="ncoga-contact-paths">
            <Link href="/about">
              <span>
                <small>01 / Parent council</small>
                <strong>About NCOGA</strong>
              </span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/ncoga-yay">
              <span>
                <small>02 / A branch of NCOGA</small>
                <strong>Young Adult &amp; Youth</strong>
              </span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
