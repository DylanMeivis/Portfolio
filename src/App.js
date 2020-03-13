import React from 'react';
import './App.css';

function App() {
  return (
    <div className='container-fluid p-0'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='container'>
        <div className='row pt-2'>
          <div className='col-12 text-center'>
            <img src='http://placekitten.com/200/300' className='rounded' alt='profilePicture'></img>
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
