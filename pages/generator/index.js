import Head from 'next/head';
import Layout from '../../components/layout';
import styles from '../../components/layout.module.scss';
import Header from '../../components/navbar';
import Generator from './generator';
import Footer from '../../components/footer';

export default function GeneratorPage() {

    return (
        <Layout>
            <Head>
                <title>Generator</title>
            </Head>
            <Header />
            <div className={styles.content}>
                <h1>Generaattori</h1>
                <Generator />
            </div>
            <Footer />
        </Layout>
    );
}