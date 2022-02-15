import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const userLogin = (req: Request, res: Response, next: NextFunction) => {
  console.log('user login');
  const token = jwt.sign({ userID: '12344567' }, 'privateKey');

  const myToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidGhpcyBpcyB0aGUgdXNlciIsImlhdCI6MTY0NDg4NjM2OH0.XNbOukJn2Wkhi2w4QQxSFRH9Jj00BaocppoLlf_GCtk';

  try {
    res.status(200).json({
      token,
    });
  } catch (error) {
    next(error);
  }
};
