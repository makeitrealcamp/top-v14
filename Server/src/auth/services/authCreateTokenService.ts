import logger from '../../shared/logger/appLogger';
import { UserIdType } from '../../users/entity/types/User';
import { createAuthToken } from '../utils/tokenManager';
import { authCreateRefreshToken } from './authCreateRefreshToken';

export const authCreateTokenService = async (
  userId: string | UserIdType
): Promise<{ authToken: string; refreshToken: string }> => {
  try {
    return {
      authToken: createAuthToken({ id: userId }),
      refreshToken: await authCreateRefreshToken(userId),
    };
  } catch (error: any) {
    logger.error('Error creating tokens auth token', {
      instance: 'services',
      fn: 'authCreateTokenService',
      trace: error.message,
    });
    throw new Error(`'Error creating tokens auth token' ${error.message}`);
  }
};
