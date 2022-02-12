import { logger } from '../../shared/logger/appLogger';
import { UserModel } from '../entity/models/userModel';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { User, UserIdType } from '../entity/types/User';
import { findOneResourceById } from '../../shared/factory/findOneResourceById';

export const getOneUserByIdService = async (
  id: string | UserIdType
): Promise<User[] | null> => {
  try {
    // const user: User[] = await findOneResourceById(UserModel)(id);
    const user: User[] | null = await UserModel.findOne({ _id: id }).populate(
      'tasks'
    );

    return user;
  } catch (error: any) {
    logger.log('error', 'getOneUserService', {
      message: error.message,
      type: 'mongoose',
    });
    throw new Error(error.message);
  }
};
