import { Schema } from "mongoose";
import { Project } from "projects/entityProject/types/ProjectType";

export const ProjectSchema = new Schema<Project>({
  title: {
    type: String,
    required: [true, 'Project Title is required'],
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  updatedAt: {
    type: Date,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'an user is required to create a project']
  }
});