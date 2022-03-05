import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { validateAuthToken } from '../utils/tokenManager';
export const userTokenValidationParams = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { token } = req.params;

    if (!token) return next(new ApplicationError(401, 'No token provided'));

    const { id } = validateAuthToken(token);

    if (!id) return next(new ApplicationError(401, 'Invalid token'));

    req.userId = id;

    next();
  } catch (error: any) {
    if (error.message === 'jwt expired')
      return next(new ApplicationError(401, error.message));
    console.log(error.message);
    next(error);
  }
};
