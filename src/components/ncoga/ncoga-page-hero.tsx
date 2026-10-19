import Image from "next/image";

export function NcogaHeroWave() {
  return (
    <svg
      className="ncoga-hero-wave"
      viewBox="0 0 1440 128"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="#faf8f2"
        d="M0 86c70 0 110-52 210-52s150 64 250 64 130-70 250-70 150 78 270 66 170-34 250-22c50 8 110 18 210 12v44H0Z"
      />
    </svg>
  );
}

export function NcogaSuppliedHero({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="ncoga-supplied-hero">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        sizes="100vw"
      />
    </figure>
  );
}
