import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('/')
export class AppController {
  @Get('')
  public get(req: Request, res: Response): Response<unknown> {
    return res
      .json({
        message: 'Ok',
        status: 200,
      })
      .status(200);
  }
}
