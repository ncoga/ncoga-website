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
                {leader.bio ? (
                  <span className="ncoga-yay-leader-bio">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <circle
                        cx="12"
                        cy="8"
                        r="3.25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                      />
                      <path
                        d="M5.5 19.2c1.3-2.8 3.5-4.2 6.5-4.2s5.2 1.4 6.5 4.2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />
                    </svg>
                    Bio
                  </span>
                ) : null}
              </button>
            </DialogTrigger>
            <DialogContent
              className="ncoga-yay-leader-dialog flex max-h-[min(88dvh,760px)] flex-col gap-0 overflow-hidden rounded-[4px] bg-[#faf8f2] p-0 text-[#171c19] sm:max-w-3xl"
              showCloseButton={false}
            >
              <DialogHeader className="ncoga-yay-leader-dialog-header">
                <DialogTitle>{leader.name}</DialogTitle>
              </DialogHeader>
              <div className="ncoga-yay-leader-dialog-body">
                {leader.image && leader.width && leader.height ? (
                  <figure className="ncoga-yay-leader-portrait">
                    <Image
                      className="ncoga-yay-leader-dialog-photo"
                      src={leader.image}
                      alt=""
                      width={leader.width}
                      height={leader.height}
                      sizes="(max-width: 700px) 100vw, 200px"
                      style={
                        leader.photoPosition
                          ? { objectPosition: leader.photoPosition }
                          : undefined
                      }
                    />
                  </figure>
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
                            <span className="sr-only">
                              {" "}
                              (opens in a new tab)
                            </span>
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
              </div>
              <DialogFooter
                showCloseButton
                className="ncoga-yay-leader-dialog-footer mx-0 mb-0 rounded-none border-[#dcd8cc] bg-transparent px-6 py-4"
              />
            </DialogContent>
          </Dialog>
        </li>
      ))}
    </ul>
  );
}
