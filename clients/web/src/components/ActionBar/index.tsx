import { ActionButton, ActionButtonProps } from '../ActionButton';
import { ActionBarContainer } from './ActionBar';

export interface ActionBarProps {
  buttons: ActionButtonProps[];
}

export function ActionBar({ buttons }: ActionBarProps): JSX.Element {
  return (
    <ActionBarContainer>
      {buttons.map(button => (
        <ActionButton {...button} />
      ))}
    </ActionBarContainer>
  );
}
