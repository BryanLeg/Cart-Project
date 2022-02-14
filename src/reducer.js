export const reducer = (state, action) => {

    if (action.type === 'GET_PRODUCTS') {

        return {
            ...state,
            products: action.payload,
            totalAmount: action.payload.reduce((prevVal, currVal) => prevVal + (currVal.amount * currVal.price), 0),
            productQuantity: action.payload.reduce((prevVal, currVal) => prevVal + currVal.amount, 0),
            isLoading: false
        }
    }

    if (action.type === 'REMOVE_PRODUCT') {
        const { id, price, amount } = action.payload;
        const newProducts = [...state.products.filter(product => product.id !== id)];
        const newTotalAmount = state.totalAmount - price * amount;

        return {
            ...state,
            products: newProducts,
            productQuantity: newProducts.reduce((prevVal, currVal) => prevVal + currVal.amount, 0),
            totalAmount: newTotalAmount
        }
    }

    if (action.type === 'INCREASE_AMOUNT') {
        const { amount, index, price } = action.payload;
        const newTotalAmount = state.totalAmount + parseFloat(price);
        state.products[index].amount = amount + 1;

        return {
            ...state,
            products: state.products,
            productQuantity: state.productQuantity + 1,
            totalAmount: newTotalAmount
        }
    }

    if (action.type === 'DECREASE_AMOUNT') {
        const { amount, index, price } = action.payload;
        const newTotalAmount = state.totalAmount - parseFloat(price);

        if (amount > 0) {
            state.products[index].amount = amount - 1;
        }

        return {
            ...state,
            products: state.products,
            productQuantity: state.productQuantity - 1,
            totalAmount: newTotalAmount
        }
    }

    if (action.type === 'CLEAR_CART') {


        return {
            ...state,
            products: [],
            productQuantity: 0,
            totalAmount: 0
        }
    }


    throw new Error('pas de type correspondant')
}