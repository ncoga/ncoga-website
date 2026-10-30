import Image from "next/image";
import Link from "next/link";

import { NcogaSuppliedHero } from "@/components/ncoga/ncoga-page-hero";
import { yayPillars } from "@/content/yay-pillars";
import {
  eventsIntro,
  meetingDetailsComingSoon,
  pastEngagements,
  upcomingMeetings,
  yaySeptemberBySlug,
} from "@/content/yay-september";
import { ncogaPageMetadata } from "@/lib/ncoga-metadata";

const description = eventsIntro.lead;

export const metadata = ncogaPageMetadata({
  title: "NCOGA YAY Events & Meetings | NCOGA",
  description,
  path: "/ncoga-yay/events",
  image: null,
});

function FishermanText({ text }: { text: string }) {
  const parts = text.split("The Fisherman");
  return parts.map((part, index) => (
    <span key={`${index}-${part.slice(0, 16)}`}>
      {[index > 0 ? <em key="film">The Fisherman</em> : null, part]}
    </span>
  ));
}

export default function NcogaYayEventsPage() {
  return (
    <>
      <NcogaSuppliedHero
        src="/images/event-meeting-banner.png"
        alt="Events and Meetings. Stay connected with upcoming NCOGA YAY meetings, pillar gatherings, programs, and community engagements."
        width={2170}
        height={725}
      />
      <section
        className="ncoga-section ncoga-editorial"
        aria-labelledby="events-title"
      >
        <div className="ncoga-container">
          <nav className="ncoga-about-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">NCOGA YAY Events &amp; Meetings</span>
          </nav>
          <p className="ncoga-lead">{eventsIntro.lead}</p>
          <h1 id="events-title" className="ncoga-heading">
            NCOGA YAY Events &amp; Meetings
          </h1>
          <h2 className="ncoga-press-section-label">{eventsIntro.title}</h2>
          <div className="ncoga-event-list">
            {upcomingMeetings.map((meeting) => (
              <article className="ncoga-event has-figure" key={meeting.title}>
                <figure className="ncoga-event-figure">
                  <Image
                    src={meeting.image.src}
                    alt={meeting.image.alt}
                    width={meeting.image.width}
                    height={meeting.image.height}
                    sizes="(max-width: 800px) 100vw, 42vw"
                  />
                </figure>
                <div>
                  <h3>{meeting.title}</h3>
                  <p className="ncoga-editorial-kicker">{meeting.when}</p>
                  <p className="ncoga-editorial-kicker">{meeting.place}</p>
                  <p>{meeting.body}</p>
                  <p>{meeting.audience}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="ncoga-editorial-stack">
            {yayPillars.map((pillar) => {
              const copy = yaySeptemberBySlug[pillar.slug];
              return (
                <article key={pillar.slug}>
                  <h3>{copy.meetingTitle}</h3>
                  <p className="ncoga-editorial-kicker">Coming Soon</p>
                  <p>{copy.meetingBody}</p>
                  <p>{meetingDetailsComingSoon}</p>
                  <p>
                    <Link href={`/ncoga-yay/pillars/${pillar.slug}`}>
                      {copy.visitLabel}
                    </Link>
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="ncoga-section ncoga-editorial is-sand"
        aria-labelledby="past-events"
      >
        <div className="ncoga-container">
          <h2 id="past-events" className="ncoga-heading">
            {eventsIntro.pastTitle}
          </h2>
          <div className="ncoga-editorial-stack">
            {pastEngagements.map((event) => (
              <article key={event.title}>
                <h3>
                  {event.title === "The Fisherman" ? (
                    <em>The Fisherman</em>
                  ) : (
                    event.title
                  )}
                </h3>
                <p className="ncoga-editorial-kicker">{event.when}</p>
                <p>
                  {event.title === "The Fisherman" ? (
                    <FishermanText text={event.body} />
                  ) : (
                    event.body
                  )}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
