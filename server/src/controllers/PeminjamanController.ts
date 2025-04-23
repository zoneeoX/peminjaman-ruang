import { Response, Request } from "express";
import { AuthRequest } from "types/types";
import { PrismaClient, Status } from "../../generated/prisma";

const prisma = new PrismaClient();

export const createPeminjaman = async (req: AuthRequest, res: Response) => {
  const { startTime, endTime, catatan, ruanganid } = req.body;

  console.log({
    startTime,
    endTime,
    catatan,
    ruanganid,
    userId: req.userId,
  });

  try {
    const response = await prisma.peminjaman.create({
      data: {
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        catatan: catatan,
        ruanganId: ruanganid,
        userId: req.userId,
      },
    });

    if (!response) {
      res.status(400).json({ msg: "Error making the thing" });
      return;
    }

    res.status(200).json(response);
  } catch (error) {
    console.error("Create Peminjaman Error:", req.userId);
    res
      .status(500)
      .json({ msg: "Server internal error", error: error.message });
  }
};

export const getAllPeminjaman = async (req: Request, res: Response) => {
  try {
    const all = await prisma.peminjaman.findMany({
      include: {
        user: true,
        ruangan: {
          include: {
            gedung: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(all);
  } catch (error: any) {
    console.error("getAllPeminjaman Error:", error.message);
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

export const getRoomPeminjaman = async (req: Request, res: Response) => {
  const { ruanganId } = req.params;

  if (!ruanganId) {
    res.status(400).json({ msg: "Ruangan ID is required" });
    return;
  }

  try {
    const peminjaman = await prisma.peminjaman.findMany({
      where: { ruanganId: ruanganId, status: "APPROVED" },
      include: {
        user: true,
        ruangan: {
          include: {
            gedung: true,
          },
        },
      },
      orderBy: {
        startTime: "asc",
      },
    });

    res.status(200).json(peminjaman);
  } catch (error: any) {
    console.error("getRoomPeminjaman Error:", error.message);
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

export const verifyPeminjaman = async (req: Request, res: Response) => {
  const { status, id } = req.body;

  try {
    const response = await prisma.peminjaman.update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    console.error("getRoomPeminjaman Error:", error.message);
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

export const getPeminjamanByStatus = async (req: Request, res: Response) => {
  const { status } = req.params;

  try {
    const response = await prisma.peminjaman.findMany({
      where: {
        status: status as Status,
      },
      include: {
        ruangan: {
          include: {
            gedung: true,
          },
        },
      },
    });

    if (!response) {
      res.status(400).json({ msg: "No found" });
      return;
    }

    res.status(200).json(response);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

export const getPeminjamanByUser = async (req: AuthRequest, res: Response) => {
  try {
    const response = await prisma.peminjaman.findMany({
      where: {
        userId: req.userId,
      },
      include: {
        ruangan: {
          include: {
            gedung: true,
          },
        },
      },
    });

    if (!response) {
      res.status(400).json({ msg: "Error or not found" });
      return;
    }

    res.status(200).json(response);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

export const deletePeminjaman = async (req: Request, res: Response) => {
  try {
    const response = await prisma.peminjaman.delete({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};

export const editPeminjaman = async (req: Request, res: Response) => {
  const { startTime, endTime, status } = req.body;

  try {
    const response = await prisma.peminjaman.update({
      where: {
        id: req.params.id,
      },
      data: {
        startTime: startTime,
        endTime: endTime,
        status: status,
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Internal server error", error: error.message });
  }
};
