// eslint-disable-next-line no-use-before-define
import React from 'react';
import { SearchProvider } from './useSearch';
import { SnackbarProvider } from './useSnackbar';

const AppProvider: React.FC = ({ children }) => (
  <SearchProvider>
    <SnackbarProvider>{children}</SnackbarProvider>
  </SearchProvider>
);

export default AppProvider;
