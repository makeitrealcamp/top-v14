import { model } from 'mongoose';
import { Task } from 'tasks/entity/types/Task';
import { TaskSchema } from '../schema/taskSchema';

export const TaskModel = model<Task>('Task', TaskSchema);
