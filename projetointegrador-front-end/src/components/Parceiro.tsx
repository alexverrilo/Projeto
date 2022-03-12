import { FunctionComponent, useState } from "react"
import Botao from "./Botao"

type Props = {
    id: number
    nome: string
    urlImg: string
    local: string
    estado: string
    urlGoogleMaps: string
}

const ComponenteParceiro: FunctionComponent<Props> = ({id, nome, urlImg, local, estado, urlGoogleMaps }) => {
    const [ativado, setAtivado] = useState<boolean>(false)
    const botaobaresclicado = () => {
            setAtivado(!ativado)
    } 
    return(
        <div>
            
            <h3>{ nome }</h3>
            <img src={ urlImg } alt={`Foto da fachada do ${nome}`} />
            <p>{local}</p>
            <p>{estado}</p>
            <Botao onClick={botaobaresclicado}>MAPS</Botao>
            {/* <button onClick={botaobaresclicado} className={`${styles.btn} ${styles.first} `}>MAPS</button> */}
            {
               (ativado) && <iframe src={ urlGoogleMaps } width="200" height="300" style={{border:0}} loading="lazy"></iframe>
            }
        </div>
        )
    }
    export default ComponenteParceiro  