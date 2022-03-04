import { Schema } from 'mongoose';

import { TaskModel } from '../../../tasks/entity/models/taskModel';
import { Project } from '../types/Project';

export const ProjectSchema = new Schema<Project>({
  title: {
    type: String,
    required: [true, 'Project Title is required'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'an user is required to create a project'],
  },
});

ProjectSchema.virtual('tasks', {
  ref: 'Tasks',
  localField: '_id',
  foreignField: 'project',
});

// agregattes

// middlewares
ProjectSchema.pre('deleteOne', async function (next) {
  const project = this.getFilter();
  await TaskModel.deleteMany({ project: project.id });
  next();
});

ProjectSchema.set('toJSON', { virtuals: true });
ProjectSchema.set('toObject', { virtuals: true });
