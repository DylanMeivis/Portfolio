import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="mainhero">
        <div className="IntroductionImage">
            <h1>Hello 123</h1>
            <div className="theme-switch-wrapper">
                <label className="theme-switch" for="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="slider round"></div>
              </label>
              <em>Enable Dark Mode!</em>
            </div>
        </div>
        <div className="InformationHeader">
            <h3>Hello 123!</h3>
        </div>
    </div>
  );
}

export default App;
