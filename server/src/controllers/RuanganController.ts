import { AuthRequest } from "types/types";
import { Response, Request } from "express";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export const createRuangan = async (req: AuthRequest, res: Response) => {
  const { nama, deskripsi, gedungId } = req.body;

  try {
    const response = await prisma.ruangan.create({
      data: {
        nama: nama,
        deskripsi: deskripsi,
        gedungId: gedungId,
        authorId: req.userId,
      },
    });

    if (!response) {
      res.status(400).json({ msg: "Error buat ruangan" });
      return;
    }

    res.status(200).json({
      ruanganData: response,
      msg: "Sucessfull",
    });
  } catch (error) {
    console.error("Create Gedung Error:", req.userId);
    res
      .status(500)
      .json({ msg: "Server internal error", error: error.message });
  }
};

export const getRuanganGedung = async (req: AuthRequest, res: Response) => {
  const gedungparams = req.params.gedungparams;

  try {
    const response = await prisma.ruangan.findMany({
      where: {
        gedungId: gedungparams,
      },
      include: {
        gedung: true,
      },
    });

    if (!response) {
      res.status(400).json({ msg: "Tidak ada ruangan" });
      return;
    }

    res.status(200).json({
      ruangan: response,
      msg: "Sucessfull",
    });
  } catch (error) {
    console.error("Create Gedung Error:", req.userId);
    res
      .status(500)
      .json({ msg: "Server internal error", error: error.message });
  }
};

export const getRuanganAll = async (req: Request, res: Response) => {
  try {
    const response = await prisma.ruangan.findMany({
      include: {
        gedung: true,
      },
    });

    if (!response) {
      res.status(400).json({ msg: "Tidak ada ruangan" });
      return;
    }

    res.status(200).json({
      ruangan: response,
      msg: "Sucessfull",
    });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Server internal error", error: error.message });
  }
};

export async function getSingleRuangan(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const response = await prisma.ruangan.findUnique({
      where: {
        id: id,
      },
      include: {
        gedung: true,
      },
    });

    if (!response) {
      res.status(200).json({ msg: "no ruangan" });
      return;
    }

    res.status(200).json(response);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Server internal error", error: error.message });
  }
}

export async function deleteRuangan(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const response = await prisma.ruangan.delete({
      where: {
        id: id,
      },
    });

    if (!response) {
      res.status(200).json({ msg: "no ruangan" });
      return;
    }

    res.status(200).json(response);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Server internal error", error: error.message });
  }
}

export async function editRuangan(req: Request, res: Response) {
  const { id } = req.params;
  const { nama, deskripsi, gedungId } = req.body;

  try {
    const response = await prisma.ruangan.update({
      where: {
        id: id,
      },
      data: {
        nama: nama,
        deskripsi: deskripsi,
        gedungId: gedungId,
      },
    });

    if (!response) {
      res.status(200).json({ msg: "no ruangan" });
      return;
    }

    res.status(200).json(response);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Server internal error", error: error.message });
  }
}
