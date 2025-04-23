import {
  createPeminjaman,
  deletePeminjaman,
  editPeminjaman,
  getAllPeminjaman,
  getPeminjamanByStatus,
  getPeminjamanByUser,
  getRoomPeminjaman,
  verifyPeminjaman,
} from "../controllers/PeminjamanController";
import { verifyJwt } from "../middlewares/verifyJWT";
import express from "express";

const router = express.Router();

router.post("/createpeminjaman", verifyJwt, createPeminjaman);
router.get("/all", getAllPeminjaman);
router.get("/ruang/:ruanganId", getRoomPeminjaman);
router.get("/peminjamanbystatus/:status", getPeminjamanByStatus);
router.put("/peminjamanverify", verifyPeminjaman);
router.get("/peminjamanbyuser", verifyJwt, getPeminjamanByUser);
router.delete("/:id", deletePeminjaman);
router.put("/:id", editPeminjaman);

export default router;
