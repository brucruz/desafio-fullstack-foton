import { buildSchema } from "type-graphql";
import BookResolver from "../modules/books/BookResolvers";

const schema = buildSchema({
  resolvers: [
    BookResolver,
  ]
});

export default schema;
