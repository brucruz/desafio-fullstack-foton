import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer, ButtonText } from './Button';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({ text, type, ...rest }: ButtonProps): JSX.Element {
  return (
    // eslint-disable-next-line react/button-has-type
    <ButtonContainer type={type || 'button'} {...rest}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}
