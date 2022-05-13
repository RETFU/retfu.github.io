import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import AccessibilityPanel from '../components/AccessibilityPanel';
import { GlobalStyle } from '../style/Theme';
import useThemeMode from '../style/useThemeMode';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  const { themeMode, themeToggle } = useThemeMode();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <AccessibilityPanel onChange={themeToggle} themeMode={themeMode} />
      <ThemeProvider theme={{ mode: themeMode }}>
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
};

export default App;
