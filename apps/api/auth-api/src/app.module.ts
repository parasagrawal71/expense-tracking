import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DBConn } from './db.conn';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DBConn.host,
      port: DBConn.port,
      username: DBConn.username,
      password: DBConn.password,
      database: DBConn.database,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
