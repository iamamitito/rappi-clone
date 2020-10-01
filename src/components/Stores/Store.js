import React from 'react';
import './Store.css';

const Store = ({ name }) => {
    return (
        <div className="col-md-6 col-lg-3 mb-3">
            <div className="store-card card border-0 p-4">
                <h4>{name}</h4>
            </div>
        </div>
    )
}

export default Store;
