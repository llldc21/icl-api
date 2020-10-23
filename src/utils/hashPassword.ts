import * as bcrypt from 'bcryptjs';

const salt = process.env.BCRYPT_SALT || 8;

export const hash = (password: string): string => {
  return bcrypt.hashSync(password, salt);
};

export const check = (password: string, dbPassword: string): boolean => {
  return bcrypt.compareSync(password, dbPassword);
};
