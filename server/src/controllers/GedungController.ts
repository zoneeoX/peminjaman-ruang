import { AuthRequest } from "types/types";
import { PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createGedung = async (req: AuthRequest, res: Response) => {
  const { nama } = req.body;

  try {
    const response = await prisma.gedung.create({
      data: {
        nama: nama,
        authorId: req.userId,
      },
    });
    if (!response) {
      res.status(400).json({ msg: "Error buat gedung" });
      return;
    }

    res.status(200).json({
      gedungCreated: response,
      msg: "Sucessfull",
    });
  } catch (error) {
    console.error("Create Gedung Error:", req.userId);
    res
      .status(500)
      .json({ msg: "Server internal error", error: error.message });
  }
};

export const getGedung = async (req: Request, res: Response) => {
  try {
    const gedung = await prisma.gedung.findMany({
      include: {
        author: true,
        Ruangan: true,
      },
    });

    if (!gedung) {
      res.status(400).json({ msg: "No gedung Found" });
      return;
    }

    res.status(200).json({
      gedung: gedung,
      msg: "Fetched sucessful",
    });
  } catch (error) {
    res.status(500).json({ msg: "Server internal error" });
  }
};

export const updateGedung = async (req: AuthRequest, res: Response) => {
  const { nama } = req.body;

  try {
    const response = await prisma.gedung.update({
      where: {
        id: String(req.params.gedungId),
      },
      data: {
        nama: nama,
      },
    });
    if (!response) {
      res.status(400).json({ msg: "gedung didn't update" });
      return;
    }

    res
      .status(200)
      .json({ msg: "gedung updated successfully", data: response });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error", error });
  }
};

export const deleteGedung = async (req: Request, res: Response) => {
  try {
    await prisma.gedung.delete({
      where: {
        id: String(req.params.gedungId),
      },
    });

    res.status(200).json({ msg: "gedung deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error", error });
  }
};
