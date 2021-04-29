/* eslint-disable import/no-cycle */
import { useRouter } from 'next/dist/client/router';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

interface SearchContextData {
  // eslint-disable-next-line no-unused-vars
  changeQuery(newQuery: string): void;
  query: string;
}

interface SearchProviderProps {
  children: ReactNode;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData);

export function SearchProvider({ children }: SearchProviderProps): JSX.Element {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const changeQuery = useCallback(
    (newQuery: string) => {
      setQuery(newQuery);

      if (newQuery !== '' && router.pathname !== '/search') {
        router.push(`/search`);
      }
    },
    [router],
  );

  return (
    <SearchContext.Provider value={{ changeQuery, query }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch(): SearchContextData {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return context;
}
