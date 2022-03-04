import logger from '../../shared/logger/appLogger';
import { findOneResourceByField } from '../../shared/factory/findOneResourceByField';
import { updateOneResourceById } from '../../shared/factory/updateOneResourceById';

import { ProjectModel } from '../entity/models/projectModel';
import { Project } from '../entity/types/Project';

export const editOneProjectService = async (
  projectId: string,
  userId: string,
  project: { title?: string; description?: string }
): Promise<Project | null> => {
  try {
    const exists = await findOneResourceByField(ProjectModel)({
      owner: userId,
    });

    if (!exists) throw new Error('the user cannot delete this proyect');
    const editedProject = await updateOneResourceById(ProjectModel)(
      projectId,
      project
    );

    return editedProject;
  } catch (error: any) {
    logger.error(`error updating the project with id ${projectId}`, {
      instance: 'services',
      fn: ';editOneProjectService',
      trace: error.message,
    });
    throw new Error(`error updating the project with id ${projectId}`);
  }
};
