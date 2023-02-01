import arrowDown from '../../img/icones/arrow-down.svg';

function BotaoDropdown() {
    return (
        <>
            <button 
                onClick={onClick} 
                className="nossos-servicos">Nossos Serviços
                <img src={arrowDown} alt='Arrow down'/>
            </button>
        </>
    )
}
export default BotaoDropdown;