import { Injectable } from '@nestjs/common';
import { Logger } from '@packages/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExpenseEntity } from '../../expense/entity/expense.entity';

// Documentation: https://docs.nestjs.com/techniques/task-scheduling
@Injectable()
export class CleanupExpenseJob {
  constructor(
    private readonly logger: Logger,
    @InjectRepository(ExpenseEntity)
    private readonly expenseRepository: Repository<ExpenseEntity>,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_2AM, {
    name: 'cleanup-expense-job', // Required
  })
  async handleCron() {
    this.logger.info(`Running cleanup-expense-job...`);
    try {
      // Delete all expenses older than 1 year
      await this.expenseRepository
        .createQueryBuilder()
        .delete()
        .from(ExpenseEntity)
        .where('created < :date', {
          date: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
        })
        .execute();
      this.logger.info('Deleted old expenses');
    } catch (e) {
      this.logger.error(e, 'Error deleting old expenses');
    }
    this.logger.info(`Finishing cleanup-expense-job`);
  }
}
