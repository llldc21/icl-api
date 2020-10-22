import { container } from 'tsyringe';

import IUsersRepository from '../interfaces/IUsersRepository';
import UsersRepository from '../infra/typeorm/repositories/users.repository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
