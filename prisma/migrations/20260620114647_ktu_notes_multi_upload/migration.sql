-- Add notesFiles (JSON array of {id, name, url, path}) and migrate existing notesUrl values into it.
ALTER TABLE "Subject" ADD COLUMN "notesFiles" JSONB DEFAULT '[]'::jsonb;

UPDATE "Subject"
SET "notesFiles" = jsonb_build_array(
  jsonb_build_object(
    'id', "id" || '-legacy',
    'name', 'Notes',
    'url', "notesUrl",
    'path', "id" || '/notes.pdf'
  )
)
WHERE "notesUrl" IS NOT NULL;

ALTER TABLE "Subject" DROP COLUMN "notesUrl";
