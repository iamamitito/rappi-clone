import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStores } from '../../store';
import Store from './Store';
const Stores = ({ fetchStores, storesData }) => {
    const newStores = [...new Set(storesData.map(item => item.Tienda))]

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
                    <h2>Nuestras Tiendas</h2>
                    <div className="row d-flex justify-content-center py-5">
                        {
                            storesData && newStores.map((store, i) => {
                                return (
                                    <Store key={i} name={store} />
                                )
                            })
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
        fetchStores: () => dispatch(fetchStores())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Stores);
