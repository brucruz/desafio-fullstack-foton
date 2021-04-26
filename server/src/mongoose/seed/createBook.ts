import BookModel from '../../modules/books/BookModel';
import { IBook } from '../../modules/books/IBook';

export const createBook = async (
  args: Pick<IBook, 'title' | 'subtitle' | 'author' | 'cover' | 'description'>,
) => {
  const book = new BookModel(args);

  await book.save();

  return book;
};
