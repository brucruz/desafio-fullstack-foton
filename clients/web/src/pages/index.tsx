import { ChangeEvent, useCallback } from 'react';
import { Input } from '../components/Input';
import {
  HomePageContainer,
  HomePageContent,
  HomePageHello,
} from '../styles/pages/HomePage';
import Search from '../assets/icons/search.svg';
import Home from '../assets/icons/home.svg';
import Plus from '../assets/icons/plus.svg';
import User from '../assets/icons/user.svg';
import { BooksCardsList } from '../components/BookCardsList';
import { NavBar } from '../components/NavBar';
import { useLoadBooksQuery } from '../generated/graphql';
import { withApollo } from '../utils/withApollo';
import { Button } from '../components/Button';
import { useSearch } from '../hooks/useSearch';

function HomePage(): JSX.Element {
  const { query, changeQuery } = useSearch();

  const { data, fetchMore, variables } = useLoadBooksQuery({
    variables: {
      limit: 24,
    },
  });

  const handleSearchInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      changeQuery(e.target.value);
    },
    [changeQuery],
  );

  const handleFetchMoreBooks = useCallback(() => {
    data?.books.hasNextPage &&
      fetchMore &&
      fetchMore({
        variables: {
          limit: variables?.limit,
          cursor: data?.books.nextCursor,
        },
      });
  }, [
    data?.books.hasNextPage,
    data?.books.nextCursor,
    fetchMore,
    variables?.limit,
  ]);

  return (
    <HomePageContainer>
      <HomePageContent>
        <Input
          id="search-book-input"
          icon={<Search />}
          value={query}
          placeholder="Search book"
          onChange={handleSearchInputChange}
        />

        <HomePageHello>
          <p>
            Hi, <span>Mehmed Al Fatih</span>
            <span>👋</span>
          </p>
        </HomePageHello>

        {data?.books.books && <BooksCardsList books={data.books.books} />}

        {data?.books.hasNextPage && (
          <div style={{ marginBottom: '80px' }}>
            <Button text="Load more" onClick={handleFetchMoreBooks} />
          </div>
        )}
      </HomePageContent>

      <NavBar
        links={[
          {
            text: 'Home',
            icon: Home,
            selected: true,
          },
          {
            text: 'Add Book',
            icon: Plus,
            selected: false,
          },
          {
            text: 'Profile',
            icon: User,
            selected: false,
          },
        ]}
      />
    </HomePageContainer>
  );
}

export default withApollo({ ssr: false })(HomePage);
