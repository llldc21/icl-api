import express, { Request, Response, NextFunction } from 'express';
import { Server } from '@overnightjs/core';
import 'express-async-errors';
import './container';
import cors from 'cors';
import morgan from 'morgan';

import { controllers } from './controllers';
import databaseConnect from '../typeorm/index';

import GenericError from '../../errors/genericError';
import EmailAlredyExistsException from '../../errors/emailAlreadyExists';

class App extends Server {
  server: express.Application;

  constructor() {
    super();
    this.server = this.app;

    this.expressSetup();
    this.controllersSetup();
    this.databaseSetup();
    this.exceptionHandler();
  }

  private expressSetup(): void {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(morgan('dev'));
    this.server.use(cors());
  }

  private controllersSetup(): void {
    this.addControllers(controllers);
  }

  private databaseSetup(): void {
    databaseConnect();
  }

  public exceptionHandler(): void {
    this.server.use(
      async (
        error: Error,
        req: Request,
        res: Response,
        next: NextFunction,
      ): Promise<Response> => {
        if (
          error instanceof GenericError ||
          error instanceof EmailAlredyExistsException
        ) {
          return res
            .status(error.statusCode)
            .json({ status: 'error', message: error.message });
        }

        return res.status(500).send({
          error: 'Sorry. It seems that ocurred an expected error',
          details: error.message,
        });
      },
    );
  }
}

export default new App().server;
