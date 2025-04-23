import express from "express";

import cors from "cors";
import dotenv from "dotenv";

import Authroutes from "./src/routes/AuthRoutes";
import Gedungroutes from "./src/routes/GedungRoutes";
import Ruanganroutes from "./src/routes/RuanganRoutes";
import Peminjamanroutes from "./src/routes/PeminjamanRoutes";

import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

dotenv.config();

import { port } from "./src/db.config";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", Authroutes);
app.use("/api/gedung", Gedungroutes);
app.use("/api/ruangan", Ruanganroutes);
app.use("/api/peminjaman", Peminjamanroutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
