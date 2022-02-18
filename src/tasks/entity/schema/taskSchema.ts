import { Schema } from 'mongoose';
import { Task } from 'tasks/entity/types/Task';

export const TaskSchema = new Schema<Task>({
  title: {
    type: String,
    required: [true, 'title is required'],
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  editedAt: {
    type: Date,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: [true, 'a project must be provided for a task'],
  },
});
