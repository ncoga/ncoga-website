"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function NcogaAboutMotion({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const heroItems = gsap.utils.toArray<HTMLElement>(
          "[data-ncoga-hero]",
          root,
        );
        const travel = gsap.utils.clamp(20, 28, window.innerWidth * 0.022);

        gsap.from(heroItems, {
          y: travel,
          opacity: 0.78,
          duration: 0.62,
          ease: "power2.out",
          stagger: 0.06,
          willChange: "transform,opacity",
          clearProps: "opacity,transform,willChange",
        });

        gsap.utils
          .toArray<HTMLElement>("[data-ncoga-reveal]", root)
          .forEach((element) => {
            gsap.from(element, {
              y: travel,
              opacity: 0.78,
              duration: 0.64,
              ease: "power2.out",
              immediateRender: false,
              willChange: "transform,opacity",
              clearProps: "opacity,transform,willChange",
              scrollTrigger: {
                trigger: element,
                start: "top 86%",
                once: true,
              },
            });
          });
      });

      return () => media.revert();
    },
    { scope: rootRef },
  );

  return (
    <div className="ncoga-about" ref={rootRef}>
      {children}
    </div>
  );
}
