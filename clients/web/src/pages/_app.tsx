import { AppProps } from "next/dist/next-server/lib/router/router";
import GlobalStyles from "../styles/GlobalStyles";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
