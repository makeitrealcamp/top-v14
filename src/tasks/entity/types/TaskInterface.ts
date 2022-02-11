import { Types } from 'mongoose';
import { UserIdType } from '../../../users/entity/types/User';

export interface Task {
  id: TaskId;
  title: string;
  description: string;
  status: boolean;
  createdAt: Date;
  editedAt: Date;
  owner: string | UserIdType;
}

export type TaskId = {
  id: Types.ObjectId;
};
export type CreateTask = Omit<Task, 'createdAt' | 'editedAt' | 'status' | 'id'>;
