/* eslint-disable import/no-cycle */
import { useTransition } from 'react-spring';
import { Snackbar } from '../Snackbar';
import { SnackbarMessage } from '../../hooks/useSnackbar';
import { SnackbarContainerWrapper } from './SnackbarContainer';

export interface SnackbarContainerProps {
  messages: SnackbarMessage[];
}

export function SnackbarContainer({
  messages,
}: SnackbarContainerProps): JSX.Element {
  const messageWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { transform: 'translateY(100px)', opacity: 0 },
      enter: { transform: 'translateY(0px)', opacity: 1 },
      leave: { transform: 'translateY(100px)', opacity: 0 },
    },
  );

  return (
    <SnackbarContainerWrapper>
      {messageWithTransitions.map(({ item, key, props }) => (
        <Snackbar key={key} message={item} style={props} />
      ))}
    </SnackbarContainerWrapper>
  );
}
