import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './App.css';

const App = () => {
  const [stock, setStock] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch('/stock.csv')
      const reader = response.body.getReader()
      const result = await reader.read() // raw array
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value) // the csv text
      const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
      const stock = results.data // array of objects
      setStock(stock);
    }
    getData()
  }, [])
  return (
    <div className="App">
      {stock.map(product => <h2 key={product.Id}>{product.Nombre}</h2>)}
    </div>
  );
}

export default App;
