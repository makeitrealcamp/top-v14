import { Types } from 'mongoose';

export interface User {
  id: UserIdType;
  name?: string;
  email: string;
  password: string;
  createdAt: Date;
  editedAt: Date | null;
  avatar?: string;
}

export type UserIdType = {
  _id: Types.ObjectId;
};

export type CreateUser = Omit<User, 'id' | 'createdAt' | 'editedAt'>;
export type EditUser = {
  id: string;
  name?: string;
  email: string;
  password?: string;
  avatar?: string;
  editedAt?: Date | null;
};

export type LoginUser = {
  password: string;
  email: string;
};
