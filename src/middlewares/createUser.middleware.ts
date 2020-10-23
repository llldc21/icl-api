import { Request, Response, NextFunction } from 'express';

import GenericError from '../shared/errors/genericError';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  if (!name) {
    throw new GenericError('The name is not been defined');
  }

  if (!email) {
    throw new GenericError('The email is not been defined');
  }

  if (!password) {
    throw new GenericError('The password is not been defined');
  }

  next();
};
