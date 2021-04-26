import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';
import DateTimeScalar from '../../type-graphql/DateTimeScalar';
import ObjectIdScalar from '../../type-graphql/ObjectIdScalar';

@ObjectType({ description: 'Books model' })
export default class Book {
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field(() => String, { description: `Book's title` })
  title: string;

  @Field(() => String, { description: `Book's subtitle`, nullable: true })
  subtitle?: string;

  @Field(() => String, { description: `Book's author` })
  author: string;

  @Field(() => String, { description: `Book's description` })
  description: string;

  @Field(() => String, { description: `Book's cover image`, nullable: true })
  cover?: string;

  _doc?: any;

  @Field(() => Boolean)
  isActive: boolean;

  @Field(() => DateTimeScalar, { nullable: true })
  removedAt?: Date;

  @Field(() => DateTimeScalar, { description: 'Card creation date' })
  createdAt: Date;

  @Field(() => DateTimeScalar, {
    description: 'Card last update date',
    nullable: true,
  })
  updatedAt: Date;
}
