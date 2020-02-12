import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="mainhero">
        <div class="IntroductionImage">
            <h1>Hello 123</h1>
            <div class="theme-switch-wrapper">
                <label class="theme-switch" for="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div class="slider round"></div>
              </label>
              <em>Enable Dark Mode!</em>
            </div>
        </div>
        <div class="InformationHeader">
            <h3>Hello 123</h3>
        </div>
    </div>
  );
}

export default App;
