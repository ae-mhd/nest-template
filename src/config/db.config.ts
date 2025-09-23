import { registerAs } from '@nestjs/config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions.js';
import * as path from 'path';

export default registerAs(
  'dbconfig.dev',
  (): PostgresConnectionOptions => ({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'standardDB',
    entities: [path.resolve(__dirname, '..' + '/../**/*.entity.ts,.js')], //get all entities
    //   migrations: ['src/migrations/*.ts'], //get all migrations
    synchronize: true, //synchronize the database, true for development, false for production
  }),
);
