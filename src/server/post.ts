"use server";

import { handleError } from "@/lib/utils";
import { EnumPagePath } from "@/types/enum";
import { ICreatePostParams, IPost } from "@/types/post.types";
import { revalidatePath } from "next/cache";

export const createPost = async ({ content }: ICreatePostParams) => {
  try {
    const userID: number = 1;
    // posts.push({
    //   id: 1,
    //   content,
    //   created_at: Date.now(),
    //   user_id: userID
    // });

    revalidatePath(EnumPagePath.HOME);
  }
  catch (error) {
    handleError(error);
  }
}

export const getPosts = async (): Promise<IPost[]> => {
  try {
    return [];
  }
  catch (error) {
    handleError(error);
    return [];
  }
}