import { FunctionComponent, MouseEventHandler, useState } from "react"
import Botao from "./Botao"
import styles from '../styles/Pagina.module.css'

const BotaoLogin : FunctionComponent = () => {

    const [aberto, setAberto] = useState(false)
    //const [reservado, setReservado] = useState(false)

    const botaoAbrirClicado = () => {
        setAberto(true)
    }

    const inputChange = () => {
    }

    return (
    
    <div className={styles.login}>
        {
            (! aberto) && <Botao onClick={ botaoAbrirClicado }>Login</Botao>
        }
        {
        //    (reservado) && <p>Reservado!</p>
        }

        {
            (aberto) && (
                <form>
                    <Botao>Entrar</Botao>                     
                    <input onChange={ inputChange } placeholder="Usuário" />
                    <input onChange={ inputChange } placeholder="Senha" />
                </form>
            )
        }
        
    
    </div>

    )
}
export default BotaoLogin