import { Model as ModelType, Document } from 'mongoose';
import { Project } from '../../projects/entity/types/Project';
import { Task } from '../../tasks/entity/types/Task';
import { User } from '../../users/entity/types/User';

export const createResource =
  <K extends ModelType<Task> | ModelType<User> | ModelType<Project>>(
    Model: K
  ) =>
  async <T>(resource: T): Promise<Task | User | Project> => {
    const newResource = new Model(resource);
    return await newResource.save();
  };
