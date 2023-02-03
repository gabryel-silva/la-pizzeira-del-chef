import logo from '../../img/logo/logo-pizzaria.svg'
import banner from '../../img/banner/banner-pizzaria.png'
import './_banner.css'
import Botao from '../Botao'

function Banner(){
    return(
        <section className="container-banner">
            <div className='container-conteudo'>
                <img src={logo} alt="Logo Pizzaria"/>
                <h1>Saboreie a autenticidade da verdadeira pizza italiana</h1>
                <p>Venha experimentar nossas deliciosas 
                    pizzas feitas com ingredientes frescos 
                    e receita autêntica.
                </p>
                <Botao/>
            </div>
            <img src={banner}/>
        </section>
    )
}

export default Banner