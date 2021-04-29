import NextImage from 'next/image';
import NextLink from 'next/link';

import { BookCardAuthor, BookCardContainer, BookCardTitle } from './BookCard';

export interface BookCardProps {
  _id: string;
  cover?: string | null;
  title: string;
  author: string;
}

export function BookCard({
  _id,
  cover,
  title,
  author,
}: BookCardProps): JSX.Element {
  return (
    <NextLink href={`/book/${_id}`}>
      <BookCardContainer>
        {cover && <NextImage src={cover} width={105} height={153} />}

        <BookCardTitle>{title}</BookCardTitle>
        <BookCardAuthor>by {author}</BookCardAuthor>
      </BookCardContainer>
    </NextLink>
  );
}
