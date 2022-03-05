import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { CreateUser } from '../../users/entity/types/User';
import { authCreateUserAccountService } from '../services';

export const authSignupController = async (
  req: Request<{}, {}, CreateUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    await authCreateUserAccountService(req.body);
    res.status(201).json({ success: true });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
