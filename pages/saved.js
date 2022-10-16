import Header from "../components/navbar";
import Head from "next/head";
import Layout from "../components/layout";
import styles from '../components/layout.module.scss';
import Saved from "../components/savedBears/saved";
import Footer from "../components/footer";

export default function savedPage() {
    return (
        <Layout>
            <Head>
                <title>Nalleria</title>
            </Head>
            <Header />
            <div className={styles.content}>
                <h1>Nalleria</h1>
                <Saved />
            </div>
            <Footer />
        </Layout>
    );
}