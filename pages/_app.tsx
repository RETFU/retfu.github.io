import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { ReactElement } from 'react';
import styled, {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components';
import { themeLink, themePageBackgroundColor } from '../style/Theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color:${themePageBackgroundColor};
    transition: all 0.50s linear;
  }
`;

const Root = styled.main`
  font-family: 'Work Sans', sans-serif;
  line-height: 1.5;
  color: #173753;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  padding-left: 1em;
  padding-right: 1em;
  font-size: 1.5em;
`;

const Footer = styled.footer`
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  padding: 1em;
  font-size: 1em;
`;

const StyledLink = styled.a`
  font-family: 'Work Sans', sans-serif;
  font-size: 1em;
  ${themeLink}
`;

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Root>{children}</Root>
      <Footer>
        <Link href="/books" passHref>
          <StyledLink href="/books" variant="footer">
            Livres
          </StyledLink>
        </Link>
        {' - '}
        <StyledLink href="https://github.com/RETFU" variant="footer">
          Github
        </StyledLink>
        {' - '}
        <StyledLink href="https://twitter.com/RETFU" variant="footer">
          Twitter
        </StyledLink>
        {' - '}
        <StyledLink
          href="https://fr.linkedin.com/in/fabienfuret"
          variant="footer"
        >
          Linkedin
        </StyledLink>
      </Footer>
    </>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <ThemeProvider theme={{ mode: 'light' }}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
