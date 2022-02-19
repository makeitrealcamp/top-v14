import { NextFunction, Request, Response } from 'express';
import { LoginUser } from '../../users/entity/types/User';
import { userLoginService } from '../services/authLoginService';

export const userLogin = async (
  req: Request<{}, {}, LoginUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await userLoginService(req.body);
    res.status(200).json({
      token,
    });
  } catch (error) {
    next(error);
  }
};
