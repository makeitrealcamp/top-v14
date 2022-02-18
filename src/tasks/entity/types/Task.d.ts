import { Types } from 'mongoose';
import { ProjectId } from '../../../projects/entity/types/Project';

export interface Task {
  id: TaskId;
  title: string;
  description: string;
  status: boolean;
  createdAt: Date;
  editedAt: Date;
  project: string | ProjectId;
}

export type TaskId = {
  id: Types.ObjectId;
};
export type CreateTask = Omit<
  Task,
  'createdAt' | 'editedAt' | 'status' | 'id' | 'project'
>;
