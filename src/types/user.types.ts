export interface IUser {
  id: number
  fullname: string
  username: string
  email: string
  password: string
  profile_pic?: string
  created_at: number
}

export interface ICreateUserParams {
  fullname: string
  username: string
  email: string
  password: string
}