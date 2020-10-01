import React, { useEffect } from 'react';
import Stores from './components/Stores';
import Papa from 'papaparse';
import './App.css';

const App = () => {

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/stock.csv')
        const reader = response.body.getReader()
        const result = await reader.read() // raw array
        const decoder = new TextDecoder('utf-8')
        const csv = decoder.decode(result.value) // the csv text
        const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
        const stock = results.data // array of objects
        console.log(stock);
      } catch (err) {
        // TypeError: failed to fetch
      }

    }
    getData();
  }, [])
  return (
    <div className="App">
      <Stores />
    </div>
  );
}

export default App;
