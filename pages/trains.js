import Header from "../components/navbar";
import Head from "next/head";
import Layout from "../components/layout";
import styles from '../components/layout.module.scss';
import TrainMap from "../components/TrainMap";
import Footer from "../components/footer";

export default function Trains() {
    const interval = setInterval(() => {
        //console.log(fetch());
      }, 5000);
    return (
        <Layout>
            <Head>
                <title>Map</title>
            </Head>
            <Header />
            <div className={styles.content}>
                <h1>Junanalle</h1>
                <TrainMap />
            </div>
            <Footer />
        </Layout>
    );
}