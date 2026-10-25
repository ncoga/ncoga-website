const filmTitle = "The Fisherman";

export function EditorialText({ text }: { text: string }) {
  const parts = text.split(filmTitle);
  if (parts.length === 1) return text;

  return parts.map((part, index) => (
    <span key={`${index}-${part.slice(0, 12)}`}>
      {[index > 0 ? <em key="film">{filmTitle}</em> : null, part]}
    </span>
  ));
}
