import React from 'react';
// import logo from './logo.svg';
import birds from './birds.jpg';
import PageUno from './components/PageUno';
// import '../assets/front'
import './App.css';

function App() {
  return (

    <div>
      <PageUno></PageUno>
      <img src={birds} className="App-Logo" alt="logo" />

    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={birds} className="App-Logo" alt="logo" />
    //     <p>
    //       we'll get there eventually?
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://www.youtube.com/watch?v=6auk1TkGtVQ"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       ice cube says you can do it yourself
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
