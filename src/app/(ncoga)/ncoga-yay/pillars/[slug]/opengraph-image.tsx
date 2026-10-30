import { getYayPillar } from "@/content/yay-pillars";
import { shareCard, shareCardSize } from "@/lib/share-card";

export const alt = "An NCOGA Young Adult and Youth pillar";
export const size = shareCardSize;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pillar = getYayPillar(slug);

  return shareCard({
    eyebrow: "NCOGA YAY",
    title: pillar?.name ?? "Young Adult & Youth",
  });
}
