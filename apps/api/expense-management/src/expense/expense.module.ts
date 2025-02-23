import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ExpenseEntity } from './entity/expense.entity';
import { ExpenseDto } from './dto/expense.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ExpenseEntity])],
      services: [],
      resolvers: [
        {
          DTOClass: ExpenseDto,
          EntityClass: ExpenseEntity,
          CreateDTOClass: CreateExpenseDto,
          UpdateDTOClass: UpdateExpenseDto,
          enableTotalCount: true,
          read: {
            maxResultsSize: 100,
          },
          create: { disabled: false },
          update: { disabled: false },
          delete: { disabled: true },
        },
      ],
    }),
  ],
  providers: [],
})
export class ExpenseModule {}
