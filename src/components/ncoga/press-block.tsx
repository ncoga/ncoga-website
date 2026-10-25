import Link from "next/link";

import { EditorialText } from "@/components/ncoga/editorial-text";
import { PressFigure } from "@/components/ncoga/press-figure";
import { Button } from "@/components/ui/button";
import type { PressBlock } from "@/content/press-articles";

type FigurePlacement = Extract<PressBlock, { kind: "figure" }>["placement"];

function figureClassName(placement: FigurePlacement) {
  switch (placement) {
    case "wide":
      return "is-wide";
    case "left":
      return "is-left";
    case "right":
      return "is-right";
    case "inset":
      return "is-inset";
    default: {
      const exhaustive: never = placement;
      return exhaustive;
    }
  }
}

function figureSizes(placement: FigurePlacement) {
  switch (placement) {
    case "wide":
      return "(min-width: 900px) 720px, 100vw";
    case "left":
    case "right":
      return "(min-width: 700px) 280px, 100vw";
    case "inset":
      return "(min-width: 700px) 360px, 100vw";
    default: {
      const exhaustive: never = placement;
      return exhaustive;
    }
  }
}

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function PressBlockView({ block }: { block: PressBlock }) {
  switch (block.kind) {
    case "paragraph":
      return (
        <p>
          <EditorialText text={block.text} />
        </p>
      );
    case "heading":
      return (
        <h2>
          <EditorialText text={block.text} />
        </h2>
      );
    case "quote":
      return (
        <blockquote className="ncoga-article-quote">
          <EditorialText text={block.text} />
        </blockquote>
      );
    case "links":
      return (
        <p className="ncoga-article-links">
          {block.links.map((link, index) => (
            <span key={link.href}>
              {index > 0 ? <span aria-hidden="true"> | </span> : null}
              <ExternalLink href={link.href} label={link.label} />
            </span>
          ))}
        </p>
      );
    case "entries":
      return (
        <ul className="ncoga-article-entries">
          {block.items.map((item) => (
            <li key={item.title}>
              <strong>
                <EditorialText text={item.title} />
              </strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      );
    case "themes":
      return (
        <div className="ncoga-article-themes">
          {block.items.map((item) => (
            <article key={item.year}>
              <p className="ncoga-press-kicker">{item.year}</p>
              <h3>{item.marks}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      );
    case "list":
      return (
        <ul className="ncoga-article-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "signoff":
      return (
        <p className="ncoga-article-signoff">
          {block.lines.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>
      );
    case "figure":
      return (
        <PressFigure
          figure={block.figure}
          className={figureClassName(block.placement)}
          sizes={figureSizes(block.placement)}
        />
      );
    case "actions":
      return (
        <div className="ncoga-actions">
          {block.actions.map((action) => (
            <Button key={action.href} asChild variant={action.variant}>
              {action.external ? (
                <a href={action.href} target="_blank" rel="noopener noreferrer">
                  {action.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <Link href={action.href}>{action.label}</Link>
              )}
            </Button>
          ))}
        </div>
      );
    default: {
      const exhaustive: never = block;
      return exhaustive;
    }
  }
}
