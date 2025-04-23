import { verifyJwt } from "../middlewares/verifyJWT";
import {
  createGedung,
  deleteGedung,
  getGedung,
  updateGedung,
} from "../controllers/GedungController";
import express from "express";

const router = express.Router();

router.get("/getgedung", getGedung);
router.post("/creategedung", verifyJwt, createGedung);
router.delete("/deletegedung/:gedungId", deleteGedung);
router.put("/updategedung/:gedungId", updateGedung);

export default router;
