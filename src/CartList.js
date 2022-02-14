import React from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const CartList = ({ id, title, price, img, amount, index, dispatch }) => {

    return (
        <div className="product">
            <img className='img' src={img} alt={title} />
            <div className='product-body'>
                <h4>{title}</h4>
                <p>$ {(price * amount).toFixed(2)}</p>
                <button className='btn' onClick={() => dispatch({ type: 'REMOVE_PRODUCT', payload: { price, id, amount } })}>remove</button>
            </div>
            <div className="product-btns">
                <button className='btn product-btn' onClick={() => dispatch({ type: 'INCREASE_AMOUNT', payload: { index, amount, price } })}><FaArrowUp /></button>
                <p>{amount}</p>
                <button className='btn product-btn' onClick={() => { { amount === 1 ? dispatch({ type: 'REMOVE_PRODUCT', payload: { id, price, amount } }) : dispatch({ type: 'DECREASE_AMOUNT', payload: { index, amount, price } }) } }}><FaArrowDown /></button>
            </div>
        </div>
    )
}

export default CartList