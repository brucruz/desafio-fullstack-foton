import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** Mongo object id scalar type */
  ObjectId: any;
};

/** Books model */
export type Book = {
  __typename?: 'Book';
  _id: Scalars['ObjectId'];
  /** Book's title */
  title: Scalars['String'];
  /** Book's subtitle */
  subtitle?: Maybe<Scalars['String']>;
  /** Book's author */
  author: Scalars['String'];
  /** Book's description */
  description: Scalars['String'];
  /** Book's cover image */
  cover?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  removedAt?: Maybe<Scalars['DateTime']>;
  /** Card creation date */
  createdAt: Scalars['DateTime'];
  /** Card last update date */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CreateBookInput = {
  /** Book title */
  title: Scalars['String'];
  /** Book title */
  subtitle?: Maybe<Scalars['String']>;
  /** Book author */
  author: Scalars['String'];
  /** Book description */
  description: Scalars['String'];
  /** Book cover */
  cover?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook: Book;
};

export type MutationCreateBookArgs = {
  data: CreateBookInput;
};

export type PaginatedBooks = {
  __typename?: 'PaginatedBooks';
  books: Array<Book>;
  hasNextPage: Scalars['Boolean'];
  nextCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  books: PaginatedBooks;
  book?: Maybe<Book>;
};

export type QueryBooksArgs = {
  query?: Maybe<Scalars['String']>;
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};

export type QueryBookArgs = {
  id: Scalars['String'];
};

export type CreateBookMutationVariables = Exact<{
  data: CreateBookInput;
}>;

export type CreateBookMutation = { __typename?: 'Mutation' } & {
  createBook: { __typename?: 'Book' } & Pick<Book, '_id' | 'title' | 'author'>;
};

export type LoadBookQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type LoadBookQuery = { __typename?: 'Query' } & {
  book?: Maybe<
    { __typename?: 'Book' } & Pick<
      Book,
      '_id' | 'title' | 'subtitle' | 'author' | 'description' | 'cover'
    >
  >;
};

export type LoadBooksQueryVariables = Exact<{
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
}>;

export type LoadBooksQuery = { __typename?: 'Query' } & {
  books: { __typename?: 'PaginatedBooks' } & Pick<
    PaginatedBooks,
    'hasNextPage' | 'nextCursor'
  > & {
      books: Array<
        { __typename?: 'Book' } & Pick<
          Book,
          '_id' | 'title' | 'author' | 'cover'
        >
      >;
    };
};

export type SearchBooksQueryVariables = Exact<{
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  query?: Maybe<Scalars['String']>;
}>;

export type SearchBooksQuery = { __typename?: 'Query' } & {
  books: { __typename?: 'PaginatedBooks' } & Pick<
    PaginatedBooks,
    'hasNextPage' | 'nextCursor'
  > & {
      books: Array<
        { __typename?: 'Book' } & Pick<
          Book,
          '_id' | 'title' | 'author' | 'cover'
        >
      >;
    };
};

export const CreateBookDocument = gql`
  mutation CreateBook($data: CreateBookInput!) {
    createBook(data: $data) {
      _id
      title
      author
    }
  }
`;
export type CreateBookMutationFn = Apollo.MutationFunction<
  CreateBookMutation,
  CreateBookMutationVariables
>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBookMutation,
    CreateBookMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(
    CreateBookDocument,
    options,
  );
}
export type CreateBookMutationHookResult = ReturnType<
  typeof useCreateBookMutation
>;
export type CreateBookMutationResult = Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<
  CreateBookMutation,
  CreateBookMutationVariables
>;
export const LoadBookDocument = gql`
  query LoadBook($id: String!) {
    book(id: $id) {
      _id
      title
      subtitle
      author
      description
      cover
    }
  }
`;

/**
 * __useLoadBookQuery__
 *
 * To run a query within a React component, call `useLoadBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoadBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoadBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLoadBookQuery(
  baseOptions: Apollo.QueryHookOptions<LoadBookQuery, LoadBookQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LoadBookQuery, LoadBookQueryVariables>(
    LoadBookDocument,
    options,
  );
}
export function useLoadBookLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LoadBookQuery,
    LoadBookQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LoadBookQuery, LoadBookQueryVariables>(
    LoadBookDocument,
    options,
  );
}
export type LoadBookQueryHookResult = ReturnType<typeof useLoadBookQuery>;
export type LoadBookLazyQueryHookResult = ReturnType<
  typeof useLoadBookLazyQuery
>;
export type LoadBookQueryResult = Apollo.QueryResult<
  LoadBookQuery,
  LoadBookQueryVariables
>;
export const LoadBooksDocument = gql`
  query LoadBooks($cursor: String, $limit: Int!) {
    books(cursor: $cursor, limit: $limit) {
      books {
        _id
        title
        author
        cover
      }
      hasNextPage
      nextCursor
    }
  }
`;

/**
 * __useLoadBooksQuery__
 *
 * To run a query within a React component, call `useLoadBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoadBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoadBooksQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useLoadBooksQuery(
  baseOptions: Apollo.QueryHookOptions<LoadBooksQuery, LoadBooksQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LoadBooksQuery, LoadBooksQueryVariables>(
    LoadBooksDocument,
    options,
  );
}
export function useLoadBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LoadBooksQuery,
    LoadBooksQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LoadBooksQuery, LoadBooksQueryVariables>(
    LoadBooksDocument,
    options,
  );
}
export type LoadBooksQueryHookResult = ReturnType<typeof useLoadBooksQuery>;
export type LoadBooksLazyQueryHookResult = ReturnType<
  typeof useLoadBooksLazyQuery
>;
export type LoadBooksQueryResult = Apollo.QueryResult<
  LoadBooksQuery,
  LoadBooksQueryVariables
>;
export const SearchBooksDocument = gql`
  query SearchBooks($cursor: String, $limit: Int!, $query: String) {
    books(cursor: $cursor, limit: $limit, query: $query) {
      books {
        _id
        title
        author
        cover
      }
      hasNextPage
      nextCursor
    }
  }
`;

/**
 * __useSearchBooksQuery__
 *
 * To run a query within a React component, call `useSearchBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchBooksQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchBooksQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchBooksQuery,
    SearchBooksQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchBooksQuery, SearchBooksQueryVariables>(
    SearchBooksDocument,
    options,
  );
}
export function useSearchBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchBooksQuery,
    SearchBooksQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchBooksQuery, SearchBooksQueryVariables>(
    SearchBooksDocument,
    options,
  );
}
export type SearchBooksQueryHookResult = ReturnType<typeof useSearchBooksQuery>;
export type SearchBooksLazyQueryHookResult = ReturnType<
  typeof useSearchBooksLazyQuery
>;
export type SearchBooksQueryResult = Apollo.QueryResult<
  SearchBooksQuery,
  SearchBooksQueryVariables
>;
