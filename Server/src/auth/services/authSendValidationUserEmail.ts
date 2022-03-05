import { sendEmailServiceNodeMailer } from '../../shared/services/sendEmailServiceNodeMailer';
import { sendEmailServiceSendGrid } from '../../shared/services/senEmailServiceSendGrid';
import { UserIdType } from '../../users/entity/types/User';
import { createAuthToken } from '../utils/tokenManager';

export const authSendValidateUserEmail = async (
  userId: UserIdType,
  email: string
): Promise<void> => {
  const validateToken = createAuthToken({ id: userId });
  const link = `${process.env.EMAIL_VALIDATE_URL}/validate/${validateToken}`;
  try {
    await sendEmailServiceSendGrid(email, 'email validation', link);
  } catch (e) {
    console.log(e);
  }
};
