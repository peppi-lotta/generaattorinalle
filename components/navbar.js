import React from "react";
import Link from "next/link";
import Layout from '../components/layout';
import styles from '../components/layout.module.scss';

export default function Header() {
    const navLinks = [
        {
            name: "Etusivu",
            path: "/"
        },
        {
            name: "Generaattori",
            path: "/generator",
        },
        {
            name: "Nalleria",
            path: "/saved",
        },
        {
            name: "Junanalle",
            path: "/trains",
        },
        {
            name: "Bussinalle",
            path: "/busses",
        },
    ];
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h3>Nalle</h3>
            </div>
            <nav className={styles.navigation}>
                {navLinks.map((link, index) => {
                    return (
                        <div className={styles.menuItems}>
                            <Link href={link.path}>
                                <li key={index}>{link.name}</li>
                            </Link>
                        </div>
                    );
                })}
            </nav>
        </header>
    );
}