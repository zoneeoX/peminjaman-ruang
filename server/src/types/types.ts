import { Request } from "express";

export type ILoginRequest = {
  email: string;
  password: string;
};

export type IRegisterRequest = ILoginRequest;

export type IJWTPayload = {
  id: string;
  email: string;
  role: string;
};
export interface AuthRequest extends Request {
  userId?: string;
}
