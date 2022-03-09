import { FunctionComponent } from "react"
import styles from '../styles/Botao.module.css'

type Props = {
    onClick?: () => void
}

const Botao: FunctionComponent<Props> = ({onClick, children}) => {
    return (
        <> 
           <button onClick={ onClick } className={`${styles.btn} ${styles.first}`}>{children}</button>
        </> 
    )
}

export default Botao