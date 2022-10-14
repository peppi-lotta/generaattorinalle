import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Header from '../public/navbar';

<Head>
  <title>Pepin projekti</title>
  <link rel="icon" href="/favicon.ico" />
</Head>

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  )
}
