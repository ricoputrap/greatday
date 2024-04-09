export interface ISessionUser {
  id: number
  fullname: string
  username: string
  email: string
}

export interface ISessionPayload {
  user: ISessionUser,
  expires: Date
}