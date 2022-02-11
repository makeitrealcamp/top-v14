import { Schema } from "mongoose";
import { Task } from "tasks/entity/types/TaskInterface";

export const TaskSchema = new Schema<Task>({
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
  createdAt: {
    type: Date,
    default: new Date()
  },
  editedAt: {
    type: Date,
  },
  projectOwner: { type: Schema.Types.ObjectId, ref: 'Project', required: true }
});