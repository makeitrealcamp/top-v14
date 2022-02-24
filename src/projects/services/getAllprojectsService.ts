import { findAllResources } from '../../shared/factory';

import logger from '../../shared/logger/appLogger';
import { UserIdType } from '../../users/entity/types/User';
import { ProjectModel } from '../entity/models/projectModel';
import { Project } from '../entity/types/Project';

export const getAllProjectsService = async (
  userId: string | UserIdType
): Promise<Project[]> => {
  try {
    //const projects: Project[] = await findAllResources(ProjectModel)({});
    if (!userId) throw new Error('invalid user id');
    const projects = await ProjectModel.find({ owner: userId });
    return projects;
  } catch (error: any) {
    logger.error('error getting all the projects', {
      instance: 'services',
      fn: 'getAllProjectsService',
      trace: error.message,
    });
    throw new Error(`Error getting all the projects: ${error.message}`);
  }
};
