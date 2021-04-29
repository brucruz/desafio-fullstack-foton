import { createTestClient } from 'apollo-server-testing';
import { createBook } from '../../../mongoose/seed/createBook';
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
  query LoadBook($id: String!) {
    book(id: $id) {
      title
      subtitle
      author
      description
      cover
    }
  }
`;

const title = 'Harry Potter';
const author = 'JK Rowling';
const description =
  'This is the story of a young boy who finds out he is a wizard';
const cover =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rPTIBOscmtdvxPy3FEWJnQHaKs%26pid%3DApi&f=1';

describe('a user', () => {
  it('should be able to view a book details', async () => {
    const book = await createBook({
      author,
      title,
      description,
      cover,
    });

    const variables = {
      id: book._id.toString(),
    };

    const testServer = await getTestServer();

    const { query } = createTestClient(testServer());
    const result = await query({
      query: queryGQL,
      variables,
    });

    expect(result.errors).toBeFalsy();
    expect(result.data).toBeTruthy();
    expect(result.data.book).toMatchSnapshot();
  });
});
