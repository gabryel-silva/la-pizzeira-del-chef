import './_cabecalho.css'
import logo from'../../img/logo/logo-pizzaria.svg'
import MenuDropdown from '../MenuDropdown'

function Cabecalho(props) {
    return (
        <>
            <header className='cabecalho'>
                <img src={logo} className='logo'/>
                <div className='menu'>
                    <MenuDropdown/>
                    <a href='#'>Cardápio</a>
                    <a href='#'>Sobre a pizzaria</a>
                </div>
            </header>
        </>
    )
}

export default Cabecalho