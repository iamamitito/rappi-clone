import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import EmptyCart from './EmptyCart';
import * as actionTypes from '../../store/types';

import './Cart.css';

const Cart = ({ shoppingCart, increment, decrement, cartTax, cartSubtotal, cartTotal, history, clearCart }) => {
    const [showTotal, setShowTotal] = useState(false)

    return (
        <div className="cart bg-white">
            {
                shoppingCart.length > 0 ? (<Fragment><div className="d-flex justify-content-end">
                    <button className="btn btn-danger my-3" onClick={() => clearCart()}>Vaciar carrito <i className="fas fa-trash-alt"></i></button>
                </div>
                    <div className="table-responsive my-4">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">SKU</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shoppingCart.map(product => (
                                    <tr key={product.Id}>
                                        <th scope="row">{product.SKU}</th>
                                        <td>{product.Nombre.slice(0, 35)}{product.Nombre.length > 35 ? '...' : null}</td>
                                        <td>${(+product.Precio).toLocaleString('es-cl')}</td>
                                        <td className="d-flex justify-content-center align-items-center">
                                            {product.count === 1 ? (<button type="button" className="box btn-orange" disabled>-</button>) : (<button type="button" className="box btn-orange"
                                                onClick={() => decrement(product.Id)}>-</button>)}

                                            <div className="box">{product.count} </div>
                                            {product.Stock === 0 ? (<button type="button" disabled className="box btn-orange">+</button>) : (<button type="button" onClick={() => increment(product.Id)} className="box btn-orange">+</button>)}
                                        </td>
                                        <td>${product.total.toLocaleString('es-cl')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>

                    <div className="d-flex justify-content-end">
                        <button className="btn btn-orange" onClick={() => setShowTotal(true)}>Cotizar</button>
                    </div>
                    <div className={showTotal ? 'total text-right my-3 show' : 'total text-right my-3 '}>
                        <p>SubTotal: ${cartSubtotal.toLocaleString('es-cl')}</p>
                        <p>IVA: ${cartTax.toLocaleString('es-cl')}</p>
                        <p>Total: ${cartTotal.toLocaleString('es-cl')}</p>
                    </div>
                    <div className="back-btn font-weight-bold" onClick={history.goBack}><i className="fas fa-angle-double-left"></i> Volver a tienda</div></Fragment>) : (<EmptyCart />)}
        </div>

    )
}
const mapStateToProps = state => {
    return {
        shoppingCart: state.cart,
        cartTax: state.cartTax,
        cartSubtotal: state.cartSubtotal,
        cartTotal: state.cartTotal,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        increment: (id) => dispatch({ type: actionTypes.INCREMENT_PRODUCT, id: id }),
        decrement: (id) => dispatch({ type: actionTypes.DECREMENT_PRODUCT, id: id }),
        clearCart: () => dispatch({ type: actionTypes.CLEAR_CART }),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
