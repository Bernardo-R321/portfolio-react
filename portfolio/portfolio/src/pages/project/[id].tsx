import { Footer } from "@/components/Footer"
import { useRouter } from 'next/router'
import data from "../../../data.json";
import { ButtonHome } from "@/components/ButtonHome";
export default function Project(){

    const { query } = useRouter()

    const project = data.find(d => d.id === Number(query.id))

    return(
        <body id="home">
            <ButtonHome/>
            <div>
                <h1>{project?.titulo}</h1>
                <p>{project?.linguagem}</p>
                <a href={project?.link}><img src={project?.source}></img>
                </a>
            </div>
            <div>
                <p>{project?.descricao}</p>
            </div>
            <Footer/>
        </body>
    )
}