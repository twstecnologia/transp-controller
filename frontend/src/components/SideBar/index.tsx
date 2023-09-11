'use client'

import styles from '@/styles/components/asidebar.module.css'
import Link from 'next/link'

export default function SideBar(){

    return (
        <aside className={styles.cardMain}>
        <div className={styles.logo}>
            <h1>Transp Controller</h1>
            <h2>Foto</h2>
        </div>

        <div className={styles.cardList}>
            <Link className={styles.linkList} href='/home'>
                <p>Home</p>
            </Link>

            <Link className={styles.linkList} href='/rotas'>
                <p>Rotas</p>
            </Link>

            <Link  className={styles.linkList} href='/home'>
                <p>Motoristas</p>
            </Link>

            <Link className={styles.linkList} href='/home'>
                <p>Usuários</p>
            </Link>

        </div>
        <footer >
            <strong>sair</strong>
        </footer>
    </aside>
    )
}