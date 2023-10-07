import styles from './index.module.css'
import { FaArrowUp } from 'react-icons/fa';

interface ButtonVoltar{
    texto: string,
    link: string,
}

export function ButtonVoltar(props: ButtonVoltar){
    return(
    <div className={styles.externalLink}>
        <a className={styles.link} href={props.link}>{props.texto}   <FaArrowUp/></a>
        
    </div>
    )
}