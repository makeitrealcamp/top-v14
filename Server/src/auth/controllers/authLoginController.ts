import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { LoginUser } from '../../users/entity/types/User';
import { authLoginService } from '../services';

export const authLoginController = async (
  req: Request<{}, {}, LoginUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await authLoginService(req.body);
    res.status(200).json({
      token,
    });
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
};
