"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  isAnnouncementActive,
  siteAnnouncement,
} from "@/content/site-announcement";

const storageKey = `ncoga-announcement:${siteAnnouncement.id}`;
const openAfterLoadMs = 5000;
const openAfterInteractionMs = 3000;

export function SiteAnnouncement() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = isAnnouncementActive(siteAnnouncement.hideOnOrAfter);

  useEffect(() => {
    if (pathname === "/design-system" || !active) return;
    if (sessionStorage.getItem(storageKey)) return;

    let timer = 0;
    let opened = false;

    const show = () => {
      if (opened || sessionStorage.getItem(storageKey)) return;
      opened = true;
      sessionStorage.setItem(storageKey, "shown");
      setOpen(true);
      window.clearTimeout(timer);
      removeInteractionListeners();
    };

    const schedule = (delay: number) => {
      window.clearTimeout(timer);
      timer = window.setTimeout(show, delay);
    };

    const onInteract = () => {
      removeInteractionListeners();
      schedule(openAfterInteractionMs);
    };

    function removeInteractionListeners() {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
      window.removeEventListener("wheel", onInteract);
      window.removeEventListener("touchmove", onInteract);
    }

    schedule(openAfterLoadMs);
    window.addEventListener("pointerdown", onInteract);
    window.addEventListener("keydown", onInteract);
    window.addEventListener("wheel", onInteract, { passive: true });
    window.addEventListener("touchmove", onInteract, { passive: true });

    return () => {
      window.clearTimeout(timer);
      removeInteractionListeners();
    };
  }, [active, pathname]);

  if (pathname === "/design-system" || !active) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="ncoga-announcement-dialog sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{siteAnnouncement.title}</DialogTitle>
        </DialogHeader>
        <Image
          src={siteAnnouncement.image.src}
          alt={siteAnnouncement.image.alt}
          width={siteAnnouncement.image.width}
          height={siteAnnouncement.image.height}
          sizes="(max-width: 640px) 90vw, 480px"
        />
        <DialogDescription
          asChild
          className="ncoga-announcement-copy text-base text-[#171c19]"
        >
          <div>
            <p>{siteAnnouncement.when}</p>
            <p>{siteAnnouncement.place}</p>
            <p>{siteAnnouncement.membershipNote}</p>
          </div>
        </DialogDescription>
        <div className="ncoga-actions">
          <Button asChild>
            <a
              href={siteAnnouncement.registerHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteAnnouncement.registerLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Button>
        </div>
        <p className="ncoga-announcement-note">
          {siteAnnouncement.whatsappNote}
        </p>
        <div className="ncoga-actions">
          <Button asChild>
            <a
              href={siteAnnouncement.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteAnnouncement.whatsappLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
