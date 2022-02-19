import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { validateRefreshToken } from '../../users/utils/tokenManager';

export const refreshTokenValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    if (!authorization)
      return next(new ApplicationError(401, 'No token provided'));
    //TODO: get the correct type
    const isValid: any = validateRefreshToken(authorization);

    if (!isValid) return next(new ApplicationError(401, 'Unvalid token'));

    req.userId = isValid.id;

    next();
  } catch (error: any) {
    if (error.message == 'jwt expired')
      return next(new ApplicationError(401, error.message));
    next(error);
  }
};
