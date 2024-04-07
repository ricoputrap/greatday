import { ICreateUserParams, IUser } from "@/types/user.types";
import UserRepository from "./user-repository";
import { IUserRepository } from "./user-repository.types";
import bcrypt from "bcryptjs";

class UserService {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(params: ICreateUserParams): Promise<number> {
    const userByUsername = await this.userRepository.getByUsername(params.username);
    if (userByUsername) {
      throw new Error("Username already exists");
    }

    const userByEmail = await this.userRepository.getByEmail(params.email);
    if (userByEmail) {
      throw new Error("Email already exists");
    }

    // hash password
    params.password = await bcrypt.hash(params.password, 10);

    return this.userRepository.create(params);
  }

  async getByUsername(username: string): Promise<IUser | undefined> {
    return this.userRepository.getByUsername(username);
  }
}

export default UserService;