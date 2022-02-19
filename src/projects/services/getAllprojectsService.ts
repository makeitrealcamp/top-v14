import { findAllResources } from '../../shared/factory/findAllResources';

import logger from '../../shared/logger/appLogger';
import { ProjectModel } from '../entity/models/projectModel';
import { Project } from '../entity/types/Project';

export const getAllProjectsService = async (query: any): Promise<Project[]> => {
  try {
    const projects: Project[] = await findAllResources(ProjectModel)(query);
    return projects;
  } catch (error: any) {
    logger.error('error getting all the projects', {
      instance: 'services',
      fn: 'getAllProjectsService',
      trace: error.message,
    });
    throw new Error(`error getting all the projects${error.message}`);
  }
};
