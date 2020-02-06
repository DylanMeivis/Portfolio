import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from '../src/first-component/profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Profile name='dylanmeivis'></Profile>
      </header>
    </div>
  );
}

export default App;
