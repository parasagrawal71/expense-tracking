import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConn } from './db.conn';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AppResolver } from './app.resolver';
import { ExpenseModule } from './expense/expense.module';

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
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ExpenseModule,
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
