import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsOptional } from 'class-validator';
import { ExpenseCategory } from '../constants/expense-category.enum';

@InputType('CreateExpenseDto')
export class CreateExpenseDto {
  @Field()
  title: string;

  @Field()
  amount: number;

  @Field({ nullable: true })
  @IsOptional()
  description?: string;

  @Field()
  @IsEnum(ExpenseCategory)
  category: string;

  @Field()
  expenseDate: Date;

  @Field()
  userId: number;
}
