/* eslint-disable @next/next/no-img-element */
import styles from './index.module.css';

interface Project{
    src: string,
    alt: string
}

export function Project(props: Project){
    return(
    <img src={props.src} className={styles.image} alt={props.alt}></img>
    )
}