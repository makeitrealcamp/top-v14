import logger from '../../shared/logger/appLogger';
import { createResource } from '../../shared/factory/createResource';
import { TaskModel } from '../entity/models/taskModel';
import { CreateTask, Task } from '../entity/types/Task';

export const createNewTaskService = async (
  taskRequest: CreateTask
): Promise<Task> => {
  try {
    const task = await createResource(TaskModel)(taskRequest);
    return task as Task;
  } catch (error: any) {
    logger.error('error creating a new task', {
      service: 'createNewTaskService',
      trace: error.message,
    });
    throw new Error('error creating a new task');
  }
};
