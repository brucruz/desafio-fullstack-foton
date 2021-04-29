import { animated } from 'react-spring';
import styled from 'styled-components';

export const SnackbarWrapper = styled(animated.div)`
  background-color: #323232;
  color: #fff;

  font-family: var(--font-pro-text);
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.2px;

  padding: 24px 20px;
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    margin-left: 20px;

    h4 {
      color: #b98e0c;
      text-transform: uppercase;
    }
  }

  & + div {
    margin-top: 8px;
  }
`;
