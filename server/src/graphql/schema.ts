import path from 'path';
import { buildSchema } from 'type-graphql';
import mongoose from 'mongoose';
import BookResolver from '../modules/books/BookResolvers';
import DateTimeScalar from '../type-graphql/DateTimeScalar';
import ObjectIdScalar from '../type-graphql/ObjectIdScalar';

const { ObjectId } = mongoose.Schema.Types;

const schema = buildSchema({
  resolvers: [BookResolver],
  emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  scalarsMap: [
    { type: ObjectId, scalar: ObjectIdScalar },
    { type: Date, scalar: DateTimeScalar },
  ],
  validate: false,
});

export default schema;
