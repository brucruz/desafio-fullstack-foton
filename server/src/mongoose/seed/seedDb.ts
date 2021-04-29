import { initialBooks } from '../initialLoad';
import { createBook } from './createBook';

export async function seedDb(
  maxData?: number,
  randomOrder: boolean | undefined = true,
) {
  console.log('Started seeding database');

  const realMaxData = randomOrder && maxData ? Math.max(28, maxData) : maxData;

  const selectedBooks = realMaxData
    ? initialBooks.splice(0, realMaxData)
    : initialBooks;

  const insertedBooks = selectedBooks.map(async book => {
    const insertedBook = await createBook(book, randomOrder);

    return insertedBook;
  });

  const books = await Promise.all(insertedBooks);

  console.log(`Inserted ${books.length} books to the database`);

  console.log('Seeding ended');
}
