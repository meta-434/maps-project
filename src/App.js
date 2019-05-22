<<<<<<< Updated upstream
import React from 'react';
import './App.css';
import Main from './components/Main.js';

function App() {
  return (
    <div>
      <header>
      </header>
      
        <Main />
      
      <footer>
      </footer>
      </div>
      
  );
=======
import React, { Component } from "react";
import './App.css';
import Main from './components/Main.js';


class App extends Component {
 

  render() {
    
    return (
      <div>
        <Main />
        <p>hi</p>
      </div>
    );
  }
>>>>>>> Stashed changes
}

export default App;