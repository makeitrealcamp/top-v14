import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { authValidateUserAccount } from '../services/authValidateUserAccount';

export const validateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await authValidateUserAccount(req.userId);
    res.status(200).json({ result });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
