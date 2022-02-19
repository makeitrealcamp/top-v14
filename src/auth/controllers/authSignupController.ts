import { NextFunction, Request, Response } from 'express';
import { CreateUser } from '../../users/entity/types/User';
import { authCreateUserService } from '../services';
import { authCreateTokenService } from '../services/authCreateTokenservice';

export const authSignup = async (
  req: Request<{}, {}, CreateUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await authCreateUserService(req.body);
    const token = authCreateTokenService(newUser.id);
    res.status(200).json({ data: token });
  } catch (error) {
    next(error);
  }
};
