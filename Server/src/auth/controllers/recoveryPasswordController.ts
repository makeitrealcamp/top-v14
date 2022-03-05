import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';

import { getOneUserByEmail } from '../../users/services';

import { authSendRecoverPasswordEmail } from '../services/authSendRecoverPasswordEmail';

export const recoveryPasswordController = async (
  req: Request<{}, {}, { email: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getOneUserByEmail(req.body.email);
    if (!user) throw new Error('user does not exist ');

    await authSendRecoverPasswordEmail(user.id, user.email, user.password);
    res.status(200).json({ message: 'user validated' });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
