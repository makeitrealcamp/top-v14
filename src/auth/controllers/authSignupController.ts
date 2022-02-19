import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { CreateUser } from '../../users/entity/types/User';
import { authCreateUserService } from '../services';
import { authCreateTokenService } from '../services/authCreateTokenservice';

export const authSignup = async (
  req: Request<{}, {}, CreateUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    const newUser = await authCreateUserService(req.body);
    const token = authCreateTokenService(newUser.id);
    res.status(200).json({ token });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
