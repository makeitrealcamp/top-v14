import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { validateToken } from '../utils/tokenManager';
export const userTokenValidation = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const isValid = validateToken(authorization);
      if (isValid) {
        next();
      } else {
        next(new ApplicationError(401, 'Unvalid token'));
      }
    } else {
      next(new ApplicationError(401, 'No token provided'));
    }
  } catch (error) {
    next(error);
  }
};
