import { Types } from 'mongoose';
import { Task } from '../Server/src/tasks/entity/types/Task';
import { UserIdType } from '../Server/src/users/entity/types/User';

export interface Project {
  id: ProjectId;
  title: string;
  tasks: Task[];
  createdAt: Date;
  updatedAt: Date;
  owner: UserIdType;
}

export type ProjectId = {
  id: Types.ObjectId;
};

export type CreateProject = {
  title: string;
  owner: string;
};
