import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStores } from '../../store';
import * as actionTypes from '../../store/types';
import Product from './Product';

const Products = ({ fetchStores, storesData, match, addItem }) => {
    useEffect(() => {
        fetchStores();
        //eslint-disable-next-line
    }, [])
    return storesData.loading ? (
        <h2>loading...</h2>
    ) : storesData.error ? (
        <h2>{storesData.error}</h2>
    ) : (
                <div>
                    <h2 className="pl-4">{match.params.name}</h2>
                    <div className="row d-flex justify-content-center">
                        {
                            storesData && storesData.map(store => match.params.name === store.Tienda ?
                                (
                                    <Product clicked={() => addItem(store, store.Id)} key={store.Id} product={store} />
                                ) : null
                            )
                        }
                    </div>
                </div>


            )
}
const mapStateToProps = state => {
    return {
        storesData: state.stores
    }
};
const mapDispatchToProps = dispatch => {
    return {
        fetchStores: () => dispatch(fetchStores()),
        addItem: (product, id) => dispatch({ type: actionTypes.ADD_PRODUCT, payload: product, id: id }),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
