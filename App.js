// src/App.js
import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Calculator</h1>
        <Calculator />
      </header>
    </div>
  );
}

export default App;
