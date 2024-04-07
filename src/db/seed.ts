import UserService from "@/server/user/user-service";
import { ICreateUserParams } from "@/types/user.types";

const userInputs: ICreateUserParams[] = [
  {
    fullname: "John Doe",
    username: "johndoe",
    email: "johndoe@gmail.com",
    password: "1234"
  },
  {
    fullname: "Jane Doe",
    username: "janedoe",
    email: "janedoe@gmail.com",
    password: "1234"
  }
]

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

const seeding = async () => {
  console.log("Seeding...");

  const userService = new UserService();

  console.log("Seeding users...");
  for (const user of userInputs) {
    const userID = await userService.create(user);
    console.log("Seeded user:", userID);

    wait(1000);
  }

  console.log("Seeding done!");
}

seeding();