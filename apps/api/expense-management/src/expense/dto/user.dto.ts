import { Field, ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@ptc-org/nestjs-query-graphql';

@ObjectType('UserDto')
export class UserDto {
  @FilterableField()
  id: number;

  @Field()
  name: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  age: number;

  @Field()
  gender: string;
}
