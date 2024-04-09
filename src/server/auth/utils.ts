"use server"

import { ISessionPayload, ISessionUser } from "@/types/session.types";
import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "";
const key = new TextEncoder().encode(JWT_SECRET);

export const encrypt = async (payload: any) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10m")
    .sign(key);
}

export const decrypt = async (token: string): Promise<ISessionPayload | string> => {
  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"],
    });

    const sessionPayload: ISessionPayload = {
      expires: payload.expires as Date,
      user: payload.user as ISessionUser
    }

    return sessionPayload
  }
  catch (error) {
    return "Invalid token";
  }
}