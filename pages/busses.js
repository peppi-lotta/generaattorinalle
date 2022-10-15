import Header from "../components/navbar";
import Head from "next/head";
import Layout from "../components/layout";
import styles from '../components/layout.module.scss';
import BusMap from "../components/BusMap";

export default function Busses() {
    return (
        <Layout>
            <Head>
                <title>Map</title>
            </Head>
            <Header />
            <div className={styles.content}>
                <h1>Bussinalle</h1>
                <BusMap />
            </div>
        </Layout>
    );
}