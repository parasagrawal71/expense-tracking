import { Injectable } from '@nestjs/common';
import {
  InjectQueryService,
  QueryService,
  QueryServiceRelation,
  RelationQueryService,
} from '@ptc-org/nestjs-query-core';
import { ExpenseEntity } from '../entity/expense.entity';
import { CommentQueryService } from './comment-query.service';

@Injectable()
export class ExpenseRelationalQueryService extends RelationQueryService<ExpenseEntity> {
  constructor(
    @InjectQueryService(ExpenseEntity)
    readonly queryService: QueryService<ExpenseEntity>,
    private readonly commentQueryService: CommentQueryService,
  ) {
    super(queryService, {
      commentList: {
        service: commentQueryService,
        query(expense) {
          return {
            filter: {
              expenseId: { eq: expense.id },
            },
          };
        },
      } as unknown as QueryServiceRelation<ExpenseEntity, unknown>,
    });
  }
}
