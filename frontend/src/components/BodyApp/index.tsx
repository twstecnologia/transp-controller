import styles from '@/styles/components/bodyApp.module.css'
import React from 'react'

export default function BodyApp({children}: { children: React.ReactNode}) {
    return(
        <main className={styles.BodyApp}>
            {children}
        </main>
    )
}