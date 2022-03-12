import { FunctionComponent, useEffect, useState } from 'react'
import Pagina from '../components/Pagina'
import ComponenteParceiro from '../components/Parceiro'
import Categoria from '../models/categoria'
import Parceiro from '../models/parceiro'
import servicoCategoria from '../services/categoria'
import servicoParceiros from '../services/Parceiros'
import styles from '../styles/PaginaBaresRestaurantes.module.css'

const PaginaBaresRestaurantes: FunctionComponent = () => {

    const [parceiros,setParceiros] = useState<Parceiro[]>([])
    const [categorias, setCategorias] = useState<Categoria[]>([])


    useEffect(() => {

        servicoCategoria.lerTodos((categorias) => {
            setCategorias(categorias)
        })

        servicoParceiros.lerTodos((parceiros)=> {
            setParceiros(parceiros)
        }) 
    }, [])


    
    
    return (
        <Pagina>
            <div className={styles.root}>
                <h1>Esses são os Bares e Restaurantes que ja aderiram a EatPay</h1>
                {
                    categorias.map((categoria) => {
                        return (
                            <h2 key={categoria.id}>{categoria.nome}</h2>
                            
                        )
                    })
                }



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
                            key={parceiro.id}
                        />)
                    })                
                }
                </div>
            </div>
        </Pagina>
    )
}

export default PaginaBaresRestaurantes
