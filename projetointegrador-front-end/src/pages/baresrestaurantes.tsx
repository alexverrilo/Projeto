import { FunctionComponent, useEffect, useState } from 'react'
import Pagina from '../components/Pagina'
import ComponenteParceiro from '../components/Parceiro'
import Categoria from '../models/categoria'
import ParceiroCategoria from '../models/ParceiroCategoria'
import Parceiro from '../models/Parceiros'
import servicoCategoria from '../services/categoria'
import servicoParceiros from '../services/parceiros'
import servicoParceiroCategoria from '../services/parceiroscategoria'
import styles from '../styles/PaginaBaresRestaurantes.module.css'

const PaginaBaresRestaurantes: FunctionComponent = () => {
    console.log('PaginaBaresRestaurantes')

    const [parceiros,setParceiros] = useState<Parceiro[]>([])
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [parceiroCategorias, setParceiroCategorias] = useState<ParceiroCategoria[]>([])


    useEffect(() => {
        
        servicoParceiros.lerTodos((parceiros)=> {
            servicoCategoria.lerTodos((categorias) => {
                servicoParceiroCategoria.lerTodos((ParceiroCategoria) => {
                    setParceiroCategorias(ParceiroCategoria)
                    setParceiros(parceiros)
                    setCategorias(categorias)
                })   
            })
        }) 
        
    }, [])
    return (
        <Pagina>
            <div className={styles.root}>
                <h1>Esses são os Bares e Restaurantes que ja aderiram a EatPay</h1>
                {
                    categorias.map((categoria, index) => <ComponenteCategoria key={index} categoria={categoria} parceiros={parceiros} parceiroCategorias={parceiroCategorias} />)
                }
            </div>
        </Pagina>
    )
}
export default PaginaBaresRestaurantes

type PropsCategoria = {
    categoria: Categoria
    parceiros: Parceiro[]
    parceiroCategorias: ParceiroCategoria[]
}
const ComponenteCategoria:FunctionComponent<PropsCategoria> = ({ categoria, parceiros, parceiroCategorias }) =>  {
    let parceirosFiltrado: Parceiro[] = []
    parceiroCategorias.forEach(parceiroCategoria => {
        if (parceiroCategoria.idCategorias === categoria.id) {
            const parceiro = parceiros.find(parceiro => parceiro.id === parceiroCategoria.idParceiros)
            if (parceiro) {
                parceirosFiltrado.push(parceiro)
            }
        }
    })

    return (
        <>
            <h2 key={categoria.id}>{categoria.nome}</h2>
            <div className={styles.parceiros}>
            {
                    parceirosFiltrado.map(parceiro =>
                    <ComponenteParceiro
                        id={parceiro.id}
                        nome={parceiro.nome}
                        urlImg={parceiro.urlmg}
                        local={parceiro.local}
                        estado= {parceiro.estado}
                        urlGoogleMaps={parceiro.urlgoogleMaps}
                        key={parceiro.id}
                    />
                )
            }
            </div>
            
        </>
    )
}