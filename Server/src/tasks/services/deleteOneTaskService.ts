import { deleteOneResourceById } from '../../shared/factory';
import logger from '../../shared/logger/appLogger';
import { TaskModel } from '../entity/models/taskModel';

export const deleteOneTaskService = async (id: string): Promise<void> => {
  try {
    if (!id) throw new Error(`no user id provided`);
    const result = await deleteOneResourceById(TaskModel)(id);
  } catch (error: any) {
    console.log(error);
    logger.error(`Error deleting user with id ${id}`, {
      service: 'deleteOneResourceById',
      trace: error.message,
    });
    throw new Error(`Error deleting user: ${error.message}`);
  }
};
