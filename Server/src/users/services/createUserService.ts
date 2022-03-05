import { encryptPassword } from '../../auth/utils/passwordManager';
import { createResource } from '../../shared/factory';
import logger from '../../shared/logger/appLogger';
import { UserModel } from '../entity/models/userModel';
import { CreateUser, User } from '../entity/types/User';

export const createUserService = async (
  userRequest: CreateUser
): Promise<User> => {
  try {
    userRequest['password'] = await encryptPassword(userRequest.password);
    const user = await createResource(UserModel)(userRequest);
    return user as User;
  } catch (error: any) {
    logger.error(`error creating user with email ${userRequest.email}`, {
      service: 'createUserService',
      trace: error.message,
    });
    throw new Error(`error creating user with email ${userRequest.email}`);
  }
};
