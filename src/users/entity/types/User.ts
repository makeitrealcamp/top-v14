import { Types } from "mongoose"

export interface User {
  id: UserIdType;
  name?: string;
  email: string;
  password: string;
  createdAt: Date;
  editedAt: Date;
};

export type UserIdType = {
  id: Types.ObjectId
};

export type CreateUser = Omit<User, 'id' | 'createdAt' | 'editedAt'>