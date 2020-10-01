import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStores } from '../../store';

const Products = ({ fetchStores, storesData }) => {
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
                    <div className="row d-flex justify-content-center py-5">
                        {
                            storesData && storesData.map((store) => {
                                return (
                                    <div key={store.Id}>
                                        <h5>{store.Nombre}</h5>
                                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);
