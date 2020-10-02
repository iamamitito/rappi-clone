import React from 'react';
import Nav from './components/Nav/Nav';
import Stores from './components/Stores/Stores';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Nav />
      <div className="container my-5 py-5 px-3 bg-white">
        <Route path="/" exact component={Stores} />
        <Route path="/:name" exact component={Products} />
        <Route path="/Resumen de tu pedido" exact component={Cart} />
      </div>
    </div>
  );
}

export default App;
