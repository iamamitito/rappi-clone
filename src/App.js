import React from 'react';
import Stores from './components/Stores/Stores';
import Products from './components/Products/Products';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <div className="container mt-5 py-5 px-3 bg-white">
        <Route path="/" exact component={Stores} />
        <Route path="/:name" exact component={Products} />
      </div>
    </div>
  );
}

export default App;
