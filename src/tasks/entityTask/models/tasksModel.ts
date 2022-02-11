import mongoose from 'mongoose';
import { ITask } from 'tasks/entityTask/types/TaskInterface';

const Schema = mongoose.Schema;

const TaskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: Boolean,
    default: false
  },
  create_at: {
    type: Date,
    default: new Date()
  },
  edited_at: {
    type: Date,
  },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export const Task = mongoose.model<ITask>('task', TaskSchema);
