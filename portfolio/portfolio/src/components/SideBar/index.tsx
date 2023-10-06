import { Experience } from "../Experience";
import { ExternalLink } from "../ExternalLinks";
import { Profile } from "../Profile";
import styles from './index.module.css';

export function SideBar(){
    return(
    <>
    <Profile />
    <div className={styles.classe}>
    <ExternalLink  texto={'Linkedin'} link={'https://www.linkedin.com/in/bernardo-ruschel-b6607a287/'}/>
    <ExternalLink texto={'Email'} link={'https://www.google.com/intl/pt-BR/gmail/about/'}/>
    <ExternalLink texto={'GitHub'} link={'https://github.com/Bernardo-R321'}/>
    </div>
    <div className={styles.padding}>
      <div>Experiência</div>
      <Experience cargo={'Cargo'} ano={'2010'} empresa={'Empresa'}/>
    </div>
    </>
    )
}