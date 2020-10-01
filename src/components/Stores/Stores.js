import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStores } from '../../store';
import Store from './Store';
const Stores = ({ fetchStores, storesData, history }) => {
    const newStores = [...new Set(storesData.map(item => item.Tienda))]
    useEffect(() => {
        fetchStores();
        //eslint-disable-next-line
    }, [])
    const storeSelectedHandler = (name) => {
        history.push({ pathname: `/${name}` });
        window.scrollTo(0, 0);
    }
    return storesData.loading ? (
        <h2>loading...</h2>
    ) : storesData.error ? (
        <h2>{storesData.error}</h2>
    ) : (
                <div>
                    <h2 className="pl-3">Nuestras Tiendas</h2>
                    <div className="row d-flex justify-content-center py-5">
                        {
                            storesData && newStores.map((store, i) => {
                                return (
                                    <Store
                                        key={i}
                                        name={store}
                                        clicked={() => storeSelectedHandler(store)}
                                    />
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
