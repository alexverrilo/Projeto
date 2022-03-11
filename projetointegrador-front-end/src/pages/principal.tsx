import { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import Botao from '../components/Botao'
import Botao2 from '../components/Botao2'
import BotaoClique from '../components/Click'
import Pagina from '../components/Pagina'
import styles from '../styles/PaginaPrincipal.module.css'


const PaginaPrincipal: FunctionComponent = () => {

    const botaoappclicado = () => {
        alert ('App')
    }
    const botaolinkclicado = () => {
        alert ('bares e restaurantes')
    }
    const botaoenviarclicado = () => {
        alert ('enviar')
    }
    const inputChange = () => {
    }

    return (
        <Pagina>
            <div className={styles.root}>
                <header>
                    <img className={styles.logo} src="/content/logo.png" alt="Logo da Eat Pay"/>
                    <p className={styles.text}>
                        Já pensou em ir no seu restaurante preferido sem ter que ficar esperando em filas?
                        <BotaoClique></BotaoClique>
                    </p>
                    <div>
                        <div>
                            {/* <p>Saiba aqui quais são os BARES e RESTAURANTES que ja aderiram a EatPay. Uma forma nova de pagamento para facilitar a sua diversao.</p> */}
                            <NavLink to="/bares-restaurantes" className={styles.text}> Clique aqui e saiba quais são os BARES e RESTAURANTES que ja aderiram a EatPay. 
                            </NavLink>
                        </div>
                        <div className={styles.f}>
                            <h2>Baixe nosso App!</h2>
                            <img className={styles.loja} src="/content/lojas.png" alt="Icones das lojas virtuais"/> 
                        </div>
                        <h4 className={styles.p}> Nos da EatPay viemos para mudar o conceito de pagamentos, facilitando para você,
                        podendo parcelar seus pagamentos naquele momento que você tem a vontade de sair para comer fora ou mesmo tomar uma com os amigos, porem o orçamento esta curto.
                        Sim, isso mesmo iremos parcelar seus pedidos, mas não é apenas essa vantagem,
                        clique aqui e veja todas as nossas funcionalidades.</h4>
                    </div>
                </header>
                <div className={styles.body}> 
                    <h3>Quer se tornar nosso parceiro ?</h3>
                    <p>Preencha nosso formulário de interesse,<br/>
                        que entraremos em contato através do nosso setor comercial.</p>
                    <p> <input onChange={ inputChange } placeholder="Nome" /></p>
                    <p> <input onChange={ inputChange } placeholder="E-Mail"/></p>
                    <p> <input onChange={ inputChange } placeholder="Telefone para contato"/></p>
                    <p> <input onChange={ inputChange } placeholder="Cidade"/></p>
                    <p> <input onChange={ inputChange } placeholder="Assunto"/></p>
                    <Botao>ENVIAR</Botao>
                </div>
            </div>
        </Pagina>
    )
}

export default PaginaPrincipal 