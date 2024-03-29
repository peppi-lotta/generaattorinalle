import Nalle from '../nalle';
import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import styles from '../../components/layout.module.scss';

interface Bear {
    name: string;
    kuono: number;
    masu: number;
    kadet: number;
    korvat: number;
    naama: number;
    nena: number;
    silmat: number;
}

interface Bears {
    [id: string]: Omit<Bear, 'id'> & { id?: string };
}

export const SavedBears = () => {
    const [bearData, setBearData] = useState<Bear[]>([]);

    useEffect(() => {
        async function getBears() {
            const res = await fetch('http://localhost:3001/bears');
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
                        <Nalle masu={bear.masu} kadet={bear.kadet} kuono={bear.kuono} korvat={bear.korvat} naama={bear.naama} nena={bear.nena} silmat={bear.silmat} />
                    </div>
                ))}
            </div>
        </Layout>
        </>
    );
}