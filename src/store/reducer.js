import * as actionTypes from './types';

const initialState = {
    loading: false,
    stores: [],
    cart: [],
    cartTax: 0,
    cartSubtotal: 0,
    cartTotal: 0,
    error: ''
}

const reducer = (state = initialState, action) => {

    const getItem = id => {
        return state.stores.find(product => product.Id === id);
    }
    switch (action.type) {
        case actionTypes.FETCH_STORES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_STORES_SUCCESS:
            let newStores = [...action.payload];
            // nuevas propiedades para funcionalidad de Carro
            newStores.forEach(store => store.count = 0);
            newStores.forEach(store => store.total = 0);
            newStores.forEach(store => store.inCart = false);
            return {
                ...state,
                loading: false,
                stores: [...newStores],
                error: ''
            };
        case actionTypes.FETCH_STORES_FAILURE:
            return {
                ...state,
                loading: false,
                stores: [],
                error: action.payload
            };
        case actionTypes.ADD_PRODUCT:
            let tempStores = [...state.stores];
            let index = tempStores.indexOf(getItem(action.id));
            const product = tempStores[index];
            product.Stock -= 1;
            product.inCart = true;
            product.count = 1;
            const price = +product.Precio;
            product.total = product.count * price;
            // Totals
            let subTotal = 0;
            state.cart.forEach(product => subTotal += product.total)
            const tempTax = subTotal * 0.19;
            const tax = parseFloat(tempTax.toFixed(0));
            const total = subTotal + tax;
            return {
                ...state,
                cart: [...state.cart, action.payload],
                stores: tempStores,
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total,

            }
        case actionTypes.INCREMENT_PRODUCT:
            let tempCart = [...state.cart];
            const selectedProduct = tempCart.find(product => product.Id === action.id);
            const i = tempCart.indexOf(selectedProduct);
            const tempProduct = tempCart[i];
            tempProduct.Stock -= 1;
            tempProduct.count += 1;
            tempProduct.total = tempProduct.count * +tempProduct.Precio;
            let tempSubTotal = 0;
            state.cart.forEach(product => tempSubTotal += product.total)
            const firstTax = tempSubTotal * 0.19;
            const finalTax = parseFloat(firstTax.toFixed(0));
            const myTotal = tempSubTotal + finalTax;
            return {
                ...state,
                cart: [...tempCart],
                cartSubtotal: tempSubTotal,
                cartTax: finalTax,
                cartTotal: myTotal
            };
        case actionTypes.DECREMENT_PRODUCT:
            let decrementCart = [...state.cart];
            const selectedDecrementedProduct = decrementCart.find(product => product.Id === action.id);
            const decrementIndex = decrementCart.indexOf(selectedDecrementedProduct);
            const tempDecrementProduct = decrementCart[decrementIndex];
            tempDecrementProduct.count -= 1;
            tempDecrementProduct.Stock += 1;
            tempDecrementProduct.total = tempDecrementProduct.count * +tempDecrementProduct.Precio;
            let tempDecrementedSubTotal = 0;
            state.cart.forEach(product => tempDecrementedSubTotal += product.total)
            const decrementTax = tempDecrementedSubTotal * 0.19;
            const finalDecreTax = parseFloat(decrementTax.toFixed(0));
            const DecrementedTotal = tempDecrementedSubTotal + finalDecreTax;
            return {
                ...state,
                cart: [...decrementCart],
                cartSubtotal: tempDecrementedSubTotal,
                cartTax: finalDecreTax,
                cartTotal: DecrementedTotal
            };
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cart: [],
                cartSubtotal: 0,
                cartTax: 0,
                cartTotal: 0
            };
        default:
            return state;
    }
}

export default reducer;