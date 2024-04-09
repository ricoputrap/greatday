import db from "@/db";
import { IPostRepository } from "./post-repository.types";
import { post as postTable } from "@/db/drizzle.schema";
import { desc } from "drizzle-orm";
import { ICreatePostParams, IPost } from "@/types/post.types";

class PostRepository implements IPostRepository {
  async getPosts(): Promise<IPost[]> {
    const posts = await db
      .select()
      .from(postTable)
      .orderBy(desc(postTable.created_at));

    return posts;
  }

  async create(params: ICreatePostParams): Promise<void> {
    const { content, user_id } = params;

    await db
      .insert(postTable)
      .values({ content, user_id })
      .returning();
  }
}

export default PostRepository;