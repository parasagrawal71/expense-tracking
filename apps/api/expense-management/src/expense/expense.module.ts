import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ExpenseEntity } from './entity/expense.entity';
import { ExpenseDto } from './dto/expense.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ExpenseRelationalQueryService } from './service/expense-relational-query.service';
import { CommentQueryService } from './service/comment-query.service';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ExpenseEntity])],
      services: [ExpenseRelationalQueryService, CommentQueryService],
      resolvers: [
        {
          DTOClass: ExpenseDto,
          EntityClass: ExpenseEntity,
          CreateDTOClass: CreateExpenseDto,
          UpdateDTOClass: UpdateExpenseDto,
          ServiceClass: ExpenseRelationalQueryService,
          enableTotalCount: true,
          read: {
            maxResultsSize: 100,
          },
          create: { disabled: false },
          update: { disabled: false },
          delete: { disabled: false },
        },
      ],
    }),
  ],
  providers: [],
})
export class ExpenseModule {}
