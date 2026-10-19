"use client";

import { useState, useSyncExternalStore } from "react";

const filmSrc =
  "https://www.youtube-nocookie.com/embed/izmN42dVWBM?autoplay=1&mute=1&playsinline=1&controls=0&rel=0";

function subscribeToMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function motionAllowsAutoplay() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function YayFilmStill() {
  return (
    <svg
      className="ncoga-yay-film-still"
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Film paused"
    >
      <rect width="640" height="400" fill="var(--ncoga-heritage)" />
      <rect width="28" height="400" fill="var(--ncoga-gold)" />
      <rect x="28" width="42" height="400" fill="var(--ncoga-red)" />
      <rect x="70" width="22" height="400" fill="var(--ncoga-forest)" />
      <rect
        x="470"
        y="248"
        width="128"
        height="112"
        fill="var(--ncoga-forest)"
      />
      <rect x="492" y="270" width="84" height="18" fill="var(--ncoga-gold)" />
    </svg>
  );
}

export function NcogaYayHeroFilm() {
  const motionAllows = useSyncExternalStore(
    subscribeToMotion,
    motionAllowsAutoplay,
    () => false,
  );
  const [userChoice, setUserChoice] = useState<"auto" | "play" | "pause">(
    "auto",
  );
  const playing =
    userChoice === "play" || (userChoice === "auto" && motionAllows);

  return (
    <>
      <div className="ncoga-yay-film">
        {playing ? (
          <iframe
            src={filmSrc}
            title="NCOGA Young Adult and Youth film"
            // WebKit raises a page error if the player checks Fullscreen
            // and this frame has not been granted it.
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <YayFilmStill />
        )}
      </div>
      <button
        type="button"
        className="ncoga-yay-film-control"
        onClick={() => setUserChoice(playing ? "pause" : "play")}
      >
        {playing ? "Pause" : "Play"}
      </button>
    </>
  );
}
