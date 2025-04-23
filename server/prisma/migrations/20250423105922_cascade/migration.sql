-- DropForeignKey
ALTER TABLE "Peminjaman" DROP CONSTRAINT "Peminjaman_ruanganId_fkey";

-- DropForeignKey
ALTER TABLE "Ruangan" DROP CONSTRAINT "Ruangan_gedungId_fkey";

-- AddForeignKey
ALTER TABLE "Ruangan" ADD CONSTRAINT "Ruangan_gedungId_fkey" FOREIGN KEY ("gedungId") REFERENCES "Gedung"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peminjaman" ADD CONSTRAINT "Peminjaman_ruanganId_fkey" FOREIGN KEY ("ruanganId") REFERENCES "Ruangan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
