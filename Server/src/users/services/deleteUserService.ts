import { deleteOneResourceById } from '../../shared/factory';
import logger from '../../shared/logger/appLogger';
import { UserModel } from '../entity/models/userModel';

export const deleteUserService = async (
  id: string
): Promise<{ deletedCount: number } | null> => {
  try {
    if (!id) throw new Error(`no user id provided`);
    return await deleteOneResourceById(UserModel)(id);
  } catch (error: any) {
    console.log(error);
    logger.error(`Error deleting user with id ${id}`, {
      service: 'deleteOneResourceById',
      trace: error.message,
    });
    throw new Error(`Error deleting user: ${error.message}`);
  }
};
