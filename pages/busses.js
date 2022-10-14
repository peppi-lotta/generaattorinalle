import Header from "../components/navbar";
import Head from "next/head";
import Layout from "../components/layout";
import styles from '../components/layout.module.scss';
import Map from "../components/Map";

export default function Busses() {
    return (
        <Layout>
            <Head>
                <title>Map</title>
            </Head>
            <Header />
            <div className={styles.content}>
                <h1>Bunssinalle</h1>
                <Map />
            </div>
        </Layout>
    );
}