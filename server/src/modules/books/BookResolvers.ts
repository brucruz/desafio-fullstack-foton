import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import BookModel from './BookModel';
import Book from './BookType';
import { IBook } from './IBook';
import CreateBookInput from './inputs/CreateBookInput';

@Resolver(() => Book)
export default class BookResolver {
  @Mutation(() => Book)
  async createBook(
    @Arg('data', () => CreateBookInput)
    { author, description, title, cover }: CreateBookInput,
  ): Promise<IBook> {
    const book = new BookModel({
      author,
      cover,
      description,
      title,
    });

    await book.save();

    return book;
  }

  @Query(() => String)
  hello(): string {
    return 'hello';
  }
}
