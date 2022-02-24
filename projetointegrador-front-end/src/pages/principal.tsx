import { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import Botao from '../components/Botao'
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
                    <h1>
                        <img src="/content/logo.png" alt=""/> 
                    </h1>
                    <h2>
                        Ja pensou em ir no seu restaurante preferido sem ter que ficar esperando em filas?<br/>
                        Podendo reservar sua mesa e pagar como quiser!
                    </h2>
                </header>
                

                    
                    
                 
                 <div>
                     <h2>Bares e Restaurantes</h2>
                     <p>Saiba aqui quais são os BARES e RESTAURANTES que ja aderiram a EatPay. Uma forma nova de pagamento para facilitar a sua diversao.</p>
                     <NavLink to="/bares-restaurantes"> veja aqui </NavLink>
                     <h4> Nos da EatPay viemos para mudar o conceito de pagamentos facilitando você nosso cliente, uma proposta nova, você parcelar seus pagamentos naquele momento que você tem a vontade de sair para comer fora ou mesmo tomar uma com os amigos, porem o orcamento esta curto.
                     Sim, isso mesmo iremos parcelar seus pedidos, mas não é apenas essa vantagem,
                     clique aqui e veja todas as nossas funcionalidades.</h4>
                     <h3>Quer se tornar nosso parceiro ?</h3>
                     <p>Preencha nosso formulário de interesse e entraremos em contato através do nosso setor comercial..</p>
                     <p> <input onChange={ inputChange } placeholder="Nome" /></p>
                     <p> <input onChange={ inputChange } placeholder="E-Mail"/></p>
                     <p> <input onChange={ inputChange } placeholder="Telefone para contato"/></p>
                     <p> <input onChange={ inputChange } placeholder="Cidade"/></p>
                     <p> <input onChange={ inputChange } placeholder="Assunto"/></p>
                     <button onClick={ botaoenviarclicado }> Enviar </button>
                 </div>
            </div>
        </Pagina>
    )
}

export default PaginaPrincipal 