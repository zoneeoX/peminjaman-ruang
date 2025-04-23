/*
  Warnings:

  - You are about to drop the column `authorId` on the `Ruangan` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ruangan" DROP CONSTRAINT "Ruangan_authorId_fkey";

-- AlterTable
ALTER TABLE "Ruangan" DROP COLUMN "authorId";
