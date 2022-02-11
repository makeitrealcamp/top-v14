import { Types } from "mongoose"

export interface User {
  id: UserId
  name?: string,
  email: string,
  passwor: string,
  createdAt: Date;
}

type UserId = {
  _id: Types.ObjectId;
}

export type userRequest = Omit<User, 'id' | 'createdAt' | 'name'>