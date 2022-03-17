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
            <article>
                <header>
                    <img className={styles.logo} src="/content/logo.png" alt="Logo da Eat Pay"/>
                </header>
                <section>
                    <h1 className={styles.text}>Já pensou em ir no seu restaurante preferido sem ter que ficar esperando em filas?
                        <p>EatPay é uma forma nova de pagamento para facilitar a sua diversao.<br/>
                        Você pode reservar sua mesa.<br/>
                        Escolher a melhor forma de pagamento.<br/>
                        verificar o cardápio, fazer seu pedido e assim que consumir você pode ir para casa sem se preocupar.
                        </p>
                    </h1>
                        <div>
                            <div className={styles.container}>
                                <img src="/content/bar.png" alt="Icones das lojas virtuais"/>
                                {/* <p>Saiba aqui quais são os BARES e RESTAURANTES que ja aderiram a EatPay. Uma forma nova de pagamento para facilitar a sua diversao.</p> */}
                                <NavLink to="/bares-restaurantes" className={styles.text2}> Clique aqui e saiba quais são os BARES e 
                                RESTAURANTES que ja aderiram a EatPay. </NavLink>
                            </div>
                        </div>
                </section>
                <section>
                    <h3 className={styles.p}>Quer se tornar nosso parceiro ?</h3>
                    <div className={styles.container}>
                        <h3>Nos da EatPay viemos para mudar o conceito de pagamentos, facilitando para você,<br/>
                            podendo parcelar seus pagamentos naquele momento que você <br/>
                            tem a vontade de sair para comer fora ou mesmo <br/>
                            tomar uma com os amigos, porem o orçamento esta curto.<br/>
                            Sim, isso mesmo iremos parcelar seus pedidos, mas não é apenas essa vantagem,<br/>
                            clique aqui e veja todas as nossas funcionalidades.
                        </h3>
                        <div className={styles.body}> 
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
                    <div className={styles.f}>
                        <h2>Baixe nosso App!</h2>
                        <img className={styles.loja} src="/content/lojas.png" alt="Icones das lojas virtuais"/> 
                    </div>
                    <div className={styles.images}>
                        <img src="/content/whatsapp.png" alt="" width="50" height="50"/>
                        <img src="/content/face.png" alt=""width="50" height="50"/>
                        <img src="/content/insta.png" alt=""width="55" height="55"/>
                        <img src="/content/localizacao.png" alt=""width="30" height="40"/>
                    </div>
                </section>
            </article>
        </Pagina>
    )
}

export default PaginaPrincipal 