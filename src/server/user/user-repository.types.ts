import { ICreateUserParams, IUser } from "@/types/user.types";

export interface IUserRepository {
  getByEmail: (email: string) => Promise<IUser | undefined>;
  getByUsername: (username: string) => Promise<IUser | undefined>;
  create: (params: ICreateUserParams) => Promise<number>;
}