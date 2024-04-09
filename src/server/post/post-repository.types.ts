import { ICreatePostParams, IPost } from "@/types/post.types";

export interface IPostRepository {
  getPosts: () => Promise<IPost[]>;
  create: (params: ICreatePostParams) => Promise<void>;
}