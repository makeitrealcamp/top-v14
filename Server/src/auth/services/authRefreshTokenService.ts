import logger from '../../shared/logger/appLogger';
import { LoginUser } from '../../users/entity/types/User';
import { validatePassword } from '../utils/passwordManager';
import { createAuthToken, createRefreshToken } from '../utils/tokenManager';

import { getOneUserByEmail } from '../../users/services/getOneUserByEmail';
import {
  findOneResourceByField,
  findOneResourceById,
} from '../../shared/factory';
import { UserModel } from '../../users/entity/models/userModel';
import { TokenModel } from '../entity/model/authTokenModel';

export const authRefreshTokenService = async (
  userId: string,
  refreshToken: string
): Promise<{ authToken: string }> => {
  const user = await findOneResourceById(UserModel)(userId);

  if (!user) throw new Error('invalid user id');

  const currentToken = await findOneResourceByField(TokenModel)({
    token: refreshToken,
  });
  if (!currentToken) throw new Error('invalid token');

  try {
    return {
      authToken: createAuthToken({ id: userId }),
    };
  } catch (error: any) {
    logger.error('Error renewing auth token', {
      instance: 'services',
      fn: 'authRefreshTokenService',
      trace: error.message,
    });
    throw new Error(error);
  }
};
