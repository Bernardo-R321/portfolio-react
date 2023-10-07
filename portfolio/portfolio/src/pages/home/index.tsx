import { SideBar } from "@/components/SideBar";
import { Footer } from "@/components/Footer";
import { Project } from "@/components/Project";
import data from '../../../data.json';
import styles from './index.module.css'
import Link from "next/link";



export default function Home() {
 
    return( 
    <body id='body'>
    <div className={styles.main} id="home">
    <SideBar/>
    <div className={styles.projects}>
    {data.map((project) => {
          return (
            <Link key={project.id} href={`project/${project.id}`} className={styles.images}>
              <Project src={project.source} alt={project.titulo} />
            </Link>
          );
        })}
    </div>
    </div>
    <Footer/>
    </body>
    )
  }
  