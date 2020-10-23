import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '../../../interfaces/IUsersRepository';
import Users from '../entities/Users';

class UsersRepository implements IUsersRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }

  public async findAll(): Promise<Users[]> {
    return this.repository.find();
  }

  public async findByEmail(email: string): Promise<Users | undefined> {
    return this.repository.findOne({ where: { email } });
  }

  public async save(data: Partial<Users>): Promise<Users> {
    const user = this.repository.save(data);

    return user;
  }
}

export default UsersRepository;
