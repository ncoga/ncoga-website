import Image from "next/image";

import type { PressFigure as PressFigureData } from "@/content/press-articles";

export function PressFigure({
  figure,
  priority = false,
  sizes,
  className,
}: {
  figure: PressFigureData;
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  if (figure.kind === "placeholder") {
    return (
      <figure className="ncoga-press-placeholder" data-tone={figure.tone}>
        <span>{figure.label}</span>
      </figure>
    );
  }

  return (
    <figure
      className={
        className ? `ncoga-press-figure ${className}` : "ncoga-press-figure"
      }
    >
      <Image
        src={figure.src}
        alt={figure.alt}
        width={figure.width}
        height={figure.height}
        priority={priority}
        sizes={sizes}
      />
    </figure>
  );
}
