import logger from '../../shared/logger/appLogger';
import { getOneUserByIdService } from '../../users/services';
import { editOneUserService } from '../../users/services/editOneUserService';

export const authValidateUserAccount = async (
  userId: string
): Promise<Boolean> => {
  try {
    const user = await getOneUserByIdService(userId);
    if (!user) throw new Error('user incorrect');
    const userValid = await editOneUserService({ id: userId, valid: true });

    return userValid?.valid || false;
  } catch (error: any) {
    logger.error('Error validating user email', {
      instance: 'services',
      fn: 'authValidateUserAccount',
      trace: error.message,
    });
    throw new Error('Error validating user email');
  }
};
