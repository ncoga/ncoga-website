import Image from "next/image";
import Link from "next/link";

import { ncogaIdentity } from "@/content/ncoga-foundation";

type FooterGroup = {
  title: string;
  links: readonly { label: string; href: string }[];
};

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
          {preview ? (
            <span>Design foundation preview · not the public NCOGA site</span>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
