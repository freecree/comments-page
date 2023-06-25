export interface IUser {
  id: number;
  username: string;
}

export interface IComment {
  id: number;
  body: string;
  user: IUser;
}
