import { FunctionComponent } from "react"
import { NavLink } from "react-router-dom"
import Botao from "./Botao"
import styles from '../styles/Pagina.module.css'

const Pagina : FunctionComponent= ({children}) => {
    return (
        <div className={styles.root}> 
            <header>
                <NavLink to="/" >
                <img src="/content/home.png" alt=""/>
                </NavLink>
                <Botao>ENTRAR</Botao>
            </header> 
            <main> 
                { children }
            </main>
            <footer>
                <p>fale com</p>
            </footer>
        </div> 
    )
}
export default Pagina