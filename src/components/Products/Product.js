import React from 'react';
import './Product.css';

const Product = ({ product, clicked }) => {
    return (
        <div className={+product.Stock === 0 || product.inCart ? 'col-md-6 mb-3 not-available' : 'col-md-6 mb-3'}>
            <div className="product-card align-items-center justify-content-between d-flex">
                <div className="  bg-white p-4">
                    <h6 title={product.Nombre}>{product.Nombre.slice(0, 35)}{product.Nombre.length > 35 ? '...' : null}</h6>
                    <p className="font-weight-bold">${(+product.Precio).toLocaleString('es-cl')}</p>
                    {+product.Stock < 10 && +product.Stock > 0 ? (<p className="text-danger">Quedan pocas unidades</p>) : null}
                    {+product.Stock === 0 ? (<p className="text-danger">Sin Stock</p>) : null}
                </div>
                {
                    +product.Stock === 0 || product.inCart ? (
                        <button type="button" className="btn btn-orange" disabled>{product.inCart ? 'Agregado' : 'No disponible'}</button>
                    ) : (
                            <button type="button" className="btn btn-orange" onClick={clicked}
                            >Agregar</button>
                        )
                }

            </div>

        </div>
    )
}



export default Product;
