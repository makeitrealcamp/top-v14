import { deleteOneResourceById } from '../../shared/factory';
import { findOneResourceByField } from '../../shared/factory/findOneResourceByField';
import logger from '../../shared/logger/appLogger';
import { ProjectModel } from '../entity/models/projectModel';

export const deleteOneProjectService = async (
  projectId: string,
  userId: string
): Promise<boolean> => {
  try {
    const exists = await findOneResourceByField(ProjectModel)({
      owner: userId,
    });

    if (!exists) throw new Error('the user cannot delete this proyect');

    const result = await deleteOneResourceById(ProjectModel)(projectId);

    return result && result?.deletedCount > 0 ? true : false;
  } catch (error: any) {
    logger.error(`error deleting project with id ${projectId}`, {
      instance: 'services',
      fn: 'deleteOneProjectService',
      trace: error.message,
    });
    throw new Error(`error deleting project with id ${projectId}`);
  }
};
