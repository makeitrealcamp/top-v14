import { model } from 'mongoose';
import { Task } from 'tasks/entity/types/TaskInterface';
import { TaskSchema } from '../schema/taskSchema';

export const TaskModel = model<Task>('Task', TaskSchema);
