import { Field, ObjectType } from '@nestjs/graphql';
import { FilterableField, Relation } from '@ptc-org/nestjs-query-graphql';
import { ExpenseDto } from '../../expense/dto/expense.dto';

@Relation('expense', () => ExpenseDto)
@ObjectType('CommentDto')
export class CommentDto {
  @Field()
  id: number;

  @Field()
  content: string;

  @FilterableField()
  userId: number;

  @Field()
  created: Date;

  @Field()
  updated: Date;

  @FilterableField()
  expenseId: number;
}
