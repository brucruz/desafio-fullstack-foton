/* eslint-disable no-underscore-dangle */
import { withApollo as createWithApollo } from 'next-apollo';
import {
  ApolloCache,
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { PaginatedBooks } from '../generated/graphql';

const cache: ApolloCache<NormalizedCacheObject> = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        books: {
          keyArgs: false,
          merge(
            existing: PaginatedBooks | undefined,
            incoming: PaginatedBooks,
          ): PaginatedBooks {
            const paginatedBooks: PaginatedBooks = {
              books: [...(existing?.books || []), ...(incoming.books || [])],
              hasNextPage: incoming.hasNextPage,
              nextCursor: incoming.nextCursor,
              __typename: incoming.__typename,
            };

            return paginatedBooks;
          },
        },
      },
    },
  },
});

export const createClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  credentials: 'include',
  cache,
});

export const withApollo = createWithApollo(createClient);
