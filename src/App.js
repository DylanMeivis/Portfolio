import React from 'react';
import './App.css';

function App() {
  function handleThemeChange() {
      document.documentElement.setAttribute('data-theme', 'dark');
  }
  return (
    <div className="mainhero container-fluid p-0">
        <div className="IntroductionImage">
          <h3>Dylan Meivis</h3>
            <button className="btn btn-primary" onClick={handleThemeChange}>Enable Dark Mode!</button>
        </div>
        <div className="InformationHeader">
        </div>
    </div>
  );
}

export default App;
