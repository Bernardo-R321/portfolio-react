/* eslint-disable @next/next/no-img-element */
import styles from './index.module.css'

export function Profile(){
    return (
    <div className={styles.profile}> 

        <img src='https://github.com/Bernardo-R321.png' alt='Foto de Bernardo Ruschel' className={styles.avatar}></img>
        <h1 className={styles.name}>Bernardo Ruschel</h1>

    </div>)
}