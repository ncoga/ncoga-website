import Link from "next/link";

import { yayEventsPath } from "@/content/press-articles";
import { ncogaPageMetadata } from "@/lib/ncoga-metadata";

const description =
  "Events of the National Council of Ghanaian Associations. The next listed gathering is the Ghana Independence Celebration on March 6, 2027.";

export const metadata = ncogaPageMetadata({
  title: "NCOGA Events | NCOGA",
  description,
  path: "/events",
});

export default function NcogaEventsPage() {
  return (
    <>
      <section
        className="ncoga-events-hero"
        aria-labelledby="ncoga-events-title"
      >
        <div className="ncoga-container">
          <nav className="ncoga-about-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">NCOGA Events</span>
          </nav>
          <p className="ncoga-eyebrow">
            National Council of Ghanaian Associations
          </p>
          <h1 id="ncoga-events-title" className="ncoga-heading">
            NCOGA Events
          </h1>
          <p className="ncoga-lead">
            Gatherings of the National Council of Ghanaian Associations. Details
            are added as they are confirmed.
          </p>
        </div>
      </section>
      <section
        className="ncoga-section ncoga-editorial"
        aria-labelledby="ncoga-upcoming"
      >
        <div className="ncoga-container">
          <h2 id="ncoga-upcoming" className="ncoga-heading">
            Upcoming
          </h2>
          <div className="ncoga-editorial-stack">
            <article>
              <h3>Ghana Independence Celebration</h3>
              <p className="ncoga-editorial-kicker">March 6, 2027</p>
              <p>Details to be announced.</p>
            </article>
          </div>
          <p className="ncoga-press-note">
            NCOGA YAY meetings and programs are listed on{" "}
            <Link href={yayEventsPath}>NCOGA YAY Events</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
