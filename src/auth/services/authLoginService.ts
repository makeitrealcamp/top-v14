import logger from '../../shared/logger/appLogger';
import { LoginUser } from '../../users/entity/types/User';
import { validatePassword } from '../../users/utils/passwordManager';
import {
  createAuthToken,
  createRefreshToken,
} from '../../users/utils/tokenManager';

import { getOneUserByEmail } from '../../users/services/getOneUserByEmail';
import { authCreateRefreshToken } from './authCreateRefreshToken';

export type TokenResponse = {
  authToken: string;
  refreshToken: string;
};

export const userLoginService = async (
  userRequest: LoginUser
): Promise<TokenResponse> => {
  try {
    const user = await getOneUserByEmail(userRequest.email);

    if (!user) throw new Error('user email or password is incorrect');

    const auth = await validatePassword(userRequest.password, user.password);

    if (!auth) throw new Error('user email or password is incorrect');
    const authToken = createAuthToken({ id: user.id });
    const refreshToken = await authCreateRefreshToken(user.id);

    return {
      authToken,
      refreshToken,
    };
  } catch (error: any) {
    logger.error('Error login user', {
      instance: 'services',
      fn: 'userLoginService',
      trace: error.message,
    });
    throw new Error(error);
  }
};
