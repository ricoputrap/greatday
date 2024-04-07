"use server";

import bcrypt from "bcryptjs";

import { IUser } from "@/types/user.types";
import UserService from "../user/user-service";
import { handleError } from "@/lib/utils";
import { cookies } from "next/headers";
import { encrypt } from "./utils";

const userService = new UserService();

const login = async (username: string, password: string) => {
  try {
    const user: IUser | undefined = await userService.getByUsername(username);
    if (!user) {
      throw new Error("User not found");
    }

    // check password
    if (!await bcrypt.compare(password, user.password)) return null;

    // set expires in 10 minutes
    const expires = new Date(Date.now() * 10 * 1000);

    const payload = {
      user: {
        id: user.id,
        fullname: user.fullname,
        username: user.username,
        email: user.email
      },
      expires
    };

    // encrypt the session data
    const session = await encrypt(payload);

    // save the session data in the cookie
    cookies().set("session", session, {
      httpOnly: true,
      expires
    })
  }
  catch (error) {
    handleError(error);
  }
}

export default login;