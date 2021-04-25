import { Field, InputType } from 'type-graphql';

@InputType()
export default class CreateBookInput {
  @Field(() => String, { description: 'Book title' })
  title: string;

  @Field(() => String, { description: 'Book author' })
  author: string;

  @Field(() => String, { description: 'Book description' })
  description: string;

  @Field(() => String, { description: 'Book cover', nullable: true })
  cover?: string;
}
