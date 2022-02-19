import logger from '../../shared/logger/appLogger';
import { UserModel } from '../../users/entity/models/userModel';
import { CreateUser, User } from '../../users/entity/types/User';
import { createResource } from '../../shared/factory/createResource';
import { encryptPassword } from '../utils/passwordManager';

export const authCreateUserService = async (
  userRequest: CreateUser
): Promise<User> => {
  try {
    userRequest['password'] = await encryptPassword(userRequest.password);
    const user = await createResource(UserModel)(userRequest);
    return user as User;
  } catch (error: any) {
    logger.error(`error creating user with email ${userRequest.email}`, {
      service: 'authCreateUserService',
      trace: error.message,
    });
    throw new Error(`error creating user with email ${userRequest.email}`);
  }
};
