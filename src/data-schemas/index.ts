import { z } from "zod";

export const loginFormSchema = z.object({
  username: z.string(),
  password: z.string()
});

export const registerFormSchema = z.object({
  fullname: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string()
})