/* eslint-disable import/no-cycle */
import { createContext, ReactNode, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import { SnackbarContainer } from '../components/SnackbarContainer';

export interface SnackbarMessage {
  id: string;
  message: string;
  action?: {
    text: string;
    onClick: () => void;
  };
}

interface SnackbarContextData {
  // eslint-disable-next-line no-unused-vars
  addSnackbar(message: Omit<SnackbarMessage, 'id'>): void;
  // eslint-disable-next-line no-unused-vars
  removeSnackbar(id: string): void;
}

interface SnackbarProviderProps {
  children: ReactNode;
}

const SnackbarContext = createContext<SnackbarContextData>(
  {} as SnackbarContextData,
);

export function SnackbarProvider({
  children,
}: SnackbarProviderProps): JSX.Element {
  const [messages, setMessages] = useState<SnackbarMessage[]>([]);

  function addSnackbar({ message, action }: Omit<SnackbarMessage, 'id'>): void {
    const id = uuid();

    const snackbar = {
      id,
      message,
      action,
    };

    setMessages(oldMessages => [...oldMessages, snackbar]);
  }

  function removeSnackbar(id: string): void {
    setMessages(state => state.filter(message => message.id !== id));
  }

  return (
    <SnackbarContext.Provider value={{ addSnackbar, removeSnackbar }}>
      {children}

      <SnackbarContainer messages={messages} />
    </SnackbarContext.Provider>
  );
}

export function useSnackbar(): SnackbarContextData {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }

  return context;
}
