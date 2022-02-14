import React, { createContext, useEffect, useReducer } from 'react'
import { reducer } from './reducer';
import { data } from './data';

export const CartContext = createContext();

const url = 'https://course-api.com/react-useReducer-cart-project';



const defaultState = {
    products: data,
    totalAmount: data.reduce((prevVal, currVal) => prevVal + (currVal.amount * currVal.price), 0),
    productQuantity: data.reduce((prevVal, currVal) => prevVal + currVal.amount, 0),
    isLoading: true
};

export const ContextAPI = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const getProducts = async () => {
        const response = await fetch(url);
        const products = await response.json();

        dispatch({ type: 'GET_PRODUCTS', payload: products })
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

