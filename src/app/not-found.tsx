import type { Metadata } from "next";
import Link from "next/link";

import { NcogaChrome } from "@/components/ncoga/ncoga-chrome";

import "@/styles/ncoga-theme.css";

export const metadata: Metadata = {
  title: "Page not found | NCOGA",
  robots: { index: false, follow: false },
};

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press & Media" },
  { href: "/events", label: "NCOGA Events" },
  { href: "/ncoga-yay", label: "NCOGA YAY" },
  { href: "/contact", label: "Contact" },
] as const;

export default function NotFound() {
  return (
    <NcogaChrome>
      <section className="ncoga-missing" aria-labelledby="missing-title">
        <div className="ncoga-container">
          <p className="ncoga-eyebrow">404</p>
          <h1 id="missing-title" className="ncoga-heading">
            This page is not here.
          </h1>
          <p className="ncoga-lead">
            The address may have changed, or the page was never published.
          </p>
          <ul className="ncoga-missing-links">
            {routes.map((route) => (
              <li key={route.href}>
                <Link href={route.href}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </NcogaChrome>
  );
}
