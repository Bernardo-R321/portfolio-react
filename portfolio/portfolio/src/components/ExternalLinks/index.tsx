/* eslint-disable @next/next/no-img-element */
import styles from './index.module.css'

interface ExternalLinkProps{
    link: string;
    texto: string;
}

export function ExternalLink(props: ExternalLinkProps){
    return (
    <div className={styles.externalLink}> 
        <a className={styles.link} href={props.link} target= "_blank">{props.texto}</a>
    </div>)
}