import { inject, injectable } from 'tsyringe';
import Users from '../infra/typeorm/entities/Users';

import IUsersRepository from '../interfaces/IUsersRepository';

import EmailAlreadyExists from '../../../shared/errors/emailAlreadyExists';
import { hash } from '../../../utils/hashPassword';

interface ICreateUserData {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
  }: ICreateUserData): Promise<Users> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists !== undefined) {
      throw new EmailAlreadyExists(email);
    }

    const passwordHash = hash(password);

    const user = await this.usersRepository.save({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export default CreateUserService;
