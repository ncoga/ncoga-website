import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { EditorialText } from "@/components/ncoga/editorial-text";
import { PressBlockView } from "@/components/ncoga/press-block";
import { PressFigure } from "@/components/ncoga/press-figure";
import {
  getPressArticle,
  pressArticles,
  relatedPressArticles,
  type PressBlock,
} from "@/content/press-articles";
import { ncogaPageMetadata } from "@/lib/ncoga-metadata";

type PressArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pressArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PressArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getPressArticle(slug);
  if (!article) return {};

  const figure = article.heroFigure;

  return ncogaPageMetadata({
    title: `${article.title} | NCOGA`,
    description: article.description,
    path: `/press/${article.slug}`,
    ...(figure.kind === "image"
      ? {
          image: {
            url: figure.src,
            width: figure.width,
            height: figure.height,
            alt: figure.alt,
          },
        }
      : {}),
  });
}

export default async function PressArticlePage({
  params,
}: PressArticlePageProps) {
  const { slug } = await params;
  const article = getPressArticle(slug);
  if (!article) notFound();
  const related = relatedPressArticles(article.slug);

  return (
    <article className="ncoga-section ncoga-editorial ncoga-article">
      <div className="ncoga-container">
        <nav className="ncoga-about-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/press">Press &amp; Media</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">
            <EditorialText text={article.title} />
          </span>
        </nav>
        <header className="ncoga-article-header">
          <p className="ncoga-press-kicker">{article.kicker}</p>
          <h1>
            <EditorialText text={article.title} />
          </h1>
          <p className="ncoga-article-dateline">{article.when}</p>
        </header>
        <PressFigure
          figure={article.heroFigure}
          priority
          sizes="(min-width: 900px) 720px, 100vw"
        />
        <div className="ncoga-article-body">
          {article.blocks.map((block, index) => (
            <PressBlockView
              key={`${block.kind}-${index}`}
              block={block as PressBlock}
            />
          ))}
        </div>
        <aside className="ncoga-article-more" aria-labelledby="more-stories">
          <h2 id="more-stories">More stories</h2>
          <ul>
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/press/${item.slug}`}>
                  <EditorialText text={item.title} />
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  );
}
