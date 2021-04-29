import { AppProps } from 'next/app';
// import {  } from '@apollo/client';
import GlobalStyles from '../styles/GlobalStyles';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
