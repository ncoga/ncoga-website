import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

const fontDirectory = join(process.cwd(), "src/lib/share-card-fonts");

const [dmSans, newsreader] = await Promise.all([
  readFile(join(fontDirectory, "dm-sans-latin.ttf")),
  readFile(join(fontDirectory, "newsreader-latin.ttf")),
]);

export const shareCardSize = {
  width: 1200,
  height: 630,
} as const;

export function shareCard({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow: string;
}) {
  const titleSize = title.length > 36 ? 58 : 72;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#123F32",
        color: "#FAF8F2",
        padding: "64px 72px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: 84, height: 8, background: "#D9A227" }} />
        <div
          style={{
            display: "flex",
            marginLeft: 24,
            fontFamily: "DM Sans",
            fontSize: 28,
            letterSpacing: 2,
            color: "#D9A227",
          }}
        >
          {eyebrow}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: 980,
          fontFamily: "Newsreader",
          fontSize: titleSize,
          lineHeight: 1.08,
          fontWeight: 600,
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: "flex",
          fontFamily: "DM Sans",
          fontSize: 26,
          fontWeight: 600,
          color: "#F0EBDF",
        }}
      >
        National Council of Ghanaian Associations
      </div>
    </div>,
    {
      ...shareCardSize,
      fonts: [
        {
          name: "DM Sans",
          data: dmSans,
          style: "normal",
          weight: 600,
        },
        {
          name: "Newsreader",
          data: newsreader,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
