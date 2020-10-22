import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UsersListService from '../../../services/usersList.service';

@Controller('users')
export default class UserController {
  @Get('/')
  public async list(req: Request, res: Response): Promise<Response> {
    const service = container.resolve(UsersListService);
    const users = await service.execute();

    return res.json(users).status(200);
  }
}
