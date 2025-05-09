import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { LoggerModule } from '@packages/common';
import { DBConn } from './db.conn';
import { AppResolver } from './app.resolver';
import { ExpenseModule } from './expense/expense.module';
import { DatabaseModule } from '@packages/db';
import { CommentModule } from './comment/comment.module';
import { JobModule } from './jobs/job.module';

@Module({
  imports: [
    LoggerModule.forRoot({ excludedRoutes: [] }),
    DatabaseModule.forRoot(DBConn),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ExpenseModule,
    CommentModule,
    JobModule,
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
