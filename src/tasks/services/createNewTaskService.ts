import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { createResource } from '../../shared/factory/createResource';
import { logger } from '../../shared/logger/appLogger';
import { TaskModel } from '../entity/models/taskModel';
import { CreateTask, Task } from '../entity/types/TaskInterface';

export const createNewTaskService = async (
  taskRequest: CreateTask
): Promise<Task> => {
  try {
    const task = await createResource(TaskModel)(taskRequest);
    return task as Task;
  } catch (error: any) {
    logger.log('error', 'createNewTaskService', {
      message: error.message,
      type: 'mongoose',
    });
    throw new ApplicationError(
      403,
      error.message,
      error.code === 11000 ? 'db error' : ''
    );
  }
};
