import Link from "next/link";

import { EditorialText } from "@/components/ncoga/editorial-text";
import { PressFigure } from "@/components/ncoga/press-figure";
import type { PressArticleRecord } from "@/content/press-articles";

export function PressStory({
  article,
  className,
  heading,
  priority = false,
  sizes,
}: {
  article: PressArticleRecord;
  className: string;
  heading: "h2" | "h3";
  priority?: boolean;
  sizes: string;
}) {
  const Title = heading;

  return (
    <Link href={`/press/${article.slug}`} className={className}>
      <PressFigure
        figure={article.indexFigure}
        priority={priority}
        sizes={sizes}
      />
      <div className="ncoga-press-copy">
        <p className="ncoga-press-kicker">{article.kicker}</p>
        <Title>
          <EditorialText text={article.title} />
        </Title>
        <p>{article.dek}</p>
        <span className="ncoga-press-read">{article.linkLabel}</span>
      </div>
    </Link>
  );
}
