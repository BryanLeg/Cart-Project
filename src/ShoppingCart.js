import React, { useContext } from 'react'
import { CartContext } from './CartContext';
import CartList from './CartList';

const ShoppingCart = ({ products, totalAmount }) => {
    const mainData = useContext(CartContext);
    const { dispatch } = mainData

    return (
        <section>
            <h1 className='title'>your cart</h1>
            <div className="products">
                {products.length === 0 ? <p>the cart is empty</p> : <>{products.map((product, index) => {

                    return (
                        <CartList key={product.id} {...product} index={index} dispatch={dispatch} />
                    )
                })}
                    < div className="underline"></div>
                    <div className="total">
                        <h5>Total :</h5>
                        <p>$ {parseFloat(totalAmount).toFixed(2)}</p>
                    </div>
                    <button className='btn' onClick={() => { dispatch({ type: 'CLEAR_CART' }) }}>clear cart</button>
                </>}
            </div>
        </section >
    )
}

export default ShoppingCart