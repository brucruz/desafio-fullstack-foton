import styled from "styled-components";

export const InputContainer = styled.div`
  label {
    font-family: var(--font-pro-text);
    font-size: 16px;
    line-height: 18px;
    color: #000000;

    display: block;
    padding-bottom: 10px;
  }

  span {
    display: block;
    color: red;
    margin-top: 5px;
    margin-left: 15px;
  }
`;

interface InputTextAreaProps {
  label?: string;
  hasError: boolean;
}

export const InputTextArea = styled.div<InputTextAreaProps>`
  padding: 15px;
  border-radius: 10px;
  background: #fdfcfc;
  box-shadow: ${(props) =>
    props.label
      ? "5px 5px 80px 0px rgba(212, 173, 134, 0.49)"
      : "5px 5px 80px 0px rgba(212, 173, 134, 0.122623)"};

  border: ${(props) => (props.hasError ? "1px solid red" : null)};

  input {
    border: 0px;

    font-family: var(--font-pro-text);
    font-size: 16px;
    line-height: 18px;

    color: #000000;

    &::placeholder {
      color: #54565a;
    }
  }

  textarea {
    border: 0px;
    height: 228px;
    width: 100%;
    outline: none;
    resize: none;

    font-family: var(--font-pro-text);
    font-size: 16px;
    line-height: 18px;

    color: #000000;

    &::placeholder {
      color: #54565a;
    }
  }

  svg {
    margin-right: 10px;
  }
`;
