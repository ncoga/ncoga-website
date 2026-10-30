import { shareCard, shareCardSize } from "@/lib/share-card";

export const alt = "NCOGA Young Adult and Youth";
export const size = shareCardSize;
export const contentType = "image/png";

export default function Image() {
  return shareCard({ eyebrow: "NCOGA YAY", title: "Young Adult & Youth" });
}
