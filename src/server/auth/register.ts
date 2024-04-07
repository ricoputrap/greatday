"use server";

import { ICreateUserParams, IUser } from "@/types/user.types";
import UserService from "../user/user-service";
import { handleError } from "@/lib/utils";

const userService = new UserService();

const register = async (param: ICreateUserParams) => {
  try {
    console.log("===== register() - param:", param);
    const userID = await userService.create(param);
    return userID;
  }
  catch (error) {
    handleError(error);
  }
}

export default register;