import { handleError } from "@/lib/utils";
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

export const decrypt = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"],
    });
    return payload;
  }
  catch (error) {
    handleError(error);
    return null;
  }
}