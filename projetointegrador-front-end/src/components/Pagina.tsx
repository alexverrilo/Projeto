import { FunctionComponent } from "react"
import { NavLink } from "react-router-dom"
import Botao from "./Botao"
import styles from '../styles/Pagina.module.css'
import Login from "./Login"


const Pagina : FunctionComponent= ({children}) => {
    return (
        <div className={styles.root}> 
            <header>
                <NavLink to="/" >
                <img className={styles.logo} src="/content/home.png" alt=""/>
                </NavLink>
                <Login></Login>
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