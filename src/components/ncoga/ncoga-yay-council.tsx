"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  unpublishedCouncilBiography,
  visibleYayCouncilLeaders,
  yayCouncilInitials,
} from "@/content/yay-council";

export function NcogaYayCouncil({ names }: { names?: readonly string[] }) {
  const leaders = visibleYayCouncilLeaders(names);

  return (
    <ul className="ncoga-yay-council-grid">
      {leaders.map((leader, index) => (
        <li key={leader.name}>
          <Dialog>
            <DialogTrigger asChild>
              <button type="button" className="ncoga-yay-leader">
                {leader.image && leader.width && leader.height ? (
                  <span className="ncoga-yay-leader-frame">
                    <Image
                      className="ncoga-yay-leader-photo"
                      src={leader.image}
                      alt=""
                      fill
                      sizes="(max-width: 700px) 46vw, 240px"
                      style={
                        leader.photoPosition
                          ? { objectPosition: leader.photoPosition }
                          : undefined
                      }
                    />
                  </span>
                ) : (
                  <span
                    className={
                      index % 2 === 0
                        ? "ncoga-yay-leader-mark"
                        : "ncoga-yay-leader-mark is-sand"
                    }
                    aria-hidden="true"
                  >
                    {yayCouncilInitials(leader.name)}
                  </span>
                )}
                <span className="ncoga-yay-leader-name">{leader.name}</span>
              </button>
            </DialogTrigger>
            <DialogContent
              className="ncoga-yay-leader-dialog rounded-[4px] bg-[var(--ncoga-ivory)] text-[var(--ncoga-ink)] sm:max-w-md"
              showCloseButton={false}
            >
              <DialogHeader>
                <DialogTitle>{leader.name}</DialogTitle>
              </DialogHeader>
              {leader.image && leader.width && leader.height ? (
                <span className="ncoga-yay-leader-frame is-portrait">
                  <Image
                    className="ncoga-yay-leader-photo"
                    src={leader.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 90vw, 420px"
                    style={
                      leader.photoPosition
                        ? { objectPosition: leader.photoPosition }
                        : undefined
                    }
                  />
                </span>
              ) : null}
              {leader.bio ? (
                <DialogDescription asChild>
                  <div className="ncoga-yay-leader-note">
                    {leader.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {leader.link ? (
                      <p>
                        {leader.link.lead}{" "}
                        <a
                          href={leader.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {leader.link.label}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </p>
                    ) : null}
                  </div>
                </DialogDescription>
              ) : (
                <DialogDescription className="ncoga-yay-leader-note">
                  {unpublishedCouncilBiography}
                </DialogDescription>
              )}
              <DialogFooter
                showCloseButton
                className="mx-0 mt-2 mb-0 rounded-none border-[var(--ncoga-stone)] bg-transparent px-0 pt-4 pb-0"
              />
            </DialogContent>
          </Dialog>
        </li>
      ))}
    </ul>
  );
}
