import React, { Component } from "react";
import './App.css';
import Search from './components/Search.js';
import Main from './components/Main.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Restaurants in Charlottesville near you:</h1>
        <p>Narrow your results? --></p>
          <Search />
          <p>---------------------------------------------------------------------------------</p>
          <Main />
      </div>
    );
  }
}

export default App;