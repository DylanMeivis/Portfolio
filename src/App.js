import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from '../src/first-component/profile';
import About from '../src/About-component/about';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Profile name='dylanmeivis'></Profile>
      </header>
      <Router>
        <h5>
          <Link to='/about'>About</Link>
        </h5>
        <Switch>
          <Route path='/about'>
            <About/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
