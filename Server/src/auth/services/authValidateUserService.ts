import logger from '../../shared/logger/appLogger';
import { LoginUser, User } from '../../users/entity/types/User';
import { validatePassword } from '../utils/passwordManager';
import { getOneUserByEmail } from '../../users/services/getOneUserByEmail';

export const authValidateUserService = async (
  userRequest: LoginUser
): Promise<User> => {
  try {
    const user = await getOneUserByEmail(userRequest.email);

    if (!user) throw new Error('user email or password is incorrect');

    const auth = await validatePassword(userRequest.password, user.password);

    if (!auth) throw new Error('user email or password is incorrect');

    return user;
  } catch (error: any) {
    logger.error('Error validating user credentials', {
      instance: 'services',
      fn: 'authValidateUserService',
      trace: error.message,
    });
    throw new Error('Error validating user credentials');
  }
};
