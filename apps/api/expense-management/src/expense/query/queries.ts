import { gql } from 'graphql-request';

export const GET_COMMENTS = gql`
  query CommentDtos($filter: CommentDtoFilter!) {
    commentDtos(filter: $filter) {
      edges {
        node {
          id
          content
          userId
          created
          updated
          expenseId
        }
      }
    }
  }
`;
