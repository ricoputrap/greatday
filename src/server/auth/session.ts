"use server";

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt, encrypt } from "./utils";
import { EnumCookie } from "@/types/enum";
import { ISessionPayload } from "@/types/session.types";

export const getSession = () => {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return 
}

export const updateSession = async (request: NextRequest) => {
  const session = request.cookies.get(EnumCookie.SESSION)?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  if (!parsed) return;

  const expires = new Date(Date.now() * 10 * 1000);
  const payload = {
    user: (parsed as ISessionPayload).user,
    expires
  };

  const newSession = await encrypt(payload);

  const res = NextResponse.next();
  res.cookies.set("session", newSession, {
    httpOnly: true,
    expires
  });

  return res;
}