import Head from 'next/head';
import Navbar from './Navbar';
import styles from '@/styles/components/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content='NextJs, Next, React, ReactJs, Typescript, Scss, Sass, Framer-motion, animations, UiKit' />
        <meta name='description' content='A nextJs, Framer, Typescript, + Scss template web application ready to clone and go!' />
        <link rel='icon' type='image/png' href='/favicon.png' />
        <title>NextJs | Framer</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
};

export default Layout;
