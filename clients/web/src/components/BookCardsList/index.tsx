import { BookCard, BookCardProps } from '../BookCard';
import { BookCardsListContainer } from './BookCardList';

export interface BooksCardsListProps {
  books: BookCardProps[];
}

export function BooksCardsList({ books }: BooksCardsListProps): JSX.Element {
  return (
    <BookCardsListContainer>
      {books.map(book => (
        <BookCard key={book._id} {...book} />
      ))}
    </BookCardsListContainer>
  );
}
