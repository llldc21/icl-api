import Users from '../infra/typeorm/entities/Users';

export default interface IUsersRepository {
  findAll(): Promise<Users[]>;
  findByEmail(email: string): Promise<Users | undefined>;
  save(data: Partial<Users>): Promise<Users>;
}
