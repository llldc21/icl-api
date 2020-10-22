import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';
import { logger } from '../logger/index';

dotenv.config();
const databaseConnect = async (): Promise<void> => {
  await createConnection({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    logging: false,
    synchronize: false,
    entities: ['src/domains/**/infra/typeorm/entities/*.ts'],
  });
  logger.info('Connected to database');
};

export default databaseConnect;
