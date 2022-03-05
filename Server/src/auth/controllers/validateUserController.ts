import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { CreateUser } from '../../users/entity/types/User';
import { authCreateUserService, authSendValidateUserEmail } from '../services';
import { authCreateTokenService } from '../services/authCreateTokenService';
import { authValidateUserEmail } from '../services/authValidateUserEmail';
import { authValidateUserService } from '../services/authValidateUserService';

export const validateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await authValidateUserEmail(req.userId);
    res.status(200).json({ message: 'user validated' });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
