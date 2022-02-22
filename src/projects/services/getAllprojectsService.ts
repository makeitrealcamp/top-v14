import { findAllResources } from '../../shared/factory';

import logger from '../../shared/logger/appLogger';
import { ProjectModel } from '../entity/models/projectModel';
import { Project } from '../entity/types/Project';

export const getAllProjectsService = async (query: any): Promise<Project[]> => {
  try {
    // const projects: Project[] = await findAllResources(ProjectModel)({});
    console.log('IM ON A TEST');
    const projects = await ProjectModel.find({ id: query });
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
