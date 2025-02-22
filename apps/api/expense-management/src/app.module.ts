import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBConn } from './db.conn';
import { GraphQLModule } from '@nestjs/graphql';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AppResolver } from './app.resolver';
import { ExpenseEntity } from './expense/entity/expense.entity';
import { ExpenseDto } from './expense/dto/expense.dto';

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
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ExpenseEntity])],
      services: [],
      resolvers: [
        {
          DTOClass: ExpenseDto,
          EntityClass: ExpenseEntity,
          enableTotalCount: true,
          create: { disabled: true },
          update: { disabled: true },
          delete: { disabled: true },
        },
      ],
    }),
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
