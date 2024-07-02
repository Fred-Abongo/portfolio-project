import React from 'react';
import DataUpload from './components/DataUpload';
import DataVisualization from './components/DataVisualization';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>DataExplore</h1>
      </div>
      <DataUpload />
      <DataVisualization />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;