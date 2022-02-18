import { deleteOneResourceById } from '../../shared/factory';
import logger from '../../shared/logger/appLogger';
import { UserModel } from '../entity/models/userModel';

export const deleteUserService = async (id: string): Promise<void> => {
  try {
    await deleteOneResourceById(UserModel)(id);
  } catch (error: any) {
    logger.error(`Error deleting user with id ${id}`, {
      service: 'deleteOneResourceById',
      trace: error.message,
    });
    throw new Error(`Error deleting user with id ${id}`);
  }
};
