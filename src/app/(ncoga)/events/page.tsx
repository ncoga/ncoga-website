import Image from "next/image";
import Link from "next/link";

import { yayEventsPath } from "@/content/press-articles";
import { ncogaPageMetadata } from "@/lib/ncoga-metadata";

const description =
  "Events and meetings of the National Council of Ghanaian Associations, including the Ghana at 70 Independence Day Gala on March 6, 2027.";

const galaVideoUrl = "https://youtu.be/8dlv2JMmmIc?is=useI3S12TjTKLv9I";

export const metadata = ncogaPageMetadata({
  title: "NCOGA Events & Meetings | NCOGA",
  description,
  path: "/events",
  image: null,
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
            <span aria-current="page">Events &amp; Meetings</span>
          </nav>
          <p className="ncoga-eyebrow">
            National Council of Ghanaian Associations
          </p>
          <h1 id="ncoga-events-title" className="ncoga-heading">
            NCOGA Events &amp; Meetings
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
          <article className="ncoga-event has-figure">
            <figure className="ncoga-event-figure">
              <Image
                src="/images/ghana_70.PNG"
                alt="Ghana at 70 Independence Day Gala flyer. Saturday, March 6, 2027, at Eastwood Manor Grand Ballroom in the Bronx."
                width={1024}
                height={1536}
                sizes="(max-width: 800px) 100vw, 42vw"
              />
            </figure>
            <div>
              <h3>Ghana @70 Independence Day Gala</h3>
              <p className="ncoga-editorial-kicker">Saturday, March 6, 2027</p>
              <p className="ncoga-editorial-kicker">8 PM–2 AM</p>
              <p className="ncoga-editorial-kicker">
                Eastwood Manor Grand Ballroom, Bronx
              </p>
              <p>
                The National Council of Ghanaian Associations, in collaboration
                with Ghana Mission, New York, presents the Independence Day
                Gala. The theme is “Uniting to Promote Ghana’s Development
                Agenda.” The donation is $125 per person.
              </p>
              <a
                className="ncoga-gala-highlight"
                href={galaVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/ghana-at-70-2026-highlights.jpg"
                  alt=""
                  width={640}
                  height={360}
                  sizes="(max-width: 800px) 100vw, 420px"
                />
                <span>
                  Watch Highlights from the 2026 Gala
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
              </a>
            </div>
          </article>
          <p className="ncoga-press-note">
            NCOGA YAY meetings and programs are listed on{" "}
            <Link href={yayEventsPath}>NCOGA YAY Events &amp; Meetings</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
