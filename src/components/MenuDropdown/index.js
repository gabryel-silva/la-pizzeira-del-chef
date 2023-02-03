import { useRef, useState } from 'react';
import arrowDown from '../../img/icones/arrow-down.svg';
import deliveryIcon from '../../img/icones/delivery.svg';
import rodizioIcon from '../../img/icones/rodizio.svg';
import reservasIcon from '../../img/icones/reservas.svg';

function MenuDropdown() {
    const dropDownRef = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)

    return (
        <>
            <div className='container-dropdown'>
                <button
                    onClick={onClick}
                    className="nossos-servicos">Nossos Serviços
                    <img src={arrowDown} alt='Arrow down' />
                </button>
                
                    <nav ref={dropDownRef} className={`nav ${isActive ? "active" : "inactive"}`}>
                        <ul>
                            <li><a href='#'>Delivery<img src={deliveryIcon} /></a></li>
                            <li><a href='#'>Rodízio<img src={rodizioIcon} /></a></li>
                            <li><a href='#'>Reservas<img src={reservasIcon} /></a></li>
                        </ul>
                    </nav>
            </div>
        </>
    )
}
export default MenuDropdown;