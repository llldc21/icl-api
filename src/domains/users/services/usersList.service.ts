import { inject, injectable } from 'tsyringe';
import Users from '../infra/typeorm/entities/Users';

import IUsersRepository from '../interfaces/IUsersRepository';

@injectable()
class UsersListService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<Users[]> {
    return this.usersRepository.findAll();
  }
}

export default UsersListService;
