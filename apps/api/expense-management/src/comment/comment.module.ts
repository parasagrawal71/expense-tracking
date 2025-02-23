import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { CommentDto } from './dto/comment.dto';
import { CommentEntity } from './entity/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CommentEntity])],
      services: [],
      resolvers: [
        {
          DTOClass: CommentDto,
          EntityClass: CommentEntity,
          CreateDTOClass: CreateCommentDto,
          UpdateDTOClass: UpdateCommentDto,
          enableTotalCount: true,
          read: {
            maxResultsSize: 100,
          },
          create: { disabled: false },
          update: { disabled: false },
          delete: { disabled: false },
        },
      ],
    }),
  ],
  providers: [],
})
export class CommentModule {}
