import { findAllResources } from '../../shared/factory/findAllResources';

import Logger from '../../shared/logger/appLogger';
import { ProjectModel } from '../entity/models/projectModel';
import { Project } from '../entity/types/Project';

export const getAllProjectsService = async (): Promise<Project[]> => {
  try {
    const users: Project[] = await findAllResources(ProjectModel);
    return users;
  } catch (error: any) {
    Logger.error('error', 'getAllProjectsService', {
      message: error.message,
      type: 'mongoose',
    });
    throw new Error(error.message);
  }
};
