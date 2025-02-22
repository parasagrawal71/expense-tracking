import { Field, ObjectType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { ExpenseCategory } from '../constants/expense-category.enum';
import { FilterableField } from '@ptc-org/nestjs-query-graphql';

@ObjectType('ExpenseDto')
export class ExpenseDto {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  amount: number;

  @Field()
  description?: string;

  @FilterableField()
  @IsEnum(ExpenseCategory)
  category: string;

  @Field()
  expenseDate: Date;

  @FilterableField()
  userId: string;

  @Field()
  created: Date;

  @Field()
  updated: Date;
}
