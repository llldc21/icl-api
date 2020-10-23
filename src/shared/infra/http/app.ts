import express from 'express';
import { Server } from '@overnightjs/core';
import 'express-async-errors';
import './container';
import cors from 'cors';
import morgan from 'morgan';

import { controllers } from './controllers';
import databaseConnect from '../typeorm/index';

class App extends Server {
  server: express.Application;

  constructor() {
    super();
    this.server = this.app;

    this.expressSetup();
    this.controllersSetup();
    this.databaseSetup();
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
}

export default new App().server;
