import PizzaMargherita from '../../img/pizza/pizza-margherita.png'
import PizzaPepperoni from '../../img/pizza/pizza-pepperoni.png'
import Curtir from '../../img/icones/curtir.svg'
import Salvar from '../../img/icones/salvar.svg'
import Compartilhar from '../../img/icones/compartilhar.svg'
import DecorativoPrecoPizza from '../../img/decorativo/decorativo-preco-pizza.svg'
import './_ofertas-da-semana.css'

function OfertasDaSemana() {
    return (
        <section className="ofertas-da-semana">
            <h2 className='titulo-section'>Ofertas da semana</h2>
            <article className="card-pizza">
                <div className='container-img-pizza'>
                    <img src={PizzaMargherita} />
                </div>
                <div className='container-info-card'>
                    <h2 className='titulo-card'>Pizza Margherita</h2>
                    <p className='texto-padrao'>Uma pizza clássica feita com molho
                        de tomate fresco, mussarela, manjericão
                        e azeite de oliva extra-virgem</p>
                    <div className='container-reacoes'>
                        <img src={Curtir} />
                        <img src={Salvar} />
                        <img src={Compartilhar} />
                    </div>
                    <div className='container-preco'>
                        <div className='line'></div>
                        <h2>R$<span>45</span>,00</h2>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default OfertasDaSemana