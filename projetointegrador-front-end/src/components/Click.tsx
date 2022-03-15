import { FunctionComponent, MouseEventHandler, useState } from "react"
import Botao2 from "./Botao2"
import styles from '../styles/Pagina.module.css'
import Botao from "./Botao"

const BotaoClique : FunctionComponent = () => {

    const [aberto, setAberto] = useState(false)

    const botaoAbrirClicado = () => {
        setAberto(true)
    }
    const [fechado, setFechado] = useState(false)
    
    const botaoFecharClicado = () => {
        setFechado(true)
    }

    return (
    
    <div className={styles.click}>
        {
            (! aberto) && <Botao2 onClick={ botaoAbrirClicado }>Saiba mais!</Botao2>
        }
        {
            (aberto) && (
                
                <p>
                    EatPay é uma forma nova de pagamento para facilitar a sua diversao.<br/>
                    Você pode reservar sua mesa.<br/>
                    Escolher a melhor forma de pagamento.<br/>
                    verificar o cardápio, fazer seu pedido e assim que consumir você pode ir para casa sem se preocupar.
                    {
                        (! fechado) && <Botao onClick= { botaoFecharClicado }>X</Botao>
                    }
                </p>
            )
        }
        
    
    </div>

    )
}
export default BotaoClique