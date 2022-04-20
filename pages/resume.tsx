import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Resume: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fabien Furet resume 🤓</title>
        <meta name="description" content="My detailed resume for recruiters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      </Head>
      <main>
        <h1>Resume</h1>
      </main>
    </div>
  );
};

export default Resume;
