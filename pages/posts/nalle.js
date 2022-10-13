import Image from 'next/image';
import Layout from '../../components/layout';
import styles from '../../components/layout.module.css';

const NallePart = (props) => (
    <Image
        src={props.imgName}
        height={561}
        width={397}
        alt="Part of teddy"
    />
);

export default function Nalle() {
    return (
        <Layout>
            <div className={styles.nalle}>
                <div className={styles.nalle_part}>
                    <NallePart imgName="/images/1_3.png" />
                </div>
                <div className={styles.nalle_part}>
                    <NallePart imgName="/images/2_1.png" />
                </div>
                <div className={styles.nalle_part}>
                    <NallePart imgName="/images/3_3.png" />
                </div>
                <div className={styles.nalle_part}>
                    <NallePart imgName="/images/4_3.png" />
                </div>
                <div className={styles.nalle_part}>
                    <NallePart imgName="/images/5_3.png" />
                </div>
                <div className={styles.nalle_part}>
                    <NallePart imgName="/images/6_1.png" />
                </div>
                <div className={styles.nalle_part}>
                    <NallePart imgName="/images/7_4.png" />
                </div>
            </div>
        </Layout>
    );
}