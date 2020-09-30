import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

const Stores = ({ products, buyProduct }) => {

    return (
        <div>
            <h2>Products {products}</h2>
            <button onClick={buyProduct}>Buy product</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
};
const mapDispatchToProps = dispatch => {
    return {
        buyProduct: () => dispatch({ type: actionTypes.BUY_PRODUCT })

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stores);
