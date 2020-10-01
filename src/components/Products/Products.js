import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchStores } from '../../store';
import Product from './Product';

const Products = ({ fetchStores, storesData, match }) => {
    useEffect(() => {
        fetchStores();
        //eslint-disable-next-line
    }, [])
    return storesData.loading ? (
        <h2>loading...</h2>
    ) : storesData.error ? (
        <h2>{storesData.error}</h2>
    ) : (
                <Fragment>
                    <h2 className="pl-4">{match.params.name}</h2>
                    <div className="row d-flex justify-content-center">
                        {
                            storesData && storesData.map(store => match.params.name === store.Tienda ?
                                (
                                    <Product key={store.Id} product={store} />
                                ) : null
                            )
                        }
                    </div>
                </Fragment>


            )
}
const mapStateToProps = state => {
    return {
        storesData: state.stores
    }
};
const mapDispatchToProps = dispatch => {
    return {
        fetchStores: () => dispatch(fetchStores())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
