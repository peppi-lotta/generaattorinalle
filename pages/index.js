import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

<Head>
  <title>Pepin projekti</title>
  <link rel="icon" href="/favicon.ico" />
</Head>

export default function Home() {
  return (
    
    <div className={styles.container}>
      <h1 className="title">
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
    </div>
  )
}
