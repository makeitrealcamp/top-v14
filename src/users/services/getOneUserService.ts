import { logger } from '../../shared/logger/appLogger';
import { UserModel } from '../entity/models/userModel';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { findAllResources } from '../../shared/factory/findAllResources';
import { User } from '../entity/types/User';
import { findOneResourceById } from '../../shared/factory/findOneResourceById';

export const getOneUserByIdService = async (id: string): Promise<User[]> => {
  try {
    const user: User[] = await findOneResourceById(UserModel)(id);
    return user;
  } catch (error: any) {
    logger.log('error', 'getOneUserService', {
      message: error.message,
      type: 'mongoose',
    });
    throw new ApplicationError(404, error.message);
  }
};
