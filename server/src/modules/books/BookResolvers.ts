import { Query, Resolver } from "type-graphql";
import Book from "./BookType";

@Resolver(() => Book)
export default class BookResolver {
  @Query(() => String)
  hello(): string {
    return 'hello'
  }
}