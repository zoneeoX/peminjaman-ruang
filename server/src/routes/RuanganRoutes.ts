import {
  createRuangan,
  deleteRuangan,
  editRuangan,
  getRuanganAll,
  getRuanganGedung,
  getSingleRuangan,
} from "../controllers/RuanganController";
import { verifyJwt } from "../middlewares/verifyJWT";

import express from "express";

const router = express.Router();

router.get("/getruangan/:gedungparams", getRuanganGedung);
router.get("/getruangan", getRuanganAll);
router.get("/:id", getSingleRuangan);
router.post("/createruangan", verifyJwt, createRuangan);
router.delete("/:id", deleteRuangan)
router.put("/:id", editRuangan)

export default router;
