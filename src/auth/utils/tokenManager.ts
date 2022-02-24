import jwt, { UserIdJwtPayload } from 'jsonwebtoken';

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
  return jwt.verify(
    token,
    `${process.env.JWT_AUTH_SECRET}`
  ) as UserIdJwtPayload;
};

export const validateRefreshToken = (token: string) => {
  return <jwt.UserIdJwtPayload>(
    jwt.verify(token, `${process.env.JWT_REFRESH_SECRET}`)
  );
};
