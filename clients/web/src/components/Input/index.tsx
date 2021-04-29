/* eslint-disable jsx-a11y/no-autofocus */
import { InputHTMLAttributes } from 'react';
import { InputContainer, InputTextArea } from './Input';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  value: string;
  icon?: any;
  format?: 'input' | 'textArea';
  error?: {
    message?: string;
  };
}

export function Input({
  id,
  label,
  value,
  placeholder,
  icon,
  format = 'input',
  error,
  autoFocus,
  defaultValue,
  ...rest
}: InputProps): JSX.Element {
  return (
    <InputContainer {...rest}>
      {label && <label htmlFor={id}>{label}</label>}

      <InputTextArea label={label} hasError={!!error}>
        {icon && icon}

        {format === 'input' && (
          <input
            id={id}
            value={value}
            placeholder={placeholder}
            type="text"
            autoFocus={autoFocus}
            defaultValue={defaultValue}
          />
        )}

        {format === 'textArea' && (
          <textarea
            id={id}
            value={value}
            placeholder={placeholder}
            autoFocus={autoFocus}
            defaultValue={defaultValue}
          />
        )}
      </InputTextArea>

      {error?.message && <span>{error.message}</span>}
    </InputContainer>
  );
}
