import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { deleteOneResourceById } from '../../shared/factory';
import { createResource } from '../../shared/factory/createResource';
import { findOneResourceByField } from '../../shared/factory/findOneResourceByField';
import Logger from '../../shared/logger/appLogger';

import { ProjectModel } from '../entity/models/projectModel';
import { CreateProject, Project } from '../entity/types/Project';

export const deleteOneProjectService = async ({
  projectId,
  userId,
}: {
  projectId: string;
  userId: string;
}): Promise<void> => {
  try {
    const exists = await findOneResourceByField(ProjectModel)({
      owner: userId,
    });

    if (!exists) throw new Error('the user cannot delete this proyect');

    // const project = await deleteOneResourceById(ProjectModel)(projectId);
    // return project as Project;
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
