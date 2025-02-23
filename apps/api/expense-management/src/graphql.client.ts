import { GraphQLClient } from 'graphql-request';

export const getGraphQLClient = (url) => {
  return new GraphQLClient(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
