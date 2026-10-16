/** Publication ownership and provenance are required before records enter a public feed. */
export type ContentOwner = "ncoga" | "yay" | "both";
export type ContentSource = {
  kind: "official_site" | "approved_update" | "source_document";
  reference: string;
  checkedAt: string;
  owner?: string;
};

type EditorialBase = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  owner: ContentOwner;
  source: ContentSource;
  updatedAt: string;
};

type PublicationFields =
  | { status: "draft" | "in_review"; publishedAt?: never; scheduledFor?: never }
  | { status: "scheduled"; scheduledFor: string; publishedAt?: never }
  | {
      status: "published" | "archived";
      publishedAt: string;
      scheduledFor?: never;
    };

export type EditorialRecord = EditorialBase & PublicationFields;

export type StoryRecord = EditorialRecord & {
  kind: "story";
  author?: string;
  image?: {
    src: string;
    alt: string;
    credit?: string;
    rightsNote: string;
  };
};

export type EventRecord = EditorialRecord & {
  kind: "event";
  startsAt: string;
  endsAt?: string;
  timeZone: string;
  location:
    | { kind: "physical"; label: string; address?: string }
    | { kind: "virtual"; label: string; publicUrl?: string };
  registration:
    | { state: "not_open" | "closed" | "not_required" }
    | { state: "open"; url: string };
};
