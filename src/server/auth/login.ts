"use server";

import bcrypt from "bcryptjs";

import { IUser } from "@/types/user.types";
import UserService from "../user/user-service";
import { cookies } from "next/headers";
import { encrypt } from "./utils";
import { redirect } from "next/navigation";
import { EnumPagePath } from "@/types/enum";

const userService = new UserService();

const login = async (username: string, password: string) => {
  try {
    const user: IUser | undefined = await userService.getByUsername(username);
    if (!user) {
      return {
        message: "User not found"
      }
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
    return {
      message: "Invalid username or password"
    }
  }

  redirect(EnumPagePath.HOME);
}

export default login;