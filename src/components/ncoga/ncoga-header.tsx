"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ncogaIdentity } from "@/content/ncoga-foundation";

export type NcogaNavItem = { label: string; href: string };

export function NcogaHeader({
  items,
  homeHref = "/",
  showLogo = false,
}: {
  items: readonly NcogaNavItem[];
  homeHref?: string;
  showLogo?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const onViewportChange = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", onViewportChange);
    return () => desktop.removeEventListener("change", onViewportChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = sidebarRef.current?.querySelectorAll<HTMLElement>(
        "button:not([disabled]), a[href]",
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <header className="ncoga-header">
      <div className="ncoga-container ncoga-header-inner">
        <Link
          className="ncoga-brand"
          href={homeHref}
          aria-label={`${ncogaIdentity.shortName} home`}
        >
          {showLogo ? (
            <Image
              className="ncoga-brand-logo"
              src="/images/ncoga-logo.png"
              alt=""
              width={500}
              height={500}
              priority
            />
          ) : (
            <span className="ncoga-brand-mark" aria-hidden="true">
              N
            </span>
          )}
          <span className="ncoga-brand-words">
            <strong>{ncogaIdentity.shortName}</strong>
            <small>{ncogaIdentity.name}</small>
          </span>
        </Link>
        <nav className="ncoga-desktop-nav" aria-label="Main navigation">
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          ref={triggerRef}
          type="button"
          className="ncoga-menu-button"
          aria-controls="ncoga-mobile-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
          <span className="ncoga-menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
      <div
        id="ncoga-mobile-nav"
        className="ncoga-mobile-layer"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        data-state={menuOpen ? "open" : "closed"}
      >
        <button
          className="ncoga-mobile-backdrop"
          type="button"
          tabIndex={-1}
          aria-label="Close navigation"
          onClick={closeMenu}
        />
        <aside
          ref={sidebarRef}
          className="ncoga-mobile-sidebar"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="ncoga-mobile-sidebar-top">
            <span>{ncogaIdentity.shortName}</span>
            <button
              type="button"
              className="ncoga-sidebar-close"
              aria-label="Close navigation"
              onClick={closeMenu}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav className="ncoga-mobile-nav" aria-label="Mobile navigation">
            {items.map((item, index) => (
              <Link
                key={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                <span className="ncoga-mobile-link-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          <p className="ncoga-mobile-sidebar-foot">{ncogaIdentity.name}</p>
        </aside>
      </div>
    </header>
  );
}
