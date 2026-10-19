"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { ncogaIdentity, type NcogaNavItem } from "@/content/ncoga-foundation";

export type { NcogaNavItem };

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
  const [desktopOpenLabel, setDesktopOpenLabel] = useState<string | null>(null);
  const [desktopNestedLabel, setDesktopNestedLabel] = useState<string | null>(
    null,
  );
  const [mobileOpenLabel, setMobileOpenLabel] = useState<string | null>(null);
  const [mobileNestedLabel, setMobileNestedLabel] = useState<string | null>(
    null,
  );
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const desktopTriggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const showYayMark = usePathname() === "/ncoga-yay";

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const onViewportChange = () => {
      if (desktop.matches) {
        setMenuOpen(false);
        setMobileOpenLabel(null);
        setMobileNestedLabel(null);
      } else {
        setDesktopOpenLabel(null);
        setDesktopNestedLabel(null);
      }
    };
    desktop.addEventListener("change", onViewportChange);
    return () => desktop.removeEventListener("change", onViewportChange);
  }, []);

  useEffect(() => {
    if (!desktopOpenLabel) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setDesktopOpenLabel(null);
      setDesktopNestedLabel(null);
      desktopTriggerRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!desktopMenuRef.current?.contains(event.target as Node)) {
        setDesktopOpenLabel(null);
        setDesktopNestedLabel(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [desktopOpenLabel]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setMobileOpenLabel(null);
        setMobileNestedLabel(null);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !sidebarRef.current) return;
      const focusable = Array.from(
        sidebarRef.current.querySelectorAll<HTMLElement>(
          "button:not([disabled]), a[href]",
        ),
      ).filter((element) => element.getClientRects().length > 0);
      if (!focusable.length) return;
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
    setMobileOpenLabel(null);
    setMobileNestedLabel(null);
    triggerRef.current?.focus();
  };

  const closeAfterNavigation = () => {
    setMenuOpen(false);
    setMobileOpenLabel(null);
    setMobileNestedLabel(null);
  };

  const closeDesktopMenu = () => {
    setDesktopOpenLabel(null);
    setDesktopNestedLabel(null);
  };

  return (
    <header className="ncoga-header">
      <div className="ncoga-container ncoga-header-inner">
        <div className="ncoga-header-brand">
          {showLogo ? (
            <>
              <Link
                className="ncoga-brand"
                href={homeHref}
                aria-label={`${ncogaIdentity.shortName} home`}
              >
                <Image
                  className="ncoga-brand-logo"
                  src="/images/ncoga-logo.png"
                  alt=""
                  width={500}
                  height={500}
                  priority
                />
              </Link>
              <Link
                className="ncoga-yay-nav-mark"
                href="/ncoga-yay"
                aria-label="NCOGA Young Adult and Youth"
                aria-current={showYayMark ? "page" : undefined}
              >
                <Image
                  src="/logos/ncoga-yay-logos/ncoga_youth_logo.png"
                  alt=""
                  width={666}
                  height={375}
                />
              </Link>
            </>
          ) : (
            <Link
              className="ncoga-brand"
              href={homeHref}
              aria-label={`${ncogaIdentity.shortName} home`}
            >
              <span className="ncoga-brand-mark" aria-hidden="true">
                N
              </span>
              <span className="ncoga-brand-words">
                <strong>{ncogaIdentity.shortName}</strong>
                <small>{ncogaIdentity.name}</small>
              </span>
            </Link>
          )}
        </div>
        <nav className="ncoga-desktop-nav" aria-label="Main navigation">
          {items.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="ncoga-nav-item"
                ref={desktopMenuRef}
              >
                <button
                  ref={desktopTriggerRef}
                  type="button"
                  className="ncoga-nav-trigger"
                  id={`${menuId}-desktop-trigger`}
                  aria-expanded={desktopOpenLabel === item.label}
                  aria-controls={`${menuId}-desktop-menu`}
                  onClick={() => {
                    setDesktopNestedLabel(null);
                    setDesktopOpenLabel((current) =>
                      current === item.label ? null : item.label,
                    );
                  }}
                >
                  {item.label}
                  <span className="ncoga-nav-chevron" aria-hidden="true" />
                </button>
                <ul
                  id={`${menuId}-desktop-menu`}
                  className="ncoga-nav-menu"
                  aria-labelledby={`${menuId}-desktop-trigger`}
                  data-state={
                    desktopOpenLabel === item.label ? "open" : "closed"
                  }
                  inert={desktopOpenLabel === item.label ? undefined : true}
                >
                  {item.children.map((child) => (
                    <li key={child.label}>
                      {child.children ? (
                        <>
                          <button
                            type="button"
                            className="ncoga-nav-subtrigger"
                            aria-expanded={desktopNestedLabel === child.label}
                            aria-controls={`${menuId}-desktop-${child.label}`}
                            onClick={() =>
                              setDesktopNestedLabel((current) =>
                                current === child.label ? null : child.label,
                              )
                            }
                          >
                            {child.label}
                            <span
                              className="ncoga-nav-chevron"
                              aria-hidden="true"
                            />
                          </button>
                          <ul
                            id={`${menuId}-desktop-${child.label}`}
                            className="ncoga-nav-submenu"
                            hidden={desktopNestedLabel !== child.label}
                          >
                            {child.children.map((grandchild) => (
                              <li key={grandchild.href}>
                                <Link
                                  href={grandchild.href}
                                  onClick={closeDesktopMenu}
                                >
                                  {grandchild.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link href={child.href} onClick={closeDesktopMenu}>
                          {child.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ),
          )}
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
            {items.map((item, index) =>
              item.children ? (
                <div key={item.label} className="ncoga-mobile-group">
                  <button
                    type="button"
                    className="ncoga-mobile-disclosure"
                    aria-expanded={mobileOpenLabel === item.label}
                    aria-controls={`${menuId}-mobile-${index}`}
                    onClick={() => {
                      setMobileNestedLabel(null);
                      setMobileOpenLabel((current) =>
                        current === item.label ? null : item.label,
                      );
                    }}
                  >
                    <span
                      className="ncoga-mobile-link-number"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item.label}</span>
                  </button>
                  <div
                    id={`${menuId}-mobile-${index}`}
                    className="ncoga-mobile-subnav"
                    hidden={mobileOpenLabel !== item.label}
                  >
                    {mobileOpenLabel === item.label
                      ? item.children.map((child) =>
                          child.children ? (
                            <div key={child.label}>
                              <button
                                type="button"
                                className="ncoga-mobile-subtrigger"
                                aria-expanded={
                                  mobileNestedLabel === child.label
                                }
                                aria-controls={`${menuId}-mobile-nested-${index}`}
                                onClick={() =>
                                  setMobileNestedLabel((current) =>
                                    current === child.label
                                      ? null
                                      : child.label,
                                  )
                                }
                              >
                                {child.label}
                              </button>
                              <div
                                id={`${menuId}-mobile-nested-${index}`}
                                className="ncoga-mobile-nested"
                                hidden={mobileNestedLabel !== child.label}
                              >
                                {mobileNestedLabel === child.label
                                  ? child.children.map((grandchild) => (
                                      <Link
                                        key={grandchild.href}
                                        href={grandchild.href}
                                        onClick={closeAfterNavigation}
                                      >
                                        {grandchild.label}
                                      </Link>
                                    ))
                                  : null}
                              </div>
                            </div>
                          ) : (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeAfterNavigation}
                            >
                              {child.label}
                            </Link>
                          ),
                        )
                      : null}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={closeAfterNavigation}
                >
                  <span className="ncoga-mobile-link-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                </Link>
              ),
            )}
          </nav>
          <p className="ncoga-mobile-sidebar-foot">{ncogaIdentity.name}</p>
        </aside>
      </div>
    </header>
  );
}
