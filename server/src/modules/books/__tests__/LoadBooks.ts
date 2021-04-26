import { createTestClient } from 'apollo-server-testing';
import { seedDb } from '../../../mongoose/seed/seedDb';
import getTestServer, {
  clearDbAndRestartCounters,
  connectMongoose,
  disconnectMongoose,
} from '../../../test/runTest';

const gql = String.raw;

beforeAll(connectMongoose);
beforeEach(clearDbAndRestartCounters);
afterAll(disconnectMongoose);

const queryGQL = gql`
  query ListBooks($cursor: String, $limit: Int!) {
    books(cursor: $cursor, limit: $limit) {
      books {
        title
        subtitle
        author
        description
        cover
      }
      hasNextPage
      nextCursor
    }
  }
`;

describe('a user', () => {
  it('should be able to list books', async () => {
    await seedDb();

    const variables = {
      limit: 10,
    };

    const testServer = await getTestServer();

    const { query } = createTestClient(testServer());
    const result = await query({
      query: queryGQL,
      variables,
    });

    expect(result.errors).toBeFalsy();
    expect(result.data).toBeTruthy();
    expect(result.data.books.books).toMatchSnapshot();
  });

  it('should be able to load more books', async () => {
    await seedDb();

    const variables = {
      limit: 1,
    };

    const testServer = await getTestServer();

    const { query } = createTestClient(testServer());
    const result = await query({
      query: queryGQL,
      variables,
    });

    const loadMoreResult = await query({
      query: queryGQL,
      variables: {
        limit: 1,
        cursor: result.data.books.nextCursor,
      },
    });

    expect(loadMoreResult.errors).toBeFalsy();
    expect(loadMoreResult.data).toBeTruthy();
    expect(loadMoreResult.data.books.books).toMatchSnapshot();
  });

  it('should be able to query books by their titles', async () => {
    await seedDb();

    const variables = {
      limit: 1,
      query: 'hooked',
    };

    const testServer = await getTestServer();

    const { query } = createTestClient(testServer());
    const result = await query({
      query: queryGQL,
      variables,
    });

    expect(result.errors).toBeFalsy();
    expect(result.data).toBeTruthy();
    expect(result.data.books.books).toMatchSnapshot();
  });
});
