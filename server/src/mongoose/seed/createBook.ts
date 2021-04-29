import BookModel from '../../modules/books/BookModel';
import { IBook } from '../../modules/books/IBook';

function getRandomInt(min: number, max: number): number {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + min;
}

export const startCounters = (): void => {
  global.__COUNTERS__ = {
    books: 0,
  };
};

export const restartCounters = (): void => {
  global.__COUNTERS__ = Object.keys(global.__COUNTERS__).reduce(
    (prev, curr) => ({ ...prev, [curr]: 0 }),
    // eslint-disable-next-line no-undef
    {} as NodeJS.Counters,
  );
};

export const createBook = async (
  args: Pick<IBook, 'title' | 'subtitle' | 'author' | 'cover' | 'description'>,
  randomOrder: boolean | undefined = true,
) => {
  // eslint-disable-next-line no-multi-assign
  const n = global.__COUNTERS__ && (global.__COUNTERS__.books += 1);

  const createdAt = randomOrder
    ? new Date(
        2020,
        getRandomInt(1, 10),
        getRandomInt(1, 28),
        getRandomInt(1, 22),
        getRandomInt(1, 30),
      )
    : new Date(2020, 1, n);

  const book = new BookModel({
    ...args,
    createdAt,
  });

  await book.save();

  return book;
};
