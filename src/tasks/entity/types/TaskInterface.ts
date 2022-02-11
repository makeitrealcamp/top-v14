import { Types } from 'mongoose';
import { ProjectId } from 'projects/entityProject/types/ProjectType';

export interface Task {
  id: TaskId;
  title: string;
  description: string;
  status: boolean;
  createdAt: Date;
  editedAt: Date;
  projectOwner: ProjectId;
}

export type TaskId = {
  id: Types.ObjectId
}
export type CreateTask = Omit<Task, 'createdAt' | 'editedAt' | 'projectOwner' | 'status' | 'id'>;