import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { TaskModel } from '../entity/models/taskModel';
import { Task } from '../entity/types/TaskInterface';

export const getOneTaskByIdService = async (
  id: string
): Promise<Task | null> => {
  try {
    const task = await TaskModel.findById(id).populate('owner');
    return task;
  } catch (error: any) {
    throw new ApplicationError(400, `error finding the task ${error.message}`);
  }
};
