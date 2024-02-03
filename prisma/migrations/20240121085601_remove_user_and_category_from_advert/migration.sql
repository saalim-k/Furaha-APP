/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Advert` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Advert` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Advert" DROP CONSTRAINT "Advert_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Advert" DROP CONSTRAINT "Advert_userId_fkey";

-- AlterTable
ALTER TABLE "Advert" DROP COLUMN "categoryId",
DROP COLUMN "userId";
