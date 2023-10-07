/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './index.module.css'

export function ButtonHome(){
    return (
    <div className={styles.externalLink}> 
        <Link className={styles.link} href={'/'}>Voltar</Link>
    </div>)
}