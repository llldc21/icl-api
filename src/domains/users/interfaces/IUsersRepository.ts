import Users from '../infra/typeorm/entities/Users';

export default interface IUsersRepository {
  findAll(): Promise<Users[]>;
  save(data: Partial<Users>): Promise<Users>;
}
