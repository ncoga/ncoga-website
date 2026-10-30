import Link from "next/link";

import { ncogaPageMetadata } from "@/lib/ncoga-metadata";

const title = "Terms of Use | NCOGA";
const description =
  "Terms for using the National Council of Ghanaian Associations website, including external forms, events, and linked services.";

export const metadata = ncogaPageMetadata({
  title,
  description,
  path: "/terms",
  image: null,
});

export default function TermsPage() {
  return (
    <section
      className="ncoga-section ncoga-editorial"
      aria-labelledby="terms-title"
    >
      <div className="ncoga-container ncoga-editorial-prose">
        <nav className="ncoga-about-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Terms</span>
        </nav>
        <h1 id="terms-title" className="ncoga-heading">
          Terms of use
        </h1>
        <p className="ncoga-editorial-kicker">Last updated October 29, 2026</p>
        <p className="ncoga-lead">
          These terms apply to the public website of the National Council of
          Ghanaian Associations (NCOGA), including the pages for NCOGA Young
          Adult &amp; Youth (NCOGA YAY). By using the site, you agree to these
          terms.
        </p>

        <h2>The purpose of the site</h2>
        <p>
          The site shares information about NCOGA and NCOGA YAY: who the council
          is, how to join NCOGA YAY, what the programs are, how to inquire about
          partnership or support, and what events and meetings are coming up.
          Reading a page does not make you a member, a partner, or a sponsor.
        </p>

        <h2>Membership, programs, and inquiries</h2>
        <p>
          “Register to Become a Member,” ambassador applications, and “Become a
          Partner or Supporter” open Google Forms. Those forms are the route for
          those requests. Sending a form gives NCOGA YAY the details you chose
          to provide so the team can review them. A partnership inquiry does not
          by itself create a formal partnership. Membership materials on the
          site describe free membership for young Ghanaians ages 18 to 35.
        </p>
        <p>
          Google’s terms apply to the form itself. This website does not store
          the form answers on its own server.
        </p>

        <h2>Events and meetings</h2>
        <p>
          Event pages and announcements describe gatherings using the details
          supplied for those events, including flyers. A meeting link for NCOGA
          YAY members is sent by email to registered members. Following a
          WhatsApp channel, opening a flyer, or watching a linked video does not
          register you for an event. Ticket or donation instructions printed on
          a flyer are handled by the channel named there, not by a payment form
          on this website.
        </p>

        <h2>Announcements</h2>
        <p>
          The site may show a temporary announcement the first time you open it
          in a browser tab. You can close it. Closing it, or moving to another
          page after it has been shown, keeps it from opening again in that tab.
          A later announcement can use the same feature with new dates and text.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The NCOGA name, the NCOGA YAY name, the text we publish, and the
          graphics we supply for programs and events belong to NCOGA or are used
          here with permission. You may link to these pages. Ask info@ncoga.com
          before copying a flyer, photograph, or a substantial part of the text
          for another use. Third-party names and marks, such as YouTube, Google,
          and WhatsApp, belong to their owners.
        </p>

        <h2>Acceptable use</h2>
        <p>Use the site in a way that respects other people and the law.</p>
        <ul>
          <li>Do not attempt to break, probe, or overload the site.</li>
          <li>
            Do not send unlawful, misleading, or harmful material through the
            linked forms or by email.
          </li>
          <li>
            Do not present yourself as NCOGA or NCOGA YAY if you are not
            speaking for the council.
          </li>
        </ul>

        <h2>Other services</h2>
        <p>
          Links and embedded media can take you to Google, YouTube, WhatsApp,
          Instagram, LinkedIn, or another organization. Those services are
          outside these terms. The <Link href="/privacy">privacy policy</Link>{" "}
          explains the preference cookie and when the YouTube film is allowed to
          load.
        </p>

        <h2>Information on the site</h2>
        <p>
          We work from supplied council materials and update pages as those
          materials change. A date, place, or program description can be
          corrected when a newer flyer or decision replaces it. The site is
          offered as a public information source. It may be unavailable for
          maintenance or because of a technical fault.
        </p>

        <h2>Responsibility</h2>
        <p>
          To the extent the law allows, NCOGA is not responsible for a decision
          you make solely from general information on the site, or for the
          content and practices of a service you open from a link. Nothing on
          the site is legal, financial, or medical advice.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms. The date at the top of the page will change
          when we do. Continuing to use the site after that date means the
          updated terms apply.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms go to{" "}
          <a href="mailto:info@ncoga.com">info@ncoga.com</a>.
        </p>
      </div>
    </section>
  );
}
