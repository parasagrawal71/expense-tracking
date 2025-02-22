import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsOptional } from 'class-validator';
import { ExpenseCategory } from '../constants/expense-category.enum';

@InputType('UpdateExpenseDto')
export class UpdateExpenseDto {
  @Field({ nullable: true })
  @IsOptional()
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  amount: number;

  @Field({ nullable: true })
  @IsOptional()
  description?: string;

  @Field({ nullable: true })
  @IsEnum(ExpenseCategory)
  @IsOptional()
  category: string;

  @Field({ nullable: true })
  @IsOptional()
  expenseDate: Date;
}
