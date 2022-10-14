import Header from "../components/navbar";
import Head from "next/head";
import Layout from "../components/layout";
import styles from '../components/layout.module.scss';

export default function Trains() {
    return (
        <Layout>
            <Head>
                <title>Map</title>
            </Head>
            <Header />
            <div className={styles.content}>
                <h1>Junanalle</h1>
            </div>
        </Layout>
    );
}