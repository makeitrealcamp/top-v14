import jwt from 'jsonwebtoken';

export const createAuthToken = (payload: {}): string => {
  return jwt.sign(payload, `${process.env.JWT_AUTH_SECRET}`, {
    expiresIn: '360s',
  });
};
export const createRefreshToken = (payload: {}): string => {
  return jwt.sign(payload, `${process.env.JWT_REFRESH_SECRET}`, {
    expiresIn: '1w',
  });
};

export const validateToken = (token: string) => {
  return <jwt.UserIDJwtPayload>(
    jwt.verify(token, `${process.env.JWT_AUTH_SECRET}`)
  );
};

export const validateRefreshToken = (token: string) => {
  return <jwt.UserIDJwtPayload>(
    jwt.verify(token, `${process.env.JWT_REFRESH_SECRET}`)
  );
};
