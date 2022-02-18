import { createResource } from '../../shared/factory/createResource';
import logger from '../../shared/logger/appLogger';

import { ProjectModel } from '../entity/models/projectModel';
import { CreateProject, Project } from '../entity/types/Project';

export const createNewProjectService = async (
  projectRequest: CreateProject
): Promise<Project> => {
  try {
    const project = await createResource(ProjectModel)(projectRequest);
    return project as Project;
  } catch (error: any) {
    logger.error('error creating a new project service', {
      instance: 'services',
      service: 'createNewProjectService',
      trace: error.message ? error.message : '',
    });
    throw new Error(`Error creating a new project ${error.message}`);
  }
};
