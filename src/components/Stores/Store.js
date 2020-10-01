import React from 'react';
import './Store.css';

const Store = ({ name, clicked }) => {
    return (
        <div onClick={clicked} className="col-md-6 col-lg-4 mb-3 text-center">
            <div className="store-card card border-0 p-4">
                <h4>{name}</h4>
            </div>
        </div>
    )
}

export default Store;
