import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType('UpdateCommentDto')
export class UpdateCommentDto {
  @Field({ nullable: true })
  @IsOptional()
  content: string;
}
