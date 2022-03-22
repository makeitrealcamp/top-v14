export type CreateToken = {
  userId: string;
};

export type TokenResponse = {
  authToken: string;
  refreshToken: string;
};
