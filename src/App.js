import React from 'react';
import './App.css';

function App() {
  return (
    <div className='container-fluid p-0'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://dylanmeivis.github.io/portfolio">DM</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='container'>
        <div className='row pt-2'>
          <div className='col-12 text-center'>
            <img src='https://pbs.twimg.com/profile_images/1109069763957919744/tVZQXzIo_400x400.png' className='rounded' alt='profilePicture'></img>
          </div>
          <div className='col-12 text-center'>
            <h1>Dylan Meivis</h1>
            <h5>Full-Stack Developer <a href='https://www.accepteasy.com'>@AcceptEasy</a></h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
