import { sendEmailServiceNodeMailer } from '../../shared/services/sendEmailServiceNodeMailer';
import { sendEmailServiceSendGrid } from '../../shared/services/senEmailServiceSendGrid';
import { UserIdType } from '../../users/entity/types/User';
import { createAuthToken } from '../utils/tokenManager';

export const authSendRecoverPasswordEmail = async (
  userId: UserIdType,
  email: string,
  password: string
): Promise<void> => {
  const validateToken = createAuthToken({ id: userId }, password);
  const link = `${process.env.EMAIL_VALIDATE_URL}/recovery/${validateToken}`;
  try {
    await sendEmailServiceSendGrid(email, 'recovery password', link);
  } catch (e) {
    console.log(e);
  }
};
