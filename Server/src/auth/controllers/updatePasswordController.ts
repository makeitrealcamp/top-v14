import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { CreateUser } from '../../users/entity/types/User';
import { getOneUserByEmail, getOneUserByIdService } from '../../users/services';
import { editOneUserService } from '../../users/services/editOneUserService';
import { authCreateUserService, authSendValidateUserEmail } from '../services';
import { authCreateTokenService } from '../services/authCreateTokenService';
import { authSendRecoverPasswordEmail } from '../services/authSendRecoverPasswordEmail';
import { authValidateUserEmail } from '../services/authValidateUserEmail';
import { authValidateUserService } from '../services/authValidateUserService';
import { encryptPassword } from '../utils/passwordManager';
import { validateAuthToken } from '../utils/tokenManager';

export const updatePasswordController = async (
  req: Request<{ id: string; token: string }, {}, { password: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, token } = req.params;
    const { password } = req.body;
    const user = await getOneUserByIdService(id);
    if (!user) throw new Error('user does not exist ');
    //validate token
    const { id: userId } = validateAuthToken(token, user.password);
    const newPassword = await encryptPassword(password);

    const userValid = await editOneUserService({
      id: userId,
      password: newPassword,
    });

    res.status(200).json({ message: userValid });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
