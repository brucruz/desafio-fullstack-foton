import { InputHTMLAttributes, useRef } from "react";
import { InputContainer, InputTextArea } from "./Input";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  value: string;
  icon?: any;
  format?: "input" | "textArea";
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
  format = "input",
  error,
}: InputProps): JSX.Element {
  const inputRef = useRef(null);

  return (
    <InputContainer>
      {label && <label htmlFor={id}>{label}</label>}

      <InputTextArea label={label} hasError={!!error}>
        {icon && icon}

        {format === "input" && (
          <input
            id={id}
            ref={inputRef}
            value={value}
            placeholder={placeholder}
            type="text"
          />
        )}

        {format === "textArea" && (
          <textarea
            id={id}
            ref={inputRef}
            value={value}
            placeholder={placeholder}
          />
        )}
      </InputTextArea>

      {error?.message && <span>{error.message}</span>}
    </InputContainer>
  );
}
