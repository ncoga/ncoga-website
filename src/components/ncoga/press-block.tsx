import Link from "next/link";

import { EditorialText } from "@/components/ncoga/editorial-text";
import { PressFigure } from "@/components/ncoga/press-figure";
import { Button } from "@/components/ui/button";
import type { PressBlock } from "@/content/press-articles";

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
          className="is-inset"
          sizes="(min-width: 700px) 420px, 100vw"
        />
      );
    case "gallery":
      return (
        <div className="ncoga-article-gallery">
          {block.figures.map((figure) => (
            <PressFigure
              key={figure.src}
              figure={figure}
              sizes="(min-width: 700px) 240px, 100vw"
            />
          ))}
        </div>
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
