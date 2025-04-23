import express from "express";
import {
  deleteUser,
  editUser,
  getAllUser,
  getUser,
  login,
  logout,
  register,
} from "../controllers/AuthController";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/user", getUser);
router.get("/users", getAllUser);
router.post("/user/:id", deleteUser);
router.put("/user/:id", editUser)
router.post("/logout", logout);

export default router;
