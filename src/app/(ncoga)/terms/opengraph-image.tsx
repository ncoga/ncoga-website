import { shareCard, shareCardSize } from "@/lib/share-card";

export const alt =
  "Terms of use for the National Council of Ghanaian Associations";
export const size = shareCardSize;
export const contentType = "image/png";

export default function Image() {
  return shareCard({ eyebrow: "NCOGA", title: "Terms of Use" });
}
