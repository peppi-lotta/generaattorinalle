import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../components/layout.module.scss';

const NallePart = (props) => (
    <Image
        src={props.imgName}
        height={561}
        width={397}
        alt="Part of teddy"
    />
);

export default function Nalle(props) {
    return (
        <Layout>
            <div className={styles.nalle}>
                <div className={styles.nalle_part}>
                {props.kouno}
                    <NallePart imgName={`/images/1_${props.kuono}.png`} />
                </div>
                <div className={styles.nalle_part}>
                    <NallePart imgName={`/images/2_${props.masu}.png`} />
                </div>
                <div className={styles.nalle_part}>
                    <NallePart imgName={`/images/3_${props.korvat}.png`} />
                </div>
                <div className={styles.nalle_part}>
                    <NallePart imgName={`/images/4_${props.kadet}.png`}  />
                </div>
                <div className={styles.nalle_part}>
                    <NallePart imgName={`/images/5_${props.naama}.png`}  />
                </div>
                <div className={styles.nalle_part}>
                    <NallePart imgName={`/images/6_${props.nena}.png`}  />
                </div>
                <div className={styles.nalle_part}>
                    <NallePart imgName={`/images/7_${props.silmat}.png`}  />
                </div>
            </div>
        </Layout>
    );
}