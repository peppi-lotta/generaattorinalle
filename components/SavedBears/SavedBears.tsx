import Nalle from '../nalle';
import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import styles from '../../components/layout.module.scss';

interface Bear {
    name: string;
    face: any;
    body: any;
}

interface Bears {
    [id: string]: Omit<Bear, 'id'> & { id?: string };
}

export const SavedBears = () => {
    const [bearData, setBearData] = useState<Bear[]>([]);

    useEffect(() => {
        async function getBears() {
            const res = await fetch('data.json');
            const data = await res.json();
            const bears: Bears = data;

            const bearDataList = Object.entries(bears).map(([name, bear]) => ({ name, ...bear }));
            setBearData(bearDataList);
        }
        
        getBears();
    });


    return (
        <><Layout>
            <div className={styles.all_gallery_bears}>
                {bearData.map((bear) => (
                    <div className={styles.bear}>
                        <p>{bear.name}</p>
                        <Nalle masu={bear.body.masu} kadet={bear.body.kadet} kuono={bear.face.kuono} korvat={bear.face.korvat} naama={bear.face.naama} nena={bear.face.nena} silmat={bear.face.silmat} />
                    </div>
                ))}
            </div>
        </Layout>
        </>
    );
}