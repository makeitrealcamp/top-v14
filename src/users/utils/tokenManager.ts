import jwt from 'jsonwebtoken';

export const createToken = (payload: {}): string => {
  return jwt.sign(payload, `${process.env.JWT_SECRET}`);
};

export const validateToken = (token: string) => {
  return jwt.verify(token, `${process.env.JWT_SECRET}`);
};
