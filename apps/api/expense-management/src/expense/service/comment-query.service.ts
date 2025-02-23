import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { NoOpQueryService, Query } from '@ptc-org/nestjs-query-core';
import { GraphQLClient } from 'graphql-request';
import { config } from '../../config/config';
import { getGraphQLClient } from 'src/graphql.client';
import { GET_COMMENTS } from '../query/queries';
import { CommentDto } from 'src/comment/dto/comment.dto';

@Injectable({ scope: Scope.REQUEST })
export class CommentQueryService extends NoOpQueryService<CommentDto> {
  private gplClient: GraphQLClient;

  constructor(@Inject(REQUEST) private readonly request: any) {
    super();
    this.gplClient = getGraphQLClient(config.EXPENSE_MGMT_SERVICE_URL);
  }

  async query(query: Query<CommentDto>): Promise<CommentDto[]> {
    const response: {
      commentDtos: {
        edges: { node: CommentDto }[];
      };
    } = await this.gplClient.request(GET_COMMENTS, {
      filter: {
        expenseId: {
          eq: query?.filter?.expenseId?.eq,
        },
      },
    });

    return response.commentDtos.edges.map((edge) => edge.node);
  }
}
