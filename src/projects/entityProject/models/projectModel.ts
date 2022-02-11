import { model } from "mongoose";
import { ProjectSchema } from "../schemas/projectSchema";
import { Project } from "../types/ProjectType";

export const ProjectModel = model<Project>('Project', ProjectSchema);