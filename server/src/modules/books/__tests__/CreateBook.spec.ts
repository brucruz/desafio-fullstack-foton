import { createTestClient } from 'apollo-server-testing';
import getTestServer, {
  clearDbAndRestartCounters,
  connectMongoose,
  disconnectMongoose,
} from '../../../test/runTest';

const gql = String.raw;

beforeAll(connectMongoose);
beforeEach(clearDbAndRestartCounters);
afterAll(disconnectMongoose);

const mutation = gql`
  mutation CreateBook($data: CreateBookInput!) {
    createBook(data: $data) {
      title
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
  it('should be able to add a book', async () => {
    const variables = {
      data: {
        title,
        author,
        description,
        cover,
      },
    };

    const testServer = await getTestServer();

    const { mutate } = createTestClient(testServer());
    const result = await mutate({
      mutation,
      variables,
    });

    expect(result.errors).toBeFalsy();
    expect(result.data).toBeTruthy();
    expect(result.data).toMatchSnapshot();
  });

  it('should not be able to add a book, if it is missing its title, author or description', async () => {
    const variablesWoTitle = {
      data: {
        author,
        description,
        cover,
      },
    };

    const variablesWoAuthor = {
      data: {
        title,
        description,
        cover,
      },
    };

    const variablesWoDescription = {
      data: {
        title,
        author,
        cover,
      },
    };

    const testServer = await getTestServer();

    const { mutate } = createTestClient(testServer());

    const resultWoTitle = await mutate({
      mutation,
      variables: variablesWoTitle,
    });

    const resultWoAuthor = await mutate({
      mutation,
      variables: variablesWoAuthor,
    });

    const resultWoDescription = await mutate({
      mutation,
      variables: variablesWoDescription,
    });

    expect(resultWoTitle.errors).toBeTruthy();
    expect(resultWoAuthor.errors).toBeTruthy();
    expect(resultWoDescription.errors).toBeTruthy();
  });
});
