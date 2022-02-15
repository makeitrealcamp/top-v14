import jwt from 'jsonwebtoken';

export const createToken = (payload: {}): string => {
  return jwt.sign(payload, `${process.env.JWT_SECRET}`);
};
