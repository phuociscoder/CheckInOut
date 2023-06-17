import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-router-dom';
import './components/login/login';
import { BrowserRouter as Router ,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
    <Route path='/' Component={Login}/>
    </Router>
  );
}

export default App;
