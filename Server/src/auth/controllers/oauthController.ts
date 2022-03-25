import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { LoginUser } from '../../users/entity/types/User';
import { authLoginService } from '../services';
import { oauthGoogleService } from '../services/oauthGoogleService';
// import qs from 'qs';

export const oauthController = async (
  req: Request<{}, {}, LoginUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { code } = req.query;
    let tokens;
    if (code) {
      tokens = await oauthGoogleService(code);
    }
    // res.status(200).json({ data: tokens });
    res.set('x-token', tokens?.authToken);
    res.set('r-token', tokens?.refreshToken);
    res.redirect('http://localhost:3000/dashboard');
  } catch (error: any) {
    next(new ApplicationError(401, `${error.message}`));
  }
};
