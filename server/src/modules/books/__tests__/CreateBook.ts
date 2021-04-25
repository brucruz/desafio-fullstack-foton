import {
  clearDbAndRestartCounters,
  connectMongoose,
  disconnectMongoose,
} from '../../../test/runTest';

// const gql = String.raw;

beforeAll(connectMongoose);
beforeEach(clearDbAndRestartCounters);
afterAll(disconnectMongoose);

// const mutation = gql`
//   mutation CreateBook($data: CreateBookInput!) {
//     createBook(data: $data) {
//       title
//       author
//       description
//       cover
//     }
//   }
// `;

describe('a user', () => {
  it('should be able to add a book', async () => {
    const x = true;
    const y = false;

    expect(x).toBeTruthy();
    expect(y).toBeFalsy();
  });
});
