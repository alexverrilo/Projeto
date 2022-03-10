import { FunctionComponent } from "react"
import styles from '../styles/Botao2.module.css'

type Props = {
    onClick?: () => void
}

const Botao2: FunctionComponent<Props> = ({onClick, children}) => {
    return (
        <> 
           <button onClick={ onClick } className={`${styles.btn} ${styles.first}`}>{children}</button>
        </> 
    )
}

export default Botao2