import { logger } from '../../shared/logger/appLogger';
import { UserModel } from '../entity/models/userModel';
import { User } from '../entity/types/User';

export const getOneUserByEmail = async (
  email: string
): Promise<User | null> => {
  try {
    const user: User | null = await UserModel.findOne({
      email: email,
    });

    return user;
  } catch (error: any) {
    logger.log('error', 'getOneUserByEmail', {
      message: error.message,
      type: 'mongoose',
    });
    throw new Error(error.message);
  }
};
