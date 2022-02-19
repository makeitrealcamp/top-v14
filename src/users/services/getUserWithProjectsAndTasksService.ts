import logger from '../../shared/logger/appLogger';
import { UserModel } from '../entity/models/userModel';

import { User, UserIdType } from '../entity/types/User';
import { findOneResourceById } from '../../shared/factory/findOneResourceById';
import { ProjectModel } from '../../projects/entity/models/projectModel';
import { TaskModel } from '../../tasks/entity/models/taskModel';

export const getUserWithProjectsAndTasksService = async (
  id: string
): Promise<User | null> => {
  /*
 {
        path: "path1",
        select: "field",
        model: Model1
      },
      {
        path: "path2",
        select: "field2",
        model: Model2
      }
      
      */
  const options = [
    {
      path: 'projects',
      model: ProjectModel,
      populate: {
        path: 'tasks',
        model: TaskModel,
      },
    },
  ];

  try {
    const user: User[] = await findOneResourceById(UserModel)(id, options);
    return user[0];
  } catch (error: any) {
    logger.error(`error getting user with id ${id}`, {
      service: 'getOneUserByIdService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
