import { Prisma, PrismaClient } from "../../generated/prisma";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { ILoginRequest, IRegisterRequest } from "../types/types";
import { generateAccessToken } from "../utils";
import jwt from "jsonwebtoken";
import { access_jwt_secret } from "../db.config";

const prisma = new PrismaClient();

export const login = async (
  req: Request<{}, any, ILoginRequest>,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ msg: "email and password are required" });
      return;
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      res.status(400).json({ auth: false, message: "Wrong credential 🤔" });
      return;
    }

    const isPWMatch = await bcrypt.compare(password, user.password);

    if (isPWMatch) {
      const { id, email, role } = user;

      const accessToken = generateAccessToken({ id, email, role });

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24,
      });

      res.status(200).json({
        auth: true,
        token: accessToken,
        user: { id, email },
      });
    } else {
      res.status(400).json({ auth: false, message: "Wrong credential 🤔" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error" });
  }
};

export const editUser = async (req: Request, res: Response) => {
  const { email, role } = req.body;
  const { id } = req.params;

  try {
    const updateUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        email: email,
        role: role,
      },
    });

    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ error: "Error" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: "Error" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.accessToken;

    if (!token) {
      res.status(200).json({ user: null });
      return;
    }

    const decoded = jwt.verify(token, access_jwt_secret) as { id: string };

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { id: true, email: true, role: true },
    });

    if (!user) {
      res.status(404).json({ msg: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    if (!users) {
      res.status(404).json({ msg: "Users not found" });
      return;
    }

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    sameSite: "strict",
  });

  res.status(200).json({ msg: "Logged out successfully" });
};

export const register = async (
  req: Request<{}, any, IRegisterRequest>,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ msg: "Email and password are required" });
      return;
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      res.status(409).json({ msg: "Email already in use" });
      return;
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
      },
      select: {
        id: true,
        email: true,
      },
    });

    const accessToken = generateAccessToken({
      id: user.id,
      email: user.email,
      role: "USER",
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.status(201).json({
      auth: true,
      token: accessToken,
      user,
    });
  } catch (err) {
    res.status(500).json({ msg: "Internal server error" });
  }
};
