import styles from './index.module.css'

interface ExperienceProps{
    cargo: string;
    ano: string;
    empresa: string;
}

export function Experience(props: ExperienceProps){
    return(
        <div className={styles.experience}>
            <div className={styles.header}>
                <h3>{props.cargo}</h3>
                <span>{props.ano}</span>
            </div>
            <span>{props.empresa}</span>
        </div>
    )
}