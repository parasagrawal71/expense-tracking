import { Module } from '@nestjs/common';
import { LoggerModule } from '@packages/common';
import { DatabaseModule } from '@packages/db';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DBConn } from './db.conn';

@Module({
  imports: [
    LoggerModule.forRoot({ excludedRoutes: [] }),
    DatabaseModule.forRoot(DBConn),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
