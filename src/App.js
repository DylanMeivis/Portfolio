import React from 'react';
import './App.css';

function App() {
  function handleThemeChange(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
  return (
    <div className="mainhero">
        <div className="IntroductionImage">
            <h1>Hello 123</h1>
            <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" onChange={handleThemeChange}/>
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
