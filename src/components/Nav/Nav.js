import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <Link className="navbar-brand" to="/"><img src="/rappilogo.png" height="80" alt="logo" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/">Tiendas</Link>
                    </li>
                </ul>
                <div >
                    <Link to="/Resumen de tu pedido" className="nav-link text-dark"><i className="fas fa-cart-plus"></i></Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
