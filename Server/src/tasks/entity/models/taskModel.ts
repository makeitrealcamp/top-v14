import { model } from 'mongoose';
import { Task } from '../types/Task';
import { TaskSchema } from '../schema/taskSchema';

export const TaskModel = model<Task>('Task', TaskSchema);
