import { Controller, Get, Post, Middleware } from '@overnightjs/core';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import listUsersService from '../../../services/listUsers.service';
import createUserService from '../../../services/createUser.service';

import CreateUserMiddleware from '../../../../../middlewares/createUser.middleware';

@Controller('users')
export default class UserController {
  @Get('/')
  public async list(req: Request, res: Response): Promise<Response> {
    const service = container.resolve(listUsersService);
    const users = await service.execute();

    return res.json(users).status(200);
  }

  @Post('/')
  @Middleware([CreateUserMiddleware])
  public async create(req: Request, res: Response): Promise<Response> {
    const service = container.resolve(createUserService);
    const { name, email, password } = req.body;

    const user = await service.execute({ name, email, password });

    return res.json(user);
  }
}
