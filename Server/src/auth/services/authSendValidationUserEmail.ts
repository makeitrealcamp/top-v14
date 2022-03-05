import logger from '../../shared/logger/appLogger';
import { sendEmailServiceSendGrid } from '../../shared/services/senEmailServiceSendGrid';
import { UserIdType } from '../../users/entity/types/User';
import { createAuthToken } from '../utils/tokenManager';
import { emailMessage } from '../utils/validateAccountEmailTemplate';

export const authSendValidateUserEmail = async (
  userId: UserIdType,
  email: string
): Promise<unknown> => {
  const validateToken = createAuthToken({ id: userId });
  const link = `${process.env.EMAIL_VALIDATE_URL}/validate/${userId}/${validateToken}`;
  try {
    return await sendEmailServiceSendGrid(
      email,
      'email validation',
      emailMessage(link)
    );
  } catch (error: any) {
    logger.error('Error sending user email validation', {
      instance: 'services',
      fn: 'authSendValidateUserEmail',
      trace: error.message,
    });
    throw new Error('Error sending user email validation');
  }
};
