import React, { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';

function App() {
  return (
      <div className="App">
        <NavBar />
        <div id="page-body">
        <Homepage />
        </div>
      </div>
  );
}

export default App;
