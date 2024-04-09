"use server";

import { ICreateUserParams, IUser } from "@/types/user.types";
import UserService from "../user/user-service";
import { redirect } from "next/navigation";
import { EnumPagePath } from "@/types/enum";

const userService = new UserService();

const register = async (param: ICreateUserParams) => {
  try {
    await userService.create(param);
  }
  catch (error: any) {
    return {
      message: error.message
    }
  }

  redirect(EnumPagePath.LOGIN)
}

export default register;