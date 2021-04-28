import NextImage from "next/image";

import { BookCardAuthor, BookCardContainer, BookCardTitle } from "./BookCard";

export interface BookCardProps {
  thumbnail: string;
  title: string;
  author: string;
}

export function BookCard({
  thumbnail,
  title,
  author,
}: BookCardProps): JSX.Element {
  return (
    <BookCardContainer>
      <NextImage src={thumbnail} width={105} height={153} />

      <BookCardTitle>{title}</BookCardTitle>
      <BookCardAuthor>by {author}</BookCardAuthor>
    </BookCardContainer>
  );
}
