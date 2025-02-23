import { DynamicModule, Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

type LoggerConfig = {
  excludedRoutes: string[];
};

@Module({})
export class AppLoggerModule {
  static forRoot(config?: LoggerConfig): DynamicModule {
    return LoggerModule.forRoot({
      exclude: config?.excludedRoutes,
    });
  }
}
