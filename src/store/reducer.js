import * as actionTypes from './actions';

const initialState = {
    products: 10
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BUY_PRODUCT:
            return {
                ...state,
                products: state.products - 1
            };
        default:
            return state;
    }
}

export default reducer;