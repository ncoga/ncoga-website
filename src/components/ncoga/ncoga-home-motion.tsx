"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function NcogaHomeMotion({ children }: { children: React.ReactNode }) {
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
        const heroPhoto = root.querySelector<HTMLElement>(
          "[data-ncoga-hero-photo]",
        );
        const travel = gsap.utils.clamp(14, 26, window.innerWidth * 0.022);

        gsap
          .timeline({ defaults: { ease: "power2.out" } })
          .from(heroItems, {
            y: travel,
            opacity: 0.72,
            duration: 0.62,
            stagger: 0.08,
            willChange: "transform,opacity",
            clearProps: "opacity,transform,willChange",
          })
          .from(
            heroPhoto,
            {
              scale: 1.035,
              opacity: 0.82,
              duration: 0.75,
              willChange: "transform,opacity",
              clearProps: "opacity,transform,willChange",
            },
            0.1,
          );

        gsap.utils
          .toArray<HTMLElement>("[data-ncoga-reveal]", root)
          .forEach((element) => {
            gsap.from(element, {
              y: travel,
              opacity: 0.78,
              duration: 0.68,
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
    <div className="ncoga-homepage" ref={rootRef}>
      {children}
    </div>
  );
}
