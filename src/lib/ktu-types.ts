export interface NotesFile {
  id: string;
  name: string;
  url: string;
  path: string;
}

export function parseNotesFiles(value: unknown): NotesFile[] {
  if (!Array.isArray(value)) return [];
  return value.filter(
    (item): item is NotesFile =>
      !!item &&
      typeof item === "object" &&
      typeof (item as NotesFile).id === "string" &&
      typeof (item as NotesFile).url === "string"
  );
}
