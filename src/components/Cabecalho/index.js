import './_cabecalho.css'
import logo from'../../img/logo/logo-pizzaria.svg'
import BotaoDropdown from '../BotaoDropdown'

function Header(props) {
    return (
        <>
            <header className='cabecalho'>
                <img src={logo}/>
                <div className='menu'>
                    <BotaoDropdown/>
                    <a href='#'>Cardápio</a>
                    <a href='#'>Sobre a pizzaria</a>
                </div>
            </header>
        </>
    )
}

export default Header