-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('EUR', 'USD', 'GBP');

-- AlterTable
ALTER TABLE "JobOffer" ADD COLUMN     "salary_currency" "Currency" NOT NULL DEFAULT 'EUR';
