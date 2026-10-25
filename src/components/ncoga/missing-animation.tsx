"use client";

import { LottieSvg } from "lottie-react";
import { useEffect, useState } from "react";

import animationFile from "../../../public/Search Not Found V2.json";

const animation = {
  ...animationFile,
  layers: animationFile.layers.filter((layer) => layer.nm !== "BG"),
};

export function MissingAnimation() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <LottieSvg
      src={animation}
      autoplay={!reduceMotion}
      loop={!reduceMotion}
      aria-hidden="true"
      className="ncoga-missing-animation"
    />
  );
}
