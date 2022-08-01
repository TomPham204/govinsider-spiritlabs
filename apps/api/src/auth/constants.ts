export const jwtConstants = {
  secret: process.env.JWT_SECRET,
};

export const REFRESH_TOKEN_EXPIRE = 3 * 24 * 60 * 60;
export const ACCESS_TOKEN_EXPIRE = 15 * 60;

export type DecodedToken = {
  email: string;
  sub: number;
  iat: number;
  exp: number;
};
