import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { CreateUser } from '../../users/entity/types/User';
import { authCreateUserService, authSendValidateUserEmail } from '../services';
import { authCreateTokenService } from '../services/authCreateTokenService';

export const authSignup = async (
  req: Request<{}, {}, CreateUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await authCreateUserService(req.body);
    // const token = authCreateTokenService(newUser.id);
    /*
   send a validate email link 
  
    */
    await authSendValidateUserEmail(newUser.id, req.body.email);
    res.status(200);
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
