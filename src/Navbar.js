import React from 'react'
import { FaShoppingBasket } from 'react-icons/fa';

const Navbar = ({ productQuantity }) => {
    return (
        <nav className='navbar'>
            <h1>Cart</h1>
            <span className='icon'>
                <FaShoppingBasket />
                <div className="quantity">{productQuantity}</div>
            </span>

        </nav>
    )
}

export default Navbar