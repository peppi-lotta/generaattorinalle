import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../components/layout.module.scss';
import NalleFace from './nalleFace';

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
                    <NallePart imgName={`/images/2_${props.masu}.png`} />
                </div>
                <div className={styles.nalle_part}>
                    <NallePart imgName={`/images/4_${props.kadet}.png`} />
                </div>
                <NalleFace kuono={props.kuono} korvat={props.korvat} naama={props.naama} nena={props.nena} silmat={props.silmat} />
            </div>
        </Layout>
    );
}