import { Model as ModelType } from 'mongoose';
import { Token } from '../../auth/entity/schema/authTokenSchema';
import { Project } from '../../projects/entity/types/Project';
import { Task } from '../../tasks/entity/types/Task';
import { User } from '../../users/entity/types/User';

export const createResource =
  <
    K extends
      | ModelType<Task>
      | ModelType<User>
      | ModelType<Project>
      | ModelType<Token>
  >(
    Model: K
  ) =>
  async <T>(resource: T): Promise<Task | User | Project | Token> => {
    const newResource = new Model(resource);
    return await newResource.save();
  };
