import Papa from 'papaparse';
import { FETCH_STORES_FAILURE, FETCH_STORES_REQUEST, FETCH_STORES_SUCCESS } from "./types";

export const fetchStoresRequest = () => {
    return {
        type: FETCH_STORES_REQUEST,
    }
}
export const fetchStoresSuccess = (stores) => {
    return {
        type: FETCH_STORES_SUCCESS,
        payload: stores
    }
}
export const fetchStoresFailure = (error) => {
    return {
        type: FETCH_STORES_FAILURE,
        payload: error
    }
}


export const fetchStores = () => {
    return async (dispatch) => {
        dispatch(fetchStoresRequest)
        try {
            const response = await fetch('/stock.csv')
            const reader = response.body.getReader()
            const result = await reader.read() //  array
            const decoder = new TextDecoder('utf-8')
            const csv = decoder.decode(result.value) // texto csv
            const results = Papa.parse(csv, { header: true }) // objecto
            const stock = results.data // array de objetos
            dispatch(fetchStoresSuccess(stock))
        } catch (error) {
            const errorMsg = error.message
            dispatch(fetchStoresFailure(errorMsg))
        }

    }
}
