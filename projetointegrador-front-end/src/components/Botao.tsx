import { FunctionComponent } from "react"
import styles from '../styles/Botao.module.css'

const Botao: FunctionComponent= ({children}) => {
    return (
        <> 
           <button className={`${styles.btn} ${styles.first}`}>{children}</button>
        </> 
    )
}
export default Botao