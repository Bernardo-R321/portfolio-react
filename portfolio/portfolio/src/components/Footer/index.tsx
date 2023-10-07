import styles from './index.module.css'
import { ExternalLink } from '../ExternalLinks'
import { ButtonVoltar } from '../ButtonVoltar'

export function Footer(){
    return(
    <footer className={styles.footer}>
    <div>
        <p>Bernardo Ruschel</p>
    </div>
    <div className={styles.links}>
    <ExternalLink  texto={'Linkedin'} link={'https://www.linkedin.com/in/bernardo-ruschel-b6607a287/'}/>
    <ExternalLink texto={'Email'} link={'https://www.google.com/intl/pt-BR/gmail/about/'}/>
    <ExternalLink texto={'GitHub'} link={'https://github.com/Bernardo-R321'}/>
    </div>
    <div>
        <ButtonVoltar texto={'Voltar para o Topo'} link={"#home"}></ButtonVoltar>
    </div>
    </footer>
    )
}