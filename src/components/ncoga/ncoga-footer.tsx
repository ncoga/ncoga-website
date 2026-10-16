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
            <p className="ncoga-footer-name">{ncogaIdentity.shortName}</p>
            <p className="ncoga-footer-description">{ncogaIdentity.name}</p>
            <p className="ncoga-footer-description">
              {ncogaIdentity.yayName} is a branch of NCOGA.
            </p>
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
          ) : null}
        </div>
      </div>
    </footer>
  );
}
