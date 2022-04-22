import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { themePageBackgroundColor } from '../style/Theme';
import useDarkMode from '../style/useDarkMode';

const GlobalStyle = createGlobalStyle`
  body {
    background-color:${themePageBackgroundColor};
    transition: all 0.50s linear;
  }
`;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  const darkMode = useDarkMode();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <ThemeProvider theme={{ mode: darkMode.mode }}>
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
};

export default App;
