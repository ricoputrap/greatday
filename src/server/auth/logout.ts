"use server";

import { cookies } from "next/headers"

const logout = async () => {
  cookies().set("session", "", { expires: new Date(0) });
}

export default logout;