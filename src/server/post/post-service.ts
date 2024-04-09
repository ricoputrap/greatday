import { ICreatePostParams, IPost } from "@/types/post.types";
import PostRepository from "./post-repository";
import { IPostRepository } from "./post-repository.types";

class PostService {
  private postRepository: IPostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  async create(params: ICreatePostParams): Promise<void> {
    await this.postRepository.create(params);
  }

  async getPosts(): Promise<IPost[]> {
    return this.postRepository.getPosts();
  }
}

export default PostService;