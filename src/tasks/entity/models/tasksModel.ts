import mongoose from 'mongoose';
import { Task } from 'tasks/entity/types/TaskInterface';
import { TaskSchema } from '../schema/taskSchema';

export const TaskModel = mongoose.model<Task>('task', TaskSchema);
