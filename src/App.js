import React from 'react';
import './App.css';

function App() {
  return (
    <div className="mainhero">
        <div className="IntroductionImage">
            <h1>Hello 123</h1>
            <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="slider round"></div>
              </label>
              <em>Enable Dark Mode!</em>
            </div>
        </div>
        <div className="InformationHeader">
            <h3>Dylan Meivis</h3>
        </div>
    </div>
  );
}

export default App;
