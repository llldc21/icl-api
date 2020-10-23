import 'reflect-metadata';

import ListUsersService from './listUsers.service';

import UserRepository from '../infra/typeorm/repositories/users.repository';

jest.mock('../infra/typeorm/repositories/users.repository');

const mockUserRepository = new (<jest.Mock<UserRepository>>UserRepository)();

describe('UserListService Test', () => {
  const service = new ListUsersService(mockUserRepository);

  beforeAll(() => {
    jest.clearAllMocks();
  });

  it('Should return empty array when not found users', async () => {
    mockUserRepository.findAll = jest.fn().mockReturnValue([]);

    const users = await service.execute();

    expect(typeof users).toBe(typeof []);
  });
});
