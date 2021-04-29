/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/ban-types */
import { useEffect } from 'react';
import { SnackbarMessage, useSnackbar } from '../../hooks/useSnackbar';
import { SnackbarWrapper } from './Snackbar';

export interface SnackbarProps {
  message: SnackbarMessage;
  style: object;
}

export function Snackbar({ message, style }: SnackbarProps): JSX.Element {
  const { removeSnackbar } = useSnackbar();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeSnackbar(message.id);
    }, (message.message.length / 33) * 1000 + 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message, removeSnackbar]);

  return (
    <SnackbarWrapper style={style}>
      {message.message}

      {message.action && (
        <button type="button">
          <h4>{message.action.text}</h4>
        </button>
      )}
    </SnackbarWrapper>
  );
}
