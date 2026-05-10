-- CreateEnum
CREATE TYPE "EnquiryStatus" AS ENUM ('NEW', 'CONTACTED', 'CLOSED');

-- AlterTable: backfill updatedAt for existing rows using createdAt
ALTER TABLE "Enquiry" ADD COLUMN "status" "EnquiryStatus" NOT NULL DEFAULT 'NEW';
ALTER TABLE "Enquiry" ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "Enquiry" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- CreateIndex
CREATE INDEX "Enquiry_status_idx" ON "Enquiry"("status");
