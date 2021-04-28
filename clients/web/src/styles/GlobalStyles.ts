import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'SF Pro Display';
    src: url("/fonts/SF-Pro-Display/SF-Pro-Display-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url("/fonts/SF-Pro-Display/SF-Pro-Display-Semibold.ttf");
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url("/fonts/SF-Pro-Display/SF-Pro-Display-Bold.ttf");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro Text';
    src: url("/fonts/SF-Pro-Text/SF-Pro-Text-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  :root {
    --font-pro-display: 'SF Pro Display';
    --font-pro-text: 'SF Pro Text';
    --font-roboto: 'Roboto';
  }

  html {
    font-size: 14px;
    line-height: 1.339rem;
    letter-spacing: 0.2px;
  
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    body {
    background: #F2F2F2;
    -webkit-font-smoothing: antialiased;

    font-family: var(--font-pro-display);
    }

    a {
      text-decoration: none;
    }

    button {
      cursor: pointer;
      border: 0;
      background-color: transparent;

      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`;
