import React from "react";
import Link from "next/link";
import Layout from '../components/layout';
import styles from '../components/layout.module.scss';

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <h3>Nalle</h3>
            </div>
        </footer>
    );
}