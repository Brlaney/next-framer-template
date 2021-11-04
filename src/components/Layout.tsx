import Head from 'next/head';
import Navbar from './Navbar';
import styles from '@/styles/components/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content='Calculus, Trig, unit circle, functions' />
        <meta name='description' content='Unit circle' />
        <link rel='icon' type='image/png' href='/favicon/mtrx-favicon.png' />
        <title>Unit Circle</title>
      </Head>
      <Navbar />
      {/* <Nav />  */}
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
};

export default Layout;
