import { Types } from 'mongoose';

export interface ITask {
  title: string;
  description: string;
  status: boolean;
  create_at: Date;
  edited_at: Date;
  created_by: Types.ObjectId;
}

export type CreateTask = {
  title: string,
  description: string
}