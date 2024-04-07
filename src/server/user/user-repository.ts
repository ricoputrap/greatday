import { ICreateUserParams, IUser } from "@/types/user.types";
import { IUserRepository } from "./user-repository.types";
import db from "@/db";
import { user as userTable } from "@/db/drizzle.schema";
import { eq } from "drizzle-orm";

class UserRepository implements IUserRepository {
  getByEmail(email: string): Promise<IUser | undefined> {
    return new Promise(async (resolve) => {
      const users = await db
        .select()
        .from(userTable)
        .where(eq(userTable.email, email));

      if (users.length === 0) resolve(undefined);
      else {
        const user: IUser = {
          ...users[0],
          profile_pic: users[0].profile_pic ? users[0].profile_pic : undefined
        }

        resolve(user);
      }
    })
  }

  getByUsername(username: string): Promise<IUser | undefined> {
    return new Promise(async (resolve) => {
      const users = await db.select().from(userTable).where(eq(userTable.username, username));
      if (users.length === 0) resolve(undefined);
      else {
        const user: IUser = {
          ...users[0],
          profile_pic: users[0].profile_pic ? users[0].profile_pic : undefined
        }

        resolve(user);
      }
    })
  }

  async create(params: ICreateUserParams): Promise<number> {
    const { fullname, username, email, password } = params;
    const results = await db.insert(userTable).values({
      fullname,
      username,
      email,
      password,
    }).returning()
    
    return new Promise((resolve) => {
      resolve(results[0].id);
    })
  }
}

export default UserRepository;