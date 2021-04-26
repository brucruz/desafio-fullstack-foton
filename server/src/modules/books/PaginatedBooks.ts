import { Field, ObjectType } from 'type-graphql';
import Book from './BookType';
import { IBook } from './IBook';

@ObjectType()
export default class PaginatedBooks {
  @Field(() => [Book])
  books: IBook[];

  @Field()
  hasNextPage: boolean;

  @Field(() => String, { nullable: true })
  nextCursor?: string;
}
