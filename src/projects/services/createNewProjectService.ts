import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { createResource } from '../../shared/factory/createResource';
import Logger from '../../shared/logger/appLogger';

import { ProjectModel } from '../entity/models/projectModel';
import { CreateProject, Project } from '../entity/types/Project';

export const createNewProjectService = async (
  projectRequest: CreateProject
): Promise<Project> => {
  try {
    const project = await createResource(ProjectModel)(projectRequest);
    return project as Project;
  } catch (error: any) {
    Logger.error('error', 'createNewProjectService', {
      message: error.message,
      type: 'mongoose',
    });
    throw new ApplicationError(
      403,
      error.message,
      error.code === 11000 ? 'db error' : ''
    );
  }
};
