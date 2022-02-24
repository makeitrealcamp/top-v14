import { deleteOneResourceById } from '../../shared/factory';
import logger from '../../shared/logger/appLogger';
import { ProjectModel } from '../entity/models/projectModel';

export const deleteOneProjectService = async (
  projectId: string,
  userId: string
): Promise<boolean> => {
  try {
    if (!projectId) throw new Error('invalid project id');
    if (!userId) throw new Error('invalid user id');

    const result = await deleteOneResourceById(ProjectModel)({
      _id: projectId,
      owner: userId,
    });

    return result && result?.deletedCount > 0 ? true : false;
  } catch (error: any) {
    logger.error(`Error deleting project: ${error.message}`, {
      instance: 'services',
      fn: 'deleteOneProjectService',
      trace: error.message,
    });
    throw new Error(`Error deleting project: ${error.message}`);
  }
};
