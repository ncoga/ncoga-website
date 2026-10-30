import Image from "next/image";
import Link from "next/link";

import { ncogaIdentity, ncogaSocial } from "@/content/ncoga-foundation";

type FooterGroup = {
  title: string;
  links: readonly { label: string; href: string }[];
};

type SocialLabel = (typeof ncogaSocial)[number]["label"];

function SocialIcon({ name }: { name: SocialLabel }) {
  switch (name) {
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="3.5"
            y="3.5"
            width="17"
            height="17"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4.7 3.2a2.2 2.2 0 1 0 .1 4.4 2.2 2.2 0 0 0-.1-4.4ZM3 9h3.4v12H3V9Zm6.2 0h3.2v1.6h.1c.4-.9 1.6-1.8 3.3-1.8 3.6 0 4.2 2.3 4.2 5.4V21h-3.4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H9.2V9Z"
          />
        </svg>
      );
    case "YouTube":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M22.5 7.2a2.8 2.8 0 0 0-2-2C18.8 4.8 12 4.8 12 4.8s-6.8 0-8.5.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 4.8 2.8 2.8 0 0 0 2 2c1.7.4 8.5.4 8.5.4s6.8 0 8.5-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-4.8ZM9.8 15.5v-7l6.3 3.5-6.3 3.5Z"
          />
        </svg>
      );
    default: {
      const exhaustive: never = name;
      return exhaustive;
    }
  }
}

export function NcogaFooter({
  groups,
  preview = false,
}: {
  groups: readonly FooterGroup[];
  preview?: boolean;
}) {
  return (
    <footer className="ncoga-footer">
      <div className="ncoga-container">
        <div className="ncoga-footer-grid">
          <div>
            <div className="ncoga-footer-brand">
              <Link
                className="ncoga-footer-logo"
                href="/"
                aria-label={ncogaIdentity.name}
              >
                <Image
                  src="/images/ncoga-logo.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </Link>
              <Link
                className="ncoga-footer-yay"
                href="/ncoga-yay"
                aria-label="NCOGA Young Adult and Youth"
              >
                <Image
                  src="/logos/ncoga-yay-logos/ncoga_youth_logo.png"
                  alt=""
                  width={666}
                  height={375}
                />
              </Link>
            </div>
            <nav className="ncoga-footer-social" aria-label="NCOGA YAY social">
              <ul>
                {ncogaSocial.map((profile) => (
                  <li key={profile.href}>
                    <a
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialIcon name={profile.label} />
                      <span className="sr-only">
                        {profile.label} (opens in a new tab)
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="ncoga-footer-bottom">
          <span>
            © {new Date().getFullYear()} {ncogaIdentity.shortName}
          </span>
          {preview ? (
            <span>Design foundation preview · not the public NCOGA site</span>
          ) : (
            <nav className="ncoga-footer-legal" aria-label="Legal">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </nav>
          )}
          <span className="ncoga-footer-credit">
            Made with <span aria-hidden="true">❤️</span>
            <span className="sr-only">love</span> by{" "}
            <a
              href="https://princeagyeituffour.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nana
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
