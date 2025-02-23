import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionDetails } from './connection-details.interface';

@Module({})
export class DatabaseModule {
  static forRoot(connConfig: ConnectionDetails): DynamicModule {
    return TypeOrmModule.forRoot({
      type: 'postgres',
      host: connConfig.host,
      port: connConfig.port,
      username: connConfig.username,
      password: connConfig.password,
      database: connConfig.database,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
    });
  }
}
