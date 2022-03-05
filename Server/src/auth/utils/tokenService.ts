import jwt, { UserIdJwtPayload } from 'jsonwebtoken';

const AuthToken = `${process.env.JWT_AUTH_SECRET}`;
const RefreshToken = `${process.env.JWT_REFRESH_SECRET}`;
export enum TokenSecret {
  AuthToken = AuthToken!,
  RefreshToken = RefreshToken!,
}

export const tokenService = {
  createAuthToken: (
    payload: {},
    secret: TokenSecret,
    duration = '10m',
    additionalSecret?: string
  ): string => {
    return jwt.sign(payload, `${secret}+${additionalSecret}`, {
      expiresIn: duration,
    });
  },
  validateToken: (
    token: string,
    secret: TokenSecret,
    additionalSecret?: string
  ) => {
    return <jwt.UserIdJwtPayload>(
      jwt.verify(token, `${secret}+${additionalSecret}`)
    );
  },
};
