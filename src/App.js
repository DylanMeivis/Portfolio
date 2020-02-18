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
            <h1>Is it me your looking for?</h1>
            <button onClick={handleThemeChange}>Enable Dark Mode!</button>
            <h3>Dork mode1</h3>
            <h3>Such Dork2</h3>
            <h1>Does this fit?</h1>
            <h1>This definitely does not fit</h1>
        </div>
        <div className="InformationHeader">
            <h3>Dylan Meivis </h3>
            <h3>Portfolio</h3>
            <h3>Developer</h3>
            <h3>And this?</h3>
            <h3>Definitely yes</h3>
            <h3>Definitely no</h3>
            <button>Okay bye now</button>
        </div>
    </div>
  );
}

export default App;
