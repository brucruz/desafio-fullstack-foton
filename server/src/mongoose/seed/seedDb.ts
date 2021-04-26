import { initialBooks } from '../initialLoad';
import { createBook } from './createBook';

export async function seedDb() {
  console.log('Started seeding database');

  const insertedBooks = initialBooks.map(async book => {
    const insertedBook = await createBook(book);

    return insertedBook;
  });

  const books = await Promise.all(insertedBooks);

  console.log(`Inserted ${books.length} books to the database`);

  console.log('Seeding ended');
}
