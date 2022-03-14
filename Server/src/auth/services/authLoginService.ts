import logger from '../../shared/logger/appLogger';
import { LoginUser } from '../../users/entity/types/User';
import { authCreateTokenService } from './authCreateTokenService';

import { authValidateUserService } from './authValidateUserService';

export type TokenResponse = {
  authToken: string;
  refreshToken: string;
};

export const authLoginService = async (
  userRequest: LoginUser
): Promise<TokenResponse> => {
  try {
    const user = await authValidateUserService(userRequest);
    const tokens = await authCreateTokenService(user.id);
    return tokens;
  } catch (error: any) {
    logger.error('Error login user', {
      instance: 'services',
      fn: 'authLoginService',
      trace: error.message,
    });
    throw new Error(`${error.message}`);
  }
};
