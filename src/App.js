import React from 'react';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
