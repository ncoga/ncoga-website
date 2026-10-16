import type { ReactNode } from "react";

/** Shared empty state for a verified feed with no public records yet. */
export function NcogaEmptyState({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="ncoga-empty" role="status">
      <span className="ncoga-eyebrow">{label}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
