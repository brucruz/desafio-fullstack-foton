import { ActionButtonContainer } from "./ActionButton";

export interface ActionButtonProps {
  selected: boolean;
  icon: any;
  text: string;
}

export function ActionButton({
  text,
  icon: Icon,
}: ActionButtonProps): JSX.Element {
  return (
    <ActionButtonContainer>
      <Icon />

      <span>{text}</span>
    </ActionButtonContainer>
  );
}
