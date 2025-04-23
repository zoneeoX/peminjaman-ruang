/*
  Warnings:

  - Added the required column `authorId` to the `Ruangan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ruangan" ADD COLUMN     "authorId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Ruangan" ADD CONSTRAINT "Ruangan_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
