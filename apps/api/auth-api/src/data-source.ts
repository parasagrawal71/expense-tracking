import { DataSource } from 'typeorm';
import { DBConn } from './db.conn';

export default new DataSource({
  type: 'postgres',
  host: DBConn.host,
  port: DBConn.port,
  username: DBConn.username,
  password: DBConn.password,
  database: DBConn.database,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  migrationsTableName: 'migrations',
});
