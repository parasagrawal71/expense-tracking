import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateCommentDto')
export class CreateCommentDto {
  @Field()
  content: string;

  @Field()
  userId: number;

  @Field()
  expenseId: number;
}
