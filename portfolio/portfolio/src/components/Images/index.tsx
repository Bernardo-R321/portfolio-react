import styles from './index.module.css';

interface Images{
    src: string;
    alt: string;

}

export function Images(prop: Images){
    <img className={styles.image} src={prop.src} alt={prop.alt}></img>
}