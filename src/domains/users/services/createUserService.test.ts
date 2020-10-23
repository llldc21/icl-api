import 'reflect-metadata';

import CreateUsersService from './createUser.service';

import UserRepository from '../infra/typeorm/repositories/users.repository';

import EmailAlreadyExists from '../../../shared/errors/emailAlreadyExists';

import { hash } from '../../../utils/hashPassword';

jest.mock('../infra/typeorm/repositories/users.repository');

const mockUserRepository = new (<jest.Mock<UserRepository>>UserRepository)();

describe('UserListService Test', () => {
  const service = new CreateUsersService(mockUserRepository);

  beforeAll(() => {
    jest.clearAllMocks();
  });

  it('Should return error when create user with email already used', async () => {
    mockUserRepository.findByEmail = jest.fn().mockReturnValue({
      email: 'valid_email@test.com',
    });

    await expect(
      service.execute({
        email: 'valid_email@test.com',
        name: 'Valid Name',
        password: hash('valid_pass'),
      }),
    ).rejects.toBeInstanceOf(EmailAlreadyExists);
  });

  it('Should return user data when pass valid data', async () => {
    const returnData = {
      id: 1,
      name: 'Valid name',
      email: 'valid_email@test.com',
      password: hash('valid_pass'),
      createAt: new Date(),
      updateAt: new Date(),
    };
    mockUserRepository.findByEmail = jest.fn().mockReturnValue(undefined);
    mockUserRepository.save = jest.fn().mockReturnValue(returnData);

    const user = await service.execute({
      name: returnData.name,
      email: returnData.email,
      password: 'valid_pass',
    });

    expect(user.name).toBe(returnData.name);
    expect(user.email).toBe(returnData.email);
    expect(user.password).toBe(returnData.password);
  });
});
