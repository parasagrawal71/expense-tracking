import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CleanupExpenseJob } from './cleanup-expense/cleanup-expense.job';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { ExpenseEntity } from '../expense/entity/expense.entity';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    NestjsQueryTypeOrmModule.forFeature([ExpenseEntity]),
  ],
  providers: [CleanupExpenseJob],
  exports: [],
})
export class JobModule {}
