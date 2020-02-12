import React from 'react';
import './App.css';

function App() {
  function handleThemeChange() {
      document.documentElement.setAttribute('data-theme', 'dark');
  }
  return (
    <div className="mainhero">
        <div className="IntroductionImage">
            <h1>Hello 123</h1>
            <button onClick={handleThemeChange}>Click for theme change </button>
        </div>
        <div className="InformationHeader">
            <h3>Dylan Meivis</h3>
        </div>
    </div>
  );
}

export default App;
