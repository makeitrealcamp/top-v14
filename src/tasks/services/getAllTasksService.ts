import { TaskModel } from '../entity/models/taskModel';
import { Task } from '../entity/types/TaskInterface';

export const getAllTasksService = async (): Promise<Task[]> => {
  const tasks = await TaskModel.find({});
  console.log(tasks);
  return tasks;
};
