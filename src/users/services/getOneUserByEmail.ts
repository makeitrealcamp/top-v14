import { findOneResourceByField } from '../../shared/factory/findOneResourceByField';
import logger from '../../shared/logger/appLogger';
import { UserModel } from '../entity/models/userModel';
import { User } from '../entity/types/User';

export const getOneUserByEmail = async (
  email: string
): Promise<User | null> => {
  try {
    const user: User | null = await findOneResourceByField(UserModel)({
      email,
    });

    return user;
  } catch (error: any) {
    logger.log(`error getting the user with email: ${email}`, {
      service: 'getOneUserByEmail',
      trace: error.message,
    });
    throw new Error(`error getting the user with email${email}`);
  }
};
