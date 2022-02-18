import logger from '../../shared/logger/appLogger';
import { UserModel } from '../entity/models/userModel';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { User, UserIdType } from '../entity/types/User';
import { findOneResourceById } from '../../shared/factory/findOneResourceById';

export const getOneUserByIdService = async (
  id: string
): Promise<User[] | null> => {
  try {
    const user = await findOneResourceById(UserModel)(id);
    return user;
  } catch (error: any) {
    logger.error(`error getting user with id ${id}`, {
      service: 'getOneUserByIdService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
