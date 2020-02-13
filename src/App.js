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
            <button onClick={handleThemeChange}>Enable Dark Mode!</button>
            <h3>Dork mode</h3>
            <h3>Such Dork</h3>
        </div>
        <div className="InformationHeader">
            <h3>Dylan Meivis</h3>
            <h3>Portfolio</h3>
            <h3>Developer</h3>
        </div>
    </div>
  );
}

export default App;
