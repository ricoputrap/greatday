"use server";

import { ICreatePostParams, IPost } from "@/types/post.types";
import PostService from "./post-service";
import { cookies } from "next/headers";
import { decrypt } from "../auth/utils";
import { EnumCookie, EnumPagePath } from "@/types/enum";
import { ISessionPayload } from "@/types/session.types";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const postService = new PostService();

export async function createPost({ content }: { content: string }): Promise<void> {
  const token = cookies().get(EnumCookie.SESSION)?.value || "";
  const data = await decrypt(token);

  if (data === "Invalid token") {
    cookies().delete(EnumCookie.SESSION);
    redirect(EnumPagePath.LOGIN);
  }

  const params: ICreatePostParams = {
    content,
    user_id: (data as ISessionPayload).user.id
  }

  await postService.create(params);
  revalidatePath(EnumPagePath.HOME)
}

export async function getPosts(): Promise<IPost[]> {
  return postService.getPosts();
}