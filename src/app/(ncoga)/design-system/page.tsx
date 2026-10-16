import type { Metadata } from "next";
import Link from "next/link";

import { NcogaEmptyState } from "@/components/ncoga/ncoga-empty-state";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: { absolute: "NCOGA design foundation" },
  description: "Internal preview of the NCOGA visual and component foundation.",
  applicationName: "NCOGA design foundation",
  robots: { index: false, follow: false },
  icons: { icon: "/ncoga-preview-icon.svg" },
  openGraph: {
    type: "website",
    siteName: "NCOGA",
    title: "NCOGA design foundation",
    description:
      "Internal preview of the NCOGA visual and component foundation.",
    images: [],
  },
  twitter: { card: "summary", title: "NCOGA design foundation", images: [] },
};

const swatches = [
  { label: "Heritage", value: "#123F32" },
  { label: "Forest", value: "#197047" },
  { label: "Gold", value: "#D9A227" },
  { label: "Red", value: "#B3262E" },
] as const;

export default function DesignSystemPreview() {
  return (
    <>
      <section className="ncoga-hero" aria-labelledby="foundation-title">
        <div className="ncoga-hero-copy">
          <span className="ncoga-eyebrow">Phase 2 · shared foundation</span>
          <h1 id="foundation-title">
            Rooted in heritage. Moving forward together.
          </h1>
          <p className="ncoga-lead">
            A working application preview of the approved NCOGA direction. This
            is proposed editorial wording, not published organization copy.
          </p>
          <div className="ncoga-actions">
            <Button asChild>
              <Link href="#purpose">Explore the foundation</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#yay">See YAY variation</Link>
            </Button>
          </div>
        </div>
        <div
          className="ncoga-hero-art"
          role="img"
          aria-label="Type-led NCOGA preview artwork in deep green and gold"
        >
          <span className="ncoga-eyebrow ncoga-hero-eyebrow">
            NCOGA · Design study
          </span>
          <span className="ncoga-art-word" aria-hidden="true">
            N<br />C<br />O
          </span>
          <div className="ncoga-art-caption">
            <span>
              People · culture
              <br />
              community
            </span>
            <span>
              Identity artwork
              <br />
              pending approval
            </span>
          </div>
        </div>
      </section>

      <section className="ncoga-section" id="purpose">
        <div className="ncoga-container">
          <div className="ncoga-intro-grid">
            <div>
              <span className="ncoga-eyebrow">Editorial purpose</span>
              <h2 className="ncoga-heading">
                One council, with room for many stories.
              </h2>
            </div>
            <div>
              <p className="ncoga-lead">
                The shared shell makes NCOGA the parent and YAY a connected
                branch. Type, spacing, and sourced content create the character;
                working links and clear states make the site useful.
              </p>
              <p>
                This preview contains design copy and deliberately avoids
                unverified leaders, events, member counts, and photography.
              </p>
            </div>
          </div>
          <p className="ncoga-source-note">
            Organization identity and the NCOGA–YAY relationship are documented
            in the project content inventory. Public copy still needs editorial
            approval.
          </p>
        </div>
      </section>

      <section className="ncoga-section ncoga-surface" id="system">
        <div className="ncoga-container">
          <span className="ncoga-eyebrow">Design system</span>
          <h2 className="ncoga-heading">
            Color, type, and controls from one source.
          </h2>
          <div
            className="ncoga-token-grid"
            aria-label="NCOGA foundation colors"
          >
            {swatches.map((swatch) => (
              <div className="ncoga-swatch" key={swatch.label}>
                <span style={{ backgroundColor: swatch.value }} />
                <p>
                  {swatch.label} · {swatch.value}
                </p>
              </div>
            ))}
          </div>
          <div className="ncoga-type-scale">
            <div className="ncoga-type-row">
              <p className="ncoga-small">
                Editorial display
                <br />
                Newsreader / Georgia fallback
              </p>
              <div className="ncoga-type-sample">
                Connection gives us a place to begin.
              </div>
            </div>
            <div className="ncoga-type-row">
              <p className="ncoga-small">
                Interface body
                <br />
                DM Sans / Arial fallback
              </p>
              <div className="ncoga-type-sample sans">
                Clear labels, useful actions, and content that can be trusted.
              </div>
            </div>
          </div>
          <div className="ncoga-button-row">
            <Button asChild>
              <Link href="#participation">Primary action</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#yay">Secondary action</Link>
            </Button>
            <Link href="#purpose">Editorial text link ↗</Link>
          </div>
        </div>
      </section>

      <section className="ncoga-section ncoga-yay" id="yay">
        <div className="ncoga-container ncoga-yay-grid">
          <div>
            <span className="ncoga-eyebrow">NCOGA Young Adult &amp; Youth</span>
            <h2 className="ncoga-heading">The same roots. New ways to grow.</h2>
            <p className="ncoga-lead">
              YAY shares the institutional foundation while modular compositions
              and selected red and gold accents give it a livelier pace. The
              faint strip pattern studies Kente construction without copying a
              named cloth.
            </p>
          </div>
          <div
            className="ncoga-yay-modules"
            aria-label="YAY modular component examples"
          >
            <div className="ncoga-yay-module">
              <small>01 / Connect</small>
              <strong>Meet your people.</strong>
              <small>Design example</small>
            </div>
            <div className="ncoga-yay-module">
              <small>02 / Learn</small>
              <strong>Exchange knowledge.</strong>
            </div>
            <div className="ncoga-yay-module">
              <small>03 / Build</small>
              <strong>Make an impact.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="ncoga-section ncoga-leadership" id="leadership">
        <div className="ncoga-container">
          <span className="ncoga-eyebrow">Leadership pattern</span>
          <h2 className="ncoga-heading">
            People and roles need verified context.
          </h2>
          <p className="ncoga-lead">
            A leadership section can use the pale Adinkrahene ring motif, whose
            documented meaning relates to leadership. Names, roles, terms, and
            portraits will only appear after verification and consent.
          </p>
          <aside className="ncoga-leadership-note">
            <p>
              This preview uses the motif as a quiet background detail. It is
              not the NCOGA logo and does not stand in for a leader’s portrait.
            </p>
          </aside>
        </div>
      </section>

      <section className="ncoga-section" id="participation">
        <div className="ncoga-container ncoga-participation-grid">
          <div>
            <span className="ncoga-eyebrow">Interaction states</span>
            <h2 className="ncoga-heading">
              Clear paths, including when content is missing.
            </h2>
            <p>
              Real event records will need ownership, verified dates and time
              zones, location, registration state, and publication status before
              they appear publicly.
            </p>
          </div>
          <div>
            <NcogaEmptyState
              label="No verified events"
              title="Upcoming events will appear here."
            >
              This empty state is explicit until a trusted publishing source and
              confirmed events are connected.
            </NcogaEmptyState>
            <div className="ncoga-field">
              <label htmlFor="ncoga-example-email">Email field example</label>
              <input
                id="ncoga-example-email"
                type="email"
                placeholder="name@example.com"
                aria-describedby="ncoga-email-help"
              />
              <p id="ncoga-email-help" className="ncoga-small">
                Design example only. No information is submitted.
              </p>
            </div>
            <div className="ncoga-accordion">
              <details>
                <summary>Why are there no event cards yet?</summary>
                <p>
                  Current public event data and registration destinations have
                  not been verified for this new application. The design uses an
                  honest empty state rather than invented listings.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
