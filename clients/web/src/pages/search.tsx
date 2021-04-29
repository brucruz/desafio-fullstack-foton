import { useCallback, useEffect } from 'react';
import { Input } from '../components/Input';
import { HomePageContainer, HomePageContent } from '../styles/pages/HomePage';
import Search from '../assets/icons/search.svg';
import Home from '../assets/icons/home.svg';
import Plus from '../assets/icons/plus.svg';
import User from '../assets/icons/user.svg';
import { BooksCardsList } from '../components/BookCardsList';
import { NavBar } from '../components/NavBar';
import { useSearchBooksLazyQuery } from '../generated/graphql';
import { withApollo } from '../utils/withApollo';
import { Button } from '../components/Button';
import { useSearch } from '../hooks/useSearch';

export function SearchPage(): JSX.Element {
  const { query, changeQuery } = useSearch();

  const [searchBooks, { data, fetchMore, variables }] = useSearchBooksLazyQuery(
    {
      variables: {
        limit: 24,
        query,
      },
      fetchPolicy: 'network-only',
    },
  );

  useEffect(() => {
    if (query.length > 0) {
      searchBooks({
        variables: {
          limit: 24,
          query,
        },
      });
    }
  }, [query, searchBooks]);

  const handleFetchMoreBooks = useCallback(() => {
    data?.books.hasNextPage &&
      fetchMore &&
      fetchMore({
        variables: {
          limit: variables?.limit,
          cursor: data?.books.nextCursor,
          query,
        },
      });
  }, [fetchMore, variables?.limit, query, data?.books]);

  return (
    <HomePageContainer>
      <HomePageContent>
        <Input
          id="search-book-input"
          icon={<Search />}
          value={query}
          placeholder="Search book"
          onChange={e => changeQuery(e.target.value)}
          autoFocus
        />

        {data?.books.books && <BooksCardsList books={data.books.books} />}

        {data?.books.hasNextPage && (
          <div style={{ marginBottom: '80px' }}>
            <Button text="Load more" onClick={handleFetchMoreBooks} />
          </div>
        )}

        {data?.books.books.length === 0 && (
          <p style={{ color: 'red' }}>Books not found</p>
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

export default withApollo({ ssr: false })(SearchPage);
