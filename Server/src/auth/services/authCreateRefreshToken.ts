import { createResource } from '../../shared/factory/createResource';
import logger from '../../shared/logger/appLogger';
import { UserIdType } from '../../users/entity/types/User';
import { createRefreshToken } from '../utils/tokenManager';
import { TokenModel } from '../entity/model/authTokenModel';

export const authCreateRefreshToken = async (
  userId: string | UserIdType
): Promise<string> => {
  try {
    const refreshToken = createRefreshToken({ id: userId });
    const token = new TokenModel({
      owner: userId,
      token: refreshToken,
    });
    const newToken = await token.save();
    return newToken.token;
  } catch (error: any) {
    logger.error('error creating a refresh token service', {
      instance: 'services',
      service: 'authCreateRefreshToken',
      trace: error.message ? error.message : '',
    });
    throw new Error(`Error creating a new refresh token ${error.message}`);
  }
};
