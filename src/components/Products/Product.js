import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    return (
        <div className={+product.Stock === 0 ? 'col-md-6 mb-3 without-stock' : 'col-md-6 mb-3 '}>
            <div className="align-items-center justify-content-between d-flex">
                <div className="card border-0 p-4">
                    <h6 title={product.Nombre}>{product.Nombre.slice(0, 35)}{product.Nombre.length > 35 ? '...' : null}</h6>
                    <p className="font-weight-bold">${(+product.Precio).toLocaleString('es-cl')}</p>
                    {+product.Stock < 10 && +product.Stock > 0 ? (<p className="text-danger">Quedan pocas unidades</p>) : null}
                    {+product.Stock === 0 ? (<p className="text-danger">Sin Stock</p>) : null}
                </div>
                {
                    +product.Stock === 0 ? (
                        <button type="button" disabled>Agregar</button>
                    ) : (
                            <button type="button">Agregar</button>
                        )
                }

            </div>

        </div>
    )
}

export default Product;
