import jwt from 'jsonwebtoken';

export const createTestAuthToken = (payload: {}, secret: string): string => {
  return jwt.sign(payload, secret, {
    expiresIn: '360s',
  });
};
export const createTestRefreshToken = (payload: {}, secret: string): string => {
  return jwt.sign(payload, secret, {
    expiresIn: '1w',
  });
};

export const validateTestAuthToken = (token: string, secret: string) => {
  return <jwt.UserIDJwtPayload>jwt.verify(token, secret);
};

export const validateTestRefreshToken = (token: string, secret: string) => {
  return <jwt.UserIDJwtPayload>jwt.verify(token, secret);
};
