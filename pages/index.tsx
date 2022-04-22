import Head from 'next/head';
import Link from 'next/link';
import { ReactElement } from 'react';
import styled from 'styled-components';
import AccessibilityPanel from '../components/AccessibilityPanel';
import ExternalLink from '../components/ExternalLink';
import Tag, { Tag as TagType } from '../components/Tag';
import {
  themeHeaderColor,
  themeLink,
  themeMain,
  themeSubTitleColor,
} from '../style/Theme';

const Header = styled.h1`
  font-family: 'Work Sans', sans-serif;
  font-size: 3.3em;
  color: ${themeHeaderColor};
  margin-bottom: 50px;
  font-weight: 500;
`;

const Aka = styled.span`
  font-size: 0.3em;
`;

const Opportunity = styled.h2`
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  font-size: 1.5em;
  margin-top: 20px;
  margin-bottom: 0px;
  background-color: #fdb00a;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  margin-bottom: 50px;
  color: aliceblue;
`;

const SubTitle = styled.h2`
  font-family: 'Work Sans', sans-serif;
  font-size: 2.3em;
  margin-top: 40px;
  margin-bottom: 0px;
  color: ${themeSubTitleColor};
  font-weight: 500;
`;

const tags: TagType[] = [
  { name: 'PHP', level: 5 },
  { name: 'leadership', level: 5 },
  { name: 'cocoapods', level: 4 },
  { name: 'xcode', level: 4 },
  { name: 'jest', level: 5 },
  { name: 'css', level: 5 },
  { name: 'rest api', level: 5 },
  { name: 'javascript', level: 5 },
  { name: 'as3', level: 5 },
  { name: 'react native', level: 5 },
  { name: 'python', level: 1 },
  { name: 'react testing library', level: 5 },
  { name: 'serverless', level: 2 },
  { name: 'service worker', level: 3 },
  { name: 'consistency', level: 4 },
  { name: 'solid', level: 5 },
  { name: 'docker', level: 2 },
  { name: 'apache', level: 3 },
  { name: 'mentoring', level: 5 },
  { name: 'mysql', level: 4 },
  { name: 'android studio', level: 4 },
  { name: 'loose coupling', level: 5 },
  { name: 'json schema', level: 4 },
  { name: 'http', level: 4 },
  { name: 'html5', level: 5 },
  { name: 'typescript', level: 5 },
  { name: 'nginx', level: 3 },
  { name: 'maintainability', level: 5 },
  { name: 'redis', level: 4 },
  { name: 'dependency injection', level: 5 },
  { name: 'management', level: 5 },
  { name: 'react', level: 5 },
  { name: 'detox', level: 5 },
  { name: 'firebase platform', level: 5 },
  { name: 'webpack', level: 3 },
  { name: 'gradle', level: 3 },
  { name: 'unit test', level: 5 },
  { name: 'raml', level: 4 },
  { name: 'openapi', level: 3 },
  { name: 'hiring', level: 5 },
  { name: 'nodejs', level: 5 },
  { name: 'interface', level: 5 },
  { name: 'saml sso', level: 4 },
  { name: 'contract', level: 5 },
  { name: 'redux', level: 5 },
  { name: 'continuous integration', level: 5 },
  { name: 'gitlab ci', level: 5 },
  { name: 'code review', level: 5 },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Fabien Furet</title>
        <meta name="description" content="Personal website" />
      </Head>
      <AccessibilityPanel />
      <Header itemScope itemType="http://data-vocabulary.org/Person">
        <span itemProp="name">Fabien Furet</span>{' '}
        <Aka itemProp="alternateName">aka RETFU</Aka>
      </Header>
      <Opportunity>
        Looking for a new opportunity
        <br />
        DM me on{' '}
        <ExternalLink href="https://twitter.com/RETFU" variant="normal">
          Twitter
        </ExternalLink>{' '}
        for my resume
      </Opportunity>
      <section>
        <SubTitle>Skills 🚀</SubTitle>
        <p>
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </p>
      </section>
      <section>
        <SubTitle>Talk 🙅‍♂️</SubTitle>
        <p>
          <strong>Hire your developers</strong> (2018){' '}
          <ExternalLink
            href="http://fabienfuret.net/talk/Recruter-vos-developpeurs"
            variant="normal"
          >
            slides
          </ExternalLink>
          <br />
          10 years feedbacks
          <br />
          <br />
          <strong>REST in peace</strong> (2015){' '}
          <ExternalLink
            href="http://fabienfuret.net/talk/REST-in-peace"
            variant="normal"
          >
            slides
          </ExternalLink>
          <br />
          Best practices to build a pragmatic and efficient REST API
          <br />
          <br />
          <strong>Standing desk WTF?</strong> (2014){' '}
          <ExternalLink
            href="http://fabienfuret.net/talk/Standing-desk-WTF"
            variant="normal"
          >
            slides
          </ExternalLink>
          <br />
          Feedback after 3 months
        </p>
      </section>
    </>
  );
};

const Root = styled.main`
  ${themeMain}
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

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Root>{page}</Root>
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

export default Home;
