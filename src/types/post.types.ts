export interface IPost {
  id: number;
  content: string;
  created_at: number;
  user_id: number;
}

export interface ICreatePostParams {
  content: string;
}