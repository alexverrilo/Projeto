import { FunctionComponent, useState } from 'react'
import Pagina from '../components/Pagina'
import ComponenteParceiro from '../components/Parceiro'
import Parceiro from '../models/parceiro'
import servicoParceiro from '../services/parceiros'
import styles from '../styles/PaginaBaresRestaurantes.module.css'

const PaginaBaresRestaurantes: FunctionComponent = () => {

    const [parceiros,setParceiros] = useState<Parceiro[]>(servicoParceiro.lerTodos())

    // setParceiros(servicoParceiro.lerTodos())
    
    return (
        <Pagina>
            <div className={styles.root}>
                <h1>Esses são os Bares e Restaurantes que ja aderiram a EatPay</h1>
                <h2>Bares e Restaurantes</h2>
                <div className={styles.parceiros}>
                {   
                    parceiros.map((parceiro) => {
                        return (
                            <ComponenteParceiro
                            id={parceiro.id}
                            nome={parceiro.nome}
                            urlImg={parceiro.urlmg}
                            local={parceiro.local}
                            estado= {parceiro.estado}
                            urlGoogleMaps={parceiro.urlgoogleMaps}
                        />)
                    })                
                }
                </div>
            </div>
        </Pagina>
    )
}

export default PaginaBaresRestaurantes
