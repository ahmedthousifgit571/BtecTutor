-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "code" TEXT,
ADD COLUMN     "keyTopics" TEXT,
ADD COLUMN     "notesUrl" TEXT,
ADD COLUMN     "questionPaperUrl" TEXT,
ADD COLUMN     "syllabusFileUrl" TEXT;

-- CreateIndex
CREATE INDEX "Subject_code_idx" ON "Subject"("code");
