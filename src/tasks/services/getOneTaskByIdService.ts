import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { TaskModel } from '../entity/models/taskModel';
import { Task } from '../entity/types/TaskInterface';

export const getOneTaskByIdService = async (
  id: string
): Promise<Task | undefined> => {
  try {
    const task = await TaskModel.findById(id);
    console.log(task);
    // await task?.populate('owner');
    task && (await task.populate('owner'));
    return task as Task;
  } catch (error: any) {
    throw new ApplicationError(400, `error finding the task ${error.message}`);
  }
};
