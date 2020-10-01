import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStores } from '../store';
const Stores = ({ fetchStores, storesData }) => {
    useEffect(() => {
        fetchStores()
    }, [])
    return storesData.loading ? (
        <h2>loading...</h2>
    ) : storesData.error ? (
        <h2>{storesData.error}</h2>
    ) : (
                <div>
                    <h2>Stores List</h2>
                    <div>
                        {
                            storesData && storesData.map(store => <p key={store.Id}>{store.Nombre}</p>)
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
