"use server";

import { cookies } from "next/headers"

const logout = async () => {
  cookies().delete("session");
}

export default logout;