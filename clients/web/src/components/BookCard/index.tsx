import NextImage from 'next/image';

import { BookCardAuthor, BookCardContainer, BookCardTitle } from './BookCard';

export interface BookCardProps {
  _id: string;
  cover?: string | null;
  title: string;
  author: string;
}

export function BookCard({ cover, title, author }: BookCardProps): JSX.Element {
  return (
    <BookCardContainer>
      {cover && <NextImage src={cover} width={105} height={153} />}

      <BookCardTitle>{title}</BookCardTitle>
      <BookCardAuthor>by {author}</BookCardAuthor>
    </BookCardContainer>
  );
}
