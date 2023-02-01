import { useRef, useState } from 'react';

function ListaSuspensa() {
    const dropDownRef = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)

    return (
        <nav ref={dropDownRef} className={`nav ${isActive ? "active" : "inactive"}`}>
            <ul>
                <li><a href='#'>Delivery</a></li>
                <li><a href='#'>Rodízio</a></li>
                <li><a href='#'>Reservas</a></li>
            </ul>
        </nav>
    )
}

export default ListaSuspensa