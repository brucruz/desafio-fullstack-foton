import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import BookModel from './BookModel';
import Book from './BookType';
import { IBook } from './IBook';
import CreateBookInput from './inputs/CreateBookInput';
import PaginatedBooks from './PaginatedBooks';

@Resolver(() => Book)
export default class BookResolver {
  @Mutation(() => Book)
  async createBook(
    @Arg('data', () => CreateBookInput)
    { author, cover, description, subtitle, title }: CreateBookInput,
  ): Promise<IBook> {
    const book = new BookModel({
      author,
      cover,
      description,
      subtitle,
      title,
    });

    await book.save();

    return book;
  }

  @Query(() => PaginatedBooks)
  async books(
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: Date | null,
    @Arg('query', () => String, { nullable: true }) query: string | null,
  ): Promise<PaginatedBooks> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;

    const cursorFilter = {
      ...(cursor
        ? {
            createdAt: {
              $lt: cursor,
            },
          }
        : {}),
    };

    const queryFilter = {
      ...(query
        ? {
            title: {
              $regex: query,
              $options: 'i',
            },
          }
        : {}),
    };

    const books = await BookModel.find({ ...cursorFilter, ...queryFilter })
      .sort({ createdAt: 'desc' })
      .limit(realLimitPlusOne);

    const hasNextPage = books.length === realLimitPlusOne;

    const nextCursor = hasNextPage
      ? books[books.length - 1].createdAt.toISOString()
      : undefined;

    return {
      books: books.slice(0, realLimit),
      hasNextPage,
      nextCursor,
    };
  }
}
