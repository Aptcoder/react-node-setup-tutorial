import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [date, setDate] = useState(null);

  useEffect(() => {
    fetch('/api/hello')
    .then((response) => response.json())
    .then((json) => {
      setDate(json.date)
    })
    .catch(() => {

    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>The date from backend is {date}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
