import logger from '../../shared/logger/appLogger';
import { CreateUser } from '../../users/entity/types/User';
import { authCreateUserService } from './authCreateUserService';
import { authSendValidateUserEmail } from './authSendValidationUserEmail';

export const authCreateUserAccountService = async (
  userRequest: CreateUser
): Promise<void> => {
  try {
    const newUser = await authCreateUserService(userRequest);
    await authSendValidateUserEmail(newUser.id, newUser.email);
  } catch (error: any) {
    logger.error('Error creating user account', {
      instance: 'services',
      fn: 'authCreateUserAccountService',
      trace: error.message,
    });
    throw new Error('Error creating user account');
  }
};
