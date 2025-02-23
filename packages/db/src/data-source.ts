import { DataSource } from 'typeorm';
import { ConnectionDetails } from './connection-details.interface';

export const getDataSource = (connConfig: ConnectionDetails) => {
  return new DataSource({
    type: 'postgres',
    host: connConfig.host,
    port: connConfig.port,
    username: connConfig.username,
    password: connConfig.password,
    database: connConfig.database,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: ['./src/migrations/**/*{.ts,.js}'],
    migrationsTableName: 'migrations',
  });
};
