import React from 'react';
import Stores from './components/Stores/Stores';
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <div className="container py-3">
        <Stores />
        <Products />
      </div>
    </div>
  );
}

export default App;
