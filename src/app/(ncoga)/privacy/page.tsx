import Link from "next/link";

import { ncogaPageMetadata } from "@/lib/ncoga-metadata";

const title = "Privacy Policy | NCOGA";
const description =
  "How the National Council of Ghanaian Associations website handles information, cookies, and links to other services.";

export const metadata = ncogaPageMetadata({
  title,
  description,
  path: "/privacy",
  image: null,
});

export default function PrivacyPage() {
  return (
    <section
      className="ncoga-section ncoga-editorial"
      aria-labelledby="privacy-title"
    >
      <div className="ncoga-container ncoga-editorial-prose">
        <nav className="ncoga-about-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Privacy</span>
        </nav>
        <h1 id="privacy-title" className="ncoga-heading">
          Privacy policy
        </h1>
        <p className="ncoga-editorial-kicker">Last updated October 29, 2026</p>
        <p className="ncoga-lead">
          This policy describes the public website of the National Council of
          Ghanaian Associations (NCOGA) and its Young Adult &amp; Youth branch
          (NCOGA YAY). It explains what this website does with information and
          what it leaves to other services.
        </p>

        <h2>Who this covers</h2>
        <p>
          “We” means NCOGA. This policy covers pages on this website. It does
          not cover the separate site at ncoga.com, Google Forms, YouTube,
          WhatsApp, Instagram, or LinkedIn. Those services have their own
          policies.
        </p>

        <h2>What this website is</h2>
        <p>
          The site publishes information about NCOGA and NCOGA YAY: the council,
          programs, partnerships, press, and events. It does not create
          accounts, and it does not take payments. Event donations and ticket
          purchases, when they exist, happen through the channels named on an
          event flyer or another service, not through a checkout on this site.
        </p>

        <h2>Information you send</h2>
        <p>You can reach the council by email at info@ncoga.com.</p>
        <p>
          Membership registration, ambassador applications, and partnership or
          support inquiries open Google Forms. The answers you type there are
          collected by Google and received by NCOGA YAY through that form. This
          website does not store those answers on its own server. Read Google’s
          policy before you submit a form if you want to know how Google handles
          that information.
        </p>
        <p>
          NCOGA YAY membership is free. The published registration materials
          describe it for young Ghanaians ages 18 to 35, at home and across the
          diaspora.
        </p>

        <h2>Cookies on this site</h2>
        <p>
          This site does not use advertising cookies or analytics cookies. It
          asks you to accept or reject one preference cookie named{" "}
          <code>ncoga_cookie_consent</code>. That cookie remembers whether you
          accepted or rejected optional media. It lasts about six months. It is
          set only after you choose, and it is not used to build a profile of
          you.
        </p>
        <p>
          If you accept, the NCOGA YAY page may load its film from YouTube’s
          privacy-enhanced player. If you reject, or if you have not chosen yet,
          that film stays as a still image and the player is not loaded. You can
          change your mind by clearing this site’s cookies in your browser and
          choosing again.
        </p>

        <h2>Links that leave this site</h2>
        <p>
          Some buttons and links open another service in a new tab. Those
          include Google Forms, YouTube, the NCOGA YAY Members WhatsApp channel,
          and the NCOGA YAY profiles on Instagram, LinkedIn, and YouTube.
          Visiting them can let that service set its own cookies and collect
          information under its own policy. A highlighted gala video is a link
          to YouTube. It does not play inside this page.
        </p>

        <h2>How we use what we receive</h2>
        <p>
          Email you send to info@ncoga.com is used to respond to you.
          Information you submit on a Google Form is used by NCOGA YAY to review
          membership, ambassador interest, or a partnership or support inquiry.
          An inquiry does not by itself create a partnership.
        </p>
        <p>
          We do not sell personal information. We do not use this website to
          show third-party ads.
        </p>

        <h2>Children</h2>
        <p>
          This website is not directed at children under 13. NCOGA YAY
          membership materials are for young people ages 18 to 35. If you
          believe a child under 13 has sent us personal information, email
          info@ncoga.com and we will take down what we can from the channel we
          control.
        </p>

        <h2>Your choices</h2>
        <ul>
          <li>Accept or reject the preference cookie in the banner.</li>
          <li>Use the site without loading the YouTube film.</li>
          <li>
            Choose not to open a Google Form, WhatsApp, or social profile.
          </li>
          <li>
            Email info@ncoga.com with a question about this policy or about
            information you sent the council.
          </li>
        </ul>

        <h2>Changes</h2>
        <p>
          If this policy changes, the date at the top of the page will change
          with it. The next announcement or form may also be described here when
          it changes what the site collects.
        </p>

        <h2>Contact</h2>
        <p>
          Privacy questions go to{" "}
          <a href="mailto:info@ncoga.com">info@ncoga.com</a>. The terms for
          using the site are on the <Link href="/terms">terms page</Link>.
        </p>
      </div>
    </section>
  );
}
