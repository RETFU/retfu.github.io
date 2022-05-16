import Head from 'next/head';
import Image from 'next/image';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { themeMain, themeSubTitleColor } from '../style/Theme';
import myPicture from '../public/fab.jpeg';
import Link from 'next/link';
import ExternalLink from '../components/ExternalLink';
import theme from 'styled-theming';

const Header = styled.header`
  text-align: center;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const HeaderImage = styled(Image)`
  border-radius: 200px;
`;

const HeaderText = styled.h1`
  font-family: 'Work Sans', sans-serif;
  font-size: 2.5em;
  font-weight: 500;
  color: #35ae77;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const SectionTitle = styled.h2`
  font-family: 'Work Sans', sans-serif;
  font-size: 2em;
  font-weight: 500;
  color: ${themeSubTitleColor};
  border-bottom: 1px solid #ccc;
  padding-top: 80px;
`;

const careerTitleLinkColor = theme('mode', {
  light: '#0a8bfd',
  dark: '#7A0BC0',
});

const CareerTitle = styled.h3`
  font-family: 'Work Sans', sans-serif;
  font-size: 1.5em;
  margin: 0;
  color: ${careerTitleLinkColor};
`;

const CarreerSubTitle = styled.h4`
  font-family: 'Work Sans', sans-serif;
  margin: 0;
  margin-bottom: 30px;
`;

const PersonalInformation = styled.section``;

const Resume = () => {
  return (
    <>
      <Head>
        <title>Fabien Furet resume</title>
        <meta name="description" content="My detailed resume for recruiters" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:site_name" content="Fabien Furet" />
        <meta property="og:title" content="Resume 🤓" />
        <meta
          property="og:description"
          content="My detailed resume for recruiters"
        />
        <meta
          property="og:image"
          content="https://fabienfuret.net/resume/fab.jpeg"
        />
        <meta property="og:url" content="https://fabienfuret.net/resume/" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤓</text></svg>"
        />
      </Head>
      <Header>
        <HeaderImage src={myPicture} width={250} height={250} />
        <HeaderText>Fabien Furet</HeaderText>
        <strong>Quality & performance through simplicity</strong>
      </Header>
      <PersonalInformation>
        39 years old, 👨‍👩‍👦 + 😺 <br />
        Paris area, France 🇫🇷 <br />
        Remote worker 10 years+ 🏡
        <br />
        <ExternalLink variant="normal" href="mailto:fabien.furet@gmail.com">
          fabien.furet@gmail.com
        </ExternalLink>
        <br />
        <ExternalLink variant="normal" href="https://github.com/RETFU">
          Github
        </ExternalLink>{' '}
        -{' '}
        <ExternalLink variant="normal" href="https://twitter.com/RETFU">
          Twitter
        </ExternalLink>{' '}
        (DM open)
      </PersonalInformation>
      <SectionTitle>{"What I'm looking for"}</SectionTitle>
      <section>
        🏡 Full remote position
        <br />
        👨‍💻 Individual Contributor or Squad/Team Manager (hands-on ideally)
        <br />
        💁‍♂️ Frontend and/or Backend
        <br />
        👨‍🦰 Also I could manage/mentor a team or animate/organize a guild/chapter
        <br />
        💰 Gross salary 90K€ - 120K€
        <br />
        <br />
        Depending of the size/organization of the company, something like:
        <br />
        - Senior/Lead Engineer
        <br />
        - Engineer Manager
        <br />- ...
      </section>
      <SectionTitle>Skills</SectionTitle>
      <section>
        🕵️ Problem solver, takes initiative to identify and solve important
        problems <br />
        🤓 Backend / Frontend agnostic <br />
        🤝 Business oriented, I can bridge with stakeholder, sales, clients... &
        the tech team
        <br />
        😸 Require minimal direction/oversight <br />
        👊 Very good communication, positive approach, team work
        <br />
        🇬🇧 Fluent in English <br />
        <br />
        👨‍🔧 Practice <br />
        - Industry standards: test, code review, continuous integration etc...
        <br />
        - Product mindset: discovery, client-centricity, outcomes, effectiveness
        & cross-functionnal teams
        <br />
        - Manage by creating clear, focused and measurable goals for a team,
        improving processes
        <br />
        <br />
        👨‍💻 Tech <br />
        - React & React Native ecosystem
        <br />
        - GCP / Firebase platform
        <br />
        - TypeScript
        <br />
        - Node.js
        <br />-{' '}
        <ExternalLink variant="normal" href="https://phptherightway.com/">
          PHP
        </ExternalLink>
        <br />
        - MySQL
        <br />
        - Redis
        <br />
        - Elasticsearch
        <br />
        - See more details in Career section bellow
        <br />
        <br />
        {/* 👨‍🎓 To be improved
        <br />
        - Docker: CI side ok, never run it in production
        <br />
        - Serverless: GCP Cloud Function only
        <br />
        - IA & data science: a bit of ELK but not more
        <br />
        <br /> */}
        👴 Old
        <br />
        - ActionScript 2 & 3<br />
        - Adobe media server (realtime server)
        <br />
        - Adobe PhoneGap
        <br />- Cordova
        <br />- ASP / Access
      </section>
      <SectionTitle>Career</SectionTitle>
      <section>
        <CareerTitle>IWD</CareerTitle>
        <CarreerSubTitle>CTO & Board member (2006-2021)</CarreerSubTitle>
        <ExternalLink variant="normal" href="https://bit.ly/3Ii44pK">
          IWD
        </ExternalLink>{' '}
        provide a SaaS platform that allow{' '}
        <ExternalLink variant="normal" href="https://bit.ly/3Ifa3M3">
          clients
        </ExternalLink>{' '}
        to manage their merchandising and in-store execution. <br />
        <br />
        “I met Nicolas & Gabriel in a garage, true story, where they showed me
        the POC they already sold to Shiseido. They were looking for their
        future CTO to build it as a SaaS business. I had no experience as CTO
        but I guess my arguments worked and that was the beginning of a long
        journey! Everybody asks me why I stay that long? The company was
        changing every 3-4 years in terms of size, products, practices… it was
        like a new one and I was growing with it”
        <br />
        <br />
        <strong>Achievement</strong>
        <br />
        🚀 Help scale the{' '}
        <ExternalLink variant="normal" href="https://www.iwd.io/about-us">
          company
        </ExternalLink>{' '}
        from 3 to 120+ employees, 30000+ users, 12M$+ revenue
        <br />
        💰 Help raise funding with{' '}
        <ExternalLink variant="normal" href="https://bit.ly/3oibWj5">
          Ardian
        </ExternalLink>{' '}
        <br />
        👨‍🔧 Audit and integrate VR team{' '}
        <ExternalLink variant="normal" href="https://bit.ly/3ElxfWl">
          after the buyout
        </ExternalLink>{' '}
        , during the covid period 😱
        <br />
        💰 Help close deals when tech & automation involved with a prospect
        <br />
        💪{' '}
        <ExternalLink
          variant="normal"
          href="https://github.com/iwonderanddev/jobladder/tree/new-job-ladder#readme"
        >
          Build
        </ExternalLink>
        ,{' '}
        <ExternalLink
          variant="normal"
          href="https://github.com/iwonderanddev/tech-challenges"
        >
          hire
        </ExternalLink>{' '}
        & manage a remote team of 35+ people based in 🇫🇷 🇷🇴 🇺🇸 🇸🇬
        <br />
        👌 Quality as core value: code review, testing, robust CI, automation ={' '}
        {'"one button deploy"'} mindset
        <br />
        👨‍💻 Turnover{' < '}6% = autonomous + quality + sustainable + remote +
        training/mentoring
        <br />
        👨‍🏫 Mentor the{' '}
        <ExternalLink
          variant="normal"
          href="https://github.com/iwonderanddev/jobladder/tree/new-job-ladder#lead-engineer"
        >
          Lead Engineer
        </ExternalLink>{' '}
        to help them guide their own squads
        <br />
        🤓 Still Individual Contributor, code/design/review on a weekly basis
        <br />
        <br />
        <strong>My tech focus for the last years</strong>
        <br />
        On top on my CTO role, I was the{' '}
        <ExternalLink
          variant="normal"
          href="https://github.com/iwonderanddev/jobladder/tree/new-job-ladder#lead-engineer"
        >
          Lead Engineer
        </ExternalLink>{' '}
        of the 📱Mobile team.
        <br />
        Individual Contributor in this team like others Lead Engineers in others
        teams.
        <br />
        Before I was contributing to the Web & API part.
        <br />
        <br />
        <strong>Stack</strong>
        <br />
        - Mobile: TypeScript + React Native (Eslint, Jest, React Testing
        Library, Detox, Redux Toolkit, Styled-component, Formik) - Firebase
        platform: Messaging, Firestore, Cloud Function...
        <br />
        - Web: TypeScript + React (Eslint, Cypress, Jest, React Testing Library,
        React Query, Postcss, Formik)
        <br />
        - 2D editor: TypeScript + React (Jest, Testcafe) + custom rendering
        engine via Canvas
        <br />
        - 3D editor: C# - Unity SDK
        <br />
        - Backend: REST API with PHP (Symfony, PHPUnit, PHPStan) + MySQL + Redis
        + Elasticsearch
        <br />
        - Infrastructure: AWS via Ansible/Terraform
        <br />
        - CDN: AWS CloudFront <br />
        - Monitoring: Nagios - Appoptics - Bugsnag - ELK
        <br />
        - Alerting: Slack - Email
        <br />
        - Security: AWS WAF - Tenable - Qualys
        <br />
      </section>
      <section>
        <br />
        <CareerTitle>Ki Communication</CareerTitle>
        <CarreerSubTitle>Lead developer (2003-2006)</CarreerSubTitle>
        Ki communication was a web agency with a focus on culture & ads.
        <br />
        We were the agency of all Columbia Tristar movies websites: Spiderman,
        Men in Black, PeterPan… For blockbuster we build casual games in Flash
        like isometric games, multiplayer real time {"shoot 'em up"}...
        <br />
        We were managing all the digital ads of Air France with a homemade tool
        that was generating and serving ad banners to brokers like{' '}
        <ExternalLink
          variant="normal"
          href="https://en.wikipedia.org/wiki/DoubleClick"
        >
          Double Click
        </ExternalLink>
        .<br />
        <br />
        <strong>Achievement</strong>
        <br />
        🚀 Grow myself as a team leader in a very intensive and deadline driven
        environment
        <br />
        💪 Build, hire & manage a tech team from 3 to 10+ people
        <br />
        🛠️ Early adoption of web standards and CSS based design
        <br />⚡ Early adoption of{' '}
        <ExternalLink
          variant="normal"
          href="https://en.wikipedia.org/wiki/ActionScript#:~:text=2003%E2%80%932006%3A%20ActionScript%202.0%20The,corresponding%20player%2C%20Flash%20Player%207."
        >
          ActionScript 2
        </ExternalLink>{' '}
        and mentor team on POO practice
        <br />
        <br />
        <strong>Stack</strong>
        <br />
        - Web: XHTML + CSS2 + Javascript
        <br />
        - Mobile: iPhone was release in 2007 😅
        <br />- Games: Flash AS1 - AS2 +{' '}
        <ExternalLink
          variant="normal"
          href="https://en.wikipedia.org/wiki/Adobe_Media_Server"
        >
          Adobe Media Server
        </ExternalLink>{' '}
        <br />
        - Backend: PHP + MYSQL <br />
        - Infrastructure: Bare metal servers with Debian
        <br />
      </section>
      <section>
        <br />
        <CareerTitle>ORSYP</CareerTitle>
        <CarreerSubTitle>Developer (2002-2003)</CarreerSubTitle>
        <ExternalLink
          variant="normal"
          href="https://fr.wikipedia.org/wiki/ORSYP"
        >
          ORSYP
        </ExternalLink>{' '}
        was an old fashion software company that created automation software for
        the industry, pre-cloud area.
        <br />
        I was working on the marketing team to operate the company website and
        intranet in a team of 10 with one senior developer that know nothing
        about web 😆
        <br />
        <br />
        <strong>Achievement</strong>
        <br />
        🚀 Grow myself as a young developer
        <br />
        👨‍💼 Learn how to navigate in a very big corporation
        <br />
        👨‍💻 Train myself as I didn’t have any technical mentor
        <br />
        <br />
        <strong>Stack</strong>
        <br />
        - Web: HTML + CSS + homemade Javascript
        <br />- Backend:{' '}
        <ExternalLink
          variant="normal"
          href="https://en.wikipedia.org/wiki/Active_Server_Pages"
        >
          ASP
        </ExternalLink>{' '}
        +{' '}
        <ExternalLink
          variant="normal"
          href="https://en.wikipedia.org/wiki/Microsoft_Access"
        >
          ACCESS
        </ExternalLink>
        <br />- Infrastructure: Bare metal servers with{' '}
        <ExternalLink
          variant="normal"
          href="https://en.wikipedia.org/wiki/Internet_Information_Services"
        >
          IIS
        </ExternalLink>
      </section>
      <SectionTitle>Community</SectionTitle>
      <section>
        <strong>Talk (🇫🇷 only)</strong>
        <br />- Hire your developers, 10 years feedbacks (2018){' '}
        <ExternalLink
          variant="normal"
          href="https://fabienfuret.net/talk/Recruter-vos-developpeurs/"
        >
          slides
        </ExternalLink>
        <br />- REST in peace, best practices to build a pragmatic and efficient
        REST API (2015){' '}
        <ExternalLink
          variant="normal"
          href="https://fabienfuret.net/talk/REST-in-peace/"
        >
          slides
        </ExternalLink>
        <br />- Standing desk WTF?, feedback after 3 months (2014){' '}
        <ExternalLink
          variant="normal"
          href="https://fabienfuret.net/talk/Standing-desk-WTF/"
        >
          slides
        </ExternalLink>
        <br />
        <br />
        <strong>Opensource</strong>
        <br />
        <ExternalLink variant="normal" href="https://github.com/RETFU/RREST">
          RREST
        </ExternalLink>{' '}
        was a library to enforce REST best practice and improve developer xp by
        managing most of the i/o. <br />
        It allowed the developer to focus on business code and not plumbery, you
        just needed to define the contract via an API Spec (RAML, OpenAPI) and
        create the controller. That’s it.
        <br />
        We used it internally to build the early stage of our API and then we
        internalized the development.
        <br />
        My initial idea was to support this project but I already had enough on
        my plate!
      </section>
      <SectionTitle>Interest</SectionTitle>
      <section>
        👦 Spending time with 👨‍👩‍👦 + 😺
        <br />
        🧐 Tech watch on a daily basis (RSS feeds & Twitter mostly)
        <br />
        🏃 Running and 🎾 playing tennis on a weekly basis
        <br />
        👨‍🌾 Gardening
        <br />
        📚{' '}
        <Link href="/books" passHref>
          <ExternalLink href="/books" variant="normal">
            Books
          </ExternalLink>
        </Link>
        , mainly history and essay books
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

const Root = styled.main`
  ${themeMain};
  font-size: 1.5em;
  max-width: 1200px;
  line-height: 1.7;
`;

Resume.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Root>{page}</Root>
    </>
  );
};

export default Resume;
