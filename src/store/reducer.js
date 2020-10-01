import * as actionTypes from './types';

const initialState = {
    loading: false,
    cart: [],
    stores: [],
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_STORES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_STORES_SUCCESS:
            return {
                ...state,
                loading: false,
                stores: action.payload,
                error: ''
            };
        case actionTypes.FETCH_STORES_FAILURE:
            return {
                ...state,
                loading: false,
                stores: [],
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;