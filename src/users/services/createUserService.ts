import logger from '../../shared/logger/appLogger';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';

import { UserModel } from '../entity/models/userModel';
import { CreateUser, User } from '../entity/types/User';
import { createResource } from '../../shared/factory/createResource';
import { encryptPassword } from '../utils/passwordManager';

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
